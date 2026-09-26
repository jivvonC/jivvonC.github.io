import type { ReactNode } from "react";
import type { SchematicVariant } from "@/content/site";

function Panel({
  x,
  y,
  width,
  height,
  active = false,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  active?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="12"
        fill={active ? "#f4faf7" : "#faf8f3"}
        stroke={active ? "#1c4b42" : "#cfc6b6"}
        strokeWidth={active ? 1.6 : 1}
      />
      <circle
        cx={x + 16}
        cy={y + 18}
        r="3.5"
        fill={active ? "#1c4b42" : "#b7ae9f"}
      />
      <rect
        x={x + 26}
        y={y + 15.5}
        width={Math.min(width - 44, 88)}
        height="3.5"
        rx="1.5"
        fill="#1a1814"
        opacity={active ? 0.8 : 0.5}
      />
      <rect
        x={x + 14}
        y={y + 36}
        width={width - 28}
        height="3"
        rx="1.5"
        fill="#1a1814"
        opacity="0.16"
      />
      <rect
        x={x + 14}
        y={y + 46}
        width={(width - 28) * 0.72}
        height="3"
        rx="1.5"
        fill="#1a1814"
        opacity="0.1"
      />
    </g>
  );
}

function Overview() {
  return (
    <g>
      <line x1="70" y1="760" x2="320" y2="70" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="190" y1="760" x2="320" y2="70" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="320" y1="760" x2="320" y2="70" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="450" y1="760" x2="320" y2="70" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="570" y1="760" x2="320" y2="70" stroke="#1a1814" strokeOpacity="0.07" />
      <ellipse
        cx="320"
        cy="690"
        rx="210"
        ry="28"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.12"
      />
      <path
        d="M230 600 C250 540 220 500 248 430"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.4"
      />
      <path
        d="M410 390 C450 340 430 280 488 250"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.4"
      />
      <path
        d="M210 650 C310 700 390 660 430 600"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <Panel x={48} y={560} width={190} height={108} />
      <Panel x={230} y={330} width={200} height={116} active />
      <Panel x={400} y={148} width={176} height={104} />
      <Panel x={410} y={520} width={176} height={104} />
    </g>
  );
}

function Wide() {
  return (
    <g>
      <line x1="160" y1="760" x2="640" y2="36" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="400" y1="760" x2="640" y2="36" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="640" y1="760" x2="640" y2="36" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="880" y1="760" x2="640" y2="36" stroke="#1a1814" strokeOpacity="0.07" />
      <line x1="1120" y1="760" x2="640" y2="36" stroke="#1a1814" strokeOpacity="0.07" />
      <ellipse
        cx="640"
        cy="690"
        rx="460"
        ry="34"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.12"
      />
      <path
        d="M300 530 C430 470 470 400 520 360"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.6"
      />
      <path
        d="M760 310 C880 250 940 200 990 180"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.6"
      />
      <path
        d="M320 560 C520 660 760 650 900 560"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <Panel x={70} y={470} width={250} height={136} />
      <Panel x={460} y={230} width={290} height={156} active />
      <Panel x={930} y={78} width={240} height={132} />
      <Panel x={860} y={460} width={240} height={132} />
    </g>
  );
}

function Branching() {
  return (
    <g>
      <path
        d="M320 560 C250 500 150 460 130 390"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.35"
        strokeWidth="1.3"
      />
      <path
        d="M320 560 C320 470 320 430 320 390"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.5"
      />
      <path
        d="M320 560 C400 500 500 470 510 390"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.35"
        strokeWidth="1.3"
      />
      <Panel x={48} y={250} width={164} height={100} />
      <Panel x={238} y={168} width={164} height={100} active />
      <Panel x={428} y={268} width={164} height={100} />
      <Panel x={220} y={560} width={200} height={112} />
    </g>
  );
}

function ContextLayers() {
  return (
    <g>
      <rect
        x="168"
        y="168"
        width="300"
        height="420"
        rx="28"
        fill="none"
        stroke="#1c4b42"
        strokeOpacity="0.35"
        strokeDasharray="4 6"
      />
      <Panel x={214} y={250} width={230} height={120} />
      <Panel x={196} y={300} width={230} height={120} />
      <Panel x={178} y={360} width={250} height={132} active />
      <circle cx="132" cy="300" r="5" fill="#1c4b42" />
      <circle cx="132" cy="360" r="5" fill="#b7ae9f" />
      <circle cx="132" cy="420" r="5" fill="#b7ae9f" />
      <path
        d="M137 300 H178 M137 360 H178 M137 420 H178"
        fill="none"
        stroke="#1a1814"
        strokeOpacity="0.3"
      />
    </g>
  );
}

function Comparison() {
  return (
    <g>
      <line
        x1="320"
        y1="150"
        x2="320"
        y2="660"
        stroke="#1a1814"
        strokeOpacity="0.2"
        strokeDasharray="3 6"
      />
      <Panel x={56} y={190} width={200} height={116} />
      <Panel x={56} y={430} width={200} height={116} active />
      <Panel x={384} y={230} width={200} height={116} />
      <Panel x={384} y={470} width={200} height={116} />
      <path
        d="M256 488 H384"
        fill="none"
        stroke="#1c4b42"
        strokeWidth="1.3"
      />
    </g>
  );
}

const scenes: Record<SchematicVariant, { viewBox: string; Scene: () => ReactNode }> = {
  overview: { viewBox: "0 0 640 800", Scene: Overview },
  wide: { viewBox: "0 0 1280 800", Scene: Wide },
  branching: { viewBox: "0 0 640 800", Scene: Branching },
  context: { viewBox: "0 0 640 800", Scene: ContextLayers },
  comparison: { viewBox: "0 0 640 800", Scene: Comparison },
};

export function Schematic({
  variant,
  className,
}: {
  variant: SchematicVariant;
  className?: string;
}) {
  const { viewBox, Scene } = scenes[variant];

  return (
    <svg
      viewBox={viewBox}
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`${variant}-wash`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#f7f4ee" />
          <stop offset="100%" stopColor="#e4ddd0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${variant}-wash)`} />
      <Scene />
    </svg>
  );
}
