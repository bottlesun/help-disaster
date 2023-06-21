import { css } from "@emotion/react";

export const globalStyle = (theme: any) => {
  return css`
    :root {
      --font-family-namum: "NanumSquare", sans-serif;
      --color-main: #2d69e9;
      --color-main-leight-dark: #275ccf;
      --color-main-dark: #142f69;
      --color-text-blue: #334469;
      --color-text: #333;
      --color-error: #b3261e;

      --font-size-lg: max(2.5rem, min(2vw, 4rem));
      --font-size-md: max(2rem, min(1.5vw, 2rem));
      --font-size-sm: max(1.5rem, min(1vw, 1.8rem));
      --font-size-xsm: max(1rem, min(0.5vw, 1.3rem));
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: var(--font-family-namum);
      font-size: 10px;
    }

    * {
      color: var(--color-text);
      box-sizing: border-box;
      letter-spacing: -0.02em;
      font-weight: 500;
      font-size: 14px;
    }

    body {
      background: #f9fbff;
    }
  `;
};
