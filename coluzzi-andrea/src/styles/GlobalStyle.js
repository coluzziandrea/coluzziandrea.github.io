import { createGlobalStyle } from 'styled-components';
import Fonts from './Fonts';
import variables from './Variables';

const globalStyle = createGlobalStyle`
    ${Fonts};
    ${variables};

    
    html {
    scroll-behavior: smooth;
    }

    /* CSS Resets */
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    ul {
    list-style-type: none;
    }

    a:link,
    a:visited {
    text-decoration: none;
    color: var(--primary-color);
    }

    a:hover {
    color: var(--primary-light);
    }

    body {
    font-family: var(--font-family);
    background-color: #f1f3f5;
    color: var(--gray-color);
    }

    h2 {
    text-align: center;
    letter-spacing: 0.9px;
    font-size: 30px;
    margin-bottom: var(--margin-bottom);
    }

    h3 {
    text-align: center;
    letter-spacing: 1.6px;
    font-size: 20px;
    margin-bottom: var(--margin-bottom);
    }

    p {
    line-height: 1.8;
    letter-spacing: 1.4px;
    margin-bottom: var(--small-margin-bottom);
    }

    .primary-button {
    color: #fff !important;
    background-color: var(--primary-color);
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
    display: inline-block;
    margin-top: var(--margin-bottom);
    border-radius: 20px;
    }

    .primary-button:hover {
    background-color: var(--primary-light);
    }

    footer {
    font-size: 14px;
    padding: 1.25rem;
    text-align: center;
    margin: 2rem 0 0;
    }

`


export default globalStyle;