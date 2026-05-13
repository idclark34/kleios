import { FeatureBlock } from './FeatureBlock';
import { Phone } from '../primitives/Phone';
import { CategoriesScreen } from '../phone-screens/CategoriesScreen';

export function CategoriesFeature() {
  return (
    <FeatureBlock
      reverse
      eyebrow="CATEGORIES"
      headline={<>You pick what's <em className="italic text-plum">in.</em></>}
      body="Kleios only gives you challenges from categories you opt into. Don't want 'meditate for 20 minutes'? Don't pick mindfulness. The categories you choose are the only places your daily challenge can come from."
      bullets={[
        'Reading, exercise, cooking, wake-up — more coming',
        'Switch categories on or off anytime',
        'Difficulty calibrates to your streak',
      ]}
      visual={<Phone><CategoriesScreen /></Phone>}
    />
  );
}
