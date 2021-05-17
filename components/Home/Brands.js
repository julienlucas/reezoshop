import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import NextImageLazy from '../../utils/imgLazy';
import requireStatic from '../../utils/require-static';
import { ReactSlickStyles } from '../../constants/react-slick-styles';
import { medias, theme } from '../../constants/theme';

const Brands = ({ brands }) => {
  const sliderSettings = {
    className: 'slider',
    arrows: false,
    centerMode: false,
    adaptiveHeight: true,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
  };

  return (
    <StyledBrands>
      <div className="container">
        <h2 className="small">Les constructeurs populaires</h2>

        <Slider {...sliderSettings}>
          {brands?.map(brand => <CardBrand key={brand.nom} brand={brand} />)}
        </Slider>
        <ReactSlickStyles/>
      </div>
    </StyledBrands>
  );
};

Brands.propTypes = {
  brands: PropTypes.array.isRequired
};

export default Brands;

const CardBrand = ({ brand }) => {
  return (
    <div className="card-automaker">
      <div className="logo">
        <NextImageLazy
          src={requireStatic(brand.picture)}
          alt="Picture of the author"
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="box-text">
        <strong>{brand.nom}</strong>
        <p className="prix">à partir de 5000€</p>
      </div>
    </div>
  );
};

CardBrand.propTypes = {
  brand: PropTypes.object.isRequired
};

export const StyledBrands = styled.section`
  padding: 5px 0 30px;
  h2 {
    padding-left: 5px
  }
  p, strong {
    position: relative;
    margin: 0 auto;
    display: table;
    padding: 0;
    text-align: center;
    width: 100%;
    font-size: 14px;
    line-height: 1;
    color: ${theme.black}
  }
  strong {
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 18px;
  }
  .card-automaker {
    padding: 0;
    height: 125px;
    width: 130px;
    user-select: none;
    outline: 0;
    cursor: pointer;
    border: 0.867528px solid ${theme.grey200};
    border-radius: 3.47011px;
    .logo {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      * {
        position: absolute;
        width: 100px;
        height: 80px;
        width: auto;
        height: auto;
        z-index: 2;
      }
    }
  }
  .slick-list {
    padding-left: 8px;
    max-width: 1160px;
    width: 100%;
  }
  .slider {
    .slick-slide {
      margin: 0 5px;
      * {
        outline: 0;
        user-select: none
      }
    }
  }
  ${medias.min768} {
    padding: 20px 0;
    .container {
      padding: 0 30px;
    }
    .card-automaker {
      padding: 13px 0;
      height: 154px;
      width: 173px;
    }
    .slider {
      .slick-slide {
        margin: 0 10px;
      }
    }
  }
`;