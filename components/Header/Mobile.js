import Link from 'next/link';
import styled from 'styled-components'
import TelIcon from '../../svgs/tel.svg';
import React, { useState } from 'react';
import { theme } from '../../constants/theme';

function Mobile({ data }) {
   const [mobileMenu, setMobileMenu] = useState(false);

   return (
      <MobileWrapper>
         <div className={`btn-mobile ${mobileMenu ? 'open' : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
            <span/>
            <span/>
            <span/>
         </div>

        {mobileMenu && <div className={`mobile-menu ${mobileMenu ? 'open' : ''}`}>
            <div className="box-top">
               <ul>
                  <li><strong>Agence Reezocar Lille</strong></li>
                  <li><Link href=""><a>Véhicules d'occasion</a></Link></li>
                  <li><Link href=""><a>Véhicules neufs/0km</a></Link></li>
                  <li><Link href=""><a>Comment venir ?</a></Link></li>
                  <li><Link href=""><a>Foire Aux Questions</a></Link></li>
               </ul>
            </div>
            <div className="box-bottom">
               <p><strong>Reezocar Lille-Seclin</strong></p>
               <p>Lundi au Samedi - 09:00 à 18h00</p>
               <p>
                  <a href={`tel:${data.phone}`} rel="noopener noreferrer nofollow" target="_blank">
                     <TelIcon className="icon" />01 42 53 65 29
                  </a>
               </p>
            </div>
        </div>}
      </MobileWrapper>
   );
};

export default Mobile;

export const MobileWrapper = styled.div`
   * {
      transition: all .3s ease-out;
   }
   .btn-mobile {
      position: absolute;
      top: 20px;
      right: 10px;
      float: right;
      width: 35px; height: 35px;
      display: block;
      cursor: pointer;
      z-index: 999;
      &:not(.open) span {
         background: ${theme.black};
      }
      &.open {
         span {
            background: white;
            &:nth-child(1) {
               top: .4rem;
               transform: rotate(135deg)
            }
               &:nth-child(2) {
               top: .4rem;
               transform: rotate(-135deg);
            }
               &:nth-child(3) {
               top: .4rem;
               transform: rotate(-135deg);
            }
         }
      }
      span {
         position: absolute;
         width: 29px; height: 3px;
         border-radius: 1px;
         background: ${theme.blue100};
         &:nth-child(1) {top: 0px}
         &:nth-child(2) {top: 8px}
         &:nth-child(3) {top: 16px}
      }
   }
   .mobile-menu {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      padding: 95px 35px;
      background: ${theme.blue100};
      right: -400px;
      display: none;
      visibility: hidden;
      z-index: 9;
      &.open {
         right: 0;
         display: block;
         visibility: visible;
      }
      .box-bottom {
         position: fixed;
         bottom: 76px;
         * {
            margin-bottom: 5px;
         }
      }
      * {
         color: white;
         text-decoration: none;
      }
      ul {
         padding: 0;
         margin: 0;
         li {
            margin-bottom: 50px;
            font-size: 20px;
            list-style: none;
         }
      }
      p {
         &:nth-child(2) {
            margin-bottom: -2px;
         }
         &:last-child {
            padding-left: 15px;
         }
      }
      .icon {
         position: relative;
         top: 9px;
         left: -10px;
      }
   }
   @media (min-width:990px) {
      .btn-mobile {
         top: 38px;
         right: 25px;
      }
   }
   @media (min-width: 780px) {
      .mobile-menu {
         width: 400px;
      }
      .btn-mobile {
         .cross {
            right: 35px;
         }
         span {
         background: ${theme.black};
         }
      }
   }
`