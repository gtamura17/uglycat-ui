import { NextResponse } from 'next/server'
import { prisma } from '@amber/database/client'
import { createStripeClient, createPortalSession } from '@/src/domains/billing/services/stripe'

export async function POST(req: Request) {
  try {
    const { userId } = await req.json()
    if (!userId) return NextResponse.json({ error: 'missing_user_id' }, { status: 400 })

    const sub = await prisma.subscription.findUnique({ where: { userId } })
    if (!sub?.stripeCustomerId) {
      return NextResponse.json({ error: 'missing_stripe_customer' }, { status: 400 })
    }

    const stripe = createStripeClient()
    const session = await createPortalSession(stripe, sub.stripeCustomerId, process.env.NEXT_PUBLIC_APP_URL as string)
    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}


