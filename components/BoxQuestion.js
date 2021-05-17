import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { medias, theme } from '../constants/theme';
import requireStatic from '../utils/require-static';

const BoxQuestion = ({ question }) => (
   <StyledQuestion>{question}</StyledQuestion>
);

BoxQuestion.propTypes = {
  question: PropTypes.string.isRequired
};

export default BoxQuestion;

export const StyledQuestion = styled.div`
   margin-bottom: 10px;
   padding: 10px 50px 10px 10px;
   border: 1px solid ${theme.grey400};
   border-radius: 4px;
   background: url(${requireStatic('icons/arrow-bottom-blue.svg')}) no-repeat calc(100% - 20px) 50%;
   background-size: 14px;
   ${medias.min768} {
      padding: 20px 50px 20px 20px;
   }
`