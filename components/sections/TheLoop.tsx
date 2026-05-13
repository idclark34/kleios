import { Eyebrow } from '../primitives/Eyebrow';
import { Display } from '../primitives/Display';
import { Lead } from '../primitives/Lead';

const STEPS = [
  {
    n: '01',
    title: 'A challenge, every morning.',
    body: "One small task, from a category you chose. Read 10 pages. Walk a mile. Photograph something blue. Skip a day? It breaks your streak — not your week.",
    visual: <div className="w-full h-full bg-sunset flex items-end p-3"><span className="bg-cream/90 text-ink px-2.5 py-1.5 rounded-full text-[10px] font-semibold">Read 10 pages</span></div>,
  },
  {
    n: '02',
    title: "Show it, don't say it.",
    body: 'Snap a photo as proof. AI checks it on the spot — usually in about five seconds. Pass, and the day is yours. Fake it, and AI knows.',
    visual: <div className="w-full h-full bg-ink text-cream font-serif text-[32px] flex items-center justify-center">✓</div>,
  },
  {
    n: '03',
    title: 'Your people watch.',
    body: "Friends and groups see your photos as you finish. You see theirs. The accountability is built in — and the photos make it kind of beautiful.",
    visual: <div className="w-full h-full flex items-end p-3" style={{ background: 'linear-gradient(135deg, var(--pink), var(--lavender))' }}><span className="bg-cream/90 text-ink px-2.5 py-1.5 rounded-full text-[10px] font-semibold">maya finished day 8</span></div>,
  },
];

export function TheLoop() {
  return (
    <section id="how" className="bg-cream py-[90px] px-6 md:px-10">
      <div className="max-w-[600px] mx-auto text-center">
        <Eyebrow>THE LOOP</Eyebrow>
        <Display className="mt-3.5">Daily, with <em className="italic text-plum">your people.</em></Display>
        <Lead className="mt-4 mx-auto">
          Kleios is a habit app where the receipt is a photo, the referee is AI, and the audience is your friends.
        </Lead>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-[60px]">
        {STEPS.map((s) => (
          <div key={s.n}>
            <div className="font-serif font-bold text-[38px] leading-none text-plum">{s.n}</div>
            <h3 className="font-serif font-bold text-[22px] leading-[1.15] tracking-[-0.4px] mt-3 mb-2">{s.title}</h3>
            <p className="font-sans text-[13px] leading-[1.6] text-muted">{s.body}</p>
            <div className="mt-[18px] h-[140px] rounded-lg border border-ink/10 overflow-hidden relative">
              {s.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
