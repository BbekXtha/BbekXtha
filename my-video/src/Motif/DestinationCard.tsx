import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type DestinationCardProps = {
  readonly country: string;
  readonly code: string;
  readonly accentColor: string;
  readonly fromRight: boolean;
  readonly style?: React.CSSProperties;
};

const DestinationCardInner: React.FC<DestinationCardProps> = ({
  country,
  code,
  accentColor,
  fromRight,
  style,
}) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 18], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        width: 920,
        height: 170,
        display: "flex",
        alignItems: "center",
        gap: 40,
        borderRadius: 28,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 18px 40px rgba(0, 47, 95, 0.16)",
        overflow: "hidden",
        opacity: 1 - enter,
        translate: `${(fromRight ? 1 : -1) * enter * 1100}px 0px`,
        ...style,
      }}
    >
      <div
        style={{
          width: 170,
          height: 170,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: accentColor,
          color: "#FFFFFF",
          fontFamily: "Roboto Condensed",
          fontWeight: 800,
          fontSize: 72,
        }}
      >
        {code}
      </div>
      <div
        style={{
          flex: 1,
          fontFamily: "Roboto Condensed",
          fontWeight: 700,
          fontSize: 84,
          color: "#002F5F",
        }}
      >
        {country}
      </div>
      <div
        style={{
          marginRight: 48,
          fontSize: 64,
          color: accentColor,
          fontFamily: "Inter",
          fontWeight: 600,
          translate: `${interpolate(frame, [10, 30], [-40, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px 0px`,
        }}
      >
        →
      </div>
    </div>
  );
};

const destinationCardSchema = {
  country: { type: "text-content", default: "Australia", description: "Country" },
  code: { type: "text-content", default: "AU", description: "Code" },
  accentColor: {
    type: "color",
    default: "#005AAB",
    description: "Accent color",
  },
  fromRight: {
    type: "boolean",
    default: false,
    description: "Enter from the right",
    keyframable: false,
  },
} as const satisfies InteractivitySchema;

export const DestinationCard = Interactive.withSchema({
  Component: DestinationCardInner,
  componentName: "<DestinationCard>",
  schema: destinationCardSchema,
  wrapInSequence: true,
});
