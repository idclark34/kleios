const CARDS: Array<{ label: string; cat: string; h: number; tint: string }> = [
  { label: 'Read 10 pages', cat: 'READING', h: 260, tint: 'linear-gradient(150deg, #ff9870, #a04060)' },
  { label: 'Walk a mile', cat: 'MOVEMENT', h: 200, tint: 'linear-gradient(150deg, #a5d8a5, #5e8a5e)' },
  { label: 'Make your bed', cat: 'RESET', h: 300, tint: 'linear-gradient(150deg, #ffd1a1, #ff5b8a)' },
  { label: 'Cook something real', cat: 'KITCHEN', h: 220, tint: 'linear-gradient(150deg, #d4a574, #8c5e3a)' },
  { label: 'Up before 7', cat: 'WAKE UP', h: 240, tint: 'linear-gradient(150deg, #a558d3, #4a2d6d)' },
  { label: 'Clear the desk', cat: 'FOCUS', h: 200, tint: 'linear-gradient(150deg, #ff5b8a, #a558d3)' },
  { label: 'Stretch it out', cat: 'MOVEMENT', h: 280, tint: 'linear-gradient(150deg, #ffb088, #ff5b8a)' },
  { label: 'Water, not soda', cat: 'FUEL', h: 210, tint: 'linear-gradient(150deg, #7fb3d5, #34688f)' },
];

export function ChallengeGallery() {
  return (
    <section className="bg-cream px-6 md:px-10 py-[120px]">
      <div className="max-w-[1050px] mx-auto">
        <div className="font-sans font-semibold text-[12px] tracking-[3px] text-plum">THE CHALLENGES</div>
        <h2 className="font-serif font-bold tracking-[-0.04em] leading-[0.98] text-[44px] md:text-[68px] mt-3 max-w-[720px]">
          Small, real, and <em className="italic text-plum">provable.</em>
        </h2>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-muted mt-6 max-w-[460px]">
          You opt into the categories you care about. Every day pulls one small thing from them — nothing you can fake with a tap.
        </p>

        <div className="mt-12 [column-count:2] md:[column-count:4] [column-gap:16px]">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="mb-4 rounded-2xl overflow-hidden relative break-inside-avoid flex items-end p-4"
              style={{ height: c.h, background: c.tint }}
            >
              <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative text-cream">
                <div className="font-sans font-semibold text-[9px] tracking-[2px] opacity-85">{c.cat}</div>
                <div className="font-serif font-bold text-[22px] leading-[1.05] mt-1">{c.label}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-[13px] tracking-[1px] text-muted/70 mt-6">More categories landing all the time.</p>
      </div>
    </section>
  );
}
