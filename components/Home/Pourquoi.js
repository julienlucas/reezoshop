import Image from 'next/image';
// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { SectionFComp } from './styles';

function Pourquoi({ data }) {
  return (
    <SectionFComp>
      <div className="container">
        <h2 className="text-center">Pourquoi choisir Reezocar ?</h2>

        <div className="row">
          <div className="col col-left">
            <div className="row row-2">

              <div className="col col-1">
                <ProgressRing percents={data.recoPourcents} />
                <strong className="number">{data.recoPourcents}%</strong>
                <p>de nos clients qui nous recommandent</p>
              </div>

              <div className="col col-2">
                <ProgressRing percents={data.economiesPourcents} />
                <strong className="number">{data.economiesPourcents}%</strong>
                <p>d’<strong>économie</strong> en moyenne sur votre budget</p>
              </div>

              <div className="col col-3">
                <ProgressRing percents={100} />
                <strong className="number"><span>+</span>{data.clientsSatisfaits}</strong>
                <p>de clients <strong>satisfaits</strong></p>
              </div>

            </div>
          </div>
          <div className="col col-right">

            <div className="box-social-media-reviews">
              <div className="icon">
                <Image
                  src="/icons/facebook.svg"
                  width={65}
                  height={65}
                  layout="responsive"
                />
              </div>
              <div className="box-text">
                <p className="notation">{data.facebook.note}/5</p>
                <p className="reviews">sur {data.facebook.avis} avis</p>
              </div>
            </div>

            <div className="box-social-media-reviews">
              <div className="icon">
                <Image
                  src="/icons/google.svg"
                  width={65}
                  height={65}
                  layout="responsive"
                />
              </div>
              <div className="box-text">
                <p className="notation">{data.google.note}/5</p>
                <p className="reviews">sur {data.google.avis} avis</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionFComp>
  );
};

export default Pourquoi;

function ProgressRing({ percents }) {
  const [radius, setRadius] = useState(50);
  const progress = percents;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  useEffect(() => {
    // Le code pour animer les progress rings
    //
    // const interval = setInterval(() => {
    //   let originalProgressVal = originalProgressVal;
    //   setProgress(prevState => prevState + 10 )
    //   if (progress === originalProgressVal) clearInterval(interval);
    // }, 20)
  },[]);

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
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
      </svg>
    </div>
  );
};
