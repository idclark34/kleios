type FeedRow = { name: string; when: string; task: string; tint: string; dimmed?: boolean };

const ROWS: FeedRow[] = [
  { name: 'maya', when: 'just now', task: 'Walk a mile · day 8', tint: 'linear-gradient(135deg, #a5d8a5, #5e8a5e)' },
  { name: 'jules', when: '2h', task: 'Cook something new · day 21', tint: 'linear-gradient(135deg, #d4a574, #8c5e3a)' },
  { name: 'sam', when: '4h', task: 'Read 10 pages · day 3', tint: '#c4b8a0', dimmed: true },
];

export function FeedScreen() {
  return (
    <div className="bg-cream text-ink w-full h-full px-3 py-3.5 flex flex-col">
      <div className="text-[9px] tracking-[2.5px] text-center">FEED</div>
      <div className="mt-3.5 flex flex-col gap-[11px]">
        {ROWS.map((r) => (
          <div key={r.name} className={`flex gap-[9px] ${r.dimmed ? 'opacity-60' : ''}`}>
            <span className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: r.tint }} />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold">{r.name} · {r.when}</div>
              <div className="text-[9px] text-muted">{r.task}</div>
              {!r.dimmed && (
                <div className="h-[62px] rounded-[5px] mt-1.5" style={{ background: r.tint }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
