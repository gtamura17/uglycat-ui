import { describe, it, expect, vi } from 'vitest'
import { authOptions } from '../src/domains/auth/nextauth/options'

describe('auth options additional coverage', () => {
  it('session callback handles missing user', async () => {
    const session = { user: { email: 'test@example.com' } }
    const newSession = await authOptions.callbacks?.session?.({ session, user: null as any, token: {}, newSession: {} })
    expect(newSession).toBeDefined()
  })

  it('providers have correct configuration', () => {
    expect(authOptions.providers).toHaveLength(4)
    expect(authOptions.providers.map(p => p.id)).toEqual(['phone', 'email', 'google', 'github'])
  })

  it('session strategy is database', () => {
    expect(authOptions.session?.strategy).toBe('database')
  })

  it('has custom sign in page', () => {
    expect(authOptions.pages?.signIn).toBe('/login')
  })
})

