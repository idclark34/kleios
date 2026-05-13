import { Nav } from './Nav';
import { Phone } from '../primitives/Phone';
import { HomeScreen } from '../phone-screens/HomeScreen';
import { CameraScreen } from '../phone-screens/CameraScreen';
import { FeedScreen } from '../phone-screens/FeedScreen';

export function Hero({ onNotifyClick }: { onNotifyClick: () => void }) {
  return (
    <header
      className="relative bg-sunset text-cream overflow-hidden px-6 md:px-10 pt-[22px] pb-14"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 28% 18%, rgba(255,245,232,0.18), transparent 55%), linear-gradient(180deg, var(--peach) 0%, var(--pink) 55%, var(--lavender) 100%)',
      }}
    >
      <Nav onNotifyClick={onNotifyClick} />

      <div className="font-sans font-semibold text-[11px] tracking-[3.2px] opacity-90 mt-[60px] text-center">
        PHOTO-VERIFIED HABITS · WITH YOUR PEOPLE
      </div>

      <h1 className="font-serif font-bold text-center mt-4 text-[42px] md:text-[64px] leading-[0.98] tracking-[-2.5px] relative z-[3]">
        Habits don't run<br />
        on <s className="opacity-[0.78] decoration-[2px] decoration-cream/55">willpower</s>. They run<br />
        on <em className="italic">proof.</em>
      </h1>

      <p className="font-sans text-[14px] leading-[1.55] text-center max-w-[520px] mx-auto mt-[22px] opacity-90">
        Every day, one small challenge. Snap a photo. AI verifies on the spot. Your friends see your streak — and you see theirs.
      </p>

      <div className="flex justify-center mt-[26px] relative z-[3]">
        <button
          type="button"
          onClick={onNotifyClick}
          className="bg-ink text-cream py-[13px] px-6 rounded-[12px] font-sans font-semibold text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2"
        >
          Join the waitlist <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-[18px] mt-11 relative z-[2]">
        <Phone tilt="left"><HomeScreen /></Phone>
        <Phone className="hidden sm:block"><CameraScreen /></Phone>
        <Phone tilt="right" className="hidden md:block"><FeedScreen /></Phone>
      </div>
    </header>
  );
}
