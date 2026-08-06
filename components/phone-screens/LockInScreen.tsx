export function LockInScreen() {
  return (
    <div className="bg-ink text-cream w-full h-full flex flex-col px-[13px] py-[14px]">
      <div className="flex items-center justify-between text-[8px] tracking-[2.2px] opacity-85">
        <span>LOCK IN</span>
        <span>DEEP WORK</span>
      </div>

      <div className="mt-[26px] text-center">
        <div className="text-[8px] tracking-[2.2px] opacity-70">TIME REMAINING</div>
        <div className="font-serif text-[62px] leading-none tracking-[-3px] font-bold mt-1">24:18</div>
      </div>

      {/* before photo */}
      <div className="mt-[18px] rounded-md overflow-hidden h-[92px] relative" style={{ background: 'linear-gradient(150deg, #c4a172, #6d4a2a)' }}>
        <div className="absolute inset-2 border border-cream/25 rounded-sm" />
        <span className="absolute top-1.5 left-2 text-[7px] tracking-[1.5px] bg-ink/50 px-1.5 py-0.5 rounded-full">BEFORE</span>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 bg-pink/20 rounded-md px-2 py-1.5">
        <span className="w-4 h-4 rounded-full bg-pink flex items-center justify-center text-[9px]">!</span>
        <span className="text-[8.5px] font-semibold">Spot-check in 12:00 — be ready</span>
      </div>

      <div className="mt-auto flex items-center gap-2 text-[9px]">
        <span className="opacity-70">🔒 3 apps blocked</span>
        <span className="opacity-40">·</span>
        <span className="opacity-70">2 friends locked in</span>
      </div>
    </div>
  );
}
