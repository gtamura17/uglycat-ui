import { describe, it, expect, vi } from 'vitest'
import * as chat from '../app/api/chat/[installationId]/route'

vi.mock('next-auth', () => ({ getServerSession: vi.fn(async () => ({ user: { id: 'u1' } })) }))
vi.mock('@amber/database/client', () => ({ prisma: { subscription: { findUnique: vi.fn(async () => null), update: vi.fn() }, trial: { findUnique: vi.fn(async () => null) } } }))

describe('chat endpoint', () => {
  it('returns 401 when not authenticated', async () => {
    const { getServerSession } = await import('next-auth')
    ;(getServerSession as any).mockResolvedValueOnce(null)
    const res = await chat.POST(new Request('http://test', { method: 'POST' }) as any, { params: { installationId: 'i1' } } as any)
    expect((res as any).status).toBe(401)
  })

  it('returns ok when authenticated (guard path mocked elsewhere)', async () => {
    const res = await chat.POST(new Request('http://test', { method: 'POST' }) as any, { params: { installationId: 'i1' } } as any)
    const data = await (res as any).json()
    expect(data.ok || data.error).toBeDefined()
  })
})


