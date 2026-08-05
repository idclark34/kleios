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
          Tight Bold, -0.03em tracking, 1.05 line-height, soft ink shadow. The
          app has no italic sans — only serifItalic — so the "proof." accent
          stays Cormorant, sized up to compensate for its smaller x-height. */}
      <h1
        className="font-sans font-bold text-center mt-4 text-[42px] md:text-[64px] leading-[1.05] tracking-[-0.03em] relative z-[3]"
        style={{ textShadow: '0 3px 12px rgba(28, 22, 18, 0.18)' }}
      >
        Habits don't run<br />
        on <s className="opacity-[0.78] decoration-[2px] decoration-cream/55">willpower</s>. They run<br />
        on{' '}
        <em
          className="font-serif italic text-ink text-[1.12em] tracking-[-0.01em]"
          // Penumbra, not a glow: the halo is the gradient's own colour darkened
          // (#ff797d x 0.35), so it reads as the word shading the background
          // rather than a foreign drop shadow. It steps the edge down from
          // 7.06:1 to ~3.8:1 — ink to dark-tinted ground to gradient — instead
          // of a hard cut. Radii in em so they scale with the responsive size.
          style={{ textShadow: '0 0 0.5em rgba(89,42,44,0.5), 0 0 0.18em rgba(89,42,44,0.4)' }}
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
