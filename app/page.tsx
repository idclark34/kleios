'use client';
import { useState, useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { StatBand } from '@/components/sections/StatBand';
import { TheLoop } from '@/components/sections/TheLoop';
import { Manifesto } from '@/components/sections/Manifesto';
import { GroupsFeature } from '@/components/sections/GroupsFeature';
import { CategoriesFeature } from '@/components/sections/CategoriesFeature';
import { VerificationFeature } from '@/components/sections/VerificationFeature';
import { Closing } from '@/components/sections/Closing';
import { Footer } from '@/components/sections/Footer';
import { WaitlistForm } from '@/components/primitives/WaitlistForm';

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  useEffect(() => {
    if (!showWaitlist) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowWaitlist(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showWaitlist]);

  return (
    <main className="min-h-screen">
      <Hero onNotifyClick={() => setShowWaitlist(true)} />
      <StatBand />
      <TheLoop />
      <Manifesto />
      <GroupsFeature />
      <CategoriesFeature />
      <VerificationFeature />
      <Closing onNotifyClick={() => setShowWaitlist(true)} />
      <Footer />
      {showWaitlist && (
        <div
          className="fixed inset-0 bg-ink/60 z-50 flex items-center justify-center px-4"
          onClick={() => setShowWaitlist(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <WaitlistForm onClose={() => setShowWaitlist(false)} />
          </div>
        </div>
      )}
    </main>
  );
}
