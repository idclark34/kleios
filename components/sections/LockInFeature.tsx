import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { Accent } from '../primitives/Accent';
import { ScreenShot } from '../phone-screens/ScreenShot';

export function LockInFeature() {
  return (
    <FeatureBlock
      eyebrow="LOCK IN"
      headline={<>You didn&rsquo;t decide to <Accent className="text-plum">scroll.</Accent></>}
      body="That's what makes it so hard to stop. Nobody sits down and chooses to lose forty minutes to a feed — it just happens, and you notice afterwards. Lock In moves the decision earlier, to the moment you're still the one making it. Name the thing, set the clock, pick the apps that eat you. They go dark until the timer runs out."
      bullets={[
        "Apple's own app blocking — the apps you pick, gone for the session",
        'Surprise spot-checks: prove mid-session that you’re still on it',
        'Bail early and the polaroid still develops, stamped Faded',
      ]}
      visual={
        <Phone>
          <ScreenShot
            src="/screens/lockin-session.jpg"
            alt="A live Kleios lock-in session counting down, with the task named above the timer"
          />
        </Phone>
      }
    />
  );
}
