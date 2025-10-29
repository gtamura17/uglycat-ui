import { describe, it, expect, vi } from 'vitest'

vi.mock('firebase-admin', () => ({
  apps: [],
  credential: { cert: (x: any) => x },
  initializeApp: vi.fn(),
  auth: () => ({ verifyIdToken: vi.fn(async () => ({ uid: 'uid1', email: 'u@p.local' })) }),
}))

describe('phone credentials provider', () => {
  it('is present in nextauth providers', async () => {
    const opts = (await import('../src/domains/auth/nextauth/options')).default as any
    const found = (opts.providers || []).find((p: any) => p.id === 'phone')
    expect(found).toBeTruthy()
  })
})


