import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Input from './Input';
import { theme } from '../constants/theme';


const MultiSelect = ({ className, options, placeholder }) => {
   const node = useRef();
   const [open, setOpen] = useState(false);
   const [actives, setActives] = useState([]);

   const onSelect = (value) => {
      const index = actives.indexOf(value);

      if (index > -1) {
         const newActives = actives.filter((item) => item !== value).map((item) => item)
         setActives([...newActives])
      } else {
         actives.push(value)
         setActives([...actives])
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
      document.addEventListener('mousedown', onClick);
      return () => {
         document.removeEventListener('mousedown', onClick);
      };
   }, []);

   return (
      <MultiSelectStyles className={className} ref={node}>
         <Input className="multi-select" type="text" placeholder={placeholder} onClick={onClick} />

         <div className={`multi-select-popup ${open ? 'show' : ''}`}>
            <p>{placeholder}</p>

            <ul>
               {options.map(o =>
                  <li key={o.value} className={actives.includes(o.value) ? 'active' : ''}>
                     <div
                        className={o.value}
                        style={{ background: o.color }}
                        onClick={() => onSelect(o.value)}
                     >
                        <span>{className !== 'colorsExt' && o.label}</span>
                     </div>
                  </li>
               )}
            </ul>
         </div>
      </MultiSelectStyles>
   )
};

MultiSelect.propTypes = {
   className: PropTypes.string,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string.isRequired
};

export default MultiSelect;

export const MultiSelectStyles = styled.div`
   input {
      cursor: pointer;
   }
   &.gearbox {
      ul {
         grid-template-columns: repeat(2, 1fr);
      }
   }
   &.colorsExt {
      ul {
         grid-template-columns: repeat(6, 1fr);
         li {
            width: 47px;
            height: 47px;
            transition: all .3s ease-out;
            &.active {
               border: 0;
               div, div.white {
                  border: 0;
               }
            }
         }
         div {
            border-radius: 4px;
            height: 100%;
            width: 100%;
            &.white {
               border: 1px solid ${theme.grey600}
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