import { describe, it, expect, vi } from 'vitest'

vi.mock('@amber/database/client', () => ({
  prisma: {
    subscription: {
      findUnique: vi.fn(async ({ where }: any) => (where.userId === 'u1' ? { stripeCustomerId: 'cus_1' } : null)),
    },
  },
}))

vi.mock('../src/domains/billing/services/stripe', async (orig) => {
  const mod = await orig()
  return {
    ...mod,
    createPortalSession: async () => ({ url: 'http://portal.mock' }),
  }
})

describe('stripe portal branches', () => {
  it('success when stripeCustomerId exists', async () => {
    const mod = await import('../app/api/stripe/portal/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({ userId: 'u1' }) }))
    const data = await (res as any).json()
    expect(data.url).toBe('http://portal.mock')
  })

  it('error when missing_price_id is not applicable (kept negative test to ensure 400 on missing user)', async () => {
    const mod = await import('../app/api/stripe/portal/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({}) }))
    expect((res as any).status).toBe(400)
  })
})
