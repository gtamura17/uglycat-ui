import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@amber/database/client'

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') as string
  const buf = Buffer.from(await req.arrayBuffer())
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2025-09-30.clover' })

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string)
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Idempotência simples
  try {
    await prisma.webhookEvent.create({
      data: {
        provider: 'stripe',
        externalEventId: event.id,
        type: event.type,
        payload: event as unknown as any,
        processed: false,
      },
    })
  } catch (_) {
    // já processado
    return NextResponse.json({ received: true })
  }

  // TODO: atualizar Subscription conforme o evento
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.client_reference_id as string | null
        if (userId) {
          await prisma.subscription.upsert({
            where: { userId },
            update: {
              status: 'ACTIVE',
              stripeCustomerId: session.customer as string | null,
              stripeSubscriptionId: (session.subscription as string) ?? null,
              stripePriceId: session.line_items?.data?.[0]?.price?.id ?? undefined,
            },
            create: {
              userId,
              status: 'ACTIVE',
              stripeCustomerId: session.customer as string | null,
              stripeSubscriptionId: (session.subscription as string) ?? null,
              stripePriceId: session.line_items?.data?.[0]?.price?.id ?? undefined,
              currentPeriodEnd: new Date(),
            },
          })
        }
        break
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.created':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const stripeCustomerId = sub.customer as string
        const statusMap: Record<string, any> = {
          incomplete: 'INCOMPLETE',
          'incomplete_expired': 'INCOMPLETE_EXPIRED',
          trialing: 'TRIALING',
          active: 'ACTIVE',
          past_due: 'PAST_DUE',
          canceled: 'CANCELED',
          unpaid: 'UNPAID',
        }
        await prisma.subscription.updateMany({
          where: { stripeCustomerId },
          data: {
            status: statusMap[sub.status] ?? 'ACTIVE',
            stripeSubscriptionId: sub.id,
            stripePriceId: (sub.items.data[0]?.price?.id as string) ?? undefined,
            stripeCurrentPeriodEnd: new Date((sub as any).current_period_end * 1000),
          },
        })
        break
      }
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}

export const config = { api: { bodyParser: false } }


