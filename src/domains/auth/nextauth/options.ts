import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { Resend } from 'resend'
import { prisma } from '@amber/database/client'
import * as admin from 'firebase-admin'

const resend = new Resend(process.env.RESEND_API_KEY)
// Throttle simples em memória (por identifier) para evitar abuso de magic link
const lastEmailSentAtByIdentifier = new Map<string, number>()
const EMAIL_THROTTLE_WINDOW_MS = Number(process.env.AUTH_EMAIL_THROTTLE_MS ?? 60_000)

// Inicialização singleton do Firebase Admin
function initFirebaseAdminIfNeeded(): void {
  if (admin.apps.length > 0) return
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  let privateKey = process.env.FIREBASE_PRIVATE_KEY
  if (privateKey?.startsWith('-----BEGIN PRIVATE KEY-----') === false) {
    // variáveis de ambiente normalmente escapam \n; converte para quebras reais
    privateKey = privateKey?.replace(/\\n/g, '\n')
  }
  if (projectId && clientEmail && privateKey) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    })
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: 'phone',
      name: 'Phone',
      credentials: {
        idToken: { label: 'ID Token', type: 'text' },
      },
      authorize: async (credentials) => {
        const idToken = credentials?.idToken
        if (!idToken) return null
        initFirebaseAdminIfNeeded()
        if (admin.apps.length === 0) return null
        try {
          const decoded = await admin.auth().verifyIdToken(idToken)
          const uid = decoded.uid
          const email = decoded.email ?? `${uid}@phone.local`
          const name = decoded.name ?? 'Phone User'
          const image = decoded.picture ?? undefined

          const user = await prisma.user.upsert({
            where: { email },
            update: { name },
            create: { email, name, clerkId: uid },
          })
          return { id: user.id, name: user.name ?? undefined, email: user.email }
        } catch {
          return null
        }
      },
    }),
    EmailProvider({
      from: process.env.RESEND_FROM_EMAIL!,
      sendVerificationRequest: async ({ identifier, url }) => {
        const to = identifier
        const now = Date.now()
        const last = lastEmailSentAtByIdentifier.get(to) ?? 0
        if (now - last < EMAIL_THROTTLE_WINDOW_MS) {
          // Silenciosamente ignora dentro da janela para evitar enumeration e abuso
          return
        }
        lastEmailSentAtByIdentifier.set(to, now)
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL!,
          to,
          subject: 'Sign in to Amber',
          html: `<p>Click to sign in: <a href="${url}">Sign in</a></p>`
        })
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: { strategy: 'database' },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    session: async ({ session, user }) => {
      // attach user id to session
      if (session.user) {
        ;(session.user as any).id = user.id
      }
      return session
    },
  },
}

export default authOptions


