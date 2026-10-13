import type React from "react";
import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";

type LightShotProps = {
  // Which lighting setup this shot uses.
  readonly variant: "lamp" | "desk" | "window" | "rim" | "stairs" | "door";
  readonly glowColor: string;
  readonly style?: React.CSSProperties;
};

// A dark, warm "shot" lit like a room at night: a slow push-in, flickering
// practical light, film grain and a heavy vignette. Stands in for footage.
const LightShotInner: React.FC<LightShotProps> = ({
  variant,
  glowColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const flicker =
    0.92 + 0.05 * Math.sin(t * 7.3) + 0.03 * Math.sin(t * 17.1 + 1.3);

  const layers: string[] = [];
  if (variant === "lamp") {
    layers.push(
      `radial-gradient(circle at ${28 + t * 0.6}% 24%, ${glowColor} 0%, rgba(120,60,20,0.55) 22%, transparent 55%)`,
      "radial-gradient(ellipse at 60% 85%, rgba(150,90,40,0.35) 0%, transparent 50%)",
    );
  } else if (variant === "desk") {
    layers.push(
      `radial-gradient(ellipse at 55% 78%, ${glowColor} 0%, rgba(140,70,25,0.6) 25%, transparent 60%)`,
      "linear-gradient(180deg, transparent 55%, rgba(110,60,25,0.55) 70%, rgba(40,20,8,0.9) 100%)",
    );
  } else if (variant === "window") {
    layers.push(
      "linear-gradient(90deg, transparent 18%, rgba(40,140,165,0.55) 19%, rgba(40,140,165,0.55) 44%, transparent 45%, transparent 52%, rgba(40,140,165,0.55) 53%, rgba(40,140,165,0.55) 78%, transparent 79%)",
      `radial-gradient(circle at 78% 70%, ${glowColor} 0%, rgba(130,65,20,0.55) 20%, transparent 50%)`,
    );
  } else if (variant === "rim") {
    layers.push(
      `radial-gradient(ellipse at ${92 - t * 0.5}% 45%, ${glowColor} 0%, rgba(120,55,20,0.5) 18%, transparent 45%)`,
    );
  } else if (variant === "stairs") {
    layers.push(
      `repeating-linear-gradient(90deg, ${glowColor} 0px, ${glowColor} 34px, rgba(30,14,6,0.95) 34px, rgba(30,14,6,0.95) 96px)`,
    );
  } else {
    // A door slowly opening onto warm light.
    const open = interpolate(t, [0.4, 4.5], [6, 130], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    layers.push(
      `radial-gradient(ellipse at 50% 55%, rgba(255,170,80,${0.12 + open / 1200}) 0%, transparent 60%)`,
      `linear-gradient(90deg, transparent calc(50% - ${open / 2}px), ${glowColor} calc(50% - ${open / 2}px), ${glowColor} calc(50% + ${open / 2}px), transparent calc(50% + ${open / 2}px))`,
    );
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#0C0705", overflow: "hidden", ...style }}>
      <AbsoluteFill
        style={{
          backgroundImage: layers.join(", "),
          opacity: flicker,
          scale: `${1.02 + t * 0.012}`,
          filter: variant === "stairs" ? "blur(14px)" : "blur(6px)",
          maskImage:
            variant === "stairs"
              ? "linear-gradient(180deg, transparent 0%, black 15%, black 55%, transparent 80%)"
              : undefined,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.1, mixBlendMode: "screen" }}
      >
        <filter id={`grain-${variant}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
            seed={frame % 24}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${variant})`} />
      </svg>
    </AbsoluteFill>
  );
};

const lightShotSchema = {
  glowColor: {
    type: "color",
    default: "#FFB25C",
    description: "Light color",
  },
} as const satisfies InteractivitySchema;

export const LightShot = Interactive.withSchema({
  Component: LightShotInner,
  componentName: "<LightShot>",
  schema: lightShotSchema,
  wrapInSequence: true,
});
