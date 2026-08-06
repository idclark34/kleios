'use client';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Phone } from '../primitives/Phone';
import { ScreenShot } from '../phone-screens/ScreenShot';
import { VerdictScreen } from '../phone-screens/VerdictScreen';
import { LockInScreen } from '../phone-screens/LockInScreen';

type Beat = { kicker: string; title: ReactNode; screen: ReactNode };

const BEATS: Beat[] = [
  {
    kicker: 'EVERY MORNING',
    title: <>One small thing. <em className="italic text-peach">Today only.</em></>,
    screen: <ScreenShot src="/screens/home.jpg" alt="Kleios home screen with today's quest" />,
  },
  {
    kicker: 'SHOW IT',
    title: <>Snap proof. <em className="italic text-peach">No lying.</em></>,
    screen: <ScreenShot src="/screens/proof-desk.jpg" alt="A verified proof photo of a tidy desk" />,
  },
  {
    // TODO: swap for a real AI-verdict screenshot once captured
    kicker: 'THE REFEREE',
    title: <>AI verifies. <em className="italic text-peach">~5 seconds.</em></>,
    screen: <VerdictScreen />,
  },
  {
    // TODO: swap for a real Lock In session screenshot once captured
    kicker: 'LOCK IN',
    title: <>Set a timer. <em className="italic text-peach">Prove it.</em></>,
    screen: <LockInScreen />,
  },
  {
    kicker: 'YOUR PEOPLE',
    title: <>They see your receipt. <em className="italic text-peach">You see theirs.</em></>,
    screen: <ScreenShot src="/screens/proof-bed.jpg" alt="A friend's verified proof photo of a made bed" />,
  },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
      const next = Math.floor(progress * BEATS.length);
      setIndex((prev) => (prev === next ? prev : next));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const beat = BEATS[index];

  return (
    <section ref={ref} style={{ height: `${BEATS.length * 100}vh` }} className="relative bg-sunset">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* warm grid texture — a nod to the maker's cutting mat */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 15%, rgba(255,245,232,0.28), transparent 55%)' }}
        />

        {/* caption — pinned near the top */}
        <div className="absolute top-[8%] inset-x-0 text-center text-cream px-6">
          <div className="font-sans font-semibold text-[12px] tracking-[3px] opacity-90">{beat.kicker}</div>
          <h2 className="font-serif font-bold tracking-[-0.03em] leading-[1.0] text-[30px] md:text-[40px] mt-2 max-w-[560px] mx-auto">
            {beat.title}
          </h2>
        </div>

        {/* the phone — bigger, centered, scaled up on desktop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="origin-center scale-100 md:scale-[1.25]">
            <Phone w={230} h={472}>{beat.screen}</Phone>
          </div>
        </div>

        {/* progress dots — pinned near the bottom */}
        <div className="absolute bottom-[7%] inset-x-0 flex justify-center gap-2">
          {BEATS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-cream' : 'w-1.5 bg-cream/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
