import NextImageLazy from '../../utils/imgLazy';
import React from 'react';
import Slider from 'react-slick';
import requireStatic from '../../utils/require-static';
import { SectionBComp } from './styles';

const Constructeurs = ({ constructeurs }) => {
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
          {constructeurs?.map(constructeur => <CardAutomaker key={constructeur.nom} constructeur={constructeur}  />)}
        </Slider>
      </div>
    </SectionBComp>
  );
};

export default Constructeurs;

const CardAutomaker = ({ constructeur }) => {
  return (
    <div className="card-automaker">
      <div className="logo">
        <NextImageLazy
          src={requireStatic(constructeur.picture)}
          alt="Picture of the author"
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="box-text">
        <strong>{constructeur.nom}</strong>
        <p className="prix">à partir de 5000€</p>
      </div>
    </div>
  );
};