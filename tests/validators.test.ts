import { describe, it, expect } from 'vitest'
import { requireUserId, requirePriceId, buildAppUrl } from '../src/domains/common/validators'

describe('validators', () => {
  it('requireUserId throws on invalid', () => {
    expect(() => requireUserId('')).toThrow('missing_user_id')
    expect(() => requireUserId(undefined as any)).toThrow('missing_user_id')
  })
  it('requireUserId returns valid id', () => {
    expect(requireUserId('u1')).toBe('u1')
  })
  it('requirePriceId throws on invalid', () => {
    expect(() => requirePriceId('')).toThrow('missing_price_id')
  })
  it('buildAppUrl concatenates', () => {
    const old = process.env.NEXT_PUBLIC_APP_URL
    process.env.NEXT_PUBLIC_APP_URL = 'http://x'
    expect(buildAppUrl('/y')).toBe('http://x/y')
    process.env.NEXT_PUBLIC_APP_URL = old
  })
})
