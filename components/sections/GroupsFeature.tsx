import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { GroupsScreen } from '../phone-screens/GroupsScreen';

export function GroupsFeature() {
  return (
    <FeatureBlock
      eyebrow="GROUPS"
      headline={<>Do it as a <em className="italic text-plum">group.</em></>}
      body="Make a group with friends, your roommates, the people from book club. Everyone gets the same challenge, every day. Photos go to the same feed. So does the banter."
      bullets={[
        'Same daily challenge for everyone in the group',
        'A shared feed, just for the group',
        'Streaks per person, leaderboard per group',
      ]}
      visual={<Phone><GroupsScreen /></Phone>}
    />
  );
}
