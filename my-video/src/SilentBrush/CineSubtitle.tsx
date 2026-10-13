import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type CineSubtitleProps = {
  readonly children: string;
  // When the line fades out, relative to this element's `from`.
  readonly exitMs: number;
  readonly style?: React.CSSProperties;
};

// Small golden serif line, in the style of the reference: one short phrase at a time.
const CineSubtitleInner: React.FC<CineSubtitleProps> = ({
  children,
  exitMs,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ms = (frame / fps) * 1000;

  const enter = interpolate(ms, [0, 380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const exit = interpolate(ms, [exitMs, exitMs + 320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 1, 1),
  });
  const visible = enter * (1 - exit);

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        textAlign: "center",
        fontFamily: "Merriweather",
        fontWeight: 400,
        fontSize: 46,
        lineHeight: 1.3,
        color: "#FFD56A",
        textShadow:
          "0 0 18px rgba(255, 190, 80, 0.3), 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 28px rgba(0, 0, 0, 0.7)",
        opacity: visible,
        filter: `blur(${(1 - visible) * 6}px)`,
        translate: `0px ${(1 - enter) * 10}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const cineSubtitleSchema = {
  children: { type: "text-content", default: "", description: "Text" },
  exitMs: {
    type: "number",
    default: 1500,
    min: 0,
    step: 10,
    description: "Exit time (ms)",
    hiddenFromList: false,
    keyframable: false,
  },
  ...Interactive.textSchema,
} as const satisfies InteractivitySchema;

export const CineSubtitle = Interactive.withSchema({
  Component: CineSubtitleInner,
  componentName: "<CineSubtitle>",
  schema: cineSubtitleSchema,
  wrapInSequence: true,
});
