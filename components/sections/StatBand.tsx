import { Accent } from '../primitives/Accent';

const STATS: Array<{ num: string; emph?: string; label: string }> = [
  { num: '1', label: 'PHOTO PER TASK · NO EXCEPTIONS' },
  { num: '~5', emph: 's', label: 'AI VERIFICATION TIME' },
  { num: '0', label: 'CHECK-BOXES TO TICK' },
];

export function StatBand() {
  return (
    <section className="bg-cream py-[60px] px-6 md:px-10 border-y border-ink/10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-sans font-bold text-[56px] leading-none tracking-[-0.03em] text-ink">
            {s.num}
            {s.emph && <Accent className="text-plum" match={false}>{s.emph}</Accent>}
          </div>
          <div className="font-sans font-semibold text-[11px] tracking-[2px] text-muted mt-2">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
