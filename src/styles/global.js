import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body::-webkit-scrollbar {
    width: 11px;
  }
  body {
    scrollbar-width: thin;
    scrollbar-color: ${theme.scrollbar.foreground} ${theme.scrollbar.background};
  }
  body::-webkit-scrollbar-track {
    background: ${theme.scrollbar.background};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${theme.scrollbar.foreground};
    border-radius: 6px;
    border: 3px solid ${theme.scrollbar.background};
  }
 
  #root,
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.background.main};
    color: ${theme.font.color.text};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size};
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
