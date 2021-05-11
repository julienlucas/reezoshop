import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import requireStatic from '../utils/require-static';
import { theme } from '../constants/theme';

const Select = ({ className, defaultValue, name, onChange, onClick, onReset, options, placeholder }) => {
   const node = useRef();

   const [state, setState] = useState({
      selected: null,
      opened: false
   });

   const onSelect = option => {
      onChange(option.value, name);
      setState({
         selected: option,
         opened: false
      });
   };

   const onOpen = e => {
      // On inside click
      if (node.current.contains(e.target)) {
         setState(prevState => {
            return {
            ...prevState,
            opened: true
            }
         });

         onClick()
         return;
      }

      // On outside click
      setState(prevState => {
         return {
         ...prevState,
         opened: false
         }
      });

   };

   useEffect(() => {
      setState({
         opened: false
      });
   }, [onReset])

   useEffect(() => {
      document.addEventListener('mousedown', onOpen);

      return () => {
         document.removeEventListener('mousedown', onOpen);
      };
   }, []);

   const getOptions = () => {
      return options.map(o => <Option className={className} key={o.value} option={o} onSelect={onSelect} />);
   };

   return (
      <SelectMenu className={className} ref={node} onClick={e => onOpen(e)}>
         <span>{state.selected ? state.selected.label : placeholder || defaultValue}</span>
         <ul className={state.opened ? 'show': 'hide'}>{getOptions()}</ul>
      </SelectMenu>
   );
};

Select.propTypes = {
   className: PropTypes.string,
   defaultValue: PropTypes.string,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string,
   name: PropTypes.string,
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   onReset: PropTypes.bool
};

Option.propTypes = {
   className: PropTypes.string,
   option: PropTypes.object,
   onSelect: PropTypes.func
};

export default Select;

function Option ({ className, option, onSelect }) {
   const router = useRouter();

   if (className === 'select-agency') {
      return (
         <li><a href={`https://${option.value}.reezocar.com${router.pathname}`} title="">{option.label}</a></li>
      )
   }

   return (
      <li><span onClick={() => onSelect(option)}>{option.label}</span></li>
   );
};

export const SelectMenu = styled.div`
   margin-bottom: 16px;
   font-size: 13px;
   line-height: 36px;
   padding: 0 7px;
   background: white url(${requireStatic('icons/arrow-bottom-light.svg')}) no-repeat calc(100% - 10px) 50%;
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
   &.select-agency {
      position: absolute;
      top: 10px;
      left: 160px;
      width: auto;
      font-size: 20px;
      text-transform: capitalize;
      padding-right: 35px;
      background: transparent url(${requireStatic('icons/arrow-bottom.svg')}) no-repeat calc(100% - 5px) 52%;
      background-size: 18px;
      border: 0;
      ul {
         left: -35px;
         min-width: 290px;
         z-index: 9;
         a {
            color: ${theme.black};
            text-decoration: none;
         }
      }
      @media (min-width: 768px) {
         top: 30px;
         left: 240px;
      }
   }
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