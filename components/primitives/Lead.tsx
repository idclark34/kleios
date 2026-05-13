import type { ReactNode } from 'react';

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-[16px] leading-[1.6] text-muted max-w-[520px] ${className}`}>
      {children}
    </p>
  );
}
