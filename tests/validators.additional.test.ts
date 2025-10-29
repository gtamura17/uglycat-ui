import { describe, it, expect, vi } from 'vitest'
import { buildAppUrl } from '../src/domains/common/validators'

describe('validators additional cases', () => {
  it('buildAppUrl handles empty path', () => {
    vi.stubGlobal('process', { env: { NEXT_PUBLIC_APP_URL: 'http://localhost:3000' } } as any)
    expect(buildAppUrl('')).toBe('http://localhost:3000')
  })

  it('buildAppUrl handles path with query params', () => {
    vi.stubGlobal('process', { env: { NEXT_PUBLIC_APP_URL: 'http://localhost:3000' } } as any)
    expect(buildAppUrl('/dashboard?tab=billing')).toBe('http://localhost:3000/dashboard?tab=billing')
  })
})

