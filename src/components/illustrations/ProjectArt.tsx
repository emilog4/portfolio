type ArtProps = {
  className?: string;
};

export function TaxiRobotArt({ className }: ArtProps) {
  // eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed
  return <img src="/robocab/mark.svg" alt="RoboCab logo mark" className={`${className ?? ""} object-contain`} />;
}

export function BudapestArt({ className }: ArtProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      className={className}
      role="img"
      aria-label="Abstract illustration of a river city skyline with mapped spots and a points badge"
    >
      <path
        d="M0 190 C 60 170, 100 210, 160 190 S 260 170, 400 190"
        stroke="var(--ink-faint)"
        strokeWidth="1.5"
      />
      <g stroke="var(--ink)" strokeWidth="2" fill="none">
        <rect x="50" y="120" width="26" height="70" />
        <rect x="86" y="100" width="22" height="90" />
        <rect x="256" y="110" width="24" height="80" />
        <rect x="292" y="130" width="30" height="60" />
      </g>
      <path d="M170 190 Q 200 130 230 190" stroke="var(--ink)" strokeWidth="2" />
      <g stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="1 7" strokeLinecap="round">
        <path d="M63 120 L140 60" />
        <path d="M270 110 L200 60" />
        <path d="M140 60 L200 60" />
      </g>
      <g fill="var(--accent)">
        <circle cx="140" cy="60" r="6" />
        <circle cx="200" cy="60" r="6" />
        <circle cx="270" cy="110" r="6" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink)">
        <circle cx="335" cy="55" r="18" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
        <text x="335" y="59" textAnchor="middle">
          +10
        </text>
      </g>
    </svg>
  );
}

export function VacationArt({ className }: ArtProps) {
  const cell = 24;
  const cols = 7;
  const rows = 5;
  const offsetX = 36;
  const offsetY = 40;

  const weekends = new Set(["0,5", "0,6", "1,5", "1,6", "4,5", "4,6"]);
  const holiday = "1,2";
  const streak = new Set(["2,3", "2,4", "2,5", "2,6", "3,0", "3,1"]);

  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      className={className}
      role="img"
      aria-label="Abstract illustration of a calendar grid with a bridged long weekend highlighted"
    >
      <g stroke="var(--line)" strokeWidth="1">
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={offsetX + i * cell}
            y1={offsetY}
            x2={offsetX + i * cell}
            y2={offsetY + rows * cell}
          />
        ))}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line
            key={`h${i}`}
            x1={offsetX}
            y1={offsetY + i * cell}
            x2={offsetX + cols * cell}
            y2={offsetY + i * cell}
          />
        ))}
      </g>
      {Array.from(weekends).map((key) => {
        const [r, c] = key.split(",").map(Number);
        return (
          <rect
            key={key}
            x={offsetX + c * cell + 1.5}
            y={offsetY + r * cell + 1.5}
            width={cell - 3}
            height={cell - 3}
            rx="2"
            fill="var(--line)"
          />
        );
      })}
      {Array.from(streak).map((key) => {
        const [r, c] = key.split(",").map(Number);
        return (
          <rect
            key={key}
            x={offsetX + c * cell + 1.5}
            y={offsetY + r * cell + 1.5}
            width={cell - 3}
            height={cell - 3}
            rx="2"
            fill="var(--accent)"
          />
        );
      })}
      {(() => {
        const [r, c] = holiday.split(",").map(Number);
        return (
          <rect
            x={offsetX + c * cell + 1.5}
            y={offsetY + r * cell + 1.5}
            width={cell - 3}
            height={cell - 3}
            rx="2"
            fill="var(--ink)"
          />
        );
      })()}
    </svg>
  );
}

export function TetrisArt({ className }: ArtProps) {
  const cell = 24;
  const cols = 10;
  const rows = 8;
  const filled = new Set([
    "3,5",
    "4,5",
    "5,5",
    "5,4",
    "0,6",
    "1,6",
    "2,6",
    "1,7",
    "6,6",
    "6,7",
    "7,6",
    "7,7",
    "8,4",
    "8,5",
    "8,6",
    "8,7",
  ]);
  const accentCells = new Set(["5,4", "5,5", "4,5", "3,5"]);

  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      className={className}
      role="img"
      aria-label="Abstract illustration of stacked Tetris blocks on a grid"
    >
      <g stroke="var(--line)" strokeWidth="1">
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line key={`v${i}`} x1={i * cell} y1={0} x2={i * cell} y2={rows * cell} />
        ))}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * cell} x2={cols * cell} y2={i * cell} />
        ))}
      </g>
      {Array.from(filled).map((key) => {
        const [cx, cy] = key.split(",").map(Number);
        return (
          <rect
            key={key}
            x={cx * cell + 1.5}
            y={cy * cell + 1.5}
            width={cell - 3}
            height={cell - 3}
            rx="2"
            fill={accentCells.has(key) ? "var(--accent)" : "var(--ink)"}
          />
        );
      })}
      <line x1="0" y1={rows * cell} x2={cols * cell} y2={rows * cell} stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
}
