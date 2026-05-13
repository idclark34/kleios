const ITEMS: Array<{ label: string; selected: boolean; isPlaceholder?: boolean }> = [
  { label: ' Reading', selected: true },
  { label: ' Exercise', selected: true },
  { label: ' Cooking', selected: false },
  { label: ' Wake up', selected: true },
  { label: '+ more soon', selected: false, isPlaceholder: true },
];

export function CategoriesScreen() {
  return (
    <div className="bg-cream text-ink w-full h-full px-3.5 py-[18px] flex flex-col">
      <div className="text-[9px] tracking-[2.5px] text-center">CATEGORIES</div>
      <div className="font-serif text-[17px] font-bold leading-[1.2] mt-[18px]">Pick what you care about.</div>
      <div className="text-[10px] text-muted mt-1">Tap to opt in.</div>
      <div className="mt-4 flex flex-col gap-[7px]">
        {ITEMS.map((i) => {
          const isSelected = i.selected;
          const base = 'flex justify-between items-center px-3 py-2.5 rounded-lg';
          const skin = isSelected ? 'bg-ink text-cream' : 'bg-ink/[0.06]';
          return (
            <div key={i.label} className={`${base} ${skin}`}>
              <span className="text-[11px] font-semibold">{i.label}</span>
              {isSelected && <span className="text-[11px]">✓</span>}
              {!isSelected && !i.isPlaceholder && <span className="text-[11px] opacity-40">+</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
