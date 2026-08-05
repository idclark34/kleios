import { Hero } from '@/components/sections/Hero';
import { StatBand } from '@/components/sections/StatBand';
import { TheLoop } from '@/components/sections/TheLoop';
import { Manifesto } from '@/components/sections/Manifesto';
import { GroupsFeature } from '@/components/sections/GroupsFeature';
import { RoutineFeature } from '@/components/sections/RoutineFeature';
import { VerificationFeature } from '@/components/sections/VerificationFeature';
import { Closing } from '@/components/sections/Closing';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatBand />
      <TheLoop />
      <Manifesto />
      <GroupsFeature />
      <RoutineFeature />
      <VerificationFeature />
      <Closing />
      <Footer />
    </main>
  );
}
