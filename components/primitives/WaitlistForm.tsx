'use client';
import { useState } from 'react';

export function WaitlistForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'content-type': 'application/json' },
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className="bg-cream text-ink rounded-2xl p-5 max-w-[420px] mx-auto text-center">
        <div className="font-serif text-[22px]">You're on the list.</div>
        <div className="text-[13px] text-muted mt-2">We'll email you when Android lands.</div>
        <button onClick={onClose} className="mt-3 text-[12px] underline">close</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-cream text-ink rounded-2xl p-5 max-w-[420px] mx-auto">
      <div className="font-serif text-[18px] mb-3">Notify me on Android</div>
      <div className="flex gap-2">
        <input
          type="email"
          required
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere"
          className="flex-1 bg-white border border-ink/15 rounded-md px-3 py-2 text-[13px]"
        />
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="bg-ink text-cream rounded-md px-3 py-2 text-[13px] font-semibold disabled:opacity-50"
        >
          {state === 'submitting' ? '…' : 'Join'}
        </button>
      </div>
      {state === 'error' && (
        <div className="text-[12px] text-plum mt-2">Couldn't add you. Try again?</div>
      )}
      <button type="button" onClick={onClose} className="text-[12px] underline mt-3 text-muted">
        cancel
      </button>
    </form>
  );
}
