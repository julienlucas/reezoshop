import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NextImageLazy from '../utils/imgLazy';
import requireStatic from '../utils/require-static';
import { medias, theme } from '../constants/theme';

const CardBrand = ({ brand }) => {
  return (
    <StyledCardBrand>
      <div className="logo">
        <NextImageLazy
          src={requireStatic(brand.picture)}
          alt="Picture of the author"
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="box-text">
        <strong>{brand.nom}</strong>
        <p className="prix">à partir de 5000€</p>
      </div>
    </StyledCardBrand>
  );
};

CardBrand.propTypes = {
  brand: PropTypes.object.isRequired
};
export default CardBrand;

export const StyledCardBrand= styled.div`
   padding: 0;
   height: 125px;
   width: 130px;
   user-select: none;
   outline: 0;
   cursor: pointer;
   border: 0.867528px solid ${theme.grey200};
   border-radius: 3.47011px;
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
   .logo {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 210px;
        width: auto;
        max-height: 80px;
        height: 100%;
        z-index: 2;
      }
   }
   ${medias.min768} {
      padding: 13px 0;
      height: 154px;
      width: 173px;
   }
`