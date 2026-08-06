import type { CSSProperties, ReactNode } from 'react';

/**
 * The emphasised word inside a headline: Cormorant italic set in a line of
 * Inter Tight. This is the app's own pattern — of its 71 serif usages, 31 are
 * serifItalic, while every display size >= 24px is sansBold.
 *
 * `match` sizes it to 1.41em. Inter Tight's x-height is 0.546em against
 * Cormorant's 0.386em, and 0.546 / 0.386 = 1.41, which is where the two faces
 * sit level instead of the serif looking shrunken. Turn it off for short
 * suffixes that should stay subordinate to what they follow.
 */
export function Accent({
  children,
  className = '',
  match = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  match?: boolean;
  style?: CSSProperties;
}) {
  const size = match ? 'text-[1.41em] tracking-[-0.01em]' : '';
  return (
    <em className={`font-serif italic ${size} ${className}`} style={style}>
      {children}
    </em>
  );
}
