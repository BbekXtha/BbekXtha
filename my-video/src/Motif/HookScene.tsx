import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type HookSceneProps = {
  readonly backgroundColor: string;
  readonly style?: React.CSSProperties;
};

const HookSceneInner: React.FC<HookSceneProps> = ({
  backgroundColor,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        backgroundImage:
          "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18), rgba(0,0,0,0) 60%)",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* The orange "window" from the logo, opening onto the world */}
      <Interactive.Svg
        name="Window"
        viewBox="0 0 267 456"
        style={{
          position: "absolute",
          left: 330,
          top: 200,
          width: 420,
          overflow: "visible",
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 24, 120], [0.2, 1, 1.12], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
          rotate: interpolate(frame, [0, 24, 120], ["-30deg", "0deg", "4deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Path
          name="Window frame"
          d="M29 54 L259 0 L267 456 L0 381 Z M70 90 L56 344 L220 388 L212 60 Z"
          fill="#F6821F"
          fillRule="evenodd"
        />
      </Interactive.Svg>
      <Interactive.Svg
        name="Plane"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          left: 0,
          top: 520,
          width: 150,
          translate: interpolate(frame, [10, 70], ["-200px 160px", "1200px -300px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.45, 0, 0.55, 1),
          }),
          rotate: "70deg",
        }}
      >
        <Interactive.Path
          name="Plane shape"
          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
          fill="#FFFFFF"
        />
      </Interactive.Svg>
      <Interactive.Div
        name="Kicker"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1010,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: 44,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.8)",
          opacity: interpolate(frame, [14, 26], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        MOTIF Education Abroad
      </Interactive.Div>
      <Interactive.Div
        name="Line 1"
        style={{
          position: "absolute",
          left: 80,
          top: 1090,
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 140,
          lineHeight: 1,
          color: "#FFFFFF",
          opacity: interpolate(frame, [18, 28], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [18, 34], ["0px 80px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Dream of
      </Interactive.Div>
      <Interactive.Div
        name="Line 2"
        style={{
          position: "absolute",
          left: 80,
          top: 1240,
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 140,
          lineHeight: 1,
          color: "#FFFFFF",
          opacity: interpolate(frame, [26, 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [26, 42], ["0px 80px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        studying
      </Interactive.Div>
      <Interactive.Div
        name="Line 3"
        style={{
          position: "absolute",
          left: 80,
          top: 1390,
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 230,
          lineHeight: 1,
          color: "#F6821F",
          opacity: interpolate(frame, [34, 42], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [34, 54], [1.4, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          transformOrigin: "0% 50%",
        }}
      >
        ABROAD?
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const hookSceneSchema = {
  backgroundColor: {
    type: "color",
    default: "#005AAB",
    description: "Background",
  },
} as const satisfies InteractivitySchema;

export const HookScene = Interactive.withSchema({
  Component: HookSceneInner,
  componentName: "<HookScene>",
  schema: hookSceneSchema,
  wrapInSequence: true,
});
