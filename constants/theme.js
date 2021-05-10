import { createGlobalStyle } from 'styled-components';

export const theme = {
  black: '#313131',
  grey100: '#919191',
  grey200: '#C4C4C4',
  grey300: '#F6F6F6',
  grey400: '#DCDCDC',
  grey500: '#555555',
  grey600: '#DDDDDD',
  grey700: '#EBEBEB',
  orange100: '#F29301',
  orange200: '#C98722',
  jaune100: '#F29400',
  blue100: '#11589A',
  blue200: '#124b80'
};

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

    ${''/* Container central & lists */}
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
      &.btn-tertiary {
        font-size: 14px;
        margin-top: 8px;
        width: 100%;
        padding: 0;
        color: white;
        background: ${theme.blue100};
        &:hover, &:focus {
          background: ${theme.blue200};
        }
      }
      &.btn-phone {
        padding: 0 26px 0 44px;
        .icon {
          position: absolute;
          margin-left: -27px;
        }
      }
      &.btn-orange {
        padding: 0 30px;
        color: white;
        border: 0;
        height: 35px;
        line-height: 35px;
        background: ${theme.orange100};
        &:hover, &:focus {
          background: ${theme.orange200}
        }
      }
    }
    ${''/* Inputs */}
    .box-input-number {
      &::before {
        position: absolute;
        margin: 8px 0 0 110px;
        color: ${theme.black};
        content: '€';
        z-index: 1;
      }
      &.mois::before {
        content: 'Mois';
      }
      &.kilometres::before {
        content: 'Kms';
      }
    }
    input {
      margin-bottom: 16px;
      color: ${theme.black};
      border: 1px solid ${theme.grey200};
      border-radius: 3.24786px;
      box-shadow: none;
      outline: 0;
      box-shadow: none;
      appearance: none;
      font-size: 13px;
      background: white;
      &[type="text"] {
         height: 36px;
         line-height: 1;
      }
      &.search {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        right: 105px;
        float: right;
        padding: 0 15px;
        min-width: 393px;
        border-radius: 4px;
        font-size: 16px;
        background: url('/icons/search.svg') no-repeat;
        background-position: calc(100% - 20px) 50%;
        background-size: 18px;
      }
    }
    select {
      margin-bottom: 16px;
      font-size: 13px;
      line-height: 36px;
      padding: 0 7px;
      background: white url('/icons/arrow-bottom-light.svg') no-repeat calc(100% - 10px) 50%;
      background-size: 13px;
      color: ${theme.black};
      border: 0.811966px solid ${theme.grey200};
      border-radius: 3.24786px;
      display: block;
      width: 100%;
      height: 36px;
      box-shadow: none;
      outline: 0;
      box-shadow: none;
      appearance: none;
    }

    ${''/* React Select Fix, sinon bug input */}
    .select {
      input[type="text"] {
        position: absolute;
        padding: 0;
        margin: 0;
        height: 0;
        line-height: 1;
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

    ${''/* Slick slider */}
    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-touch-callout: none;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
      position: relative;
      overflow: hidden;
      display: block;
      margin: 0;
      padding: 0;
      &:focus {
        outline: none;
      }
      &.dragging {
        cursor: pointer;
        cursor: hand;
      }
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
      transform: translate3d(0, 0, 0);
    }
    .slick-track {
      position: relative;
      left: 0;
      top: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      &:before,
      &:after {
        content: "";
        display: table;
      }
      &:after {
        clear: both;
      }
      .slick-loading & {
        visibility: hidden;
      }
    }
    .slick-slide {
      float: left;
      height: 100%;
      min-height: 1px;
      display: none;
      [dir="rtl"] & {
        float: right;
      }
      img {
        display: block;
      }
      &.slick-loading img {
        display: none;
      }
      &.dragging img {
        pointer-events: none;
      }
      .slick-initialized & {
        display: block;
      }
      .slick-loading & {
        visibility: hidden;
      }
      .slick-vertical & {
        display: block;
        height: auto;
        border: 1px solid transparent;
      }
    }
    .slick-arrow.slick-hidden {
      display: none;
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