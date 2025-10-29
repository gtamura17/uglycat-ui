// Subscription plans configuration

import { PlanId } from '@amber/types'
import { ChatLimitKey } from '@amber/types'

export const PLANS = {
  [PlanId.ChatPro]: {
    priceId: process.env.STRIPE_PRICE_CHAT_PRO,
    limits: {
      [ChatLimitKey.MessagesPerDay]: 500,
      [ChatLimitKey.MaxTokensPerMessage]: 4000,
    },
    features: ['chat-vetorizado', 'suporte básico'],
  },
} as const

export const TRIAL_LIMITS = {
  [ChatLimitKey.MessagesPerDay]: 50,
  [ChatLimitKey.MaxTokensPerMessage]: 2000,
} as const
