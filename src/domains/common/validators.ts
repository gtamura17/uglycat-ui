export function requireUserId(userId: unknown): string {
  if (typeof userId !== 'string' || userId.length === 0) {
    throw new Error('missing_user_id')
  }
  return userId
}

export function requirePriceId(priceId: unknown): string {
  if (typeof priceId !== 'string' || priceId.length === 0) {
    throw new Error('missing_price_id')
  }
  return priceId
}

export function buildAppUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return `${base}${path}`
}
