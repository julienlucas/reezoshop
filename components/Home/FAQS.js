import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { medias, theme } from '../../constants/theme';

const FAQS = ({ faqs }) => {
  return (
    <StyledFAQ>
      <div className="container">
        <h2 className="text-center">Foire aux questions</h2>

        <div className="row">
          <div className="col col-left">
            <NextImageLazy
              src={requireStatic('images/faq.png')}
              width={445}
              height={350}
              layout="fixed"
            />
          </div>
          <div className="col col-right">
            {faqs?.map((faq, i) => <div key={faq + i} className="box-question">
              {faq}
            </div>)}
          </div>
        </div>
      </div>
      <Button primary className="button">Accéder à la F.A.Q</Button>
    </StyledFAQ>
  );
};

FAQS.propTypes = {
  faqs: PropTypes.array.isRequired
};

export default FAQS;

export const StyledFAQ = styled.section`
  padding: 0 0 110px;
  .row {
    padding-top: 20px;
  }
  .col-left {
    display: none;
    float: left;
    width: 445px;
    * {
      border-radius: 6px;
    }
  }
  .col-right {
    padding-left: 0;
    float: none;
    width: 100%;
  }
  .box-question {
    margin-bottom: 10px;
    padding: 10px 50px 10px 10px;
    border: 1px solid ${theme.grey400};
    border-radius: 4px;
    background: url(${requireStatic('icons/arrow-bottom-blue.svg')}) no-repeat calc(100% - 20px) 50%;
    background-size: 14px;
  }
  .button {
    position: relative;
    margin: 50px auto 0;
    display: table;
  }
  ${medias.min768} {
    padding: 60px 0 110px;
    .row {
      padding-top: 40px;
    }
    .col-left {
      display: block;
    }
    .box-question {
      padding: 20px 50px 20px 20px;
    }
    .col-right {
      float: left;
      width: calc(100% - 445px);
      padding-left: 20px;
    }
  }
`