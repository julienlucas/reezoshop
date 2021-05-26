import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import requireStatic from '../../utils/require-static';

const Button = ({ children, component = 'button', type = 'button', ...buttonProps }) => (
    <StyledButtonPhone as={component} type={type} {...buttonProps}>
       {children}
    </StyledButtonPhone>
 );

Button.propTypes = {
   children: PropTypes.node,
   component: PropTypes.string,
   type: PropTypes.string,
};

export default Button;

const StyledButtonPhone = styled.button(({ theme }) => {
   return {
      position: 'relative',
      border: 0,
      borderRadius: 4,
      color: 'white',
      backgroundColor: theme.orange100,
      cursor: 'pointer',
      display: 'table',
      fontSize: 16,
      fontWeight: 600,
      height: 47,
      lineHeight: '41px',
      width: 'auto',
      padding: '0 0 0 16px',
      outline: 0,
      userSelect: 'none',
      margin: '0 auto',
      textAlign: 'center',
      'a': {
         color: 'white'
      },
      '&:hover': {
         backgroundColor: theme.orange200
      },
      'span': {
         padding: '0 20px 0 34px',
         width: 'auto',
         lineHeight: '47px',
         background: `url(${requireStatic('icons/tel.svg')}) no-repeat`,
         backgroundPosition: '3px 55%',
         backgroundSize: '20px'
      },
      '&.search-page': {
         backgorund: 'red',
         width: 'calc(50vw - 26px)'
      }
   }
});