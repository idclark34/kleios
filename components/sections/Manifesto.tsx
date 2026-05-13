import { Eyebrow } from '../primitives/Eyebrow';

export function Manifesto() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink text-cream py-[110px] px-6 md:px-10"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 30%, rgba(255,91,138,0.25), transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(165,88,211,0.25), transparent 60%)',
        }}
      />
      <div className="relative max-w-[640px]">
        <Eyebrow tone="peach">WHY KLEIOS</Eyebrow>
        <h2 className="font-serif font-bold text-[40px] md:text-[56px] leading-[1.0] tracking-[-2px] mt-3.5">
          Track everything.<br />
          Forget by <em className="italic text-peach">Wednesday.</em>
        </h2>
        <div className="mt-6 max-w-[540px] text-cream/80 font-sans text-[15px] leading-[1.7] space-y-3.5">
          <p>
            Most habit apps run on willpower. They give you a checkbox, a streak meter, a green dot, and quietly hope you don't quit them by next Wednesday. Most people quit them by next Wednesday.
          </p>
          <p>
            Kleios runs on proof. Each morning brings one small thing. You do it, you take a photo, AI looks at the photo, and your friends see the receipt. The willpower isn't yours alone — it's distributed across the people who know you.
          </p>
          <p>
            We don't think habits are heroic. We think they're boring. The boring middle is the point.
          </p>
        </div>
      </div>
    </section>
  );
}
