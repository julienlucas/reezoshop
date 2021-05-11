import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import MarkerIcon from '../svgs/marker.svg';
import { theme } from '../constants/theme';

const BoxGoogleRating = ({ className, address, headline, googleAvis, googleNote }) => {
   return (
      <BoxGoogle className={`box-address ${className}`}>
         <MarkerIcon className="indicator" />
         <div className="address">
            <h3 className="big">{headline}</h3>
            <p>{address}</p>

            <RatingStars>
               <span>4,2</span>
               <div className={googleNote > '1' ? 'active' : ''}>★</div>
               <div className={googleNote > '2' ? 'active' : ''}>★</div>
               <div className={googleNote > '3' ? 'active' : ''}>★</div>
               <div className={googleNote > '4' ? 'active' : ''}>★</div>
               <div className={googleNote > '5' ? 'active' : ''}>★</div>
               <span>sur {googleAvis} avis Google</span>
            </RatingStars>
         </div>
      </BoxGoogle>
   );
};

BoxGoogleRating.propTypes = {
   className: PropTypes.string,
   address: PropTypes.string,
   headline: PropTypes.string,
   googleNote: PropTypes.string,
   googleAvis: PropTypes.string
};

export default BoxGoogleRating;

export const BoxGoogle = styled.div`
   &.box-address-mobile {
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
      @media (min-width: 990px) {
         &.box-address-mobile {
            display: none;
         }
      }
      @media (max-width: 380px) {
         margin: 0 20px 25px;
         width: calc(100% - 40px)
      }
   }
   .indicator {
      position: relative;
      top: 4px;
      width: 55px;
      height: 60px;
      float: left;
   }
   .address {
      width: calc(100% - 55px);
      float: right;
   * {
      margin: 0;
      padding: 0;
   }
   p {
      margin-bottom: 7px;
      font-size: 16px;
      font-weight: 600;
   }
`

export const RatingStars = styled.div`
   color: ${theme.grey100};
   font-size: 16px;
   font-weight: 600;
   * {
      display: inline-block;
   }
   div {
      top: 1px;
      color: ${theme.grey400};
      &.active {
         color: orange;
      }
   }
`
