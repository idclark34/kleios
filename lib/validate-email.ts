const RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(input: string): boolean {
  const trimmed = input.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  return RE.test(trimmed);
}
