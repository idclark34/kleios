import { AppStoreBadge } from '../primitives/AppStoreBadge';

export function HeroBig() {
  return (
    <header id="top" className="relative bg-cream px-5 md:px-8 pt-[128px] pb-[56px]">
      <div className="text-center font-sans font-semibold text-[11px] md:text-[12px] tracking-[3.2px] text-plum">
        PHOTO-VERIFIED HABITS · WITH YOUR PEOPLE
      </div>

      {/* Inter Tight Bold — matches the app's hero title (FONT.sansBold).
          Single line: size scales with viewport width so it never wraps. */}
      <h1
        className="font-sans font-bold text-center text-ink tracking-[-0.04em] leading-[1.0] mt-5 whitespace-nowrap"
        style={{ fontSize: 'clamp(24px, 7.6vw, 132px)' }}
      >
        Habits run on <span className="text-plum">proof.</span>
      </h1>

      <p className="font-sans text-center text-[15px] md:text-[17px] leading-[1.5] text-muted max-w-[440px] mx-auto mt-8">
        One small challenge a day. Snap a photo. AI verifies on the spot — and your
        friends see the streak.
      </p>

      <div className="flex justify-center mt-8">
        <AppStoreBadge />
      </div>
    </header>
  );
}
