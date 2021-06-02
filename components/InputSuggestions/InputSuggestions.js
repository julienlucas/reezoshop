import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Suggestion from './Suggestion';

const Autocomplete = ({ suggestionsData, onChoice, onSearch, placeholder, ...inputSuggestionsProps }) => {
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
      <StyledSuggestions { ...inputSuggestionsProps } ref={node} className={!open ? 'hide-list' : ''} onClick={e => onClickComp(e)}>
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
   suggestionsData: PropTypes.array.isRequired,
   onChoice: PropTypes.func,
   onSearch: PropTypes.func,
   placeholder: PropTypes.string.isRequired
};

export default Autocomplete;

const StyledSuggestions = styled.div(({ styles = {}, theme, ...props }) => {
   return {
      position: 'relative',
      '&.hide-list': {
         '.suggestions-list': {
            visibility: 'hidden',
            opacity: '0',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
         }
      },
      '*': {
         userSelect: 'auto'
      },
      '.suggestions-list': {
         position: 'absolute',
         marginTop: -12,
         border: `1px solid ${theme.grey200}`,
         listStyle: 'none',
         overflowY: 'auto',
         maxWidth: '100%',
         width: '100%',
         borderRadius: 4,
         background: 'white',
         visibility: 'visible',
         opacity: '1',
         boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.12)',
         zIndex: 99999,
         'p': {
            padding: '0 15px',
            textTransform: 'uppercase',
            color: `${theme.grey100}`,
            letterspacing: '.1em',
            fontWeight: '700',
            fontSize: 12,
         },
         'span' :{
            display: 'inline'
         }
      },
      ...(props.inNavBar ? inputSuggestionsFormat('inNavBar', theme) : {}),
      ...styles,
   }
});

const inputSuggestionsFormat = (format, theme) => ({
   inNavBar: {
      position: 'fixed',
      top: 24,
      right: 90,
      zIndex: 6,
      display: 'none',
      'input': {
         border: `1px solid ${theme.grey200}`,
         boxShadow: 'none',
         '&:hover, &:focus': {
            boxShadow: 'none'
         }
      },
      '@media screen and (min-width: 820px)': {
         display: 'block'
      }
   }
}[format])