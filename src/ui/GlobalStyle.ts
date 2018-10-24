import { injectGlobal } from "emotion";
import font from "./font";
import colors from "./colors";

const GlobalStyle = injectGlobal`
  body {
    font-family: ${font.primary.family};
    font-size: ${font.primary.size};
    background-color: ${colors.paleGreyTwo};
    padding: 2%;
  }
`;

export default GlobalStyle;
