// Set NEXT_PUBLIC_APP_STORE_URL at deploy time. Until then the placeholder href
// points at a non-existent app id so a missed env var is visible in production.
const FALLBACK_HREF = 'https://apps.apple.com/app/idTBD';

export function AppStoreBadge({
  href = process.env.NEXT_PUBLIC_APP_STORE_URL ?? FALLBACK_HREF,
}: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-ink text-cream py-[11px] px-4 rounded-[12px] inline-flex items-center gap-[10px] font-sans font-semibold text-[13px] leading-[1.15] no-underline"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="w-[22px] h-[22px] fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.182 8.176c-.01-1.748 1.415-2.6 1.479-2.638-.808-1.183-2.064-1.345-2.51-1.36-1.057-.108-2.083.633-2.624.633-.55 0-1.387-.62-2.288-.601-1.16.018-2.252.69-2.85 1.749-1.232 2.139-.314 5.294.871 7.028.594.847 1.291 1.793 2.205 1.759.892-.036 1.227-.57 2.305-.57 1.077 0 1.379.57 2.318.554.961-.016 1.566-.853 2.137-1.706.685-.972.964-1.93.976-1.98-.022-.01-1.866-.715-1.819-2.868zm-1.732-5.272c.482-.6.81-1.418.72-2.246-.694.029-1.554.466-2.057 1.058-.45.522-.849 1.366-.747 2.169.778.06 1.59-.395 2.084-.981z"/>
      </svg>
      <span className="block">
        App Store
        <small className="block text-[9px] opacity-70 tracking-[0.6px] font-normal">Download now</small>
      </span>
    </a>
  );
}
