import {css} from "@emotion/react";

export const global = (theme: any) => {
  return css`
  root {
    --color-main: #2d69e9;
    --color-main-leight-dark: #275ccf;
    --color-main-dark: #142f69;
    --color-text-blue: #334469;
    --color-text: #333;
  }
  `;
}