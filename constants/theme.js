import { createGlobalStyle } from 'styled-components';

export const theme = {
  black: '#313131',
  grey100: '#919191',
  grey200: '#C4C4C4',
  grey300: '#F6F6F6',
  grey400: '#DCDCDC',
  grey500: '#555555',
  grey600: '#DDDDDD',
  orange100: '#F29301',
  orange200: '#C98722',
  jaune100: '#F29400',
  blue100: '#11589A'
};

export const GlobalStyles = createGlobalStyle`
  ::selection {background-color: ${theme.orange100}; color: white}
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
      font-family: Source Sans Pro, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      box-sizing: border-box;
      transition: all .15s ease-out;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ${''/* Container central */}
    .container {
      position: relative;
      margin: 0 auto;
      max-width: 1220px;
      width: 100%;
      display: table;
      padding: 0 20px;
    }

    ${''/* Typos */}
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

    ${''/* Buttons */}
    .btn {
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      width: auto;
      height: 47px;
      border: 0;
      border-radius: 4px;
      padding: 0 50px;
      outline: 0;
      user-select: none;
      &.btn-primary {
        color: white;
        a {
          color: white
        }
        background: ${theme.orange100};
        &:hover, &:focus {
          background: ${theme.orange200}
        }
      }
      &.btn-secondary {
        border: 1px solid ${theme.grey600};
        color: ${theme.black};
        background: white;
        a {
          color: ${theme.grey500};
        }
        &:hover, &:focus {
          background: ${theme.grey600}
        }
      }
      &.btn-phone {
        padding: 0 26px 0 44px;
        .icon {
          position: absolute;
          margin-left: -27px;
        }
      }
    }

    ${''/* React Tabs */}
    .react-tabs {
      -webkit-tap-highlight-color: transparent;
    }
    .react-tabs__tab-list {
      position: relative;
      margin: 0 auto;
      display: table;
      padding: 0 0 20px;
    }
    .react-tabs__tab {
      display: inline-block;
      border-bottom: 2px solid transparent;
      position: relative;
      font-size: 18px;
      Line-height: 114.5%;
      list-style: none;
      padding: 0 0 10px;
      margin: 0 25px;
      cursor: pointer;
    }
    .react-tabs__tab--selected {
      font-weight: 700;
      background: #fff;
      color: ${theme.blue100};
      border-color ${theme.blue100};
    }
    .react-tabs__tab {
      outline: none;
      &:hover, &:focus {
        color: ${theme.blue100};
      }
    }
    @media (min-width: 768px) {
      .react-tabs__tab {
        margin: 0 50px;
        font-size: 24px;
      }
    }

    ${''/* Media queries */}
    @media (min-width: 780px) {
      .container {
        padding: 0 40px;
      }
      .btn {
        &.btn-primary {
          padding-left: 70px;
          padding-right: 70px;
        }
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