import { NextResponse } from 'next/server';
import { getResend, getAudienceId } from '@/lib/resend';
import { validateEmail } from '@/lib/validate-email';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: { email?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const email = (payload.email ?? '').trim();
  if (!validateEmail(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const resend = getResend();
  const audienceId = getAudienceId();

  const { error } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  if (error) {
    const isDuplicate =
      error.name === 'validation_error' && /already exists/i.test(error.message);
    if (isDuplicate) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    console.error('[waitlist] resend error', error);
    return NextResponse.json({ error: 'resend_error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
