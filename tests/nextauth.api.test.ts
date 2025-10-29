import { describe, it, expect, vi } from 'vitest'

// Mock default export of next-auth to return a request handler
vi.mock('next-auth', () => ({
  default: (_opts: any) => {
    const handler = async () => new Response(null, { status: 200 })
    return handler
  },
}))

describe('api/auth/[...nextauth]', () => {
  it('GET returns 200', async () => {
    const mod = await import('../app/api/auth/[...nextauth]/route')
    const res = await (mod as any).GET(new Request('http://test'))
    expect(res.status).toBe(200)
  })

  it('POST returns 200', async () => {
    const mod = await import('../app/api/auth/[...nextauth]/route')
    const res = await (mod as any).POST(new Request('http://test', { method: 'POST' }))
    expect(res.status).toBe(200)
  })
})


