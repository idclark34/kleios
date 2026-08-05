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

      <h1 className="font-serif font-bold text-center mt-4 text-[42px] md:text-[64px] leading-[0.98] tracking-[-2.5px] relative z-[3]">
        Habits don't run<br />
        on <s className="opacity-[0.78] decoration-[2px] decoration-cream/55">willpower</s>. They run<br />
        on <em className="italic">proof.</em>
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
