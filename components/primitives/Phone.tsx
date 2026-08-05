import type { ReactNode } from 'react';

type Tilt = 'left' | 'right' | 'none';

export function Phone({
  children,
  tilt = 'none',
  className = '',
  w = 170,
  // 170 × 368 matches the 1179 × 2556 iPhone captures in /public/screens, so a
  // ScreenShot fills the frame without cropping the status bar or the tab bar.
  h = 368,
}: {
  children: ReactNode;
  tilt?: Tilt;
  className?: string;
  w?: number;
  h?: number;
}) {
  const tiltClass =
    tilt === 'left' ? '-rotate-[5deg] translate-y-7' :
    tilt === 'right' ? 'rotate-[5deg] translate-y-7' : '';
  return (
    <div
      className={`bg-ink rounded-[28px] p-[6px] shadow-[0_30px_60px_rgba(28,22,18,0.4)] ${tiltClass} ${className}`}
    >
      <div className="rounded-[22px] overflow-hidden flex flex-col" style={{ width: w, height: h }}>
        {children}
      </div>
    </div>
  );
}
