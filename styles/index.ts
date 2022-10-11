import { css } from "@emotion/react";
export { resetcss } from "./reset-css";

export const body = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 16px;
    font-family: var(--primaryFont);
    line-height: 1.2;
    background-color: var(--backgroundcolor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
