import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";

type InkBloomProps = {
  readonly color: string;
  readonly exitMs: number;
  readonly style?: React.CSSProperties;
};

// A soft watercolor wash that blooms open, drifts, and fades away.
const InkBloomInner: React.FC<InkBloomProps> = ({ color, exitMs, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ms = (frame / fps) * 1000;

  const bloom = interpolate(ms, [0, 1800], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const exit = interpolate(ms, [exitMs, exitMs + 900], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        width: 900,
        height: 900,
        opacity: 0.5 * bloom * (1 - exit),
        scale: `${0.55 + 0.45 * bloom + ms / 60000}`,
        rotate: `${ms / 400}deg`,
        filter: "blur(36px)",
        mixBlendMode: "multiply",
        backgroundImage: [
          `radial-gradient(circle at 42% 45%, ${color} 0%, transparent 46%)`,
          `radial-gradient(circle at 62% 58%, ${color} 0%, transparent 38%)`,
          `radial-gradient(circle at 50% 30%, ${color}AA 0%, transparent 34%)`,
          `radial-gradient(circle at 30% 66%, ${color}88 0%, transparent 30%)`,
        ].join(", "),
        ...style,
      }}
    />
  );
};

const inkBloomSchema = {
  color: { type: "color", default: "#C0705F", description: "Paint color" },
  exitMs: {
    type: "number",
    default: 4000,
    min: 0,
    step: 10,
    description: "Fade-out time (ms)",
    hiddenFromList: false,
    keyframable: false,
  },
} as const satisfies InteractivitySchema;

export const InkBloom = Interactive.withSchema({
  Component: InkBloomInner,
  componentName: "<InkBloom>",
  schema: inkBloomSchema,
  wrapInSequence: true,
});
