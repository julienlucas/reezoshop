import ArrowIcon from '../../svgs/arrow-bottom-blue.svg';
import Image from 'next/image';
import React from 'react';
import { SectionGComp } from './styles';

function FAQS({ faqs }) {
  return (
    <SectionGComp>
      <div className="container">
        <h2 className="text-center">Foire aux questions</h2>

        <div className="row">
          <div className="col col-left">
            <Image
              src="/images/faq.png"
              width={445}
              height={350}
              layout="fixed"
            />
          </div>
          <div className="col col-right">
            {faqs?.map((faq, i) => <div key={faq + i} className="box-question">
              {faq}
              <ArrowIcon className="icon" />
            </div>)}
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Accéder à la F.A.Q</button>
    </SectionGComp>
  );
};

export default FAQS;