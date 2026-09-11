interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string | number;
  max?: string | number;
}

export default function Gauge({
  value,
  color = '#ef4d23',
  showLabels = false,
  min = '0',
  max = '100',
}: GaugeProps) {
  const totalTicks = 40;
  const activeTicksCount = Math.round((Math.min(Math.max(value, 0), 100) / 100) * totalTicks);

  const ticks = Array.from({ length: totalTicks }, (_, i) => {
    // 180° arc from angle Math.PI (180deg - left) to 2 * Math.PI (360deg - right)
    const angle = Math.PI + (i / (totalTicks - 1)) * Math.PI;
    const innerR = 70;
    const outerR = 80;
    const centerX = 100;
    const centerY = 100;

    const x1 = centerX + innerR * Math.cos(angle);
    const y1 = centerY + innerR * Math.sin(angle);
    const x2 = centerX + outerR * Math.cos(angle);
    const y2 = centerY + outerR * Math.sin(angle);

    const isActive = i < activeTicksCount;

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? color : '#d4d4d8'}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="flex flex-col items-center w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-auto overflow-visible">
        {ticks}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fontSize="22"
          fontWeight="600"
          fill="#18181b"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {value}%
        </text>
      </svg>

      {showLabels && (
        <div className="flex items-center justify-between w-full text-[11px] text-neutral-500 px-2 mt-1 font-medium">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}