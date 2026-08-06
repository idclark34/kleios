import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { render, screen } from '@testing-library/react';
import { Accent } from '@/components/primitives/Accent';
import { Display } from '@/components/primitives/Display';

describe('Accent', () => {
  it('sets the serif italic and the x-height match by default', () => {
    render(<Accent>proof.</Accent>);
    const el = screen.getByText('proof.');
    expect(el.tagName).toBe('EM');
    expect(el).toHaveClass('font-serif', 'italic', 'text-[1.41em]');
  });

  it('drops the size bump when match is off', () => {
    render(<Accent match={false}>s</Accent>);
    const el = screen.getByText('s');
    expect(el).toHaveClass('font-serif', 'italic');
    expect(el).not.toHaveClass('text-[1.41em]');
  });

  it('passes through colour and inline style', () => {
    render(
      <Accent className="text-plum" style={{ textShadow: '0 0 1px red' }}>
        rules.
      </Accent>,
    );
    const el = screen.getByText('rules.');
    expect(el).toHaveClass('text-plum');
    expect(el).toHaveStyle({ textShadow: '0 0 1px red' });
  });
});

describe('Display', () => {
  it('is set in the sans face at the app tracking', () => {
    render(<Display>Daily, with your people.</Display>);
    const el = screen.getByRole('heading', { level: 2 });
    expect(el).toHaveClass('font-sans', 'font-bold', 'tracking-[-0.03em]');
    expect(el).not.toHaveClass('font-serif');
  });
});

/**
 * The house rule after the type pass: Cormorant appears only through <Accent>.
 * A stray font-serif in a section would put a whole headline back in the wrong
 * face, and nothing else in the suite would notice.
 */
describe('no stray serif in shipped sections', () => {
  const SHIPPED = [
    'Hero', 'StatBand', 'TheLoop', 'Manifesto', 'GroupsFeature',
    'RoutineFeature', 'VerificationFeature', 'Closing', 'Footer', 'Nav',
    'FeatureBlock',
  ];

  it.each(SHIPPED)('%s does not set font-serif directly', (name) => {
    const src = readFileSync(join(process.cwd(), `components/sections/${name}.tsx`), 'utf8');
    expect(src).not.toMatch(/font-serif/);
  });
});
