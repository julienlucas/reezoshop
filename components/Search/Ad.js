import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

import { medias } from '../../constants/theme';
import requireStatic from '../../utils/require-static';

const Ad = ({ className }) => {
   return (
      <AdStyled className={className}>
         <div className="box-ad">
            <div className="box-text">
               <div>
               <p>Trouvez plus d'annonces sur reezocar.com</p>
               <Button secondary>
                  <a href="https://reezocar.com/" target="_blank" rel="noopener noreferrer">
                     Voir plus d'annonces
                  </a>
               </Button>
               </div>
            </div>
            <Image
               src={requireStatic('images/ad-voitures.png')}
               width={300}
               height={235}
               layout="responsive"
            />
         </div>
      </AdStyled>
   )
};

Ad.propTypes = {
   className: PropTypes.string
};

export default Ad;

export const AdStyled = styled.div`
   margin-top: 25px;
   border-radius: 4px;
   overflow: hidden;
   max-height: 240px;
   display: none;
   &.ad-mobile {
      display: block;
      margin-top: 64px;
      .box-text {
         width: calc(100% - 51px);
         justify-content: center;
      }
   }
   .box-text {
      position: absolute;
      width: 300px;
      height: 235px;
      display: flex;
      align-items: center;
      z-index: 2;
      button {
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
   ${medias.min990} {
      display: block;
      &.ad-mobile {
         display: none;
         .box-text {
            width: calc(100% - 51px);
            justify-content: center;
         }
      }
   }
}`