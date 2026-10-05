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
import { JourneyStep } from "./JourneyStep";
import "./fonts";

type JourneySceneProps = {
  readonly backgroundColor: string;
  readonly style?: React.CSSProperties;
};

const JourneySceneInner: React.FC<JourneySceneProps> = ({
  backgroundColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        backgroundImage:
          "linear-gradient(180deg, rgba(0,90,171,0) 0%, rgba(0,90,171,0.9) 100%)",
        overflow: "hidden",
        ...style,
      }}
    >
      <Interactive.Div
        name="Headline"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 220,
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 130,
          lineHeight: 1,
          color: "#FFFFFF",
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 18], ["0px 60px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        We guide you
      </Interactive.Div>
      <Interactive.Div
        name="Subheadline"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 360,
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 84,
          color: "#F6821F",
          opacity: interpolate(frame, [8, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [8, 26], ["0px 60px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        every step of the way
      </Interactive.Div>
      <Interactive.Div
        name="Path line"
        style={{
          position: "absolute",
          left: 136,
          top: 620,
          width: 8,
          height: 960,
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          transformOrigin: "50% 0%",
          scale: interpolate(frame, [14, 110], ["1 0", "1 1"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.45, 0, 0.55, 1),
          }),
        }}
      />
      <JourneyStep
        name="Step 1"
        from={16}
        premountFor={fps}
        step="1"
        title="Career counselling"
        subtitle="Find the right course for your goals"
        style={{ top: 560 }}
      />
      <JourneyStep
        name="Step 2"
        from={36}
        premountFor={fps}
        step="2"
        title="University selection"
        subtitle="Shortlist the best fit for you"
        style={{ top: 800 }}
      />
      <JourneyStep
        name="Step 3"
        from={56}
        premountFor={fps}
        step="3"
        title="Test preparation"
        subtitle="IELTS & PTE classes"
        style={{ top: 1040 }}
      />
      <JourneyStep
        name="Step 4"
        from={76}
        premountFor={fps}
        step="4"
        title="Applications"
        subtitle="Documents done right"
        style={{ top: 1280 }}
      />
      <JourneyStep
        name="Step 5"
        from={96}
        premountFor={fps}
        step="5"
        title="Visa & departure"
        subtitle="Fly with confidence"
        style={{ top: 1520 }}
      />
    </AbsoluteFill>
  );
};

const journeySceneSchema = {
  backgroundColor: {
    type: "color",
    default: "#002F5F",
    description: "Background",
  },
} as const satisfies InteractivitySchema;

export const JourneyScene = Interactive.withSchema({
  Component: JourneySceneInner,
  componentName: "<JourneyScene>",
  schema: journeySceneSchema,
  wrapInSequence: true,
});
