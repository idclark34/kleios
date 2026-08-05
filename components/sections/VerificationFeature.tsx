import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { ScreenShot } from '../phone-screens/ScreenShot';

export function VerificationFeature() {
  return (
    <FeatureBlock
      visualBg="ink"
      eyebrow="VERIFICATION"
      headline={<>The AI is <em className="italic text-plum">fair.</em></>}
      body="We trained the verifier to be a generous referee: it looks for evidence the task happened, not a perfect, polished photo. A messy bookshelf, a sweaty selfie, a half-eaten dish — all fine, as long as they're real."
      bullets={[
        'Verdict in ~5 seconds, on average',
        'Tells you what it saw, not just pass/fail',
        "Re-shoot on the spot if it's not satisfied",
      ]}
      visual={
        <Phone>
          <ScreenShot
            src="/screens/verified.jpg"
            alt="A verified Kleios proof photo with the AI's written verdict beneath it"
          />
        </Phone>
      }
    />
  );
}
