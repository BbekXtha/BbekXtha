import type { Caption } from "@remotion/captions";
import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import "./fonts";

type StoryTextProps = {
  // Word timings are relative to this element's `from`.
  readonly captions: Caption[];
  // Words (as spoken, punctuation included) that get the accent color and a brush stroke.
  readonly accentWords: string;
  readonly accentColor: string;
  // When the whole line leaves, relative to this element's `from`.
  readonly exitMs: number;
  readonly style?: React.CSSProperties;
};

const WORD_IN_MS = 520;
const EXIT_MS = 600;

const StoryTextInner: React.FC<StoryTextProps> = ({
  captions,
  accentWords,
  accentColor,
  exitMs,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ms = (frame / fps) * 1000;
  const accents = accentWords
    .split("|")
    .map((w) => w.trim())
    .filter(Boolean);

  const exit = interpolate(ms, [exitMs, exitMs + EXIT_MS], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 90,
        right: 90,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: "0.24em",
        fontFamily: "Cormorant Garamond",
        fontWeight: 500,
        fontSize: 96,
        lineHeight: 1.12,
        color: "#2E2925",
        textAlign: "center",
        opacity: 1 - exit,
        translate: `0px ${-30 * exit}px`,
        filter: `blur(${exit * 8}px)`,
        ...style,
      }}
    >
      {captions.map((caption, i) => {
        const word = caption.text.trim();
        const isAccent = accents.includes(word);
        // Start the fade slightly before the word is spoken so it lands on the voice.
        const t = interpolate(
          ms,
          [caption.startMs - 140, caption.startMs - 140 + WORD_IN_MS],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        );
        const stroke = interpolate(
          ms,
          [caption.startMs + 120, caption.startMs + 820],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          },
        );

        return (
          <span
            key={i}
            style={{
              position: "relative",
              display: "inline-block",
              opacity: t,
              translate: `0px ${(1 - t) * 26}px`,
              filter: `blur(${(1 - t) * 10}px)`,
              color: isAccent ? accentColor : undefined,
              fontStyle: isAccent ? "italic" : undefined,
              fontWeight: isAccent ? 600 : undefined,
            }}
          >
            {isAccent ? (
              <svg
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  left: "-6%",
                  width: "112%",
                  bottom: "0.02em",
                  height: "0.32em",
                  overflow: "visible",
                  opacity: 0.38,
                }}
              >
                <path
                  d="M3 13 C 22 6, 46 16, 66 9 S 92 7, 97 10"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth={7}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1 - stroke}
                />
              </svg>
            ) : null}
            <span style={{ position: "relative" }}>{word}</span>
          </span>
        );
      })}
    </div>
  );
};

const storyTextSchema = {
  ...Interactive.captionsSchema,
  accentWords: {
    type: "text-content",
    default: "",
    description: "Accent words (separate with |)",
  },
  accentColor: {
    type: "color",
    default: "#C0705F",
    description: "Accent color",
  },
  exitMs: {
    type: "number",
    default: 3000,
    min: 0,
    step: 10,
    description: "Exit time (ms)",
    hiddenFromList: false,
    keyframable: false,
  },
  ...Interactive.textSchema,
} as const satisfies InteractivitySchema;

export const StoryText = Interactive.withSchema({
  Component: StoryTextInner,
  componentName: "<StoryText>",
  schema: storyTextSchema,
  wrapInSequence: true,
});
