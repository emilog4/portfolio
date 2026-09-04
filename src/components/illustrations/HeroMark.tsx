export function HeroMark() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute right-[6%] top-1/2 hidden h-[38vw] max-h-[420px] w-[38vw] max-w-[420px] -translate-y-1/2 opacity-70 lg:block"
    >
      <circle cx="210" cy="210" r="160" stroke="var(--line)" strokeWidth="1" />
      <circle cx="210" cy="210" r="108" stroke="var(--line)" strokeWidth="1" />
      <circle cx="210" cy="210" r="1.5" fill="var(--ink-faint)" />
      <g stroke="var(--ink-faint)" strokeWidth="1" strokeDasharray="1 7" strokeLinecap="round">
        <path d="M210 50 V 370" />
        <path d="M50 210 H 370" />
      </g>
      <circle cx="210" cy="50" r="4" fill="var(--ink-faint)" />
      <circle cx="318" cy="318" r="4" fill="var(--ink-faint)" />
      <circle cx="102" cy="102" r="5" fill="var(--accent)" />
    </svg>
  );
}
