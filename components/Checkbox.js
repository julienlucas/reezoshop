import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { theme } from '../constants/theme';

const Checkbox = ({ id, label, name, onChange, onReset }) => {
   const [value, setValue] = useState(null);

   const onClick = () => {
      if (value === null) {
         setValue(true)
      }
      else {
         setValue(!value)
      }
   };

   useEffect(() => {
      if (value !== null) {
         onChange(value, name, id)
      }
   }, [value])

   useEffect(() => {
      if (onReset) setValue(null)
   }, [onReset])

   return (
      <CustomCheckbox>
         <input type="checkbox" className="checkbox" id={id} onClick={onClick} checked={value || false} readOnly />
         <label htmlFor={id}>{label}</label>
      </CustomCheckbox>
   );
};

Checkbox.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onReset: PropTypes.bool
};

export default Checkbox;

export const CustomCheckbox = styled.div`
   input.checkbox {
      position: relative;
      opacity: 0;
      margin: 15px 0 30px 0;
      & + label {
         position: relative;
         left: -6px;
         cursor: pointer;
         color: ${theme.black};
         padding: 0;
         &:before {
            content: '';
            margin-top: -5px;
            margin-right: 10px;
            margin-left: -12px;
            display: inline-block;
            vertical-align: text-top;
            width: 24px;
            height: 24px;
            background: white;
            border: 1px solid ${theme.grey200};
            border-radius: 3.24786px;
         }
      }
      &:hover + label:before {
         background: white;
      }
      &:focus + label:before {
         box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
      }
      &:checked + label:before {
         background: white;
      }
      &:disabled + label:before {
         box-shadow: none;
         background: #ddd;
      }
      &:checked + label:after {
         position: absolute;
         left: -5px;
         top: 6px;
         background: ${theme.blue100};
         width: 3px;
         height: 3px;
         box-shadow:
            2px 0 0 ${theme.blue100},
            5px 0 0 ${theme.blue100},
            5px -2px 0 ${theme.blue100},
            5px -4px 0 ${theme.blue100},
            5px -6px 0 ${theme.blue100},
            5px -8px 0 ${theme.blue100};
         transform: rotate(45deg);
         content: '';
      }
   }
`;