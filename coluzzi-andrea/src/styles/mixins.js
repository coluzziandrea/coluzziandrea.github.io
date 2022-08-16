import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--teal-500);
      outline: 0;
    }
  `,

  smallButton: css`
    color: var(--teal-400);
    background-color: transparent;
    border: 1px solid var(--teal-400);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--yale-700);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,
  bigButton: css`
    color: var(--teal-400);
    background-color: transparent;
    border: 1px solid var(--teal-400);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--yale-700);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--yale-800);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--yale-800);
    }
  `,
  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--teal-600);
    &:hover,
    &:focus,
    &:active {
      color: var(--teal-600);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--teal-600) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--teal-600);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,
};

export default mixins;
