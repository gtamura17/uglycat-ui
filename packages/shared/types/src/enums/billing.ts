// Billing: enums de plano e status de assinatura
export enum SubscriptionStatus {
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  Trialing = 'trialing',
  Active = 'active',
  PastDue = 'past_due',
  Canceled = 'canceled',
  Unpaid = 'unpaid',
}

export enum PlanId {
  ChatPro = 'chat_pro',
}

export enum TrialStatus {
  NotStarted = 'not_started',
  Active = 'active',
  Expired = 'expired',
}


