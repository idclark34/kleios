export function CameraScreen() {
  return (
    <div className="bg-ink w-full h-full flex flex-col">
      <div className="h-[230px] relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4a5d3a 0%, #2a3825 40%, #1c1612 100%)' }}>
        <div className="w-20 h-[110px] rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)] relative" style={{ background: 'linear-gradient(150deg, #c4a172, #7d5a3a)' }}>
          <div className="absolute inset-2 border border-cream/40 rounded-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-semibold text-[14px] text-cream/60 tracking-wide">
            BOOK
          </div>
        </div>
        {/* viewfinder corners */}
        <span className="absolute top-3.5 left-3.5 w-[18px] h-[18px] border-t-[1.5px] border-l-[1.5px] border-cream" />
        <span className="absolute top-3.5 right-3.5 w-[18px] h-[18px] border-t-[1.5px] border-r-[1.5px] border-cream" />
        <span className="absolute bottom-3.5 left-3.5 w-[18px] h-[18px] border-b-[1.5px] border-l-[1.5px] border-cream" />
        <span className="absolute bottom-3.5 right-3.5 w-[18px] h-[18px] border-b-[1.5px] border-r-[1.5px] border-cream" />
      </div>
      <div className="bg-cream text-ink flex-1 px-3 py-3.5 flex flex-col gap-2">
        <div className="text-[8px] tracking-[2px] text-muted">VERIFYING</div>
        <div className="font-serif text-[15px] leading-[1.15]">Looks like a book, with text visible. ✓</div>
        <div className="mt-auto flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#4d8d4d] text-white flex items-center justify-center text-[14px]">✓</span>
          <span className="text-[11px] font-semibold">Passed. Day 13 unlocked.</span>
        </div>
      </div>
    </div>
  );
}
