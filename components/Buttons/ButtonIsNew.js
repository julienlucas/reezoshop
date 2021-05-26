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
   position: absolute;
   bottom: 20px;
   border: 1px solid ${theme.blue100};
   border-radius: 4px;
   color: ${theme.blue100};
   cursor: pointer;
   display: table;
   font-size: 14px;
   font-weight: 600;
   height: 26px;
   line-height: 1;
   background: white;
   width: auto;
   padding: 0 5px;
   outline: 0;
   user-select: none;
   margin: 0 auto;
   text-align: center;
   ${medias.min(1100)} {
      padding: 0 20px;
   };
   @media (max-width: 990px) {
      padding: 0 20px;
   };
`