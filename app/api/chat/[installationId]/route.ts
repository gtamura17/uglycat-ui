import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@amber/database/client'
import { hasChatAccess } from '@/src/domains/chat/guards/access'
import authOptions from '@/src/domains/auth/nextauth/options'

export async function POST(req: Request, { params }: { params: { installationId: string } }) {
  const session = await getServerSession(authOptions)
  const userId = (session?.user as any)?.id as string | undefined
  if (!userId) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const access = await hasChatAccess(userId)
  if (!access.allowed) {
    const paywallUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`
    return NextResponse.json({ error: access.reason ?? 'payment_required', paywall_url: paywallUrl }, { status: 402 })
  }

  // Enforce usage limits
  const sub = await prisma.subscription.findUnique({ where: { userId } })
  if (sub && sub.messageLimit > -1 && sub.messagesUsed >= sub.messageLimit) {
    const paywallUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`
    return NextResponse.json({ error: 'usage_limit_reached', paywall_url: paywallUrl }, { status: 402 })
  }

  // Aqui normalmente encaminharíamos para o MCP e salvaríamos a mensagem
  // Para este escopo, apenas incrementamos o contador de uso se houver assinatura
  if (sub) {
    await prisma.subscription.update({
      where: { userId },
      data: { messagesUsed: { increment: 1 } },
    })
  }

  return NextResponse.json({ ok: true })
}


