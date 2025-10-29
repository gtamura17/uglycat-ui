import { describe, it, expect, vi } from 'vitest'

vi.mock('@amber/database/client', () => ({
  prisma: {
    user: { findUnique: vi.fn(async ({ where }: any) => (where.id === 'u1' ? { id: 'u1', email: 'e@x' } : null)) },
    subscription: { findUnique: vi.fn(async () => ({ stripeCustomerId: 'cus_1' })), upsert: vi.fn(async () => ({})) },
  },
}))

vi.mock('../src/domains/billing/services/stripe', async (orig) => {
  const mod = await orig()
  return {
    ...mod,
    ensureCustomer: async () => 'cus_1',
    createCheckoutSession: async () => ({ url: 'http://checkout.mock' }),
  }
})

describe('stripe checkout branches', () => {
  it('error missing_user_id', async () => {
    const mod = await import('../app/api/stripe/checkout/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({}) }))
    expect((res as any).status).toBe(400)
  })

  it('error missing_price_id', async () => {
    const mod = await import('../app/api/stripe/checkout/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({ userId: 'u1' }) }))
    expect((res as any).status).toBe(400)
  })

  it('success returns checkout url', async () => {
    const mod = await import('../app/api/stripe/checkout/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({ userId: 'u1', priceId: 'p1' }) }))
    const data = await (res as any).json()
    expect(data.url).toBe('http://checkout.mock')
  })
})
