import { describe, it, expect, vi } from 'vitest'

const sendSpy = vi.fn(async () => ({}))
vi.mock('resend', () => ({ Resend: class { emails = { send: sendSpy } }, __mocks: { sendSpy } }))
vi.mock('firebase-admin', () => ({ apps: [], credential: { cert: (x: any) => x }, initializeApp: vi.fn(), auth: () => ({ verifyIdToken: vi.fn(async () => { throw new Error('invalid') }) }) }))

describe('auth throttle and credentials invalid', () => {
  it('throttles second email within window', async () => {
    const { default: authOptions } = await import('../src/domains/auth/nextauth/options')
    const emailProvider: any = (authOptions.providers as any[]).find((p) => p.id === undefined || p.id === 'email')
    const send = emailProvider.options?.sendVerificationRequest || emailProvider.sendVerificationRequest
    await send({ identifier: 'a@x', url: 'http://x' })
    await send({ identifier: 'a@x', url: 'http://x' })
    const resendMod: any = await import('resend')
    expect(resendMod.__mocks.sendSpy).toHaveBeenCalledTimes(1)
  })

  it('credentials invalid returns null', async () => {
    const { default: authOptions } = await import('../src/domains/auth/nextauth/options')
    const credentialsProvider: any = (authOptions.providers as any[]).find((p) => p.id === 'phone')
    const out = await credentialsProvider.authorize({ idToken: 'bad' })
    expect(out).toBeNull()
  })
})
