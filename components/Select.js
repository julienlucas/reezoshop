import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { theme } from '../constants/theme';

function Select({ name, onChange, options, placeholder, onReset }) {
   const [state, setState] = useState({
      selected: null,
      opened: false
   });

   const onOpen = () => {
      setState(prevState => {
         return {
         ...prevState,
         opened: !state.opened
         }
      });
   };

   const onSelect = (option) => {
      onChange(name, option);
      setState({
         selected: option,
         opened: false
      });
   };

   useEffect(() => {
      setState({
         opened: false
      });
   }, [onReset])

   const getOptions = () => {
      return options.map(o => <Option key={o.label} option={o} onSelect={onSelect} />);
   };

   return (
      <SelectMenu onClick={onOpen} className="select">
         <span>{state.selected ? state.selected.value : placeholder}</span>
         <ul className={state.opened ? 'show': 'hide'}>{getOptions()}</ul>
      </SelectMenu>
   );
};

export default Select;

function Option (props) {
   const onSelect = (e) => {
      e.preventDefault();
      props.onSelect(props.option);
   }

   return (
      <li onClick={onSelect}>{props.option.value}</li>
   );
};

Select.propTypes = {
   options: PropTypes.object.isRequired,
   placeholder: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   reset: PropTypes.bool
};

export const SelectMenu = styled.div`
   margin-bottom: 16px;
   font-size: 13px;
   line-height: 36px;
   padding: 0 7px;
   background: white url('/icons/arrow-bottom-light.svg') no-repeat calc(100% - 10px) 50%;
   background-size: 13px;
   color: ${theme.black};
   border: 0.811966px solid ${theme.grey200};
   border-radius: 3.24786px;
   display: block;
   width: 100%;
   height: 36px;
   box-shadow: none;
   outline: 0;
   appearance: none;
   cursor: pointer;
   * {
      cursor: pointer;
   }
   ul {
      position: absolute;
      list-style: none;
      margin: 36px 0 0 41px;
      background: white;
      left: 0;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      min-width: 268px;
      z-index: 3;
      li {
         display: block;
         padding: 5px 20px;
         border-bottom: 1px solid ${theme.grey200};
         text-decoration: none;
         color: ${theme.black};
         &:last-child {
            border-color: transparent;
         }
      }
      &.show{
         display:inline-block;
      }
      &.hide{
         display:none;
      }
   }
`;