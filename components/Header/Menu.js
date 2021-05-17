import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TelIcon from '../../svgs/tel.svg';
import { medias, theme } from '../../constants/theme';

const Menu = ({ headline, phone, phoneFormated, onMenu }) => {
   const [menu, setMenu] = useState(false);

   useEffect(() => {
      onMenu(menu)
   }, [menu])

   return (
      <StyledMenu>
         <div className={`button-menu ${menu ? 'open' : ''}`} onClick={() => setMenu(!menu)}>
            <span/>
            <span/>
            <span/>
         </div>

         {menu && <div className={`menu ${menu ? 'open' : ''}`}>
            <div className="box-top">
               <ul>
                  <li><strong>Agence {headline}</strong></li>
                  <li><Link href=""><a>Véhicules d'occasion</a></Link></li>
                  <li><Link href=""><a>Véhicules neufs/0km</a></Link></li>
                  <li><Link href=""><a>Comment venir ?</a></Link></li>
                  <li><Link href=""><a>Foire Aux Questions</a></Link></li>
               </ul>
            </div>
            <div className="box-bottom">
               <p><strong>{headline}</strong></p>
               <p>Lundi au Samedi - 09:00 à 18h00</p>
               <p>
                  <a href={`tel:${phone}`} rel="noopener noreferrer nofollow" target="_blank">
                     <TelIcon className="icon" />{phoneFormated}
                  </a>
               </p>
            </div>
         </div>}
      </StyledMenu>
   );
};

Menu.propTypes = {
  headline: PropTypes.string.isRequired,
  onMenu: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  phoneFormated: PropTypes.string.isRequired
};

export default Menu;

export const StyledMenu = styled.div`
   * {
      transition: all .3s ease-out;
   }
   .button-menu {
      position: fixed;
      top: 20px;
      right: 15px;
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
   .menu {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      padding: 95px 35px;
      background: ${theme.blue100};
      right: -400px;
      display: none;
      flex-direction: column;
      visibility: hidden;
      z-index: 7;
      &.open {
         right: 0;
         display: flex;
         visibility: visible;
      }
      .box-top {
         align-items: top;
         height: 100%;
      }
      .box-bottom {
         align-items: end;
         display: none;
         bottom: 56px;
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
            text-align: center;
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
   ${medias.min780} {
      .menu {
         width: 400px;
         .box-bottom {
            display: block;
         }
         ul {
            li {
               text-align: left;
            }
         }
      }
      .button-menu {
         top: 38px;
         right: 25px;
         .cross {
            right: 35px;
         }
         span {
            background: ${theme.black};
         }
      }
   }
`