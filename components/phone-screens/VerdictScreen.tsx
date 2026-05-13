export function VerdictScreen() {
  return (
    <div className="bg-cream text-ink w-full h-full flex flex-col">
      <div className="h-[130px] relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7a8a4d, #4a5d3a)' }}>
        <span className="w-[46px] h-[46px] rounded-full bg-cream flex items-center justify-center text-[22px] text-[#4d8d4d]">✓</span>
      </div>
      <div className="px-3 py-3.5 flex-1 flex flex-col gap-2.5">
        <div className="text-[8px] tracking-[2px] text-muted">AI VERDICT</div>
        <div className="font-serif text-[15px] leading-[1.2]">
          Looks like a one-mile walk in a park. Path visible, daylight. ✓
        </div>
        <div className="mt-auto p-2 bg-[#4d8d4d]/[0.12] rounded-md">
          <div className="text-[10px] font-semibold text-[#4d8d4d]">PASSED · day 8 of your streak</div>
        </div>
      </div>
    </div>
  );
}
