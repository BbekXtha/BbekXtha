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

type TrustSceneProps = {
  readonly years: number;
  readonly backgroundColor: string;
  readonly style?: React.CSSProperties;
};

const TrustSceneInner: React.FC<TrustSceneProps> = ({
  years,
  backgroundColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const counted = Math.round(
    interpolate(frame, [6, 50], [0, years], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }),
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        alignItems: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      <Interactive.Div
        name="Ring"
        style={{
          position: "absolute",
          left: 90,
          top: 460,
          width: 900,
          height: 900,
          borderRadius: 450,
          border: "16px solid rgba(255, 255, 255, 0.25)",
          scale: interpolate(frame, [0, 30], [0.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
          rotate: interpolate(frame, [0, 105], ["0deg", "40deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div
        name="Lead-in"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 340,
          textAlign: "center",
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 84,
          color: "#FFFFFF",
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Trusted by students for
      </Interactive.Div>
      <Interactive.Div
        name="Counter"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 560,
          textAlign: "center",
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 520,
          lineHeight: 1,
          color: "#FFFFFF",
          fontVariantNumeric: "tabular-nums",
          scale: interpolate(frame, [0, 20], [0.7, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
        }}
      >
        {counted}
      </Interactive.Div>
      <Interactive.Div
        name="Years label"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1100,
          textAlign: "center",
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 140,
          lineHeight: 1,
          color: "#FFFFFF",
          opacity: interpolate(frame, [20, 32], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        YEARS
      </Interactive.Div>
      <Interactive.Div
        name="Since"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1420,
          textAlign: "center",
          fontFamily: "Roboto Condensed",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 110,
          color: "#002F5F",
          opacity: interpolate(frame, [40, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [40, 58], ["0px 50px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Since 2007
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const trustSceneSchema = {
  years: {
    type: "number",
    default: 19,
    min: 1,
    integer: true,
    description: "Years of experience",
    hiddenFromList: false,
    keyframable: false,
  },
  backgroundColor: {
    type: "color",
    default: "#F6821F",
    description: "Background",
  },
} as const satisfies InteractivitySchema;

export const TrustScene = Interactive.withSchema({
  Component: TrustSceneInner,
  componentName: "<TrustScene>",
  schema: trustSceneSchema,
  wrapInSequence: true,
});
