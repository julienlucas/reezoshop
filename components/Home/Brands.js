import NextImageLazy from '../../utils/imgLazy';
import React from 'react';
import Slider from 'react-slick';
import requireStatic from '../../utils/require-static';
import { SectionBComp } from './styles';

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
    <SectionBComp>
      <div className="container">
        <h2 className="small">Les constructeurs populaires</h2>

        <Slider {...sliderSettings}>
          {brands?.map(brand => <CardBrand key={brand.nom} brand={brand} />)}
        </Slider>
      </div>
    </SectionBComp>
  );
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