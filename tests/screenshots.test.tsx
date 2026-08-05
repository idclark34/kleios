import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';
import { RoutineFeature } from '@/components/sections/RoutineFeature';
import { GroupsFeature } from '@/components/sections/GroupsFeature';
import { VerificationFeature } from '@/components/sections/VerificationFeature';

/**
 * The landing page renders real app captures from /public/screens. A typo in a
 * src is invisible at build time (static export, plain <img>) and ships a broken
 * image, so assert the files actually exist on disk.
 */
function srcsIn(container: HTMLElement) {
  return Array.from(container.querySelectorAll('img')).map((img) => img.getAttribute('src') ?? '');
}

describe('screenshot wiring', () => {
  it('renders three real captures in the hero', () => {
    const { container } = render(<Hero />);
    const srcs = srcsIn(container);
    expect(srcs).toEqual([
      '/screens/home.jpg',
      '/screens/challenge.jpg',
      '/screens/feed-dishes.jpg',
    ]);
  });

  it.each([
    ['RoutineFeature', <RoutineFeature key="r" />, '/screens/routine.jpg'],
    ['GroupsFeature', <GroupsFeature key="g" />, '/screens/proof-bed.jpg'],
    ['VerificationFeature', <VerificationFeature key="v" />, '/screens/verified.jpg'],
  ])('%s renders its capture', (_name, element, expected) => {
    const { container } = render(element);
    expect(srcsIn(container)).toEqual([expected]);
  });

  it('every referenced capture exists in public/', () => {
    const rendered = [
      render(<Hero />),
      render(<RoutineFeature />),
      render(<GroupsFeature />),
      render(<VerificationFeature />),
    ];
    const srcs = rendered.flatMap((r) => srcsIn(r.container));
    expect(srcs.length).toBeGreaterThan(0);
    for (const src of srcs) {
      expect(existsSync(join(process.cwd(), 'public', src)), `missing ${src}`).toBe(true);
    }
  });

  it('gives every capture descriptive alt text', () => {
    render(<Hero />);
    for (const img of screen.getAllByRole('img')) {
      expect(img.getAttribute('alt')?.length ?? 0).toBeGreaterThan(10);
    }
  });
});
