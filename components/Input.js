import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import requireStatic from '../utils/require-static';

const Input = ({ className, name, onChange, onReset, placeholder, type, ...inputProps }) => {
   const [state, setState] = useState(null);

   const onChangeInput = e => {
      const { value, name } = e.target;
      setState(value);
      onChange(value, name);
   };

   useEffect(() => {
      if (onReset) setState(null);
   }, [onReset])

   return (
      <InputStyled
         className={className}
         type={type}
         name={name}
         placeholder={placeholder}
         value={!onReset && state}
         onChange={e => onChangeInput(e)}
         {...inputProps}
      />
   );
};

Input.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   onReset: PropTypes.bool,
   placeholder: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired
};

export default Input;

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
      '&[type="text"]': {
         '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
         }
      },
      ...(props.search ? inputFormat('search', theme) : {}),
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
      background: `white url(${requireStatic('icons/search.svg')}) no-repeat`,
      backgroundPosition: 'calc(100% - 20px) 50%',
      backgroundSize: '18px',
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
   'multi-select': {
      background: `white url(${requireStatic('icons/arrow-bottom-light.svg')}') no-repeat calc(100% - 10px) 50%`,
      backgroundSize: '13px'
   }
}[format]);
