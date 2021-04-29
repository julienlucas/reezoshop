import Image from 'next/image';
import React from 'react';
import { SectionEComp } from './styles';

function Interlocuteurs({ interlocuteurs }) {
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

function CardInterlocuteur({ interlo }) {
  return (
    <div className="card-interlocuteur">
      <div className="picture">
        <Image
          src={interlo.picture}
          width={185}
          height={185}
          layout="responsive"
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

