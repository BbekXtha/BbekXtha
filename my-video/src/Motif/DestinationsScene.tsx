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
import { DestinationCard } from "./DestinationCard";
import "./fonts";

type DestinationsSceneProps = {
  readonly backgroundColor: string;
  readonly style?: React.CSSProperties;
};

const DestinationsSceneInner: React.FC<DestinationsSceneProps> = ({
  backgroundColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor, overflow: "hidden", ...style }}>
      <Interactive.Div
        name="Accent bar"
        style={{
          position: "absolute",
          left: 80,
          top: 250,
          width: 160,
          height: 16,
          borderRadius: 8,
          backgroundColor: "#F6821F",
          transformOrigin: "0% 50%",
          scale: interpolate(frame, [0, 16], ["0 1", "1 1"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Headline"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 300,
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 120,
          lineHeight: 1.02,
          color: "#005AAB",
          opacity: interpolate(frame, [4, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [4, 22], ["0px 60px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Where will your degree take you?
      </Interactive.Div>
      <DestinationCard
        name="Australia"
        from={20}
        premountFor={fps}
        country="Australia"
        code="AU"
        accentColor="#005AAB"
        fromRight={false}
        style={{ top: 700 }}
      />
      <DestinationCard
        name="United Kingdom"
        from={30}
        premountFor={fps}
        country="United Kingdom"
        code="UK"
        accentColor="#F6821F"
        fromRight
        style={{ top: 900 }}
      />
      <DestinationCard
        name="USA"
        from={40}
        premountFor={fps}
        country="USA"
        code="US"
        accentColor="#005AAB"
        fromRight={false}
        style={{ top: 1100 }}
      />
      <DestinationCard
        name="Canada"
        from={50}
        premountFor={fps}
        country="Canada"
        code="CA"
        accentColor="#F6821F"
        fromRight
        style={{ top: 1300 }}
      />
      <DestinationCard
        name="Japan"
        from={60}
        premountFor={fps}
        country="Japan"
        code="JP"
        accentColor="#005AAB"
        fromRight={false}
        style={{ top: 1500 }}
      />
    </AbsoluteFill>
  );
};

const destinationsSceneSchema = {
  backgroundColor: {
    type: "color",
    default: "#EEF4FB",
    description: "Background",
  },
} as const satisfies InteractivitySchema;

export const DestinationsScene = Interactive.withSchema({
  Component: DestinationsSceneInner,
  componentName: "<DestinationsScene>",
  schema: destinationsSceneSchema,
  wrapInSequence: true,
});
