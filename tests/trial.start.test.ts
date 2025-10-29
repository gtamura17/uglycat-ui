import { describe, it, expect, vi } from 'vitest'

vi.mock('@amber/database/client', () => ({
  prisma: {
    trial: { upsert: vi.fn(async () => ({ id: 't1', userId: 'u1' })) },
  },
}))

describe('trial start route', () => {
  it('requires userId', async () => {
    const mod = await import('../app/api/trial/start/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({}) }))
    expect(res.status).toBe(400)
  })

  it('creates or updates trial', async () => {
    const mod = await import('../app/api/trial/start/route')
    const res = await (mod as any).POST(new Request('http://x', { method: 'POST', body: JSON.stringify({ userId: 'u1', days: 1 }) }))
    expect(res.status).toBe(200)
  })
})


