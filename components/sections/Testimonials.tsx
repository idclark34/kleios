import { Eyebrow } from '../primitives/Eyebrow';
import { Display } from '../primitives/Display';
import { TESTIMONIALS } from '@/content/testimonials';

export function Testimonials() {
  // Nothing to show is a real state, not an edge case — the page ships without
  // this section until there are quotes worth putting names on.
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="people" className="bg-cream py-[90px] px-6 md:px-10 border-t border-ink/10">
      <div className="max-w-[600px] mx-auto text-center">
        <Eyebrow>RECEIPTS</Eyebrow>
        <Display className="mt-3.5">
          From the people <em className="italic text-plum">doing it.</em>
        </Display>
      </div>

      <ul className="list-none p-0 mt-[54px] grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1100px] mx-auto">
        {TESTIMONIALS.map((t) => (
          <li
            key={`${t.name}-${t.quote.slice(0, 24)}`}
            className="rounded-2xl border border-ink/10 bg-white/50 p-7 flex flex-col gap-5"
          >
            <blockquote className="font-serif italic text-[21px] leading-[1.35] tracking-[-0.01em] text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-auto">
              <div className="font-sans font-semibold text-[13px] text-ink">{t.name}</div>
              {t.context && (
                <div className="font-sans text-[12px] text-muted mt-0.5">{t.context}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
