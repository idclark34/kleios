import { describe, it, expect } from 'vitest';
import { validateEmail } from '@/lib/validate-email';

describe('validateEmail', () => {
  it('accepts a normal email', () => {
    expect(validateEmail('hello@kleios.app')).toBe(true);
  });

  it('rejects missing @', () => {
    expect(validateEmail('helloworld.com')).toBe(false);
  });

  it('rejects missing local part', () => {
    expect(validateEmail('@kleios.app')).toBe(false);
  });

  it('rejects missing TLD', () => {
    expect(validateEmail('hello@kleios')).toBe(false);
  });

  it('trims whitespace before validating', () => {
    expect(validateEmail('  hello@kleios.app  ')).toBe(true);
  });

  it('rejects strings longer than 254 chars', () => {
    expect(validateEmail('a'.repeat(250) + '@b.co')).toBe(false);
  });
});
