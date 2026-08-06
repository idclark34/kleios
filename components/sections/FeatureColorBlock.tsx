import type { ReactNode } from 'react';
import { Phone } from '../primitives/Phone';

type Tone = 'cream' | 'ink' | 'sunset';

export function FeatureColorBlock({
  eyebrow,
  headline,
  body,
  bullets,
  screen,
  tone = 'cream',
  reverse = false,
}: {
  eyebrow: string;
  headline: ReactNode;
  body: string;
  bullets: string[];
  screen: ReactNode;
  tone?: Tone;
  reverse?: boolean;
}) {
  const light = tone !== 'cream';
  const bg =
    tone === 'ink' ? 'bg-ink' : tone === 'sunset' ? 'bg-sunset' : 'bg-cream';
  const textMain = light ? 'text-cream' : 'text-ink';
  const textBody = light ? 'text-cream/85' : 'text-muted';
  const eyebrowColor = light ? 'text-cream/80' : 'text-plum';
  const dot = light ? 'bg-cream' : 'bg-plum';

  return (
    <section className={`${bg} px-6 md:px-10 py-[110px] md:py-[140px]`}>
      <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 items-center">
        <div className={reverse ? 'md:order-2' : ''}>
          <div className={`font-sans font-semibold text-[12px] tracking-[3px] ${eyebrowColor}`}>{eyebrow}</div>
          <h2 className={`font-serif font-bold tracking-[-0.04em] leading-[0.98] text-[44px] md:text-[68px] mt-3 ${textMain}`}>
            {headline}
          </h2>
          <p className={`font-sans text-[15px] md:text-[16px] leading-[1.65] mt-6 max-w-[420px] ${textBody}`}>{body}</p>
          <ul className={`list-none p-0 mt-6 font-sans text-[14px] leading-[2] ${textMain}`}>
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex justify-center ${reverse ? 'md:order-1 md:justify-start' : 'md:justify-end'}`}>
          <Phone>{screen}</Phone>
        </div>
      </div>
    </section>
  );
}
