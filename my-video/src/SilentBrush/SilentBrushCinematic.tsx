import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Interactive,
  interpolate,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CineSubtitle } from "./CineSubtitle";
import { LightShot } from "./LightShot";

// Cinematic take on the "silent brush" voiceover, styled after the client's
// reference: dark warm shots with hard cuts and one small golden phrase at a time.
// Phrase timings come from a transcription of public/voiceover.mp3.
export const SilentBrushCinematic = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        <Series.Sequence name="Lamp" durationInFrames={120} premountFor={fps}>
          <LightShot variant="lamp" glowColor="#FFB25C" />
        </Series.Sequence>
        <Series.Sequence name="Desk" durationInFrames={102} premountFor={fps}>
          <LightShot variant="desk" glowColor="#FFC070" />
        </Series.Sequence>
        <Series.Sequence name="Window" durationInFrames={216} premountFor={fps}>
          <LightShot variant="window" glowColor="#FFA54F" />
        </Series.Sequence>
        <Series.Sequence name="Rim light" durationInFrames={156} premountFor={fps}>
          <LightShot variant="rim" glowColor="#FF9F4A" />
        </Series.Sequence>
        <Series.Sequence name="Lamp 2" durationInFrames={123} premountFor={fps}>
          <LightShot variant="lamp" glowColor="#FFB86A" />
        </Series.Sequence>
        <Series.Sequence name="Stairs" durationInFrames={153} premountFor={fps}>
          <LightShot variant="stairs" glowColor="#FFC67A" />
        </Series.Sequence>
        <Series.Sequence name="Door" durationInFrames={295} premountFor={fps}>
          <LightShot variant="door" glowColor="#B9773F" />
        </Series.Sequence>
      </Series>
      <CineSubtitle
        name="Hello, Aakriti..."
        from={17}
        durationInFrames={47}
        premountFor={fps}
        exitMs={1223}
        style={{ top: 930 }}
      >
        Hello, Aakriti...
      </CineSubtitle>
      <CineSubtitle
        name="Here's Something About You..."
        from={63}
        durationInFrames={59}
        premountFor={fps}
        exitMs={1610}
        style={{ top: 930 }}
      >
        Here's Something About You...
      </CineSubtitle>
      <CineSubtitle
        name="I Want To Paint The Things I Cannot Put Into Words..."
        from={120}
        durationInFrames={103}
        premountFor={fps}
        exitMs={3070}
        style={{ top: 1200 }}
      >
        I Want To Paint The Things I Cannot Put Into Words...
      </CineSubtitle>
      <CineSubtitle
        name="I Want To Turn Little Moments Into Art..."
        from={221}
        durationInFrames={81}
        premountFor={fps}
        exitMs={2343}
        style={{ top: 480 }}
      >
        I Want To Turn Little Moments Into Art...
      </CineSubtitle>
      <CineSubtitle
        name="Fleeting Thoughts Into Poetry..."
        from={300}
        durationInFrames={67}
        premountFor={fps}
        exitMs={1870}
        style={{ top: 480 }}
      >
        Fleeting Thoughts Into Poetry...
      </CineSubtitle>
      <CineSubtitle
        name="And Ordinary Days Into Stories..."
        from={365}
        durationInFrames={76}
        premountFor={fps}
        exitMs={2183}
        style={{ top: 480 }}
      >
        And Ordinary Days Into Stories...
      </CineSubtitle>
      <CineSubtitle
        name="I Want To Explore, Create..."
        from={439}
        durationInFrames={60}
        premountFor={fps}
        exitMs={1637}
        style={{ top: 930 }}
      >
        I Want To Explore, Create...
      </CineSubtitle>
      <CineSubtitle
        name="And Collect Pieces Of Life..."
        from={497}
        durationInFrames={47}
        premountFor={fps}
        exitMs={1223}
        style={{ top: 930 }}
      >
        And Collect Pieces Of Life...
      </CineSubtitle>
      <CineSubtitle
        name="Through My Own Eyes..."
        from={543}
        durationInFrames={54}
        premountFor={fps}
        exitMs={1450}
        style={{ top: 930 }}
      >
        Through My Own Eyes...
      </CineSubtitle>
      <CineSubtitle
        name="Maybe I'm Not Just One Thing..."
        from={596}
        durationInFrames={61}
        premountFor={fps}
        exitMs={1683}
        style={{ top: 1200 }}
      >
        Maybe I'm Not Just One Thing...
      </CineSubtitle>
      <CineSubtitle
        name="Maybe I'm A Little Bit Of Everything..."
        from={656}
        durationInFrames={61}
        premountFor={fps}
        exitMs={1683}
        style={{ top: 1200 }}
      >
        Maybe I'm A Little Bit Of Everything...
      </CineSubtitle>
      <CineSubtitle
        name="Still Becoming..."
        from={716}
        durationInFrames={32}
        premountFor={fps}
        exitMs={723}
        style={{ top: 480 }}
      >
        Still Becoming...
      </CineSubtitle>
      <CineSubtitle
        name="Still Creating..."
        from={747}
        durationInFrames={40}
        premountFor={fps}
        exitMs={970}
        style={{ top: 480 }}
      >
        Still Creating...
      </CineSubtitle>
      <CineSubtitle
        name="Still Finding Myself..."
        from={785}
        durationInFrames={38}
        premountFor={fps}
        exitMs={903}
        style={{ top: 480 }}
      >
        Still Finding Myself...
      </CineSubtitle>
      <CineSubtitle
        name="In The Things I Make..."
        from={821}
        durationInFrames={52}
        premountFor={fps}
        exitMs={1383}
        style={{ top: 480 }}
      >
        In The Things I Make...
      </CineSubtitle>
      <CineSubtitle
        name="This Is The Silent Brush..."
        from={871}
        durationInFrames={60}
        premountFor={fps}
        exitMs={1637}
        style={{ top: 930 }}
      >
        This Is The Silent Brush...
      </CineSubtitle>
      <CineSubtitle
        name="A Little Piece Of Me..."
        from={929}
        durationInFrames={42}
        premountFor={fps}
        exitMs={1063}
        style={{ top: 930 }}
      >
        A Little Piece Of Me...
      </CineSubtitle>
      <CineSubtitle
        name="Quietly Unfolding..."
        from={970}
        durationInFrames={97}
        premountFor={fps}
        exitMs={2867}
        style={{ top: 930 }}
      >
        Quietly Unfolding...
      </CineSubtitle>
      <Interactive.Div
        name="Fade to black"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          opacity: interpolate(frame, [1065, 1110], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Audio name="Voiceover" src={staticFile("voiceover.mp3")} premountFor={fps} />
    </AbsoluteFill>
  );
};
