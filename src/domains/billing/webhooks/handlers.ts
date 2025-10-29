import type Stripe from 'stripe'
import { prisma } from '@amber/database/client'

export type WebhookDeps = { prisma: typeof prisma }

export const handlers: Record<string, (event: Stripe.Event, deps: WebhookDeps) => Promise<void>> = {
  'checkout.session.completed': async (event, { prisma }) => {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.client_reference_id as string | null
    if (!userId) return
    await prisma.subscription.upsert({
      where: { userId },
      update: {
        status: 'ACTIVE' as any,
        stripeCustomerId: session.customer as string | null,
        stripeSubscriptionId: (session.subscription as string) ?? null,
        stripePriceId: (session as any).line_items?.data?.[0]?.price?.id ?? undefined,
      },
      create: {
        userId,
        status: 'ACTIVE' as any,
        stripeCustomerId: session.customer as string | null,
        stripeSubscriptionId: (session.subscription as string) ?? null,
        stripePriceId: (session as any).line_items?.data?.[0]?.price?.id ?? undefined,
        currentPeriodEnd: new Date(),
      },
    } as any)
  },
  'customer.subscription.updated': async (event, { prisma }) => {
    const sub = event.data.object as any
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
        stripeCurrentPeriodEnd: new Date(sub.current_period_end * 1000),
      },
    })
  },
  'customer.subscription.created': async (event, deps) => handlers['customer.subscription.updated'](event, deps),
  'customer.subscription.deleted': async (event, deps) => handlers['customer.subscription.updated'](event, deps),
}
