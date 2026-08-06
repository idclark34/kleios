import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { Accent } from '../primitives/Accent';
import { ScreenShot } from '../phone-screens/ScreenShot';

export function RoutineFeature() {
  return (
    <FeatureBlock
      reverse
      eyebrow="YOUR ROUTINE"
      headline={<>Your routine. Your <Accent className="text-plum">rules.</Accent></>}
      body="Kleios doesn't hand you someone else's challenge. You write the list — clear your desk, drink a glass of water, hit the gym — and every task on it needs a photo before it counts."
      bullets={[
        'Write your own list — add, reorder, or drop tasks anytime',
        'Every task carries its own XP and its own proof standard',
        'Miss the photo, miss the XP — there is no check-box to tick',
      ]}
      visual={
        <Phone>
          <ScreenShot
            src="/screens/routine.jpg"
            alt="A Kleios daily routine: user-written tasks, each worth XP"
          />
        </Phone>
      }
    />
  );
}
