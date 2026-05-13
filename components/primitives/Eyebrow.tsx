import type { ReactNode } from 'react';

export function Eyebrow({ children, tone = 'plum' }: { children: ReactNode; tone?: 'plum' | 'cream' | 'peach' }) {
  const color =
    tone === 'cream' ? 'text-cream/90' : tone === 'peach' ? 'text-peach' : 'text-plum';
  return (
    <div className={`font-sans font-semibold text-[11px] tracking-[3px] ${color}`}>
      {children}
    </div>
  );
}
