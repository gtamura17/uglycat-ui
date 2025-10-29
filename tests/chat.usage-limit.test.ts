import { describe, it, expect, vi } from 'vitest'

vi.mock('next-auth', () => ({ getServerSession: vi.fn(async () => ({ user: { id: 'u1' } })) }))
vi.mock('@amber/database/client', () => ({ prisma: { subscription: { findUnique: vi.fn(async () => ({ messageLimit: 10, messagesUsed: 10 })) }, trial: { findUnique: vi.fn(async () => ({ status: 'ACTIVE', expiresAt: new Date(Date.now() + 1000) })) } } }))

describe('chat usage limit', () => {
  it('returns 402 when limit reached', async () => {
    const mod = await import('../app/api/chat/[installationId]/route')
    const res = await mod.POST(new Request('http://x', { method: 'POST' }) as any, { params: { installationId: 'i1' } } as any)
    expect((res as any).status).toBe(402)
  })
})


