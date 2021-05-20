import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { medias, theme } from '../../constants/theme';

const Button = ({ children }) => (
    <StyledButtonIsNew type="button">
       {children}
    </StyledButtonIsNew>
 );

Button.propTypes = {
   children: PropTypes.node
};

export default Button;

export const StyledButtonIsNew = styled.button`
   position: relative;
   border: 1px solid ${theme.blue100};
   borderRadius: 4;
   color: ${theme.blue100};
   cursor: pointer;
   display: table;
   fontSize: 14px;
   fontWeight: 600;
   height: 26px;
   lineHeight: 26px;
   background: white;
   width: auto;
   padding: 0 5px;
   outline: 0;
   userSelect: none;
   margin: 0 auto;
   textAlign: center;
   ${medias.min(1100)} {
      padding: 0 20px;
   };
   @media (max-width: 990px) {
      padding: 0 20px;
   };
`
