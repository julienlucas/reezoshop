import { createGlobalStyle } from 'styled-components';
import { medias, theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  ::selection {
    color: ${theme.black}
  }
  html,
    body {
      scroll-behavior: smooth;
      padding: 0;
      margin: 0;
      color: ${theme.black}
      width: 100vw;
      overflow-x: hidden;
    }
    * {
      font-family: Source Sans Pro, Helvetica Neue, sans-serif;
      box-sizing: border-box;
      transition: all .15s ease-out;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    a {
      text-decoration: none;
    }
    .container {
      position: relative;
      margin: 0 auto;
      max-width: 1220px;
      width: 100%;
      display: table;
      padding: 0 20px;
    }
    ul, ol {
      padding: 0;
      margin: 0;
    }
    .text-center {
      text-align: center;
    }
    h1, h2, h3, h4, h5, h6 {
      position: relative;
      margin: 0,
      padding: 0,
      font-weight: 700;
      linheight: 114,5%;
      color: ${theme.black}
    }
    h1 {
      font-size: 34px;
      letter-spacing: -0.01em;
    }
    h2 {
      font-size: 24px;
      &.sub-headline {
        font-size: 24px;
        font-weight: 600;
        margin-top: -15px;
      }
      &.small {
        font-size: 24px;
      }
    }
    h3 {
      font-size: 16px;
      &.big {
        font-size 24px;
      }
    }
    p {
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
    strong {
      font-weight: 700;
      font-size: 20px;
      color: ${theme.black}
    }
    span {
      &.blue {
        color: ${theme.blue100}
      }
    }
    ${medias.min780} {
      .container {
        padding: 0 40px;
      }
      h1 {
        font-size: 52px;
      }
      h2 {
        font-size: 30px;
        &.sub-headline {
          font-size: 30px;
          margin-top: -25px;
        }
      }
      h3 {
        font-size: 18px;
      }
    }
  }
`