import { createGlobalStyle } from 'styled-components';
import requireStatic from '../utils/require-static';

export const ReactSlickStyles = createGlobalStyle`
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
   .next, .prev {
      position: absolute;
      top: 0;
      width: 55px;
      height: 100%;
      filter: grayscale(1) brightness(600%);
      appearance: none;
      cursor: pointer;
      z-index: 3;
      &:hover {
         filter: grayscale(1) brightness(550%);
      }
      &::before {
         position: absolute;
         top: 0;
         left: 4px;
         height: calc(100% - 4px);
         width: 80px;
         content: '';
         border-top-left-radius: 4px;
         border-bottom-left-radius: 4px;
         transition: all .5s ease-out;
      }
      &::after {
         position: absolute;
         top: 0;
         left: 0;
         height: 100%;
         width: 100%;
         background: transparent url(${requireStatic('icons/arrow-bottom.svg')}) no-repeat 50% 50%;
         background-size: 55px;
         transform: rotate(-90deg);
         content: '';
         z-index: 3;
      }
      &:hover::before {
         background: linear-gradient(90deg, rgba(2,0,36,.1) 0%, transparent 100%);
         transition: all .5s ease-out;
      }
   }
   .next {
      right: -5px;
      &::before {
         left: auto;
         right: 5px;
         border-top-right-radius: 4px;
         border-bottom-right-radius: 4px;
         background: linear-gradient(90deg, transparent 0%, transparent 100%);
      }
      &:hover::before {
         background: linear-gradient(90deg, transparent 0%, rgba(2,0,36,.1) 100%);
      }
   }
   }
   .prev {
      left: -5px;
      &::before {
         border-top-left-radius: 4px;
         border-bottom-left-radius: 4px;
      }
      &::after {
         transform: rotate(90deg);
      }
   }
}
`