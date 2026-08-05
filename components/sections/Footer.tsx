import type { ReactNode } from 'react';
import { APP_STORE_URL } from '../primitives/AppStoreBadge';

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 px-6 md:px-10 pt-[50px] pb-[30px] font-sans text-[12px]">
      <div className="flex flex-col md:flex-row justify-between items-start pb-[30px] border-b border-cream/10 gap-8">
        <div>
          <div className="font-serif text-[20px] tracking-[4px] text-cream">KLEIOS</div>
          <div className="mt-2 text-[11px] opacity-70 max-w-[240px] leading-[1.5]">
            A photo-verified social habit app. Made by a small team. Now on the App Store.
          </div>
        </div>
        <div className="flex flex-wrap gap-y-6 gap-x-[60px]">
          <div>
            <h4 className="font-semibold text-[10px] tracking-[2px] text-cream mb-3">PRODUCT</h4>
            <FooterLink href={APP_STORE_URL}>Download on iPhone</FooterLink>
            <FooterLink href="#how">How it works</FooterLink>
            <FooterLink href="#">Categories</FooterLink>
            <FooterLink href="#">Groups</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
          </div>
          <div>
            <h4 className="font-semibold text-[10px] tracking-[2px] text-cream mb-3">COMPANY</h4>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="mailto:hello@kleios.app">Contact</FooterLink>
          </div>
          <div>
            <h4 className="font-semibold text-[10px] tracking-[2px] text-cream mb-3">LEGAL</h4>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-[18px] text-[11px]">
        <span>© 2026 Kleios</span>
        <span>@kleios_app  ·  hello@kleios.app</span>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="block text-cream/70 no-underline py-[3px]">
      {children}
    </a>
  );
}
