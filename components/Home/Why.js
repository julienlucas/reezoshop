import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { theme } from '../../constants/theme';

function Why({ shop }) {
  return (
    <SectionWhy>
      <div className="container">
        <h2 className="text-center">Pourquoi choisir Reezocar ?</h2>

        <div className="row">
          <div className="col col-left">
            <div className="row row-2">

              <div className="col col-1">
                <ProgressRing percents={shop.recoPourcents} />
                <strong className="number">{shop.recoPourcents}%</strong>
                <p>de nos clients qui nous recommandent</p>
              </div>

              <div className="col col-2">
                <ProgressRing percents={shop.economiesPourcents} />
                <strong className="number">{shop.economiesPourcents}%</strong>
                <p>d’<strong>économie</strong> en moyenne sur votre budget</p>
              </div>

              <div className="col col-3">
                <ProgressRing percents={100} />
                <strong className="number"><span>+</span>{shop.clientsSatisfaits}</strong>
                <p>de clients <strong>satisfaits</strong></p>
              </div>

            </div>
          </div>
          <div className="col col-right">


            <div className="box-social-media-reviews">
              <div className="icon">
                <NextImageLazy
                  src={requireStatic('icons/facebook.svg')}
                  width={65}
                  height={65}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="box-text">
                <p className="notation">{shop.facebook.note}/5</p>
                <p className="reviews">sur {shop.facebook.avis} avis</p>
              </div>
            </div>

            <div className="box-social-media-reviews">
              <div className="icon">
                <NextImageLazy
                  src={requireStatic('icons/google.svg')}
                  width={65}
                  height={65}
                  layout="responsive"
                />
              </div>
              <div className="box-text">
                <p className="notation">{shop.google.note}/5</p>
                <p className="reviews">sur {shop.google.avis} avis</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionWhy>
  );
};

Why.propTypes = {
  shop: PropTypes.object.isRequired
};

ProgressRing.propTypes = {
  percents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Why;

function ProgressRing({ percents }) {
  const [radius, setRadius] = useState(50);
  const progress = percents;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  useEffect(() => {
    // Changement height / width du Progress Ring au resize
    function onResizeWidth(){
      const width = document.documentElement.clientWidth;
      if (width <= 768) {
        setRadius(30);
      } else {
        setRadius(50);
      }
    }
    window.addEventListener('resize', onResizeWidth);
    onResizeWidth();
  }, [])

  return (
    <div className="progress-ring">
      <svg
        height={radius * 2}
        width={radius * 2}
        >
        <circle
          stroke="#11589A"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={`${circumference} ${circumference}`}
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
      </svg>
    </div>
  );
};

export const SectionWhy = styled.section`
  padding: 0;
  .col-left {
    float: none;
    width: 100%;
    .row {
      margin-top: 20px;
    }
    .row-2 {
      position: relative;
      margin: 0 auto;
      display: table;
      max-width: 360px;
      width: 100%;
      display: block;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    .number {
      position: relative;
      top: 7px;
      float: left;
      font-size: 36px;
      font-weight: 700;
      color: ${theme.blue100};
      span {
        font-size: 24px;
      }
    }
    .col {
      height: 70px;
    }
    .col-1 {
      .progress-ring:before {
        background: url(${requireStatic('icons/pouce.svg')}) no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    .col-2 {
      .progress-ring:before {
        background: url(${requireStatic('icons/euros.svg')}) no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    .col-3 {
      .progress-ring:before {
        background: url(${requireStatic('icons/coeur.svg')}) no-repeat;
        background-position: 50% 50%;
        background-size: 24px;
      }
    }
    p {
      position: relative;
      margin-top: 10px;
      font-size: 16px;
      margin-left: 15px;
      float: right;
      width: 50%;
      text-align: left;
    }
    .progress-ring {
      float: left;
      display: flex;
      justify-content: flex-start;
      &:before {
        position: absolute;
        margin: 8px 0 0 9px;
        height: 43px;
        width: 43px;
        border-radius: 50%;
        border: 1px solid ${theme.blue100};
        z-index: -1;
        background-size: 24px;
        transform: rotate(0deg);
        content: '';
      }
    }
    strong {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .col-right {
    position: relative;
    margin: 0 auto;
    display: table;
    padding: 10px 0 0;
    float: none;
    width: 100%;
    max-width: 360px;
    height: auto;
    background: white;
    border-radius: 4px;
    .box-social-media-reviews {
      position: relative;
      margin: 0 auto;
      display: table;
      padding: 0 20px;
      width: 50%;
      float: left;
      &:first-child {
        margin-bottom: 40px;
      }
    }
    .icon {
      float: left;
      * {
       width: 44px;
      }
    }
    .box-text {
      margin-top: -10px;
      float: right;
      width: calc(100% - 60px);
    }
    p {
      float: left;
      width: auto;
      text-align: center;
    }
    p, strong {
      font-size: 20px;
    }
    .notation {
      font-size: 28px;
      font-weight: 700;
      color: ${theme.blue100}
    }
    .reviews {
      margin-top: -4px;
      font-size: 14px;
    }
  }
  @media (min-width: 768px) {
    .col-left {
      float: left;
      width: 60%;
      .row-2 {
        margin: -30px 0 0;
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(3, 1fr);
      }
      p, strong {
        font-size: 20px;
      }
      p {
        margin: 10px 0 0 0;
        float: none;
        width: auto;
        text-align: center;
      }
      .col-1, .col-2, .col-3 {
        .progress-ring:before {
          background-position: 50% 50%;
          background-size: 46px;
        }
      }
      .progress-ring {
        float: none;
        justity-content: center;
        transform: rotate(-90deg);
        margin: 9px 0 0 0;
        &:before {
          background-size: 46px;
          height: 82px;
          width: 82px;
          transform: rotate(90deg);
        }
      }
      .number {
        top: 15px;
        margin: 45px auto 20px;
        display: table;
        float: none;
        font-size: 36px;
      }
    }
    .col-right {
      margin: auto;
      padding: 40px;
      float: right;
      width: 33%;
      height: 257px;
      background: ${theme.grey300};
      .box-social-media-reviews {
        width: 200px;
        float: none;
        padding: 0;
      }
      .icon {
        float: left;
        * {
          width: 65px;
        }
      }
      .box-text {
        width: calc(100% - 90px);
      }
      .notation {
        font-size: 41px;
      }
      .reviews {
        font-size: 21px;
      }
    }
  }
`;