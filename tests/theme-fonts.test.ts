import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Regression guard. globals.css originally declared the brand faces as
 * --font-family-serif / --font-family-sans, which is the Tailwind v3 name.
 * v4 reads fonts from the --font-* namespace, so those lines compiled to
 * nothing and every .font-serif on the site silently rendered as Georgia
 * while Cormorant and Inter Tight downloaded unused. Nothing fails loudly
 * when this regresses — the page just quietly changes typeface.
 */
const css = readFileSync(join(process.cwd(), 'app/globals.css'), 'utf8');

describe('tailwind theme fonts', () => {
  it('declares the brand faces in the v4 --font-* namespace', () => {
    expect(css).toMatch(/--font-serif:\s*var\(--font-cormorant\)/);
    expect(css).toMatch(/--font-sans:\s*var\(--font-inter-tight\)/);
  });

  it('does not use the v3 --font-family-* namespace', () => {
    expect(css).not.toMatch(/--font-family-(serif|sans)\s*:/);
  });

  it('declares them inside an @theme block so utilities are generated', () => {
    const theme = css.match(/@theme[^{]*\{[\s\S]*?\n\}/)?.[0] ?? '';
    expect(theme).toContain('--font-serif:');
    expect(theme).toContain('--font-sans:');
  });
});
