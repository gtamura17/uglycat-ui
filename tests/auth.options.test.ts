import { describe, it, expect, vi } from 'vitest'
import authOptions from '../src/domains/auth/nextauth/options'

describe('nextauth options', () => {
  it('exposes providers and callbacks', () => {
    expect(authOptions.providers?.length).toBeGreaterThanOrEqual(3)
    expect(typeof authOptions.callbacks?.session).toBe('function')
  })

  it('session callback attaches user id when present', async () => {
    const sessionIn = { user: { name: 'x' } } as any
    const user = { id: 'u1' } as any
    const out = await (authOptions.callbacks as any).session({ session: sessionIn, user })
    expect((out.user as any).id).toBe('u1')
  })
})


