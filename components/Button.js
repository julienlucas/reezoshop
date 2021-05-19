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
      '&.button-filtres': {
         position: 'fixed',
         bottom: 20,
         left: 20,
         zIndex: 6,
         width: 'calc(50vw - 26px)',
         '@media screen and (min-width: 990px)': {
            display: 'none'
         }
      },

      ...(props.full ? buttonFull : {}),
      ...(props.primary ? buttonFormat('primary', theme) : {}),
      ...(props.secondary ? buttonFormat('secondary', theme) : {}),
      ...(props.third ? buttonFormat('third', theme) : {}),
      ...(props.fourth ? buttonFormat('fourth', theme) : {}),
      ...(props.neuf ? buttonFormat('neuf', theme) : {}),
      ...(props.phone ? buttonFormat('phone', theme) : {}),
      ...(props.clear ? buttonFormat('clear', theme) : {}),
      ...(props.breadcrumb ? buttonFormat('breadcrumb', theme) : {}),
      ...(props.close ? buttonFormat('close', theme) : {}),
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
         color: theme.grey500,
         display: 'block'
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
      width: '100%',
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
      width: '100%',
   },
   breadcrumb: {
      position: 'relative',
      padding: 0,
      margin: 0,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.2,
      height: 'auto',
      background: 'transparent',
      border: 0,
      color: theme.black,
      textAlign: 'left',
      'a': {
         color: theme.black
      }
   },
   close: {
      position: 'fixed',
      top: 20,
      right: 0,
      background: 'white',
      width: 61,
      height: 35,
      paddingLeft: 20,
      display: 'none',
      cursor: 'pointer',
      zIndex: 11,
      '&.open': {
         display: 'block'
      },
      span: {
         position: 'absolute',
         width: 24,
         height: 2,
         borderRadius: 1,
         background: theme.blue100,
         '&:nth-child(1)': {
            top: '.4rem',
            transform: 'rotate(135deg)'
         },
         '&:nth-child(2)': {
            top: '.4rem',
            transform: 'rotate(-135deg)'
         },
         '&:nth-child(3)': {
            top: '.4rem',
            transform: 'rotate(-135deg)'
         }
      },
      '@media screen and (min-width: 990px)': {
         display: 'none',
         '&.open': {
            display: 'none'
         }
      }
   }
}[format]);