import { Audio } from "@remotion/media";
import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { BrushSwash } from "./BrushSwash";
import { InkBloom } from "./InkBloom";
import { PaperBackground } from "./PaperBackground";
import { StoryText } from "./StoryText";

// Text-led story edit for the "silent brush" voiceover (38.8s).
// Word timings come from a transcription of public/voiceover.mp3 and are
// relative to each line's `from`; the wording follows the client's subtitles.
export const SilentBrush = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <PaperBackground name="Paper" paperColor="#F3ECDF" />
      <InkBloom
        name="Rose bloom"
        from={0}
        premountFor={fps}
        color="#C0705F"
        exitMs={3750}
        style={{ left: -180, top: 300 }}
      />
      <InkBloom
        name="Indigo bloom"
        from={114}
        premountFor={fps}
        color="#4B5D8C"
        exitMs={3350}
        style={{ left: 320, top: 900 }}
      />
      <InkBloom
        name="Ochre bloom"
        from={216}
        premountFor={fps}
        color="#B8862F"
        exitMs={7150}
        style={{ left: -260, top: 1000 }}
      />
      <InkBloom
        name="Sage bloom"
        from={432}
        premountFor={fps}
        color="#6F8F72"
        exitMs={5150}
        style={{ left: 380, top: 300 }}
      />
      <InkBloom
        name="Rose bloom 2"
        from={588}
        premountFor={fps}
        color="#C0705F"
        exitMs={4100}
        style={{ left: -300, top: 1100 }}
      />
      <InkBloom
        name="Indigo bloom 2"
        from={712}
        premountFor={fps}
        color="#4B5D8C"
        exitMs={5100}
        style={{ left: 360, top: 1000 }}
      />
      <InkBloom
        name="Rose bloom 3"
        from={867}
        premountFor={fps}
        color="#C0705F"
        exitMs={8700}
        style={{ left: 90, top: 560 }}
      />
      <StoryText
        name="Hello"
        from={10}
        premountFor={fps}
        accentWords=""
        accentColor="#C0705F"
        exitMs={3417}
        style={{ top: 720, fontSize: 120 }}
        captions={[
          { text: "Hello,", startMs: 387, endMs: 867, timestampMs: 387, confidence: null },
        ]}
      />
      <StoryText
        name="Aakriti"
        from={24}
        premountFor={fps}
        accentWords="Aakriti."
        accentColor="#C0705F"
        exitMs={2950}
        style={{ top: 860, fontSize: 250, fontFamily: "Caveat", fontStyle: "normal", lineHeight: 1 }}
        captions={[
          { text: "Aakriti.", startMs: 400, endMs: 1440, timestampMs: 400, confidence: null },
        ]}
      />
      <StoryText
        name="Something about you"
        from={55}
        premountFor={fps}
        accentWords=""
        accentColor="#C0705F"
        exitMs={1917}
        style={{ top: 1260, fontSize: 76, fontStyle: "italic" }}
        captions={[
          { text: "Here's", startMs: 407, endMs: 807, timestampMs: 407, confidence: null },
          { text: " something", startMs: 807, endMs: 1127, timestampMs: 807, confidence: null },
          { text: " about", startMs: 1127, endMs: 1447, timestampMs: 1127, confidence: null },
          { text: " you.", startMs: 1447, endMs: 2327, timestampMs: 1447, confidence: null },
        ]}
      />
      <StoryText
        name="Paint"
        from={113}
        premountFor={fps}
        accentWords="paint|words."
        accentColor="#C0705F"
        exitMs={3383}
        style={{ top: 820, fontSize: 112 }}
        captions={[
          { text: "I", startMs: 393, endMs: 553, timestampMs: 393, confidence: null },
          { text: " want", startMs: 553, endMs: 713, timestampMs: 553, confidence: null },
          { text: " to", startMs: 713, endMs: 873, timestampMs: 713, confidence: null },
          { text: " paint", startMs: 873, endMs: 1273, timestampMs: 873, confidence: null },
          { text: " the", startMs: 1273, endMs: 1433, timestampMs: 1273, confidence: null },
          { text: " things", startMs: 1433, endMs: 1753, timestampMs: 1433, confidence: null },
          { text: " I", startMs: 1753, endMs: 1913, timestampMs: 1753, confidence: null },
          { text: " cannot", startMs: 1913, endMs: 2393, timestampMs: 1913, confidence: null },
          { text: " put", startMs: 2393, endMs: 2633, timestampMs: 2393, confidence: null },
          { text: " into", startMs: 2633, endMs: 2873, timestampMs: 2633, confidence: null },
          { text: " words.", startMs: 2873, endMs: 3753, timestampMs: 2873, confidence: null },
        ]}
      />
      <StoryText
        name="Moments into art"
        from={214}
        premountFor={fps}
        accentWords="art,"
        accentColor="#C0705F"
        exitMs={7217}
        style={{ top: 620, fontSize: 92 }}
        captions={[
          { text: "I", startMs: 387, endMs: 547, timestampMs: 387, confidence: null },
          { text: " want", startMs: 547, endMs: 707, timestampMs: 547, confidence: null },
          { text: " to", startMs: 707, endMs: 867, timestampMs: 707, confidence: null },
          { text: " turn", startMs: 867, endMs: 1187, timestampMs: 867, confidence: null },
          { text: " little", startMs: 1187, endMs: 1427, timestampMs: 1187, confidence: null },
          { text: " moments", startMs: 1427, endMs: 1987, timestampMs: 1427, confidence: null },
          { text: " into", startMs: 1987, endMs: 2227, timestampMs: 1987, confidence: null },
          { text: " art,", startMs: 2227, endMs: 3027, timestampMs: 2227, confidence: null },
        ]}
      />
      <StoryText
        name="Thoughts into poetry"
        from={293}
        premountFor={fps}
        accentWords="poetry,"
        accentColor="#4B5D8C"
        exitMs={4583}
        style={{ top: 960, fontSize: 92 }}
        captions={[
          { text: "fleeting", startMs: 393, endMs: 1033, timestampMs: 393, confidence: null },
          { text: " thoughts", startMs: 1033, endMs: 1353, timestampMs: 1033, confidence: null },
          { text: " into", startMs: 1353, endMs: 1593, timestampMs: 1353, confidence: null },
          { text: " poetry,", startMs: 1593, endMs: 2553, timestampMs: 1593, confidence: null },
        ]}
      />
      <StoryText
        name="Days into stories"
        from={358}
        premountFor={fps}
        accentWords="stories."
        accentColor="#B8862F"
        exitMs={2417}
        style={{ top: 1300, fontSize: 92 }}
        captions={[
          { text: "and", startMs: 387, endMs: 547, timestampMs: 387, confidence: null },
          { text: " ordinary", startMs: 547, endMs: 1107, timestampMs: 547, confidence: null },
          { text: " days", startMs: 1107, endMs: 1507, timestampMs: 1107, confidence: null },
          { text: " into", startMs: 1507, endMs: 1747, timestampMs: 1507, confidence: null },
          { text: " stories.", startMs: 1747, endMs: 2867, timestampMs: 1747, confidence: null },
        ]}
      />
      <StoryText
        name="Explore"
        from={432}
        premountFor={fps}
        accentWords="explore,"
        accentColor="#6F8F72"
        exitMs={5150}
        style={{ top: 680, fontSize: 116 }}
        captions={[
          { text: "I", startMs: 400, endMs: 560, timestampMs: 400, confidence: null },
          { text: " want", startMs: 560, endMs: 720, timestampMs: 560, confidence: null },
          { text: " to", startMs: 720, endMs: 880, timestampMs: 720, confidence: null },
          { text: " explore,", startMs: 880, endMs: 1760, timestampMs: 880, confidence: null },
        ]}
      />
      <StoryText
        name="Create"
        from={473}
        premountFor={fps}
        accentWords="create,"
        accentColor="#C0705F"
        exitMs={3783}
        style={{ top: 840, fontSize: 220, lineHeight: 1 }}
        captions={[
          { text: "create,", startMs: 393, endMs: 953, timestampMs: 393, confidence: null },
        ]}
      />
      <StoryText
        name="Collect"
        from={490}
        premountFor={fps}
        accentWords="eyes."
        accentColor="#4B5D8C"
        exitMs={3217}
        style={{ top: 1140, fontSize: 84 }}
        captions={[
          { text: "and", startMs: 387, endMs: 627, timestampMs: 387, confidence: null },
          { text: " collect", startMs: 627, endMs: 1027, timestampMs: 627, confidence: null },
          { text: " pieces", startMs: 1027, endMs: 1427, timestampMs: 1027, confidence: null },
          { text: " of", startMs: 1427, endMs: 1667, timestampMs: 1427, confidence: null },
          { text: " life", startMs: 1667, endMs: 1907, timestampMs: 1667, confidence: null },
          { text: " through", startMs: 1907, endMs: 2147, timestampMs: 1907, confidence: null },
          { text: " my", startMs: 2147, endMs: 2387, timestampMs: 2147, confidence: null },
          { text: " own", startMs: 2387, endMs: 2627, timestampMs: 2387, confidence: null },
          { text: " eyes.", startMs: 2627, endMs: 3667, timestampMs: 2627, confidence: null },
        ]}
      />
      <StoryText
        name="One thing"
        from={588}
        premountFor={fps}
        accentWords="one"
        accentColor="#B8862F"
        exitMs={4100}
        style={{ top: 760, fontSize: 108 }}
        captions={[
          { text: "Maybe", startMs: 400, endMs: 720, timestampMs: 400, confidence: null },
          { text: " I'm", startMs: 720, endMs: 1040, timestampMs: 720, confidence: null },
          { text: " not", startMs: 1040, endMs: 1200, timestampMs: 1040, confidence: null },
          { text: " just", startMs: 1200, endMs: 1520, timestampMs: 1200, confidence: null },
          { text: " one", startMs: 1520, endMs: 1760, timestampMs: 1520, confidence: null },
          { text: " thing.", startMs: 1760, endMs: 2400, timestampMs: 1760, confidence: null },
        ]}
      />
      <StoryText
        name="Everything"
        from={648}
        premountFor={fps}
        accentWords="everything,"
        accentColor="#C0705F"
        exitMs={2100}
        style={{ top: 1080, fontSize: 108 }}
        captions={[
          { text: "Maybe", startMs: 400, endMs: 720, timestampMs: 400, confidence: null },
          { text: " I'm", startMs: 720, endMs: 960, timestampMs: 720, confidence: null },
          { text: " a", startMs: 960, endMs: 1120, timestampMs: 960, confidence: null },
          { text: " little", startMs: 1120, endMs: 1280, timestampMs: 1120, confidence: null },
          { text: " bit", startMs: 1280, endMs: 1440, timestampMs: 1280, confidence: null },
          { text: " of", startMs: 1440, endMs: 1760, timestampMs: 1440, confidence: null },
          { text: " everything,", startMs: 1760, endMs: 2400, timestampMs: 1760, confidence: null },
        ]}
      />
      <StoryText
        name="Becoming"
        from={708}
        premountFor={fps}
        accentWords="becoming,"
        accentColor="#6F8F72"
        exitMs={5250}
        style={{ top: 640, fontSize: 112 }}
        captions={[
          { text: "still", startMs: 400, endMs: 720, timestampMs: 400, confidence: null },
          { text: " becoming,", startMs: 720, endMs: 1440, timestampMs: 720, confidence: null },
        ]}
      />
      <StoryText
        name="Creating"
        from={739}
        premountFor={fps}
        accentWords="creating,"
        accentColor="#C0705F"
        exitMs={4217}
        style={{ top: 820, fontSize: 112 }}
        captions={[
          { text: "still", startMs: 407, endMs: 727, timestampMs: 407, confidence: null },
          { text: " creating,", startMs: 727, endMs: 1687, timestampMs: 727, confidence: null },
        ]}
      />
      <StoryText
        name="Finding myself"
        from={778}
        premountFor={fps}
        accentWords="myself"
        accentColor="#4B5D8C"
        exitMs={2917}
        style={{ top: 1040, fontSize: 92 }}
        captions={[
          { text: "still", startMs: 387, endMs: 707, timestampMs: 387, confidence: null },
          { text: " finding", startMs: 707, endMs: 1107, timestampMs: 707, confidence: null },
          { text: " myself", startMs: 1107, endMs: 1587, timestampMs: 1107, confidence: null },
          { text: " in", startMs: 1587, endMs: 1747, timestampMs: 1587, confidence: null },
          { text: " the", startMs: 1747, endMs: 1907, timestampMs: 1747, confidence: null },
          { text: " things", startMs: 1907, endMs: 2147, timestampMs: 1907, confidence: null },
          { text: " I", startMs: 2147, endMs: 2467, timestampMs: 2147, confidence: null },
          { text: " make.", startMs: 2467, endMs: 3267, timestampMs: 2467, confidence: null },
        ]}
      />
      <StoryText
        name="Silent brush"
        from={864}
        premountFor={fps}
        accentWords="silent|brush,"
        accentColor="#C0705F"
        exitMs={9100}
        style={{ top: 840, fontSize: 124 }}
        captions={[
          { text: "This", startMs: 400, endMs: 640, timestampMs: 400, confidence: null },
          { text: " is", startMs: 640, endMs: 880, timestampMs: 640, confidence: null },
          { text: " the", startMs: 880, endMs: 1120, timestampMs: 880, confidence: null },
          { text: " silent", startMs: 1120, endMs: 1600, timestampMs: 1120, confidence: null },
          { text: " brush,", startMs: 1600, endMs: 2320, timestampMs: 1600, confidence: null },
        ]}
      />
      <StoryText
        name="Quietly unfolding"
        from={922}
        premountFor={fps}
        accentWords="unfolding."
        accentColor="#B8862F"
        exitMs={4667}
        style={{ top: 1180, fontSize: 84 }}
        captions={[
          { text: "a", startMs: 387, endMs: 547, timestampMs: 387, confidence: null },
          { text: " little", startMs: 547, endMs: 787, timestampMs: 547, confidence: null },
          { text: " piece", startMs: 787, endMs: 1187, timestampMs: 787, confidence: null },
          { text: " of", startMs: 1187, endMs: 1347, timestampMs: 1187, confidence: null },
          { text: " me", startMs: 1347, endMs: 1747, timestampMs: 1347, confidence: null },
          { text: " quietly", startMs: 1747, endMs: 2387, timestampMs: 1747, confidence: null },
          { text: " unfolding.", startMs: 2387, endMs: 2887, timestampMs: 2387, confidence: null },
        ]}
      />
      <BrushSwash
        name="Name swash"
        from={30}
        premountFor={fps}
        color="#C0705F"
        drawMs={900}
        exitMs={2350}
        style={{ top: 1130 }}
      />
      <BrushSwash
        name="Title swash"
        from={1065}
        premountFor={fps}
        color="#C0705F"
        drawMs={1200}
        exitMs={2300}
        style={{ top: 1120 }}
      />
      <Audio name="Voiceover" src={staticFile("voiceover.mp3")} premountFor={fps} />
    </AbsoluteFill>
  );
};
