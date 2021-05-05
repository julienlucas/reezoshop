import Link from 'next/link';
import NextImageLazy from '../../utils/imgLazy';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { SectionCComp } from './styles';
import React, { useEffect, useState } from 'react';

function Promos({ subHeadline }) {
  const [occasionPic, setOccasionPic] = useState('/images/promo-occasion.png');
  const [neufPic, setNeufPic] = useState('/images/promo-neuf.png');

  useEffect(() => {
    // Changement images src au resize
    function onResizeWidth(){
      const width = document.documentElement.clientWidth;
      if (width >= 768) {
        setNeufPic('/images/promo-neuf.png');
        setOccasionPic('/images/promo-occasion.png');
      } else {
        setNeufPic('/images/promo-mobile.png');
        setOccasionPic('/images/promo-mobile.png');
      }
    }
    window.addEventListener('resize', onResizeWidth);
    onResizeWidth();
  }, []);

  return (
    <SectionCComp>
      <h2 className="text-center">En ce moment dans votre <span className="blue">{subHeadline}</span></h2>

      <div className="container">
        <Slider {...sliderSettings}>
            <div className="card-promo">
              <Link href="/">
                <a>
                  <button className="btn btn-secondary btn-orange">Profitez-en !</button>
                  <NextImageLazy
                    src={neufPic}
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
                  <button className="btn btn-secondary btn-orange">Profitez-en !</button>
                  <NextImageLazy
                    src={occasionPic}
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
    </SectionCComp>
  );
};

Promos.propTypes = {
   subHeadline: PropTypes.string
};

export default Promos;

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
