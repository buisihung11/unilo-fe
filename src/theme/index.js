import { createGlobalStyle } from "styled-components";

const theme = {};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Mali',Arial, Helvetica, sans-serif;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default theme;
