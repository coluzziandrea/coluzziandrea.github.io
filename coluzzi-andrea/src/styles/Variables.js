import { css } from "styled-components";

const variables = css`
  :root {
    --font-sans: "Ubuntu", system-ui, sans-serif;
    --font-mono: "JetBrains", monospace;

    --teal-100: #d3f1f3;
    --teal-200: #a6e3e7;
    --teal-300: #7ad5db;
    --teal-400: #4ec7d0;
    --teal-500: #31afb7;
    --teal-600: #278a91;
    --teal-700: #1d676d;
    --teal-800: #134548;
    --teal-900: #0a2224;

    --yale-100: #bcdbfb;
    --yale-200: #73b5f7;
    --yale-300: #3091f3;
    --yale-400: #0c6bca;
    --yale-500: #084887;
    --yale-600: #06386a;
    --yale-700: #052b52;
    --yale-800: #031c35;
    --yale-900: #020f1d;

    --ghost-500: #f7f5fb;

    --gray: #495057;
    --white: #ffffff;

    --margin-bottom: 1rem;
    --small-margin-bottom: 0.6rem;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
