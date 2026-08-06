import type { ReactNode } from 'react';

export function Display({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-sans font-bold tracking-[-0.03em] leading-[1.05] text-[40px] md:text-[48px] text-balance ${className}`}
    >
      {children}
    </h2>
  );
}
