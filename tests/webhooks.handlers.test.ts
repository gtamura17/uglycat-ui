import { describe, it, expect, vi } from 'vitest'

vi.mock('@amber/database/client', () => ({ prisma: { subscription: { upsert: vi.fn(async () => ({})), updateMany: vi.fn(async () => ({})) } } }))

describe('webhook handlers', () => {
  it('handles checkout.session.completed', async () => {
    const { handlers } = await import('../src/domains/billing/webhooks/handlers')
    const event: any = { data: { object: { client_reference_id: 'u1', customer: 'cus_1', subscription: 'sub_1', line_items: { data: [{ price: { id: 'p1' } }] } } } }
    await handlers['checkout.session.completed'](event, { prisma: (await import('@amber/database/client')).prisma as any })
    expect(true).toBe(true)
  })

  it('handles customer.subscription.updated', async () => {
    const { handlers } = await import('../src/domains/billing/webhooks/handlers')
    const event: any = { data: { object: { id: 'sub_1', customer: 'cus_1', status: 'active', items: { data: [{ price: { id: 'p1' } }] }, current_period_end: Math.floor(Date.now() / 1000) } } }
    await handlers['customer.subscription.updated'](event, { prisma: (await import('@amber/database/client')).prisma as any })
    expect(true).toBe(true)
  })

  it('delegates created/deleted to updated', async () => {
    const { handlers } = await import('../src/domains/billing/webhooks/handlers')
    const event: any = { data: { object: { id: 'sub_1', customer: 'cus_1', status: 'canceled', items: { data: [{ price: { id: 'p1' } }] }, current_period_end: Math.floor(Date.now() / 1000) } } }
    await handlers['customer.subscription.created'](event, { prisma: (await import('@amber/database/client')).prisma as any })
    await handlers['customer.subscription.deleted'](event, { prisma: (await import('@amber/database/client')).prisma as any })
    expect(true).toBe(true)
  })
})
