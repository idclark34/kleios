import type { ReactNode } from 'react';

export function Display({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif font-bold tracking-[-0.05em] leading-[1.02] text-[40px] md:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}
