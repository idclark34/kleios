import { Nav } from './Nav';
import { Phone } from '../primitives/Phone';
import { ScreenShot } from '../phone-screens/ScreenShot';
import { AppStoreBadge } from '../primitives/AppStoreBadge';

export function Hero() {
  return (
    <header
      className="relative bg-sunset text-cream overflow-hidden px-6 md:px-10 pt-[22px] pb-14"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 28% 18%, rgba(255,245,232,0.18), transparent 55%), linear-gradient(180deg, var(--peach) 0%, var(--pink) 55%, var(--lavender) 100%)',
      }}
    >
      <Nav />

      <div className="font-sans font-semibold text-[11px] tracking-[3.2px] opacity-90 mt-[60px] text-center">
        PHOTO-VERIFIED HABITS · WITH YOUR PEOPLE
      </div>

      {/* Type matches the app's own hero (SunsetHome heroStyles.title): Inter
          Tight Bold, -0.03em tracking, 1.05 line-height, soft ink shadow.
          "proof." is Cormorant italic at 1.41em — Inter Tight's x-height is
          0.546em against Cormorant's 0.386em, and 0.546/0.386 = 1.41, so that
          is the size at which the two sit level rather than the serif looking
          shrunken. */}
      <h1
        className="font-sans font-bold text-center mt-4 text-[42px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-balance relative z-[3]"
        style={{ textShadow: '0 3px 12px rgba(28, 22, 18, 0.18)' }}
      >
        Habits don't run<br />
        on <s className="opacity-[0.78] decoration-[2px] decoration-cream/55">willpower</s>.{' '}
        {/* "on willpower. They run" needs 411px at 42px — wider than any phone
            (a 390px device gives 342px), so it orphaned "run" onto its own
            line. Break it in two below md; the widest mobile line is then
            290px and the type stays at full size. */}
        <br className="md:hidden" />
        They run<br />
        on{' '}
        <em
          className="font-serif italic text-ink text-[1.41em] tracking-[-0.01em]"
          // Halo, not a glow: darkening the surround seats the ink in the
          // gradient instead of cutting it out. Same ink as the h1's own shadow,
          // so the headline shares one shadow hue. Radii are em-relative and
          // this word is 1.41em, so they land ~41% larger than the raw number —
          // 0.34em is 31px at the 64px desktop hero. Kept deliberately light;
          // past roughly 0.4em/30% it stops reading as shading and starts
          // reading as smudge around Cormorant's fine italic strokes.
          style={{ textShadow: '0 0 0.34em rgba(28,22,18,0.24), 0 0 0.12em rgba(28,22,18,0.20)' }}
        >
          proof.
        </em>
      </h1>

      <p className="font-sans text-[14px] leading-[1.55] text-center max-w-[520px] mx-auto mt-[22px] opacity-90">
        Write the routine you actually want. Snap a photo of each task. AI verifies on the spot — and your friends see the proof, not a check-mark.
      </p>

      <div className="flex justify-center mt-[26px] relative z-[3]">
        <AppStoreBadge />
      </div>

      <div className="flex flex-wrap justify-center gap-[18px] mt-11 relative z-[2]">
        <Phone tilt="left">
          <ScreenShot src="/screens/home.jpg" alt="The Kleios home screen: today's routine with XP on each task" />
        </Phone>
        <Phone className="hidden sm:block">
          <ScreenShot src="/screens/challenge.jpg" alt="A Kleios task ready for its proof photo" />
        </Phone>
        <Phone tilt="right" className="hidden md:block">
          <ScreenShot src="/screens/feed-dishes.jpg" alt="A friend's verified proof photo in the Kleios feed" />
        </Phone>
      </div>
    </header>
  );
}
