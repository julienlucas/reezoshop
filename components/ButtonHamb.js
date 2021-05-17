import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import { medias, theme } from '../constants/theme';

const ButtonHamb = ({ className, onClick }) => (
   <StyledButtonHamb className={className ? 'open' : ''}>
      <Button clear onClick={onClick}>
         <span/>
         <span/>
         <span/>
      </Button>
   </StyledButtonHamb>
);

ButtonHamb.propTypes = {
  className: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonHamb;

export const StyledButtonHamb = styled.div`
   position: fixed;
   top: 20px;
   right: 25px;
   float: right;
   width: 35px;
   height: 35px;
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
   ${medias.min780} {
      top: 18px;
      right: 32px;
      .cross {
         right: 35px;
      }
      span {
         background: ${theme.black};
      }
   }
`