import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import SearchIcon from '../svgs/search.svg';
import styled from 'styled-components';
import { theme } from '../constants/theme';

const Autocomplete = ({ suggestions }) => {
  const node = useRef();
  const [open, setOpen] = useState(null);
  const [state, setState] = useState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
  });
  const { activeSuggestion, filteredSuggestions, showSuggestions , userInput } = state;

  const onChange = e => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  const onKeyDown = e => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  const onClickComp = e => {
    if (node.current.contains(e.target)) {
      setOpen(true);
      return;
    }

    setOpen(false);
  };

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
          <span>Suggestions</span>
          <ul>
            {filteredSuggestions.map((suggestion, i) =>
              <li className={i === activeSuggestion ? 'suggestion-active' : ''} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            )}
          </ul>
        </div>
      );
    }
  };

  return (
    <Suggestions ref={node} className={!open ? 'hide-list' : ''} onClick={e => onClickComp(e)}>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder="Marque, Modèle"
      />
      <SearchIcon className="icon" />
      {suggestionsListComponent}
    </Suggestions>
  );
};

Autocomplete.propTypes = {
  suggestions: PropTypes.array
};

export default Autocomplete;

export const Suggestions = styled.div`
  &.hide-list {
    .suggestions-list {
      visibility: hidden;
      opacity: 0;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
  }
  input {
    position: relative;
    padding: 0 14px;
    font-size: 16px;
    width: 100%;
    height: 47px;
    border-radius: 4px;
    border: 0;
    outline: 0;
    color: ${theme.grey100};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    &.active, &:focus, &:hover {
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
      color: ${theme.black};
      &::placeholder {
        color: ${theme.black};
      }
    }
  }
  .suggestions-list {
    position: absolute;
    margin-top: -12px;
    border: 1px solid ${theme.grey200}
    list-style: none;
    overflow-y: auto;
    padding: 10px 0;
    max-width: 100%;
    width: 100%;
    border-radius: 4px;
    background: white;
    visibility: visible;
    opacity: 1;
    box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
    z-index: 3;
    span {
      padding: 0 15px;
      text-transform: uppercase;
      color: ${theme.grey100};
      letter-spacing: .1em;
      font-weight: 700;
      font-size: 12px;
    }
    li {
      padding: 5px 15px;
      list-style: none;
      cursor: pointer;
      &:hover, &:focus {
        background: ${theme.grey400};
      }
    }
  }
  @media (min-width: 800px) {
    .suggestions-list {
      max-width: 395px;
    }
  }
`
