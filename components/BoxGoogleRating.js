import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import StarsRating from './StarsRating';

import MarkerIcon from '../svgs/marker.svg';
import { medias, theme } from '../constants/theme';

const BoxGoogleRating = ({ className, address, headline, googleAvis, googleNote }) => {
   return (
      <StyledBoxGoogle className={`box-address ${className}`}>
         <MarkerIcon className="indicator" />
         <div className="address">
            <h3 className="big">{headline}</h3>
            <p>{address}</p>

            <StarsRating nbrAvis={googleAvis} note={googleNote} />
         </div>
      </StyledBoxGoogle>
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

export const StyledBoxGoogle = styled.div`
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
      ${medias.min990} {
         display: none;
      }
      ${medias.min380} {
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
