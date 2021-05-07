import NextImageLazy from '../../utils/imgLazy';
import React from 'react';
import { SectionEComp } from './styles';

const Interlocuteurs = ({ interlocuteurs }) => {
  return (
    <SectionEComp>
      <div className="container">
        <h2 className="text-center">Vos interlocuteurs privilégiés</h2>

        <div className="row">
          {interlocuteurs?.map(interlo => <CardInterlocuteur key={interlo.nom} interlo={interlo} />)}
        </div>
      </div>
    </SectionEComp>
  );
};

export default Interlocuteurs;

const CardInterlocuteur = ({ interlo }) => {
  return (
    <div className="card-interlocuteur">
      <div className="picture">
        <NextImageLazy
          src={interlo.picture}
          width={185}
          height={185}
          layout="responsive"
          alt=""
        />
      </div>
      <div className="box-text">
        <h3 className="text-center big">{interlo.nom}</h3>
        <hr />
        <p className="text-center job-title">{interlo.jobTitle}</p>
      </div>
    </div>
  );
};