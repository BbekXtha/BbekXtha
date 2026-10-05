import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { useVideoConfig } from "remotion";
import { DestinationsScene } from "./DestinationsScene";
import { HookScene } from "./HookScene";
import { JourneyScene } from "./JourneyScene";
import { OutroScene } from "./OutroScene";
import { TrustScene } from "./TrustScene";

// 120 + 150 + 150 + 105 + 135 scene frames - 4 x 15 transition frames = 600 frames (20s at 30fps)
export const StudyAbroad = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence
        name="Hook"
        durationInFrames={120}
        premountFor={fps}
      >
        <HookScene backgroundColor="#005AAB" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence
        name="Destinations"
        durationInFrames={150}
        premountFor={fps}
      >
        <DestinationsScene backgroundColor="#EEF4FB" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence
        name="Journey"
        durationInFrames={150}
        premountFor={fps}
      >
        <JourneyScene backgroundColor="#002F5F" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence
        name="Trust"
        durationInFrames={105}
        premountFor={fps}
      >
        <TrustScene years={19} backgroundColor="#F6821F" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence
        name="Outro"
        durationInFrames={135}
        premountFor={fps}
      >
        <OutroScene backgroundColor="#FFFFFF" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
