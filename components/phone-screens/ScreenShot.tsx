/**
 * Renders a real app screenshot filling the Phone frame.
 * Screenshots live in /public/screens (1179×2556 iPhone captures).
 */
export function ScreenShot({ src, alt }: { src: string; alt: string }) {
  return (
    // Plain <img> (not next/image) — the Phone frame is a fixed-size flex box,
    // and these are static, already-optimized JPEGs.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
  );
}
