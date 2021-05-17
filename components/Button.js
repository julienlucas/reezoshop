import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import requireStatic from '../utils/require-static';

const Button = ({ children, component = 'button', type = 'button', ...buttonProps }) => (
    <StyledButton as={component} type={type} {...buttonProps}>
       {children}
    </StyledButton>
 );

Button.propTypes = {
   children: PropTypes.node,
   component: PropTypes.string,
   type: PropTypes.string,
};

export default Button;

const StyledButton = styled.button(({ styles = {}, theme, ...props }) => {
   return {
      position: 'relative',
      border: 0,
      borderRadius: 4,
      color: 'white',
      cursor: 'pointer',
      display: 'table',
      fontSize: 16,
      fontWeight: 600,
      height: 47,
      lineHeight: '41px',
      width: 'auto',
      paddingLeft: 25,
      paddingRight: 25,
      outline: 0,
      userSelect: 'none',
      margin: '0 auto',
      textAlign: 'center',
      'a': {
         color: 'white'
      },
      '&.small-height': {
         height: 35,
         lineHeight: '35px'
      },
      '&.small-size': {
         fontSize: 14,
         height: 35,
         lineHeight: '30px'
      },
      '&.button-filtres-mobile': {
         position: 'fixed',
         bottom: 20,
         left: 20,
         zIndex: 6,
         width: 'calc(50vw - 26px)',
      },

      ...(props.full ? buttonFull : {}),
      ...(props.primary ? buttonFormat('primary', theme) : {}),
      ...(props.secondary ? buttonFormat('secondary', theme) : {}),
      ...(props.third ? buttonFormat('third', theme) : {}),
      ...(props.fourth ? buttonFormat('fourth', theme) : {}),
      ...(props.neuf ? buttonFormat('neuf', theme) : {}),
      ...(props.phone ? buttonFormat('phone', theme) : {}),
      ...(props.clear ? buttonFormat('clear', theme) : {}),
      ...styles,
   }
});

const buttonFull = {
   width: '100%'
};

const buttonFormat = (format, theme) => ({
   primary: {
      color: 'white',
      backgroundColor: theme.orange100,
      '&:hover': {
         backgroundColor: theme.orange200
      },
   },
   secondary: {
      border: `1px solid ${theme.grey600}`,
      color: theme.black,
      backgroundColor: 'white',
      'a': {
         color: theme.grey500
      },
      '&:hover, &:focus': {
         background: theme.grey600
      }
   },
   third: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.grey100}`,
      fontSize: 14,
      marginTop: 8,
      paddingLeft: 110,
      paddingRight: 110,
      color: 'white',
      background: theme.blue100,
      '&:hover, &:focus': {
         background: theme.blue200
      }
   },
   fourth: {
      border: `1px solid ${theme.grey200}`,
      fontSize: 14,
      lineHeight: '37px',
      paddingLeft: 15,
      paddingRight: 15,
      color: theme.black,
      height: 42,
      background: theme.grey300,
      '&:hover, &:focus, &.active': {
         background: theme.black,
         color: 'white'
      }
   },
   phone: {
      padding: '0 0 0 16px',
      color: 'white',
      backgroundColor: theme.orange100,
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
      }
   },
   neuf: {
      fontSize: 14,
      height: 30,
      lineHeight: '27px',
      background: 'white',
      border: `1px solid ${theme.blue100}`,
      color: theme.blue100,
      padding: '0 25px',
   },
   clear: {
      position: 'relative',
      padding: 0,
      margin: 0,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.2,
      height: 'auto',
      background: 'transparent',
      border: 0,
      color: theme.black,
      textAlign: 'left',
      display: 'inline',
      width: '100%'
   }
}[format]);