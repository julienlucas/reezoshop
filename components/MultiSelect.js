import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Input from './Input';

import { theme } from '../constants/theme';

const MultiSelect = ({ className, name, onChange, onReset, options, placeholder }) => {
   const node = useRef();
   const [open, setOpen] = useState(false);
   const [valuesInput, setValuesInput] = useState('');
   const [optionsSelected, setOptionsSeleted] = useState([]);

   const onSelect = (value, label) => {
      const index = optionsSelected.indexOf(value);

      if (index > -1) {
         const newActives = optionsSelected.filter((item) => item !== value).map((item) => item)
         setOptionsSeleted([...newActives])

         const newValuesInput = valuesInput.replaceAll(`${label},`,'')
         setValuesInput(newValuesInput.trim())
      } else {
         optionsSelected.push(value)
         setOptionsSeleted([...optionsSelected])

         setValuesInput(`${valuesInput && valuesInput.trim()} ${label && `${label},`}`)
      };
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
      const values = optionsSelected;
      if (Object.keys(optionsSelected).length > 0) onChange(values, name)
   }, [optionsSelected])

   useEffect(() => {
      if (onReset && optionsSelected.length !== 0) {
         setOptionsSeleted([])
         setValuesInput('')
      }
   }, [onReset])

   useEffect(() => {
      document.addEventListener('mousedown', onClick);
      return () => {
         document.removeEventListener('mousedown', onClick);
      };
   }, []);

   useEffect(() => {
      console.log(valuesInput)
   }, [valuesInput])

   return (
      <StyledMultiSelect className={className} ref={node}>
         <Input multiSelect type="text" placeholder={placeholder} value={!valuesInput.trim() ? placeholder : valuesInput} onClick={onClick} onChange={null} />

         <div className={`multi-select-popup ${open ? 'show' : ''}`}>
            <p>{placeholder}</p>

            <ul>
               {Object.keys(options).map(item =>
                  <li key={item} className={optionsSelected.includes(item) ? 'active' : ''}>
                     <div
                        className={item}
                        style={{ background: item }}
                        onClick={() => onSelect(item, options[item])}
                     >
                        <span>{className !== 'colorExt' && options[item]}</span>
                     </div>
                  </li>
               )}
            </ul>
         </div>
      </StyledMultiSelect>
   )
};

MultiSelect.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onReset: PropTypes.bool,
   options: PropTypes.object.isRequired,
   placeholder: PropTypes.string.isRequired
};

export default MultiSelect;

export const StyledMultiSelect = styled.div`
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
            &.gold::before {
               background: linear-gradient(#f7e994,#d9a600)
            };
            &.grey::before {
               background: #919191
            };
            &.silver::before {
               background: linear-gradient(#dcdcdc,#acacac);
            };
            &.blue::before {
               background: #0445d8;
            };
            &.green::before {
               background: #2fbd00;
            };
            &.beige::before {
               background: #c8ad7f
            };
            &.yellow::before {
               background: #ffd707
            };
            &.orange::before {
               background: #f34300
            };
            &.purple::before {
               background: #673ab7
            };
            &.burgundy::before {
               background: #bb0000
            };
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
      z-index: 5;
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