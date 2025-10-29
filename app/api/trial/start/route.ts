import { NextResponse } from 'next/server'
import { prisma } from '@amber/database/client'

export async function POST(req: Request) {
  // In a real app, derive userId from session
  const { userId, days = 7 } = await req.json()
  if (!userId) return NextResponse.json({ error: 'missing_user_id' }, { status: 400 })

  const now = new Date()
  const expires = new Date(now.getTime() + days * 24 * 60 * 60 * 1000)

  const trial = await (prisma as any).trial.upsert({
    where: { userId },
    update: { status: 'ACTIVE', startedAt: now, expiresAt: expires },
    create: { userId, status: 'ACTIVE', startedAt: now, expiresAt: expires },
  })

  return NextResponse.json({ trial })
}


