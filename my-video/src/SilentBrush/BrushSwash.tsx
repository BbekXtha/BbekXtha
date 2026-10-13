import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";

type BrushSwashProps = {
  readonly color: string;
  readonly drawMs: number;
  readonly exitMs: number;
  readonly style?: React.CSSProperties;
};

// A hand-painted flourish that is drawn on like a single brush stroke.
const BrushSwashInner: React.FC<BrushSwashProps> = ({
  color,
  drawMs,
  exitMs,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ms = (frame / fps) * 1000;

  const draw = interpolate(ms, [0, drawMs], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });
  const exit = interpolate(ms, [exitMs, exitMs + 600], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      viewBox="0 0 600 80"
      style={{
        position: "absolute",
        left: 240,
        width: 600,
        height: 80,
        overflow: "visible",
        opacity: 1 - exit,
        ...style,
      }}
    >
      <path
        d="M10 52 C 120 20, 220 70, 320 42 S 520 18, 590 36"
        fill="none"
        stroke={color}
        strokeOpacity={0.85}
        strokeWidth={10}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - draw}
      />
      <path
        d="M40 60 C 150 34, 240 74, 340 50 S 500 32, 560 44"
        fill="none"
        stroke={color}
        strokeOpacity={0.35}
        strokeWidth={5}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - draw}
      />
    </svg>
  );
};

const brushSwashSchema = {
  color: { type: "color", default: "#C0705F", description: "Paint color" },
  drawMs: {
    type: "number",
    default: 900,
    min: 0,
    step: 10,
    description: "Draw duration (ms)",
    hiddenFromList: false,
    keyframable: false,
  },
  exitMs: {
    type: "number",
    default: 3000,
    min: 0,
    step: 10,
    description: "Fade-out time (ms)",
    hiddenFromList: false,
    keyframable: false,
  },
} as const satisfies InteractivitySchema;

export const BrushSwash = Interactive.withSchema({
  Component: BrushSwashInner,
  componentName: "<BrushSwash>",
  schema: brushSwashSchema,
  wrapInSequence: true,
});
