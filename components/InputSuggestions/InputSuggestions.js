import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Suggestion from './Suggestion';

import { medias, theme } from '../../constants/theme';

const Autocomplete = ({ className, suggestionsData, onChoice, onSearch, placeholder }) => {
   const node = useRef();
   const [suggestions, setSuggestions] = useState([]);
   const [open, setOpen] = useState(null);
   const [state, setState] = useState({
      active: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
   });
   const { active, filteredSuggestions, showSuggestions , userInput } = state;

   useEffect(() => {
      setSuggestions(suggestionsData)
   }, [suggestionsData])

   const onChange = (value) => {
      const filteredSuggestions = suggestions.filter(
         suggestion =>
         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      setState({
         active: 0,
         filteredSuggestions,
         showSuggestions: true,
         userInput: value
      });
   };

   const onClick = (index, innerText) => {
      setState(prevState => {
         return {
            ...prevState,
            active: index,
            showSuggestions: false,
            userInput: innerText
         }
      });

      onChoice(index);
   };

   const onKeyUp = e => {
      e.preventDefault();
      // Lorsque press enter
      if (e.keyCode === 13) {
         const index = active;
         const expression = filteredSuggestions[index];
         setState(prevState => {
            return {
               ...prevState,
               userInput: expression
            }
         });

         onChoice(index);
      }

      // Lorsque press up arrow
      if (e.keyCode === 38) {
         if (active === 0) return;

         setState(prevState => {
            return {
               ...prevState,
               active: prevState.active - 1
            }
         })
      }

      // Lorsque press down arrow
      if (e.keyCode === 40) {
         if (active - 1 === filteredSuggestions.length) return;

         setState(prevState => {
            return {
               ...prevState,
               active: prevState .active + 1
            }
         })
      }
   };

   const onClickComp = e => {
      // On inside click
      if (node.current.contains(e.target)) {
         setOpen(true);
         return;
      }
      // On outside click
      setOpen(false);
   };

   useEffect(() => {
      if (userInput) {
         onSearch(userInput);

         // Mets le text tapé en highlight dans la liste de suggestions
         const inputVal = document.getElementById('input-suggest').value;
         const startIndex = state.userInput.indexOf(inputVal);

         if (startIndex !== -1) {

            const endingIndex = startIndex + inputVal.length;

            let highlightedText;
            suggestions.map((item, i) => {
               highlightedText = suggestions[i].slice(0,startIndex)
               highlightedText += '<span style=\'font-weight:400;\'>'
               highlightedText += suggestions[i].slice(startIndex,endingIndex)
               highlightedText += '</span>'
               highlightedText += suggestions[i].slice(endingIndex)
               if (document.getElementById(`suggestion-${i}`)) document.getElementById(`suggestion-${i}`).innerHTML = highlightedText

               return
            })
         }
      }
   }, [userInput])

   useEffect(() => {
      document.addEventListener('mousedown', onClickComp);
      return () => {
         document.removeEventListener('mousedown', onClickComp);
      };
   }, []);

   let suggestionsListComponent;

   if (showSuggestions && userInput) {
      if (state.filteredSuggestions.length) {
         suggestionsListComponent = (
         <div className="suggestions-list">
            <p>Suggestions</p>
            <ul>
               {filteredSuggestions.map((suggestion, i) =>
                  <Suggestion
                     className={i === active}
                     index={i}
                     key={suggestion + i}
                     onClick={(innerText) => onClick(i, innerText)}
                     suggestion={suggestion}
                  />
               )}
            </ul>
         </div>
         );
      }
   };

   return (
      <StyledSuggestions ref={node} className={`${className} ${!open ? 'hide-list' : ''}`} onClick={e => onClickComp(e)}>
         <Input
            search
            id="input-suggest"
            type="text"
            onKeyUp={onKeyUp}
            onChange={onChange}
            value={state.userInput}
            placeholder={placeholder}
         />
         {suggestionsListComponent}
      </StyledSuggestions>
   );
};

Autocomplete.propTypes = {
   className: PropTypes.string,
   suggestionsData: PropTypes.array.isRequired,
   onChoice: PropTypes.func,
   onSearch: PropTypes.func,
   placeholder: PropTypes.string.isRequired
};

export default Autocomplete;

export const StyledSuggestions = styled.div`
   position: relative;
   &.in-header {
      position: fixed;
      top: 24px;
      right: 90px;
      z-index: 6;
      display: none;
      input {
         border: 1px solid ${theme.grey200};
         box-shadow: none;
         &:hover, &:focus {
            box-shadow: none;
         }
      }
   }
   &.hide-list {
      .suggestions-list {
         visibility: hidden;
         opacity: 0;
         box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
   }
   * {
      user-select: auto;
   }
   .suggestions-list {
      position: absolute;
      margin-top: -12px;
      border: 1px solid ${theme.grey200}
      list-style: none;
      overflow-y: auto;
      max-width: 100%;
      width: 100%;
      border-radius: 4px;
      background: white;
      visibility: visible;
      opacity: 1;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
      z-index: 99999;
      p {
         padding: 0 15px;
         text-transform: uppercase;
         color: ${theme.grey100};
         letter-spacing: .1em;
         font-weight: 700;
         font-size: 12px;
      }
      span {
         display: inline;
      }
   }
   ${medias.min(820)} {
      &.in-header {
         display: block;
      }
   }
`;