import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import requireStatic from '../utils/require-static';
import { theme } from '../constants/theme';

const Input = ({ className, name, onChange, onReset, placeholder, type, ...inputProps }) => {
   const [state, setState] = useState('')

   const onChangeInput = (e) => {
      if (!inputProps.multiSelect) {
         const { value, name } = e.target
         setState(value)
         onChange(value, name)
      }
   };

   useEffect(() => {
      if (onReset) setState('')
   }, [onReset])

   return (
      <BoxInput className={type}>
         <InputStyled
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            value={!onReset && state}
            onChange={e => onChangeInput(e)}
            {...inputProps}
         />
      </BoxInput>
   );
};

Input.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string,
   onChange: PropTypes.func,
   onReset: PropTypes.bool,
   placeholder: PropTypes.string,
   type: PropTypes.string.isRequired
};

export default Input;

const BoxInput = styled.div`
   &.number {
      position: relative;
      &::before {
         position: absolute;
         margin: 7px 0 0 0;
         right: 12px;
         color: ${theme.black};
         content: '€';
         z-index: 1;
      }
   }
`

const InputStyled = styled.input(({ styles = {}, theme, ...props }) => {
   return {
      marginBottom: 16,
      color: theme.black,
      border: `1px solid ${theme.grey200}`,
      borderRadius: 3.24786,
      boxShadow: 'none',
      outline: 0,
      boxShadows: 'none',
      appearance: 'none',
      fontSize: 13,
      background: 'white',
      height: 36,
      lineHeight: 1,
      padding: '0 15px',
      width: '100%',
      display: 'block',
      '&::placeholder': {
         color: `${theme.black} !important`
      },
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
         '-webkit-appearance': 'none',
         margin: 0
      },
      ...(props.search ? inputFormat('search', theme) : {}),
      ...(props.multiSelect ? inputFormat('multiSelect', theme) : {}),
      ...styles,
   }
});

const inputFormat = (format, theme) => ({
   search: {
      borderRadius: '4px',
      border: 0,
      height: '47px',
      minWidth: '393px',
      fontSize: '16px',
      background: `white url(${requireStatic('icons/search.svg')}) no-repeat calc(100% - 20px) 50%`,
      backgroundSize: 18,
      boxSadow: '0 0 0 rgba(0, 0, 0, 0)',
      color: theme.grey100,
      '&::placeholder': {
         color: `${theme.grey100} !important`
      },
      '&.active, &:focus, &:hover': {
         boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.12)',
         color: theme.black,
         '&::placeholder': {
            color: theme.black
         }
      }
   },
   multiSelect: {
      color: 'transparent',
      textShadow: `0 0 0 ${theme.black}`,
      background: `white url(${requireStatic('icons/arrow-bottom-light.svg')}) no-repeat calc(100% - 10px) 50%`,
      backgroundSize: 13,
      cursor: 'pointer',
      textTransform: 'capitalize',
      '&::placeholder': {
         textTransform: 'none',
         color: `${theme.black} !important`
      },
      '&:focus, &:hover': {
         cursor: 'pointer'
      }
   }
}[format]);