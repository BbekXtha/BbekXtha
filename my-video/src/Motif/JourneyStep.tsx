import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type JourneyStepProps = {
  readonly step: string;
  readonly title: string;
  readonly subtitle: string;
  readonly style?: React.CSSProperties;
};

const JourneyStepInner: React.FC<JourneyStepProps> = ({
  step,
  title,
  subtitle,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        display: "flex",
        alignItems: "center",
        gap: 44,
        ...style,
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          flexShrink: 0,
          borderRadius: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6821F",
          color: "#FFFFFF",
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 60,
          boxShadow: "0 0 0 12px rgba(246, 130, 31, 0.25)",
          scale: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 11 }),
            output: "perceptual-scale",
          }),
        }}
      >
        {step}
      </div>
      <div
        style={{
          opacity: interpolate(frame, [4, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [4, 20], ["60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div
          style={{
            fontFamily: "Roboto Condensed",
            fontWeight: 700,
            fontSize: 68,
            lineHeight: 1.05,
            color: "#FFFFFF",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 8,
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.2,
            color: "rgba(255, 255, 255, 0.78)",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

const journeyStepSchema = {
  step: { type: "text-content", default: "1", description: "Step number" },
  title: { type: "text-content", default: "", description: "Title" },
  subtitle: { type: "text-content", default: "", description: "Subtitle" },
} as const satisfies InteractivitySchema;

export const JourneyStep = Interactive.withSchema({
  Component: JourneyStepInner,
  componentName: "<JourneyStep>",
  schema: journeyStepSchema,
  wrapInSequence: true,
});
