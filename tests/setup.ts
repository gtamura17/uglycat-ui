import { vi } from 'vitest'

// Basic envs
process.env.NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
process.env.NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'
process.env.RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Amber <login@amber-saas.com>'

// Mock next-auth providers to avoid resolving ESM modules in test env
vi.mock('next-auth/providers/github', () => ({ default: () => ({ id: 'github' }) }))
vi.mock('next-auth/providers/google', () => ({ default: () => ({ id: 'google' }) }))
vi.mock('next-auth/providers/email', () => ({ default: (cfg: any) => ({ id: 'email', ...cfg }) }))
vi.mock('next-auth/providers/credentials', () => ({ default: (cfg: any) => ({ id: 'credentials', ...cfg }) }))
vi.mock('@next-auth/prisma-adapter', () => ({ PrismaAdapter: () => ({}) }))

// Mock stripe constructor
vi.mock('stripe', () => {
  return {
    default: class StripeMock {
      constructor(_k: string, _opts: any) {}
      checkout = { sessions: { create: async () => ({ url: 'http://stripe.test' }) } }
      billingPortal = { sessions: { create: async () => ({ url: 'http://portal.test' }) } }
      webhooks = { constructEvent: (_buf: Buffer, _sig: string, _secret: string) => ({ id: 'evt', type: 'unknown', data: { object: {} } }) }
      customers = { create: async () => ({ id: 'cus_1' }) }
    },
  }
})

// Mock resend
vi.mock('resend', () => ({ Resend: class { emails = { send: async () => ({ id: 'm1' }) } } }))

// Mock prisma client from workspace package
vi.mock('@amber/database/client', () => ({
  prisma: {
    user: { findUnique: vi.fn(async () => ({ id: 'u1', email: 'test@example.com' })) },
    subscription: {
      findUnique: vi.fn(async () => null),
      upsert: vi.fn(async () => ({})),
      updateMany: vi.fn(async () => ({})),
      update: vi.fn(async () => ({})),
    },
    trial: { findUnique: vi.fn(async () => null) },
    webhookEvent: { create: vi.fn(async () => ({})) },
  },
}))

// Mock firebase-admin for test env
vi.mock('firebase-admin', () => ({
  apps: [],
  credential: { cert: (x: any) => x },
  initializeApp: vi.fn(),
  auth: () => ({ verifyIdToken: vi.fn(async () => ({ uid: 'uid1', email: 'u@p.local' })) }),
}))


