export function HomeScreen() {
  return (
    <div className="bg-sunset text-cream w-full h-full flex flex-col px-[13px] py-[14px]">
      <div className="text-[9px] tracking-[2.5px] text-center mt-0.5">KLEIOS</div>
      <div className="text-[8px] tracking-[2.2px] mt-[30px] opacity-85">DAY</div>
      <div className="font-serif text-[84px] leading-none tracking-[-3.5px] font-bold">04</div>
      <div className="text-[9px] opacity-85 mt-1.5">3 of 4 · 12-day streak</div>
      <div className="text-[8px] tracking-[2px] mt-[34px] opacity-85">TODAY&apos;S QUEST</div>
      <div className="font-serif text-[14px] leading-[1.15] mt-0.5">Read 10 pages of any book</div>
      <div className="mt-auto bg-cream text-ink rounded-full px-[11px] py-2 text-[10px] font-semibold flex justify-between">
        <span>▷ Start now</span>
        <span>→</span>
      </div>
    </div>
  );
}
