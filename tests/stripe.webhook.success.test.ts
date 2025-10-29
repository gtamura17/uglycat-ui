import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@amber/database/client', () => ({
  prisma: {
    webhookEvent: { create: vi.fn(async () => ({})) },
    subscription: { upsert: vi.fn(async () => ({})), updateMany: vi.fn(async () => ({})) },
  },
}))

vi.mock('stripe', () => {
  class StripeMock {
    webhooks = {
      constructEvent: (buf: Buffer, _sig: string, _secret: string) => {
        const payload = JSON.parse(buf.toString('utf8'))
        return payload
      },
    }
  }
  return { default: StripeMock }
})

// set envs used in route
vi.stubGlobal('process', { env: { STRIPE_SECRET_KEY: 'sk', STRIPE_WEBHOOK_SECRET: 'wh' } } as any)

describe('stripe webhook success paths', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('handles checkout.session.completed', async () => {
    const event = {
      id: 'evt_1',
      type: 'checkout.session.completed',
      data: { object: { client_reference_id: 'u1', customer: 'cus_1', subscription: 'sub_1', line_items: { data: [{ price: { id: 'price_x' } }] } } },
    }
    const req = new Request('http://test', {
      method: 'POST',
      headers: { 'stripe-signature': 'sig' },
      body: JSON.stringify(event),
    }) as any
    const mod = await import('../app/api/stripe/webhook/route')
    const res = await (mod as any).POST(req)
    expect(res.status).toBe(200)
  })

  it('handles customer.subscription.updated', async () => {
    const event = {
      id: 'evt_2',
      type: 'customer.subscription.updated',
      data: { object: { id: 'sub_1', customer: 'cus_1', status: 'active', items: { data: [{ price: { id: 'price_y' } }] }, current_period_end: Math.floor(Date.now() / 1000) } },
    }
    const req = new Request('http://test', {
      method: 'POST',
      headers: { 'stripe-signature': 'sig' },
      body: JSON.stringify(event),
    }) as any
    const mod = await import('../app/api/stripe/webhook/route')
    const res = await (mod as any).POST(req)
    expect(res.status).toBe(200)
  })
})


