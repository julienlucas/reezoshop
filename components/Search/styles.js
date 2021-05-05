import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const Wrapper = styled.section`
   margin: 135px 0;
   .container {
      padding: 0 25px;
      max-width: 1400px;
   }
`

export const Aside = styled.aside`
   float: left;
   max-width: 300px;
   width: 100%;
   .wrapper-filters {
      padding: 21px 16px 27px;
      background: ${theme.grey300};
      border-radius: 4px;
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
   .wrapper-ad {
      margin-top: 25px;
      border-radius: 4px;
      overflow: hidden;
      .box-text {
         position: absolute;
         width: 300px;
         height: 235px;
         display: flex;
         align-items: center;
         z-index: 2;
         .btn-secondary {
            margin: 0 36px;
            width: calc(100% - 72px);
            padding: 0;
            font-size: 14px;
         }
         p {
            width: 100%;
            padding: 0 10px 15px 10px;
            font-size: 24px;
            font-weight: 700;
            color: white;
            text-align: center;
         }
      }
   }

   ${''/* Checkbox */}
   input.checkbox {
      position: relative;
      height: 24px;
      opacity: 0;
      & + label {
         position: relative;
         top: -20px;
         cursor: pointer;
         color: ${theme.black};
         padding: 0;
         &:before {
            content: '';
            margin-top: -5px;
            margin-right: 10px;
            margin-left: -12px;
            display: inline-block;
            vertical-align: text-top;
            width: 24px;
            height: 24px;
            background: white;
            border: 1px solid ${theme.grey200};
            border-radius: 3.24786px;
         }
      }
      &:hover + label:before {
         background: white;
      }
      &:focus + label:before {
         box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
      }
      &:checked + label:before {
         background: white;
      }
      &:disabled + label:before {
         box-shadow: none;
         background: #ddd;
      }
      &:checked + label:after {
         position: absolute;
         left: -5px;
         top: 6px;
         background: ${theme.blue100};
         width: 3px;
         height: 3px;
         box-shadow:
            2px 0 0 ${theme.blue100},
            5px 0 0 ${theme.blue100},
            5px -2px 0 ${theme.blue100},
            5px -4px 0 ${theme.blue100},
            5px -6px 0 ${theme.blue100},
            5px -8px 0 ${theme.blue100};
         transform: rotate(45deg);
         content: '';
      }
   }
`

export const Results = styled.div`
   padding-left: 51px;
   float: right;
   width: calc(100% - 300px);
   h2 {
      margin: -8px 0 10px 0;
   }
   .count {
      font-size: 20px;
      span {
        font-weight: 700;
     }
   }
   .row {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 22px;
      width: calc(100% + 51px);
   }
`