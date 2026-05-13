type Member = { name: string; status: string; checked: boolean; dimmed?: boolean; avatar: string; statusTint: 'done' | 'doing' | 'idle' };

const MEMBERS: Member[] = [
  { name: 'maya', status: '12-day streak ✓', checked: true, avatar: 'linear-gradient(135deg, var(--peach), var(--pink))', statusTint: 'done' },
  { name: 'jules', status: '8-day streak ✓', checked: true, avatar: 'linear-gradient(135deg, var(--lavender), #5a3a8c)', statusTint: 'done' },
  { name: 'you', status: 'In progress', checked: false, avatar: '#c4b8a0', statusTint: 'doing' },
  { name: 'sam', status: 'Not yet', checked: false, dimmed: true, avatar: '#7a93c4', statusTint: 'idle' },
];

export function GroupsScreen() {
  return (
    <div className="bg-cream text-ink w-full h-full px-3 py-3.5 flex flex-col">
      <div className="text-[9px] tracking-[2.5px] text-center">GROUPS</div>
      <div className="font-serif text-[18px] font-bold mt-[18px]">Studio Crew</div>
      <div className="text-[10px] text-muted mt-0.5">Today: Cook something new</div>
      <div className="mt-3.5 flex flex-col gap-[9px]">
        {MEMBERS.map((m) => {
          const rowBg =
            m.statusTint === 'done' ? 'bg-pink/[0.08]' :
            m.statusTint === 'doing' ? 'bg-cream/60' :
            'bg-cream/40 opacity-60';
          return (
            <div key={m.name} className={`flex gap-2 items-center p-2 rounded-lg ${rowBg}`}>
              <span className="w-[26px] h-[26px] rounded-full flex-shrink-0" style={{ background: m.avatar }} />
              <div className="flex-1">
                <div className="text-[10px] font-semibold">{m.name}</div>
                <div className="text-[9px] text-muted">{m.status}</div>
              </div>
              {m.checked && <span className="text-[14px]">✓</span>}
              {m.statusTint === 'doing' && <span className="text-[9px] text-plum">▷</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
