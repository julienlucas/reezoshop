import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { theme } from '../constants/theme';

const Stars = ({ nbrAvis, note }) => (
   <StyledStarsRating>
      <span>{note}</span>
      <div className={note > '1' ? 'active' : ''}>★</div>
      <div className={note > '2' ? 'active' : ''}>★</div>
      <div className={note > '3' ? 'active' : ''}>★</div>
      <div className={note > '4' ? 'active' : ''}>★</div>
      <div className={note > '5' ? 'active' : ''}>★</div>
      <span>sur {nbrAvis} avis Google</span>
   </StyledStarsRating>
);

Stars.propTypes = {
   note: PropTypes.string,
   nbrAvis: PropTypes.string
};

export default Stars;

export const StyledStarsRating = styled.div`
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