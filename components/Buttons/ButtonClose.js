import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import { medias, theme } from '../../constants/theme';

const ButtonClose = ({ className, onClick }) => (
   <StyledButtonClose className={className ? 'open' : ''} onClick={onClick}>
      <Button clear>
         <span/>
         <span/>
         <span/>
      </Button>
   </StyledButtonClose>
);

ButtonClose.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonClose;

export const StyledButtonClose = styled.div`
   position: fixed;
   top: 0px;
   right: 0;
   border: 0;
   background: white;
   width: 61px;
   height: 57px;
   padding-left: 20px;
   padding-bottom: 18px;
   display: none;
   cursor: pointer;
   z-index: 9999;
   &.open {
      display: block
   }
   span {
      position: absolute;
      width: 24px;
      height: 2px;
      border-radius: 1px;
      background: ${theme.blue100};
      &:nth-child(1) {
         top: .4rem;
         transform: rotate(135deg);
      },
      &:nth-child(2) {
         top: .4rem;
         transform: rotate(-135deg);
      }
      &:nth-child(3) {
         top: .4rem;
         transform: rotate(-135deg);
      }
   }
   ${medias.min(990)} {
      display: none;
      &.open: {
         display: none
      }
   }
`