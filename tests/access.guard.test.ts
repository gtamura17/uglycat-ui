import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@amber/database/client', () => ({ prisma: { subscription: { findUnique: vi.fn() }, trial: { findUnique: vi.fn() } } }))

describe('hasChatAccess', () => {
  beforeEach(async () => {
    const { prisma } = await import('@amber/database/client') as any
    prisma.subscription.findUnique.mockReset()
    prisma.trial.findUnique.mockReset()
  })

  it('allows when subscription ACTIVE', async () => {
    const { prisma } = await import('@amber/database/client') as any
    prisma.subscription.findUnique.mockResolvedValueOnce({ status: 'ACTIVE' })
    const { hasChatAccess } = await import('../src/domains/chat/guards/access')
    const r = await hasChatAccess('u1')
    expect(r.allowed).toBe(true)
  })

  it('allows when trial ACTIVE and not expired', async () => {
    const { prisma } = await import('@amber/database/client') as any
    prisma.subscription.findUnique.mockResolvedValueOnce(null)
    prisma.trial.findUnique.mockResolvedValueOnce({ status: 'ACTIVE', expiresAt: new Date(Date.now() + 1000) })
    const { hasChatAccess } = await import('../src/domains/chat/guards/access')
    const r = await hasChatAccess('u2')
    expect(r.allowed).toBe(true)
  })

  it('denies when no plan and no trial', async () => {
    const { prisma } = await import('@amber/database/client') as any
    prisma.subscription.findUnique.mockResolvedValueOnce(null)
    prisma.trial.findUnique.mockResolvedValueOnce(null)
    const { hasChatAccess } = await import('../src/domains/chat/guards/access')
    const r = await hasChatAccess('u3')
    expect(r.allowed).toBe(false)
  })
})


