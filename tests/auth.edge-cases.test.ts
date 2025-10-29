import { describe, it, expect, vi, beforeEach } from 'vitest'
import { authOptions } from '../src/domains/auth/nextauth/options'

describe('auth options edge cases', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('phone provider handles missing firebase config', async () => {
    vi.stubGlobal('process', { 
      env: { 
        FIREBASE_PROJECT_ID: undefined,
        FIREBASE_CLIENT_EMAIL: undefined,
        FIREBASE_PRIVATE_KEY: undefined
      } 
    } as any)

    const phoneProvider = authOptions.providers.find(p => p.id === 'phone') as any
    const authorize = phoneProvider.authorize

    const user = await authorize({ idToken: 'valid-token' })
    expect(user).toBeNull()
  })

  it('phone provider handles malformed private key', async () => {
    vi.stubGlobal('process', { 
      env: { 
        FIREBASE_PROJECT_ID: 'test-project',
        FIREBASE_CLIENT_EMAIL: 'test@test.com',
        FIREBASE_PRIVATE_KEY: 'malformed-key'
      } 
    } as any)

    const phoneProvider = authOptions.providers.find(p => p.id === 'phone') as any
    const authorize = phoneProvider.authorize

    const user = await authorize({ idToken: 'valid-token' })
    expect(user).toBeNull()
  })

  it('phone provider handles firebase admin not initialized', async () => {
    vi.stubGlobal('process', { 
      env: { 
        FIREBASE_PROJECT_ID: 'test-project',
        FIREBASE_CLIENT_EMAIL: 'test@test.com',
        FIREBASE_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\\ntest\\n-----END PRIVATE KEY-----'
      } 
    } as any)

    const phoneProvider = authOptions.providers.find(p => p.id === 'phone') as any
    const authorize = phoneProvider.authorize

    const user = await authorize({ idToken: 'valid-token' })
    expect(user).toBeNull()
  })
})
