'use client';
import type { ReactNode } from 'react';

export function GhostPill({
  children,
  tone = 'cream',
  onClick,
}: {
  children: ReactNode;
  tone?: 'cream' | 'ink';
  onClick?: () => void;
}) {
  const colorClasses =
    tone === 'ink'
      ? 'text-ink border-ink'
      : 'text-cream border-cream';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-transparent ${colorClasses} border-[1.5px] py-[11px] px-[18px] rounded-full inline-flex items-center gap-2 font-sans font-semibold text-[13px]`}
    >
      {children}
    </button>
  );
}
