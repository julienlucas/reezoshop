import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const Wrapper = styled.section`
   margin: 80px 0;
   .container {
      padding: 0 25px;
      max-width: 1400px;
   }
   @media (min-width: 990px) {
      margin: 135px 0;
   }
   @media (max-width: 768px) {
      margin: 40px 0 80px;
   }
`

export const Aside = styled.aside`
   float: none;
   max-width: 100%;
   width: 100%;
   .wrapper-filters {
      padding: 21px 16px 27px;
      background: ${theme.grey300};
      border-radius: 4px;
   }
   .wrapper-ad-desktop {
      display: none;
   }
   h3 {
      margin: 0;
      padding: 0;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 30px;
   }
   .btn-reset {
      position: relative;
      height: 20px;
      margin-top: 2px;
      font-size: 14px;
      text-align: right;
      float: right;
      color: ${theme.grey100};
      text-decoration: underline;
      cursor: pointer;
      &:hover {
         text-decoration: none;
      }
   }
   .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
   }
   label {
      position: absolute;
      margin: 6px 0 0 6px;
      font-size: 13px;
   }
   @media (min-width: 990px) {
      float: left;
      max-width: 300px;
      .wrapper-ad-desktop {
         display: block;
      }
   }
`

export const Results = styled.div`
   padding: 0 0 0 0;
   float: none;
   width: 100%;
   .wrapper-ad-mobile {
      display: block;
      margin-top: 64px;
      .box-text {
         width: calc(100% - 51px);
         justify-content: center;
      }
   }
   h2 {
      margin: -8px 0 20px 0;
   }
   .count {
      font-size: 20px;
      span {
        font-weight: 700;
     }
   }
   .select {
      display: none;
   }
   .wrapper-select-sorting {
      position: absolute;
      margin-top: -27px;
      right: 25px;
      float: right;
      max-width: 200px;
      width: 100%;
      ul {
         left: auto;
         right: 0;
      }
   }
   .row {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 22px;
      width: 100%;
      &.row-btn {
         display: block;
         .btn {
            width: 100%;
         }
      }
   }
   @media (min-width: 990px) {
      float: left;
      width: calc(100% - 300px);
      padding: 0 51px;
      .select {
         display: block;
      }
      .row {
         width: calc(100% + 51px);
         &.row-btn {
            display: grid;
            .btn {
               width: auto;
            }
         }
      }
      .wrapper-ad-mobile {
         display: none;
         .box-text {
            width: calc(100% - 51px);
            justify-content: center;
         }
      }
   }
   @media (min-width: 750px) {
      .row {
         grid-template-columns: repeat(3, 1fr);
      }
   }
`