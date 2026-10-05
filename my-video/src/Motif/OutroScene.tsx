import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { MotifLogo } from "./MotifLogo";
import "./fonts";

type OutroSceneProps = {
  readonly backgroundColor: string;
  readonly style?: React.CSSProperties;
};

const OutroSceneInner: React.FC<OutroSceneProps> = ({
  backgroundColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor, overflow: "hidden", ...style }}>
      <MotifLogo
        name="Logo"
        from={4}
        premountFor={fps}
        blueColor="#005AAB"
        orangeColor="#F6821F"
        style={{
          position: "absolute",
          left: 80,
          top: 560,
        }}
      />
      <Interactive.Div
        name="Tagline"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1150,
          textAlign: "center",
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 1.05,
          color: "#002F5F",
          opacity: interpolate(frame, [62, 74], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [62, 80], ["0px 50px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Your journey abroad starts here.
      </Interactive.Div>
      <Interactive.Div
        name="Call to action"
        style={{
          position: "absolute",
          left: 140,
          right: 140,
          top: 1440,
          padding: "36px 0px",
          borderRadius: 999,
          textAlign: "center",
          backgroundColor: "#F6821F",
          boxShadow: "0 20px 40px rgba(246, 130, 31, 0.35)",
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 64,
          color: "#FFFFFF",
          scale: interpolate(frame, [76, 92, 110, 120, 130], [0, 1, 1, 1.06, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        Book a counselling session
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const outroSceneSchema = {
  backgroundColor: {
    type: "color",
    default: "#FFFFFF",
    description: "Background",
  },
} as const satisfies InteractivitySchema;

export const OutroScene = Interactive.withSchema({
  Component: OutroSceneInner,
  componentName: "<OutroScene>",
  schema: outroSceneSchema,
  wrapInSequence: true,
});
