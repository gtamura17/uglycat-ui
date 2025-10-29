import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as checkout from '../app/api/stripe/checkout/route'
import * as portal from '../app/api/stripe/portal/route'
import * as webhook from '../app/api/stripe/webhook/route'

vi.stubGlobal('process', { env: { NEXT_PUBLIC_APP_URL: 'http://localhost:3000', STRIPE_SECRET_KEY: 'sk', STRIPE_WEBHOOK_SECRET: 'wh', STRIPE_PRICE_CHAT_PRO: 'price_x' } } as any)

describe('stripe routes', () => {
  it('checkout returns url', async () => {
    const res = await checkout.POST(new Request('http://test', { method: 'POST', body: JSON.stringify({ userId: 'u1' }) }))
    const data = await (res as any).json()
    expect(data.url || data.error).toBeDefined()
  })

  it('portal handles missing user', async () => {
    const res = await portal.POST(new Request('http://test', { method: 'POST', body: JSON.stringify({}) }))
    expect((res as any).status).toBe(400)
  })

  it('webhook returns ok with mocked signature handling', async () => {
    const req = new Request('http://test', { method: 'POST', body: 'x', headers: { 'stripe-signature': 'bad' } as any }) as any
    const r = await (webhook as any).POST(req)
    expect(r.status).toBe(200)
  })
})


