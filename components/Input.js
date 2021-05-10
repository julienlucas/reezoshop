import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { theme } from '../constants/theme';

const Input = ({ name, onChange, onReset, placeholder, type }) => {
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
         type={type}
         name={name}
         placeholder={placeholder}
         value={!onReset && state}
         onChange={e => onChangeInput(e)}
      />
   );
};

Input.propTypes = {
   name: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onReset: PropTypes.bool,
   placeholder: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired
};

export default Input;

export const InputStyled = styled.input`
   margin-bottom: 16px;
   color: ${theme.black};
   border: 1px solid ${theme.grey200};
   border-radius: 3.24786px;
   box-shadow: none;
   outline: 0;
   box-shadow: none;
   appearance: none;
   font-size: 13px;
   background: white;
   &[type="number"], &[type="text"] {
      height: 36px;
      line-height: 1;
   }
   &[type="number"] {
      padding: 0 7px;
      display: block;
      width: 100%;
      &::placeholder {
         color: ${theme.black} !important;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
         -webkit-appearance: none;
         margin: 0;
      }
   }
`;