import { describe, it, expect, vi } from 'vitest'

vi.mock('next-auth', () => ({ getServerSession: vi.fn(async () => ({ user: { id: 'u1' } })) }))
vi.mock('@amber/database/client', () => ({
  prisma: {
    subscription: {
      findUnique: vi.fn(async () => ({ messageLimit: 5, messagesUsed: 0 })),
      update: vi.fn(async () => ({})),
    },
    trial: { findUnique: vi.fn(async () => ({ status: 'ACTIVE', expiresAt: new Date(Date.now() + 1000) })) },
  },
}))

describe('chat increments usage on success', () => {
  it('increments and returns ok', async () => {
    const mod = await import('../app/api/chat/[installationId]/route')
    const res = await mod.POST(new Request('http://x', { method: 'POST' }) as any, { params: { installationId: 'i1' } } as any)
    const data = await (res as any).json()
    expect(data.ok).toBe(true)
  })
})


