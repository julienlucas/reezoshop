import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { theme } from '../../constants/theme';

const Advisors = ({ advisors }) => {
  return (
    <SectionAdvisors>
      <div className="container">
        <h2 className="text-center">Vos interlocuteurs privilégiés</h2>

        <div className="row">
          {advisors?.map(advisor => <CardAdvisor key={advisor.nom} advisor={advisor} />)}
        </div>
      </div>
    </SectionAdvisors>
  );
};

export default Advisors;

const CardAdvisor = ({ advisor }) => {
  return (
    <div className="card-interlocuteur">
      <div className="picture">
        <NextImageLazy
          src={requireStatic(advisor.picture)}
          width={185}
          height={185}
          layout="responsive"
          alt=""
        />
      </div>
      <div className="box-text">
        <h3 className="text-center big">{advisor.nom}</h3>
        <hr />
        <p className="text-center job-title">{advisor.jobTitle}</p>
      </div>
    </div>
  );
};

Advisors.propTypes = {
  advisors: PropTypes.array.isRequired
};

CardAdvisor.propTypes = {
  advisor: PropTypes.object.isRequired
};

export const SectionAdvisors = styled.section`
  padding: 50px 0;
  .row {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 22px;
    .card-interlocuteur {
      padding: 25px 30px;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
      border-radius: 5.73741px;
      display: table-cell;
      .picture {
        position: relative;
        margin: 0 auto;
        display: table;
        max-width: 185px;
        max-height: 185px;
        width: 100%;
        height: 100%;
        * {
          border-radius: 50%;
        }
      }
      hr {
        height: 3px;
        width: 100px;
        background: ${theme.jaune100};
        border: 0;
      }
      .open-hours {
        > h3 {
          display: block;
        }
      }
      h3 {
        padding: 0;
        margin: 10px 0 14px;
      }
      .job-title {
        padding-top: 6px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media (min-width: 1200px) {
    .row {
      .card-interlocuteur {
        .box-text {
          min-height: auto;
        }
      }
    }
  }
  @media (min-width: 990px) {
    .row {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 550px) {
    .row {
      .card-interlocuteur {
        .box-text {
          min-height: 150px;
        }
      }
    }
  }
`