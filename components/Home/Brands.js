import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import CardBrand from '../CardBrand';

import { ReactSlickStyles } from '../../constants/react-slick-styles';
import { medias } from '../../constants/theme';

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

export const StyledBrands = styled.section`
  padding: 5px 0 30px;
  h2 {
    padding-left: 5px
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
    .slider {
      .slick-slide {
        margin: 0 10px;
      }
    }
  }
`;