import styled from 'styled-components'
import { GlobalStyles } from '../../constants/global-styles';
import { theme } from '../../constants/theme'

export const SectionAComp = styled.section`
  padding: 85px 0 40px;
  h2 {
    position: relative;
    margin: 0 auto 15px;
    dusplay: table;
    text-align: center;
    max-width: 280px;
  }
  .btn {
    position: relative;
    margin: 45px auto 0;
    display: table;
    width: 100%;
    padding: 0 40px;
  }
  .slick-list {
    max-width: 1160px;
    width: 100%;
    height: 340px !important;
  }
  .slider {
    margin-left: 0;
    .slick-slide {
      margin: 0 -50px 0px 70px;
      * {
        outline: 0;
        user-select: none
      }
    }
  }
  @media (min-width: 768px) {
    padding: 125px 0 40px;
    h2 {
      margin: 0 -10px 25px 30px;
      max-width: 100%;
    }
    .slider {
      margin-left: 30px;
    }
  }
  @media (min-width: 620px) {
    .btn {
      width: auto;
    }
  }
`

export const SectionBComp = styled.section`
  padding: 5px 0 30px;
  h2 {
    padding-left: 5px
  }
  p, strong {
    position: relative;
    margin: 0 auto;
    display: table;
    padding: 0;
    text-align: center;
    width: 100%;
    font-size: 14px;
    line-height: 1;
    color: ${theme.black}
  }
  strong {
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 18px;
  }
  .card-automaker {
    padding: 0;
    height: 125px;
    width: 130px;
    user-select: none;
    outline: 0;
    cursor: pointer;
    border: 0.867528px solid ${theme.grey200};
    border-radius: 3.47011px;
    .logo {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      * {
        position: absolute;
        width: 100px;
        height: 80px;
        width: auto;
        height: auto;
        z-index: 2;
      }
    }
  }
  .slick-list {
    padding-left: 8px;
    max-width: 1160px;
    width: 100%;
  }
  .slider {
    .slick-slide {
      margin: 0 5px;
      * {
        outline: 0;
        user-select: none
      }
    }
  }
  @media (min-width: 768px) {
    padding: 20px 0;
    .container {
      padding: 0 30px;
    }
    .card-automaker {
      padding: 13px 0;
      height: 154px;
      width: 173px;
    }
    .slider {
      .slick-slide {
        margin: 0 10px;
      }
    }
  }
`

export const SectionCComp = styled.section`
  padding: 30px 0 10px;
  h2 {
    position: relative;
    margin: 0 auto 20px;
    dusplay: table;
    text-align: center;
    max-width: 280px;
  }
  .slick-list {
    max-width: 1140px;
    width: 100%;
  }
  .slider {
    .slick-slide {
      position: relative;
      margin: 0 5px;
      height: 300px;
      width: 300px;
      user-select: none;
      outline: 0;
      cursor: pointer;
      border-radius: 6px;
      overflow: hidden;
      &:hover .btn-secondary {
        background: ${theme.orange200}
      }
      *:not(.btn-secondary) {
        height: 300px;
        outline: 0;
        user-select: none;
      }
      .btn-secondary {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        margin: 0 auto;
        display: table;
        z-index: 2;
        max-width: 150px;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 30px 0;
    h2 {
      margin: 0 0 25px;
      max-width: 100%;
    }
    .slider {
      .slick-slide {
        margin: 0 10px;
        height: 300px;
        width: 560px;
        * {
          height: auto;
        }
        .btn-secondary {
          margin: 0;
          left: auto;
          right: 20px;
        }
      }
    }
  }
`

export const SectionDComp = styled.section`
  padding: 30px 0 10px;
  h2 {
    position: relative;
    margin-bottom: 20px;
  }
  .google-map {
    height: 320px;
    width: 100%;
    outline: 0;
    user-select: none;
    * {
      cursor: auto;
      outline: 0;
      user-select: none;
    }
    a[href^="http://maps.google.com/maps"]{display:none !important}
    a[href^="https://maps.google.com/maps"]{display:none !important}
    .gmnoprint a, .gmnoprint span, .gm-style-cc, .gm-fullscreen-control, .gmnoprint {
      display:none;
    }
    .gmnoprint div {
      background:none !important;
    }
  }
  .marker {
    * {
      height: 873px;
    }
  }
  .wrapper {
    position: absolute;
    top: -210px;
    left: -50vw;
    height: 360px;
    width: 100vw;
    z-index: 3;
  }
  .container {
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 400px;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .box-address-mobile {
    position: relative;
    padding: 22px;
    margin: 0 auto 25px;
    border: 1px solid ${theme.grey200};
    border-radius: 4px;
    display: table;
    max-width: 340px;
    width: 100%;
    h3.big {
      font-size: 20px;
    }
    @media (max-width: 380px) {
      margin: 0 20px 25px;
      width: calc(100% - 40px)
    }
  }
  .box-infos {
    position: relative;
    background: white;
    box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 57px 37px;
    max-width: auto;
    width: 100%;
    display: none;
    z-index:3;
    cursor: auto;
    &.active {
      display: block;
    }
    .box-address {
      display: none;
    }
  }
  .open-hours {
    position: relative;
    margin: 70px auto 0;
    display: table;
    width: 100%;
    max-width: 400px;
    > h3 {
      display: none;
    }
  }
  ul:not(.tabs) {
    padding: 0;
    position: relative;
    margin: 0 auto;
    display: table;
    columns: 1;
    li {
      list-style: none;
      padding: 0;
      margin: 0 0 25px;
      font-size: 16px;
      * {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  ul.tabs {
    position: relative;
    margin: 0 auto;
    display: table;
    width: auto;
    li {
      font-size: 18px;
      padding-bottom: 10px;
      margin-right: 20px;
      display: inline-block;
      list-style: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      &.active {
        font-weight: 700;
        color: ${theme.blue100};
        border-color: ${theme.blue100};
      }
    }
  }
  .btn {
    position: absolute;
    right: 20px;
    bottom: 50px;
    height: 40px;
    font-size: 14px;
    z-index: 2;
  }
  @media (min-width: 990px) {
    h2 {
      margin-bottom: 50px;
    }
    .open-hours {
      > h3 {
        display: block;
      }
    }
    .google-map, .container, .wrapper {
      height: 660px;
    }
    .container {
      padding: 0 40px;
    }
    .wrapper {
      top: -330px;
      left: -50vw;
    }
    .box-infos {
      max-width: 507px;
      display: block;
      .box-address {
        display: block;
      }
    }
    .box-address-mobile {
      display: none;
    }
    ul.tabs {
      display: none;
    }
    ul:not(.tabs) {
      margin: 0;
      columns: 2;
      display: block;
    }
    .btn {
      right: -30px;
      bottom: 30px;
    }
  }
`

export const SectionEComp = styled.section`
  padding: 50px 0;
  .row {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 22px;
    .card-interlocuteur {
      padding: 25px 30px;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
      border-radius: 5.73741px;
      display: table-cell;
      .picture {
        position: relative;
        margin: 0 auto;
        display: table;
        max-width: 185px;
        max-height: 185px;
        width: 100%;
        height: 100%;
        * {
          border-radius: 50%;
        }
      }
      hr {
        height: 3px;
        width: 100px;
        background: ${theme.jaune100};
        border: 0;
      }
      .open-hours {
        > h3 {
          display: block;
        }
      }
      h3 {
        padding: 0;
        margin: 10px 0 14px;
      }
      .job-title {
        padding-top: 6px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media (min-width: 1200px) {
    .row {
      .card-interlocuteur {
        .box-text {
          min-height: auto;
        }
      }
    }
  }
  @media (min-width: 990px) {
    .row {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 550px) {
    .row {
      .card-interlocuteur {
        .box-text {
          min-height: 150px;
        }
      }
    }
  }
`

export const SectionFComp = styled.section`
  padding: 0;
  .col-left {
    float: none;
    width: 100%;
    .row {
      margin-top: 20px;
    }
    .row-2 {
      position: relative;
      margin: 0 auto;
      display: table;
      max-width: 360px;
      width: 100%;
      display: block;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    .number {
      position: relative;
      top: 7px;
      float: left;
      font-size: 36px;
      font-weight: 700;
      color: ${theme.blue100};
      span {
        font-size: 24px;
      }
    }
    .col {
      height: 70px;
    }
    .col-1 {
      .progress-ring:before {
        background: url('/icons/pouce.svg') no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    .col-2 {
      .progress-ring:before {
        background: url('/icons/euros.svg') no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    .col-3 {
      .progress-ring:before {
        background: url('/icons/coeur.svg') no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    p {
      position: relative;
      margin-top: 10px;
      font-size: 16px;
      margin-left: 15px;
      float: right;
      width: 50%;
      text-align: left;
    }
    .progress-ring {
      float: left;
      display: flex;
      justify-content: flex-start;
      &:before {
        position: absolute;
        margin: 8px 0 0 9px;
        height: 43px;
        width: 43px;
        border-radius: 50%;
        border: 1px solid ${theme.blue100};
        content: '';
        z-index: -1;
        background-size: 24px;
        transform: rotate(0deg);
        content: '';
      }
    }
    strong {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .col-right {
    position: relative;
    margin: 0 auto;
    display: table;
    padding: 10px 0 0;
    float: none;
    width: 100%;
    max-width: 360px;
    height: auto;
    background: white;
    border-radius: 4px;
    .box-social-media-reviews {
      position: relative;
      margin: 0 auto;
      display: table;
      padding: 0 20px;
      width: 50%;
      float: left;
      &:first-child {
        margin-bottom: 40px;
      }
    }
    .icon {
      float: left;
      * {
       width: 44px;
      }
    }
    .box-text {
      margin-top: -10px;
      float: right;
      width: calc(100% - 60px);
    }
    p {
      float: left;
      width: auto;
      text-align: center;
    }
    p, strong {
      font-size: 20px;
    }
    .notation {
      font-size: 28px;
      font-weight: 700;
      color: ${theme.blue100}
    }
    .reviews {
      margin-top: -4px;
      font-size: 14px;
    }
  }
  @media (min-width: 768px) {
    .col-left {
      float: left;
      width: 60%;
      .row-2 {
        margin: -30px 0 0;
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(3, 1fr);
      }
      p, strong {
        font-size: 20px;
      }
      p {
        margin: 10px 0 0 0;
        float: none;
        width: auto;
        text-align: center;
      }
      .col-1, .col-2, .col-3 {
        .progress-ring:before {
          background-position: 50% 50%;
          background-size: 46px;
        }
      }
      .progress-ring {
        float: none;
        justity-content: center;
        transform: rotate(-90deg);
        margin: 9px 0 0 0;
        &:before {
          background-size: 46px;
          height: 82px;
          width: 82px;
          transform: rotate(90deg);
        }
      }
      .number {
        top: 15px;
        margin: 45px auto 20px;
        display: table;
        float: none;
        font-size: 36px;
      }
    }
    .col-right {
      margin: auto;
      padding: 40px;
      float: right;
      width: 33%;
      height: 257px;
      background: ${theme.grey300};
      .box-social-media-reviews {
        width: 200px;
        float: none;
        padding: 0;
      }
      .icon {
        float: left;
        * {
          width: 65px;
        }
      }
      .box-text {
        width: calc(100% - 90px);
      }
      .notation {
        font-size: 41px;
      }
      .reviews {
        font-size: 21px;
      }
    }
  }
`

export const SectionGComp = styled.section`
  padding: 0 0 110px;
  .row {
    padding-top: 20px;
  }
  .col-left {
    display: none;
    float: left;
    width: 445px;
    * {
      border-radius: 6px;
    }
  }
  .col-right {
    padding-left: 0;
    float: none;
    width: 100%;
  }
  .box-question {
    margin-bottom: 10px;
    padding: 10px 50px 10px 10px;
    border: 1px solid ${theme.grey400};
    border-radius: 4px;
    background: url('/icons/arrow-bottom-blue.svg') no-repeat calc(100% - 20px) 50%;
    background-size: 14px;
  }
  .btn {
    position: relative;
    margin: 50px auto 0;
    display: table;
  }
  @media (min-width: 768px) {
    padding: 60px 0 110px;
    .row {
      padding-top: 40px;
    }
    .col-left {
      display: block;
    }
    .box-question {
      padding: 20px 50px 20px 20px;
    }
    .col-right {
      float: left;
      width: calc(100% - 445px);
      padding-left: 20px;
    }
  }
`