import Link from 'next/link';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { theme } from '../../constants/theme';

function Offers({ subHeadline }) {
  const [occasionPic, setOccasionPic] = useState('images/promo-occasion.png');
  const [neufPic, setNeufPic] = useState('images/promo-neuf.png');

  const sliderSettings = {
    className: 'slider',
    arrows: false,
    centerMode: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true
  };

  useEffect(() => {
    // Changement images src au resize
    function onResizeWidth(){
      const width = document.documentElement.clientWidth;
      if (width >= 768) {
        setNeufPic('images/promo-neuf.png');
        setOccasionPic('images/promo-occasion.png');
      } else {
        setNeufPic('images/promo-mobile.png');
        setOccasionPic('images/promo-mobile.png');
      }
    }
    window.addEventListener('resize', onResizeWidth);
    onResizeWidth();
  }, []);

  return (
    <SectionOffers>
      <h2 className="text-center">En ce moment dans votre <span className="blue">{subHeadline}</span></h2>

      <div className="container">
        <Slider {...sliderSettings}>
            <div className="card-promo">
              <Link href="/">
                <a>
                  <button className="btn btn-secondary btn-orange" type="button">Profitez-en !</button>
                  <NextImageLazy
                    src={requireStatic(neufPic)}
                    width={560}
                    height={310}
                    layout="responsive"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="card-promo">
              <Link href="/">
                <a>
                  <button className="btn btn-secondary btn-orange" type="button">Profitez-en !</button>
                  <NextImageLazy
                    src={requireStatic(occasionPic)}
                    width={560}
                    height={310}
                    layout="responsive"
                    alt=""
                  />
                </a>
              </Link>
            </div>
        </Slider>
      </div>
    </SectionOffers>
  );
};

Offers.propTypes = {
  subHeadline: PropTypes.string
};

export default Offers;

export const SectionOffers = styled.section`
  padding: 30px 0 10px;
  h2 {
    position: relative;
    margin: 0 auto 20px;
    dusplay: table;
    text-align: center;
    max-width: 280px;
  }
  .slick-list {
    max-width: 1140px;
    width: 100%;
  }
  .slider {
    .slick-slide {
      position: relative;
      margin: 0 5px;
      height: 300px;
      width: 300px;
      user-select: none;
      outline: 0;
      cursor: pointer;
      border-radius: 6px;
      overflow: hidden;
      &:hover .btn-secondary {
        background: ${theme.orange200}
      }
      *:not(.btn-secondary) {
        height: 300px;
        outline: 0;
        user-select: none;
      }
      .btn-secondary {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        margin: 0 auto;
        display: table;
        z-index: 2;
        max-width: 150px;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 30px 0;
    h2 {
      margin: 0 0 25px;
      max-width: 100%;
    }
    .slider {
      .slick-slide {
        margin: 0 10px;
        height: 300px;
        width: 560px;
        * {
          height: auto;
        }
        .btn-secondary {
          margin: 0;
          left: auto;
          right: 20px;
        }
      }
    }
  }
`
