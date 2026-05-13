export function Nav() {
  return (
    <nav className="flex justify-between items-center relative z-[4]">
      <span className="font-serif text-[20px] tracking-[4px]">KLEIOS</span>
      <div className="hidden md:flex gap-[22px] font-sans font-semibold text-[11px] tracking-[1.5px] opacity-90">
        <a href="#how" className="no-underline text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2">HOW IT WORKS</a>
        <a href="#why" className="no-underline text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2">WHY</a>
        <a href="#join" className="no-underline text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2">JOIN</a>
      </div>
      <a
        href="#get-app"
        className="bg-cream text-ink py-[9px] px-4 rounded-full font-sans font-semibold text-[11px] tracking-[1.5px] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
      >
        GET THE APP
      </a>
    </nav>
  );
}
