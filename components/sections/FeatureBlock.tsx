import type { ReactNode } from 'react';
import { Eyebrow } from '../primitives/Eyebrow';

export function FeatureBlock({
  eyebrow,
  headline,
  body,
  bullets,
  visual,
  reverse = false,
  visualBg = 'sunset',
}: {
  eyebrow: string;
  headline: ReactNode;
  body: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
  visualBg?: 'sunset' | 'ink';
}) {
  const bgClass = visualBg === 'ink' ? 'bg-ink' : 'bg-sunset';
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[60px] items-center px-6 md:px-10 py-[96px]">
      <div className={reverse ? 'md:order-2' : ''}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="font-serif font-bold text-[38px] leading-[1.05] tracking-[-1.2px] mt-3">{headline}</h3>
        <p className="font-sans text-[14px] leading-[1.65] text-muted mt-4 max-w-[380px]">{body}</p>
        <ul className="list-none p-0 mt-[22px] font-sans text-[13px] leading-[2] space-y-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-plum" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={`rounded-2xl overflow-hidden p-7 min-h-[360px] flex justify-center items-center ${bgClass} ${reverse ? 'md:order-1' : ''}`}>
        {visual}
      </div>
    </section>
  );
}
