import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_AUDIENCE_ID;

if (!apiKey || !audienceId) {
  // Don't throw at module load; route returns 500 if missing.
  // This keeps `npm run build` working without env in CI for static parts.
}

export function getResend() {
  if (!apiKey) throw new Error('RESEND_API_KEY not set');
  return new Resend(apiKey);
}

export function getAudienceId() {
  if (!audienceId) throw new Error('RESEND_AUDIENCE_ID not set');
  return audienceId;
}
