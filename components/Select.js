import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import requireStatic from '../utils/require-static';

const Select = ({ children, className, defaultValue, name, onChange, onClick, onReset, options, placeholder , ...selectProps }) => {
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

         if (selectProps.agencies) onClick()
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
      <SelectStyled className={className} ref={node} {...selectProps} onClick={e => onOpen(e)}>
         <span>{state.selected ? state.selected.label : placeholder || defaultValue}</span>
         <ul className={state.opened ? 'show': 'hide'}>{getOptions()}</ul>
      </SelectStyled>
   );
};

Select.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
   defaultValue: PropTypes.string,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string,
   name: PropTypes.string,
   onClick: PropTypes.func,
   onChange: PropTypes.func,
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

const SelectStyled = styled.div(({ styles = {}, theme, ...props }) => {
   return {
      marginBottom: 16,
      fontSize: '13px',
      lineHeight: 36,
      padding: '0 7px',
      background: `white url(${requireStatic('icons/arrow-bottom-light.svg')}) no-repeat calc(100% - 10px) 50%`,
      backgroundSize: 13,
      color: theme.black,
      border: `0.811966px solid ${theme.grey200}`,
      borderRadius: 3.24786,
      display: 'block',
      width: '100%',
      height: '36px',
      boxShadow: 'none',
      outline: 0,
      appearance: 'none',
      cursor: 'pointer',
      ul: {
         position: 'absolute',
         margin: '36px 0 0 41px',
         background: 'white',
         left: 0,
         boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
         borderRadius: 4,
         minWidth: 268,
         zIndex: 5,
         '&.show': {
            display:'inline-block',
         },
         '&.hide': {
            display: 'none'
         },
         li: {
            display: 'block',
            padding: '5px 20px',
            borderBottom: `1px solid ${theme.grey200}`,
            textDecoration: 'none',
            color: theme.black,
            '&:last-child': {
               borderColor: 'transparent'
            }
         },
      },

      ...(props.agencies ? selectFormat('agencies', theme) : {}),
      ...(props.sorting ? selectFormat('sorting', theme) : {}),
      ...styles
   }
});

const selectFormat = (format, theme) => ({
   agencies: {
      position: 'absolute',
      top: 10,
      left: 160,
      width: 'auto',
      fontSize: '20px',
      lineHeight: '36px',
      color: theme.black,
      textTransform: 'capitalize',
      paddingRight: 35,
      background: `transparent url(${requireStatic('icons/arrow-bottom.svg')}) no-repeat calc(100% - 5px) 52%`,
      backgroundSize: 18,
      border: 0,
      ul: {
         position: 'absolute',
         margin: '41px 0 0 41px',
         background: 'white',
         boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
         borderRadius: 4,
         minWidth: 268,
         left: -155,
         minWdth: 290,
         zIndex: 9,
         '&.show': {
            display:'inline-block',
         },
         '&.hide': {
            display: 'none'
         },
         a: {
            color: theme.black,
            textDecoration: 'none'
         },
         li: {
            display: 'block',
            padding: '5px 20px',
            borderBottom: `1px solid ${theme.grey200}`,
            textDecoration: 'none',
            color: theme.black,
            '&:last-child': {
               borderColor: 'transparent'
            }
         },
      },
      '@media screen and (max-width: 780px)': {
         '&.menu-open': {
            filter: 'grayscale(1) brightness(600%)',
            ul: {
               filter: 'brightness(100%)',
               '*': {
                  filter: 'brightness(0%)'
               }
            }
         }
      },
      '@media screen and (min-width: 768px)': {
         top: 30,
         left: 240
      }
   },
   sorting: {
      position: 'absolute',
      marginTop: -27,
      right: 25,
      float: 'right',
      maxWidth: 200,
      width: '100%',
      fontSize: 13,
      lineHeight: '36px',
      color: theme.black,
      ul: {
         position: 'absolute',
         margin: '36px 0 0 41px',
         background: 'white',
         lineHeight: '36px',
         left: 'auto',
         right: 0,
         boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
         borderRadius: 4,
         minWidth: 268,
         zIndex: 5,
         '&.show': {
            display:'inline-block',
         },
         '&.hide': {
            display: 'none'
         },
         li: {
            display: 'block',
            padding: '5px 20px',
            borderBottom: `1px solid ${theme.grey200}`,
            textDecoration: 'none',
            color: theme.black,
            '&:last-child': {
               borderColor: 'transparent'
            }
         }
      }
   }
}[format])