import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import BoxQuestion from '../BoxQuestion';

import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { medias } from '../../constants/theme';

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
            {faqs?.map((faq, i) => <BoxQuestion key={faq + i} question={faq} />)}
          </div>
        </div>
      </div>
      <Button primary>Accéder à la F.A.Q</Button>
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
  button {
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
    .col-right {
      float: left;
      width: calc(100% - 445px);
      padding-left: 20px;
    }
  }
`