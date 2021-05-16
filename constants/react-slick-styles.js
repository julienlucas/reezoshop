import { createGlobalStyle } from 'styled-components';

export const ReactSlickStyles = createGlobalStyle`
   ${''/* React Slick styles ont besoin d'être chargés en global pour que le CSS prenne effet */}
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
}
`