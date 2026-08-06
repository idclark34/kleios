import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { Accent } from '../primitives/Accent';
import { ScreenShot } from '../phone-screens/ScreenShot';

export function GroupsFeature() {
  return (
    <FeatureBlock
      eyebrow="GROUPS"
      headline={<>Do it as a <Accent className="text-plum">group.</Accent></>}
      body="Make a group with friends, your roommates, the people from book club. Everyone's proof lands in the same feed, as it happens. So does the banter."
      bullets={[
        'A shared feed, just for the group',
        'Streaks per person, leaderboard per group',
        'Comment on the photo, not the check-mark',
      ]}
      visual={
        <Phone>
          <ScreenShot
            src="/screens/proof-bed.jpg"
            alt="A shared Kleios feed showing proof photos from two friends"
          />
        </Phone>
      }
    />
  );
}
