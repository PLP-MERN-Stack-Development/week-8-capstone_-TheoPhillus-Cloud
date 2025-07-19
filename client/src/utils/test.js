import { describe, it, expect } from 'vitest'
import { validateEmail } from './utils'

describe('validateEmail', () => {
  it('returns true for valid email', () => {
    expect(validateEmail('hello@example.com')).toBe(true)
  })
})