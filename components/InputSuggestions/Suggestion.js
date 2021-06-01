import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';

const Suggestion = ({ className, index, onClick, suggestion }) => (
   <StyledSuggestion className={className ? 'active' : ''}>
      <Button clear id={`suggestion-${index}`} onClick={() => onClick(suggestion)}>{suggestion}</Button>
   </StyledSuggestion>
);

Suggestion.propTypes = {
   className: PropTypes.bool.isRequired,
   index: PropTypes.number.isRequired,
   onClick: PropTypes.func.isRequired,
   suggestion: PropTypes.string.isRequired
};

export default Suggestion;

export const StyledSuggestion = styled.li(({ theme }) => {
   return {
      listStyle: 'none',
      cursor: 'pointer',
      margin: 0,
      display: 'block',
      width: '100%',
      button: {
         padding: '5px 15px',
         borderRadius: 0
      },
      '&:hover button, &:focus button, &.active button': {
         background: theme.grey400
      }
   }
});