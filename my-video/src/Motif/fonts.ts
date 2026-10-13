import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Fonts are bundled in public/fonts so renders don't depend on network access.
// Roboto Condensed is close to the "Education Abroad" lettering in the MOTIF logo.
// All three files are variable fonts covering the full weight range.
loadFont({
  family: "Roboto Condensed",
  url: staticFile("fonts/RobotoCondensed.woff2"),
  weight: "100 900",
});
loadFont({
  family: "Roboto Condensed",
  url: staticFile("fonts/RobotoCondensed-Italic.woff2"),
  weight: "100 900",
  style: "italic",
});
loadFont({
  family: "Inter",
  url: staticFile("fonts/Inter.woff2"),
  weight: "100 900",
});
