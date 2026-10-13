import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fonts are bundled in public/fonts so renders don't depend on network access.
loadFont({
  family: "Cormorant Garamond",
  url: staticFile("fonts/CormorantGaramond.woff2"),
  weight: "300 700",
});
loadFont({
  family: "Cormorant Garamond",
  url: staticFile("fonts/CormorantGaramond-Italic.woff2"),
  weight: "300 700",
  style: "italic",
});
loadFont({
  family: "Caveat",
  url: staticFile("fonts/Caveat.woff2"),
  weight: "400 700",
});
