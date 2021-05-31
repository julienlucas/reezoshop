import Link from 'next/link';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import Button from '../Buttons/Button';
import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { medias, theme } from '../../constants/theme';

const Offers = ({ subHeadline }) => {
  const [neufPic, setNeufPic] = useState('images/autopromo-desktop-neuf.jpg');
  const [occasionPic, setOccasionPic] = useState('images/autopromo-desktop-occasion.jpg');

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
        setNeufPic('images/autopromo-desktop-neuf.jpg');
        setOccasionPic('images/autopromo-desktop-occasion.jpg');
      } else {
        setNeufPic('images/autopromo-mobile-neuf.jpg');
        setOccasionPic('images/autopromo-mobile-occasion.jpg');
      }
    }
    window.addEventListener('resize', onResizeWidth);
    onResizeWidth();
  }, []);

  return (
    <StyledOffers neufPic={neufPic} occassionPic={occasionPic}>
      <h2 className="text-center">En ce moment dans votre <span className="blue">{subHeadline}</span></h2>

      <div className="container">
        <Slider {...sliderSettings}>
          <div className="card-promo">
            <Link href="/">
              <a>
                <Button primary className="small-height">Profitez-en !</Button>
                <NextImageLazy
                  src={requireStatic(neufPic)}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="card-promo">
            <Link href="/">
              <a>
                <Button primary className="small-height">Profitez-en !</Button>
                <NextImageLazy
                  src={requireStatic(occasionPic)}
                  alt=""
                />
              </a>
            </Link>
          </div>
        </Slider>
      </div>
    </StyledOffers>
  );
};

Offers.propTypes = {
  subHeadline: PropTypes.string
};

export default Offers;

export const StyledOffers = styled.section`
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
    left: 10px;
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
      *:not(button) {
        height: 300px;
        outline: 0;
        user-select: none;
      }
      button {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        z-index: 2;
        width: 150px;
      }
    }
  }
  ${medias.min768} {
    padding: 30px 0;
    h2 {
      margin: 0 0 25px;
      max-width: 100%;
    }
    .slider {
      left: 0;
      .slick-slide {
        margin: 0 10px;
        height: 300px;
        width: 560px;
        * {
          height: auto;
          width: 560px;
        }
        button {
          left: auto;
          right: 20px;
          width: auto;
        }
      }
    }
  }
`
