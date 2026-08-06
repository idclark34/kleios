import { APP_STORE_URL } from '../primitives/AppStoreBadge';

export function FooterBig() {
  return (
    <footer className="bg-ink text-cream px-6 md:px-10 pt-[70px] pb-[40px] overflow-hidden">
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between gap-10 pb-[50px] border-b border-cream/10">
        <div className="max-w-[280px]">
          <div className="font-serif text-[22px] tracking-[4px]">KLEIOS</div>
          <p className="mt-3 text-[13px] leading-[1.6] text-cream/60">
            A photo-verified social habit app. Made by a small team. Now on the App Store.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-cream text-ink rounded-full px-5 py-2.5 font-sans font-semibold text-[12px] tracking-[1.5px] no-underline"
          >
            DOWNLOAD →
          </a>
        </div>
        <div className="flex flex-wrap gap-y-8 gap-x-[64px]">
          <FooterCol title="PRODUCT" links={[['How it works', '#how'], ['Challenges', '#join'], ['Lock In', '#join']]} />
          <FooterCol title="COMPANY" links={[['Contact', 'mailto:hello@kleios.app']]} />
          <FooterCol title="LEGAL" links={[['Privacy', '/privacy']]} />
        </div>
      </div>

      {/* giant tone-on-tone wordmark */}
      <div
        className="font-serif font-bold text-center leading-none tracking-[-0.04em] text-cream/[0.06] select-none mt-10"
        style={{ fontSize: 'clamp(80px, 22vw, 340px)' }}
        aria-hidden="true"
      >
        KLEIOS
      </div>

      <div className="max-w-[1050px] mx-auto flex justify-between items-center text-[12px] text-cream/60 mt-6">
        <span>© 2026 Kleios</span>
        <span>@kleios_app · hello@kleios.app</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h4 className="font-sans font-semibold text-[10px] tracking-[2px] text-cream mb-3">{title}</h4>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="block text-cream/60 no-underline text-[13px] py-[3px]">
          {label}
        </a>
      ))}
    </div>
  );
}
