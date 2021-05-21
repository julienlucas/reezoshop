import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Input from './Input';
import { medias, theme } from '../constants/theme';

const Autocomplete = ({ onSearch, suggestions }) => {
  const node = useRef();
  const router = useRouter();
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

  const onClick = e => {
    const { innerText } = e.currentTarget;

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
      const expression = filteredSuggestions[active];
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
    if (userInput) onSearch(userInput)
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
              <li className={i === active ? 'suggestion-active' : ''} key={suggestion}>
                <span onClick={onClick}>{suggestion}</span>
              </li>
            )}
          </ul>
        </div>
      );
    }
  };

  return (
    <Suggestions ref={node} className={!open ? 'hide-list' : ''} onClick={e => onClickComp(e)}>
      <Input
        search
        type="text"
        onKeyUp={onKeyUp}
        onChange={onChange}
        placeholder="Marque, Modèle"
      />
      {suggestionsListComponent}
    </Suggestions>
  );
};

Autocomplete.propTypes = {
  onSearch: PropTypes.func,
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
    p {
      padding: 0 15px;
      text-transform: uppercase;
      color: ${theme.grey100};
      letter-spacing: .1em;
      font-weight: 700;
      font-size: 12px;
    }
    li {
      list-style: none;
      cursor: pointer;
      span {
        padding: 5px 15px;
        width: 100%;
        display: block;
      }
      &:hover, &:focus, &.suggestion-active {
        background: ${theme.grey400};
      }
    }
  }
  ${medias.min800} {
    .suggestions-list {
      max-width: 395px;
    }
  }
`;
