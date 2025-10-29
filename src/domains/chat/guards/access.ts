import { prisma } from '@amber/database/client'
import { SubscriptionStatus } from '@amber/types'

export async function hasChatAccess(userId: string): Promise<{ allowed: boolean; reason?: string }> {
  const sub = await prisma.subscription.findUnique({ where: { userId } })
  if (sub && sub.status === 'ACTIVE') return { allowed: true }

  const trial = await (prisma as any).trial.findUnique({ where: { userId } })
  if (trial && trial.status === 'ACTIVE' && trial.expiresAt && trial.expiresAt > new Date()) {
    return { allowed: true }
  }

  return { allowed: false, reason: 'no_active_plan_or_trial' }
}


