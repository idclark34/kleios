import { AppStoreBadge } from '../primitives/AppStoreBadge';

export function ClosingBig() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-sunset text-cream px-6 md:px-10 py-[150px] md:py-[190px] text-center"
    >
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="relative">
        <div className="font-sans font-semibold text-[12px] tracking-[3px] opacity-90">DAY 1</div>
        <h2
          className="font-serif font-bold tracking-[-0.05em] leading-[0.92] mt-4"
          style={{ fontSize: 'clamp(52px, 10vw, 140px)' }}
        >
          Tomorrow can be
          <br />
          <em className="italic">day one.</em>
        </h2>
        <p className="font-sans text-[15px] md:text-[17px] leading-[1.6] opacity-90 max-w-[440px] mx-auto mt-7">
          Free. Photos and friends only — no ads, no inbox cruft, no dopamine slot machines. Just one small thing, every day.
        </p>
        <div className="flex justify-center mt-9">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
