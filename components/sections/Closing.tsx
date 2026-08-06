import { Eyebrow } from '../primitives/Eyebrow';
import { Accent } from '../primitives/Accent';
import { AppStoreBadge } from '../primitives/AppStoreBadge';

export function Closing() {
  return (
    <section
      id="join"
      className="relative overflow-hidden text-cream py-[120px] px-6 md:px-10 text-center"
      style={{
        background:
          'radial-gradient(ellipse at 50% 100%, var(--peach), transparent 60%), linear-gradient(180deg, var(--pink) 0%, var(--lavender) 100%)',
      }}
    >
      <Eyebrow tone="cream">DAY 1</Eyebrow>
      <h2 className="font-sans font-bold text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-balance mt-3.5">
        Tomorrow can be <Accent>day one.</Accent>
      </h2>
      <p className="font-sans text-[15px] leading-[1.6] opacity-90 mx-auto mt-[22px] max-w-[460px]">
        Free to start. Photos and friends only — no ads, no inbox cruft, no dopamine slot machines. Just the things you said you'd do, with the people who know you.
      </p>
      <div className="flex justify-center mt-7">
        <AppStoreBadge />
      </div>
    </section>
  );
}
