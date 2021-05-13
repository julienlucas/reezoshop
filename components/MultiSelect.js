import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Input from './Input';

import { theme } from '../constants/theme';

const MultiSelect = ({ className, name, onChange, onReset, options, placeholder }) => {
   const node = useRef();
   const [open, setOpen] = useState(false);
   const [optionsSelected, setOptionsSeleted] = useState([]);

   const onSelect = (value) => {
      let index = optionsSelected.indexOf(value);


      if (name === 'doors') {
         index = optionsSelected.indexOf(value[0])
         if (index > -1) {
            const newActives = optionsSelected.filter((item) => item !== value[0]).filter((item) => item !== value[1]).filter((item) => item !== value[2]).map((item) => item)
            setOptionsSeleted([...newActives])
         } else {
            optionsSelected.push(...value)
            setOptionsSeleted([...optionsSelected])
         }
         return
      }

      if (index > -1) {
         const newActives = optionsSelected.filter((item) => item !== value).map((item) => item)
         setOptionsSeleted([...newActives])
      } else {
         optionsSelected.push(value)
         setOptionsSeleted([...optionsSelected])
      }
   };

   const onClick = e => {
      // On inside click
      if (node.current.contains(e.target)) {
         setOpen(true);
         return;
      }
      // On outside click
      setOpen(false);
   };

   useEffect(() => {
      const value = optionsSelected;
      onChange(value, name)
   }, [optionsSelected])

   useEffect(() => {
      if (onReset && optionsSelected.length !== 0) setOptionsSeleted([])
   }, [onReset])

   useEffect(() => {
      document.addEventListener('mousedown', onClick);
      return () => {
         document.removeEventListener('mousedown', onClick);
      };
   }, []);

   return (
      <MultiSelectStyled className={className} ref={node}>
         <Input multiSelect type="text" value={placeholder} onClick={onClick} onChange={null} />

         <div className={`multi-select-popup ${open ? 'show' : ''}`}>
            <p>{placeholder}</p>

            <ul>
               {options.map(o =>
                  <li key={o.value} className={optionsSelected.includes(o.value) || optionsSelected.includes(o.value[0]) ? 'active' : ''}>
                     <div
                        className={o.value}
                        style={{ background: o.color }}
                        onClick={() => onSelect(o.value)}
                     >
                        <span>{className !== 'colorExt' && o.label}</span>
                     </div>
                  </li>
               )}
            </ul>
         </div>
      </MultiSelectStyled>
   )
};

MultiSelect.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onReset: PropTypes.bool,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string.isRequired
};

export default MultiSelect;

export const MultiSelectStyled = styled.div`
   &.gearbox {
      ul {
         grid-template-columns: repeat(2, 1fr);
      }
   }
   &.colorExt {
      ul {
         grid-template-columns: repeat(6, 1fr);
         li {
            width: 47px;
            height: 47px;
            border: 0;
            &.active {
               div {
                  &::before {
                     height: 48px;
                     width: 48px;
                  }
                  &::before, &::after {
                     top: calc(50%);
                     border-radius: 4px;
                  }
               }
            }
         }
         div {
            position: relative;
            border-radius: 4px;
            height: 47px;
            width: 47px;
            &::before, &::after {
               position: absolute;
               left: 0;
               right: 0;
               margin: 0 auto;
               display: table;
               top: 50%;
               transform: translateY(-50%);
               content: '';
               background: inherit;
               width: 27px;
               height: 27px;
               border-radius: 2px;
               transition: all .15s ease-out;
               z-index: 3;
            }
            &::after {
               top: calc(50% - 1px);
               width: 47px;
               height: 48px;
               background: white;
               z-index: 2;
               border: 1px solid ${theme.grey600};
            }
            &.white {
               &::before {
                  border: 1px solid ${theme.grey600}
               }
            }
         }
      }
   }
   .multi-select-popup {
      position: absolute;
      margin-top: -7px;
      padding: 20px;
      background: white;
      border-radius: 4px;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
      opacity: 0;
      visibility: hidden;
      z-index: 8;
      &.show {
         opacity: 1;
         visibility: visible;
      }
   }
   p {
      margin: 0 7px 7px 0;
      text-transform: uppercase;
      color: ${theme.grey100};
      letter-spacing: .1em;
      font-weight: 700;
      font-size: 12px;
   }
   ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 9px;
      li {
         list-style: none;
         height: 34px;
         line-height: 34px;
         font-size: 12px;
         font-weight: 700;
         border-radius: 4px;
         border: 1px solid ${theme.grey600};
         color: ${theme.grey100};
         cursor: pointer;
         transition: all .05s ease-out;
         div {
            display: block;
            width: 115px;
            text-align: center;
         }
         &.active {
            background: ${theme.black};
            border-color: ${theme.black};
            color: white;
         }
      }
   }
`;