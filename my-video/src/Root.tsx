import "./index.css";
import { Composition, Folder } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import { Title } from "./HelloWorld/Title";
import { DestinationCard } from "./Motif/DestinationCard";
import { DestinationsScene } from "./Motif/DestinationsScene";
import { HookScene } from "./Motif/HookScene";
import { JourneyScene } from "./Motif/JourneyScene";
import { JourneyStep } from "./Motif/JourneyStep";
import { MotifLogo } from "./Motif/MotifLogo";
import { OutroScene } from "./Motif/OutroScene";
import { StudyAbroad } from "./Motif/StudyAbroad";
import { TrustScene } from "./Motif/TrustScene";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MotifStudyAbroad"
        component={StudyAbroad}
        durationInFrames={600}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="Motif-Scenes">
        <Composition
          id="MotifHook"
          component={HookScene}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ backgroundColor: "#005AAB" }}
        />
        <Composition
          id="MotifDestinations"
          component={DestinationsScene}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ backgroundColor: "#EEF4FB" }}
        />
        <Composition
          id="MotifJourney"
          component={JourneyScene}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ backgroundColor: "#002F5F" }}
        />
        <Composition
          id="MotifTrust"
          component={TrustScene}
          durationInFrames={105}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ years: 19, backgroundColor: "#F6821F" }}
        />
        <Composition
          id="MotifOutro"
          component={OutroScene}
          durationInFrames={135}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ backgroundColor: "#FFFFFF" }}
        />
      </Folder>
      <Folder name="Motif-Elements">
        <Composition
          id="MotifLogo"
          component={MotifLogo}
          durationInFrames={90}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={{ blueColor: "#005AAB", orangeColor: "#F6821F" }}
        />
        <Composition
          id="MotifDestinationCard"
          component={DestinationCard}
          durationInFrames={60}
          fps={30}
          width={1080}
          height={400}
          defaultProps={{
            country: "Australia",
            code: "AU",
            accentColor: "#005AAB",
            fromRight: false,
          }}
        />
        <Composition
          id="MotifJourneyStep"
          component={JourneyStep}
          durationInFrames={60}
          fps={30}
          width={1080}
          height={400}
          defaultProps={{
            step: "1",
            title: "Career counselling",
            subtitle: "Find the right course for your goals",
          }}
        />
      </Folder>
      <Folder name="Elements">
        <Composition
          id="Logo"
          component={Logo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
          }}
        />
        <Composition
          id="Title"
          component={Title}
          durationInFrames={115}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
      </Folder>
      <Composition
        // You can take the "id" to render a video:
        // bunx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
        }}
      />

    </>
  );
};
