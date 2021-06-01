import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import requireStatic from '../utils/require-static';

const BoxQuestion = ({ className, question, ...questionProps }) => (
   <StyledQuestion className={className} {...questionProps} >{question}</StyledQuestion>
);

BoxQuestion.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string.isRequired
};

export default BoxQuestion;

const StyledQuestion = styled.div(({ styles = {}, theme, medias, ...props }) => {
   return {
      marginBottom: 10,
      padding: '10px 50px 10px 10px',
      border: `1px solid ${theme.grey400}`,
      borderRadius: 4,
      background: `url(${requireStatic('icons/arrow-bottom-blue.svg')}) no-repeat calc(100% - 20px) 50%`,
      backgroundSize: 14,
      '@media screen and (min-width: 768px)': {
         padding: '20px 50px 20px 20px'
      },

      ...(props.faqWithAnswer ? questionFormat('faqWithAnswer', theme, medias) : {}),
      ...styles,
   }
});

const questionFormat = (format, theme) => ({
   faqWithAnswer: {
      padding: '11px 17px',
      color: `${theme.blue}`,
      fontSize: 16,
      fontWeight: '600',
      borderRadius: 4,
      '&.active': {
         borderBottomRightRadius: 0,
         borderBottomLeftRadius: 0,
      },
      '@media screen and (min-width: 768px)': {
         padding: '20px 50px 20px 20px',
         fontSize: 18
      }
   }
}[format]);