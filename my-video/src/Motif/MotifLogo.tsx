import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type MotifLogoProps = {
  readonly blueColor: string;
  readonly orangeColor: string;
  readonly style?: React.CSSProperties;
};

// The MOTIF logo rebuilt as SVG (coordinates match the 2000x2000 source artwork),
// so every letter can be animated on its own.
const MotifLogoInner: React.FC<MotifLogoProps> = ({
  blueColor,
  orangeColor,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Svg
      name="MOTIF logo"
      viewBox="380 700 1250 600"
      style={{
        width: 920,
        overflow: "visible",
        ...style,
      }}
    >
      <Interactive.Path
        name="M"
        d="M396 845 H483 L566 1088 L650 845 H735 V1176 H671 V945 L594 1176 H541 L459 945 V1176 H396 Z"
        fill={blueColor}
        style={{
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 18], ["-160px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Path
        name="Window"
        d="M797 776 L1027 722 L1035 1178 L768 1103 Z M838 812 L824 1066 L988 1110 L980 782 Z"
        fill={orangeColor}
        fillRule="evenodd"
        style={{
          transformBox: "fill-box",
          transformOrigin: "0% 100%",
          opacity: interpolate(frame, [8, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          rotate: interpolate(frame, [8, 30], ["-75deg", "0deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
          }),
        }}
      />
      <Interactive.Path
        name="T"
        d="M1055 845 H1253 V903 H1190 V1176 H1127 V903 H1055 Z"
        fill={blueColor}
        style={{
          opacity: interpolate(frame, [16, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [16, 32], ["0px -180px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
          }),
        }}
      />
      <Interactive.Path
        name="i"
        d="M1292 845 H1356 V911 L1292 891 Z M1292 923 H1356 V1176 H1292 Z"
        fill={blueColor}
        style={{
          opacity: interpolate(frame, [20, 26], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [20, 36], ["0px -180px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
          }),
        }}
      />
      <Interactive.Path
        name="F"
        d="M1405 845 H1583 V903 H1468 V979 H1583 V1036 H1468 V1176 H1405 Z"
        fill={blueColor}
        style={{
          opacity: interpolate(frame, [24, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [24, 40], ["0px -180px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
          }),
        }}
      />
      <Interactive.Text
        name="Since 2007"
        x={1299}
        y={826}
        textLength={316}
        lengthAdjust="spacingAndGlyphs"
        fill={blueColor}
        style={{
          fontFamily: "Roboto Condensed",
          fontStyle: "italic",
          fontSize: 92,
          opacity: interpolate(frame, [36, 48], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [36, 50], ["40px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Since 2007
      </Interactive.Text>
      <Interactive.Text
        name="Education Abroad"
        x={395}
        y={1276}
        textLength={645}
        lengthAdjust="spacingAndGlyphs"
        fill={blueColor}
        style={{
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 90,
          opacity: interpolate(frame, [40, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [40, 54], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Education Abroad
      </Interactive.Text>
      <Interactive.Rect
        name="Underline"
        x={1062}
        y={1252}
        width={531}
        height={24}
        fill={orangeColor}
        style={{
          transformBox: "fill-box",
          transformOrigin: "0% 50%",
          scale: interpolate(frame, [46, 64], ["0 1", "1 1"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
    </Interactive.Svg>
  );
};

const motifLogoSchema = {
  blueColor: { type: "color", default: "#005AAB", description: "Blue" },
  orangeColor: { type: "color", default: "#F6821F", description: "Orange" },
} as const satisfies InteractivitySchema;

export const MotifLogo = Interactive.withSchema({
  Component: MotifLogoInner,
  componentName: "<MotifLogo>",
  schema: motifLogoSchema,
  wrapInSequence: true,
});
