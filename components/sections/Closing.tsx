import { Eyebrow } from '../primitives/Eyebrow';

export function Closing({ onNotifyClick }: { onNotifyClick: () => void }) {
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
      <h2 className="font-serif font-bold text-[40px] md:text-[64px] leading-[0.98] tracking-[-2.5px] mt-3.5">
        Tomorrow can be <em className="italic">day one.</em>
      </h2>
      <p className="font-sans text-[15px] leading-[1.6] opacity-90 mx-auto mt-[22px] max-w-[460px]">
        Free in beta. Photos and friends only — no ads, no inbox cruft, no dopamine slot machines. Just one small thing, every day, with the people who know you.
      </p>
      <div className="flex justify-center mt-7">
        <button
          type="button"
          onClick={onNotifyClick}
          className="bg-ink text-cream py-[13px] px-6 rounded-[12px] font-sans font-semibold text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2"
        >
          Join the waitlist <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
