import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Input from '../Input';
import Suggestion from './Suggestion';

import graphQLQuery from '../../utils/graphql';
import getSuggestions from './getSuggestions.graphql';
import { medias, theme } from '../../constants/theme';

const getSuggestionsQuery = getSuggestions.loc.source.body;

const Autocomplete = ({ className }) => {
   const node = useRef();
   const router = useRouter();
   const [queryParams, setQueryParams] = useState({ "query": ""});
   const [suggestions, setSuggestions] = useState([]);
   const [open, setOpen] = useState(null);
   const [state, setState] = useState({
      active: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
   });
   const { active, filteredSuggestions, showSuggestions , userInput } = state;

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

   const onClick = innerText => {
      setState({
         active: 0,
         filteredSuggestions: [],
         showSuggestions: false,
         userInput: innerText
      });

      router.push(`/recherche?match=${innerText}`);
   };

   const onKeyUp = e => {
      e.preventDefault();
      // Lorsque press enter
      if (e.keyCode === 13) {
         const index = active;
         const expression = filteredSuggestions[index];
         setState({ userInput: expression });
         router.push(`/recherche?match=${expression}`);
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
         onSearch(userInput)

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
                     className={i === active ? true : false}
                     index={i}
                     key={suggestion}
                     onClick={onClick}
                     suggestion={suggestion}
                  />
               )}
            </ul>
         </div>
         );
      }
   };

   const onSearch = (inputSearch) => {
      setQueryParams({ "query": inputSearch });
   };

   const fetchGraphQL = async (query, queryParams) => {
      const res = await graphQLQuery(query, queryParams)
      return res
   };

   useEffect(() => {
      const arrayFormated = [];

      fetchGraphQL(getSuggestionsQuery, queryParams)
         .then(res => res.suggestions.suggestions.map(item => arrayFormated.push(item.query)))
         .then(() => setSuggestions(arrayFormated))
   }, [queryParams])

   return (
      <StyledSuggestions ref={node} className={`${className} ${!open ? 'hide-list' : ''}`} onClick={e => onClickComp(e)}>
         <Input
         search
         id="input-suggest"
         type="text"
         onKeyUp={onKeyUp}
         onChange={onChange}
         value={state.userInput}
         placeholder="Marque, Modèle"
         />
         {suggestionsListComponent}
      </StyledSuggestions>
   );
};

Autocomplete.propTypes = {
   className: PropTypes.string
};

export default Autocomplete;

export const StyledSuggestions = styled.div`
   &.search-page {
      position: fixed;
      top: 23px;
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
      z-index: 3;
      p {
         padding: 0 15px;
         text-transform: uppercase;
         color: ${theme.grey100};
         letter-spacing: .1em;
         font-weight: 700;
         font-size: 12px;
      }
   }
   ${medias.min('820')} {
      &.search-page {
         display: block;
      }
   }
   ${medias.min800} {
      .suggestions-list {
         max-width: 395px;
      }
   }
`;