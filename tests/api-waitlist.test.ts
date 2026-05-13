import { describe, it, expect, vi, beforeEach } from 'vitest';

const contactsCreate = vi.fn();

vi.mock('@/lib/resend', () => ({
  getResend: () => ({ contacts: { create: contactsCreate } }),
  getAudienceId: () => 'aud_test',
}));

import { POST } from '@/app/api/waitlist/route';

function req(body: unknown) {
  return new Request('http://localhost/api/waitlist', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  });
}

describe('POST /api/waitlist', () => {
  beforeEach(() => contactsCreate.mockReset());

  it('returns 200 and adds contact for valid email', async () => {
    contactsCreate.mockResolvedValue({ data: { id: 'c_1' }, error: null });
    const res = await POST(req({ email: 'maya@kleios.app' }));
    expect(res.status).toBe(200);
    expect(contactsCreate).toHaveBeenCalledWith({
      audienceId: 'aud_test',
      email: 'maya@kleios.app',
      unsubscribed: false,
    });
  });

  it('returns 400 for invalid email', async () => {
    const res = await POST(req({ email: 'not-an-email' }));
    expect(res.status).toBe(400);
    expect(contactsCreate).not.toHaveBeenCalled();
  });

  it('returns 400 for missing email', async () => {
    const res = await POST(req({}));
    expect(res.status).toBe(400);
  });

  it('returns 200 even if Resend says "already exists" (idempotent)', async () => {
    contactsCreate.mockResolvedValue({
      data: null,
      error: { name: 'validation_error', message: 'Contact already exists' },
    });
    const res = await POST(req({ email: 'maya@kleios.app' }));
    expect(res.status).toBe(200);
  });

  it('returns 500 for unexpected Resend error', async () => {
    contactsCreate.mockResolvedValue({
      data: null,
      error: { name: 'application_error', message: 'boom' },
    });
    const res = await POST(req({ email: 'maya@kleios.app' }));
    expect(res.status).toBe(500);
  });
});
