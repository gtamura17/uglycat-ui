import { NextResponse } from 'next/server'
import { prisma } from '@amber/database/client'
import { createStripeClient, ensureCustomer, createCheckoutSession } from '@/src/domains/billing/services/stripe'

const stripe = createStripeClient()

export async function POST(req: Request) {
  try {
    const { userId, priceId = process.env.STRIPE_PRICE_CHAT_PRO } = await req.json()
    if (!userId) return NextResponse.json({ error: 'missing_user_id' }, { status: 400 })
    if (!priceId) return NextResponse.json({ error: 'missing_price_id' }, { status: 400 })

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return NextResponse.json({ error: 'user_not_found' }, { status: 404 })

    // Reutiliza/Cria customer
    let stripeCustomerId: string | null | undefined = (await prisma.subscription.findUnique({ where: { userId } }))?.stripeCustomerId
    if (!stripeCustomerId) stripeCustomerId = await ensureCustomer(stripe, user.email, userId)
    await prisma.subscription.upsert({ where: { userId }, update: { stripeCustomerId }, create: { userId: user.id, stripeCustomerId, status: 'INCOMPLETE' as any } } as any)

    const session = await createCheckoutSession(
      stripe,
      stripeCustomerId as string,
      priceId,
      `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
      userId
    )
    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}


