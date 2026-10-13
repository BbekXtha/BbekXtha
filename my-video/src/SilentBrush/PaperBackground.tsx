import type React from "react";
import {
  AbsoluteFill,
  Interactive,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";

type PaperBackgroundProps = {
  readonly paperColor: string;
  readonly style?: React.CSSProperties;
};

// Warm paper with a soft vignette, fine grain and slowly drifting pigment.
const PaperBackgroundInner: React.FC<PaperBackgroundProps> = ({
  paperColor,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: paperColor, ...style }}>
      <AbsoluteFill
        style={{
          backgroundImage: [
            `radial-gradient(circle at ${30 + Math.sin(frame / 140) * 8}% ${20 + Math.cos(frame / 170) * 6}%, rgba(201,151,63,0.16), transparent 45%)`,
            `radial-gradient(circle at ${75 + Math.cos(frame / 160) * 8}% ${82 + Math.sin(frame / 120) * 5}%, rgba(75,93,140,0.12), transparent 45%)`,
            "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(80,60,40,0.18) 100%)",
          ].join(", "),
        }}
      />
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.22, mixBlendMode: "multiply" }}
      >
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
    </AbsoluteFill>
  );
};

const paperBackgroundSchema = {
  paperColor: { type: "color", default: "#F3ECDF", description: "Paper color" },
} as const satisfies InteractivitySchema;

export const PaperBackground = Interactive.withSchema({
  Component: PaperBackgroundInner,
  componentName: "<PaperBackground>",
  schema: paperBackgroundSchema,
  wrapInSequence: true,
});
