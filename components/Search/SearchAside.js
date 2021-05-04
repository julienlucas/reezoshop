import Image from 'next/image';
import PropTypes from 'prop-types';
import { Aside } from './styles';
import Select from '../Select';
import React, { useState } from 'react';

function SearchAside() {
  const [filters, setFilters] = useState({});

  const resetFilters = () => {
    setFilters('')
  };

  const onChange = (name, option) => {
    setFilters({
      ...filters,
      [name]: option
    })
  };

  const onReset = filters === '' ? true : false;

  return (
    <Aside>
      <div className="wrapper-filters">
        <form>
          <div classNale="row">
            <h3>Filtres</h3>
            <p className="btn-reset" onClick={resetFilters}>Réinitialiser les filtres</p>
          </div>

          <Select
            name="types-vehicules"
            options={typesVehicules}
            placeholder="Type de véhicules"
            onChange={(name, option) => onChange(name, option)}
            onReset={onReset}
          />

          <div className="row">
            <div>
              <input type="checkbox" className="checkbox" name="neuf" id="neuf" />
              <label for="neuf">Neuf / 0km</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox" name="occasion" id="occasion" />
              <label for="occasion">Occasion</label>
            </div>
          </div>

          <div className="row">
            <div className="box-input-number"><input type="number" name="prix-min" placeholder="Prix min" /></div>
            <div className="box-input-number"><input type="number" name="prix-max" placeholder="Prix max" /></div>
          </div>

          <Select
            options={energies}
            placeholder="Énergie"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            options={transmissions}
            placeholder="Tranmission"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            options={nbrPortes}
            placeholder="Nombre de portes"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            options={couleurs}
            placeholder="Couleur extérieure"
            onChange={onChange}
            onReset={onReset}
          />
        </form>
      </div>

      <div className="wrapper-ad">
        <div className="box-text">
          <div>
            <p>Trouvez plus d'annonces sur reezocar.com</p>
            <button className="btn btn-secondary">Voir plus d'annonces</button>
          </div>
        </div>
        <Image
          src="/images/ad-voitures.png"
          width={300}
          height={235}
          layout="responsive"
        />
      </div>
    </Aside>
  );
};

export default SearchAside;

const typesVehicules = [
  { value: 'Berline', label: 'Berline' },
  { value: 'Citadine', label: 'Citadine' },
  { value: '4 x 4', label: '4 x 4' },
  { value: 'Sport', label: 'Sport' }
];

const energies = [
  { value: 'Essence', label: 'Essence' },
  { value: 'Diesel', label: 'Diesel' },
  { value: 'Electrique', label: 'Electrique' },
  { value: 'Hydrogène', label: 'Hydrogène' },
  { value: 'Ethanol', label: 'Ethanol' }
];

const transmissions = [
  { value: '5 vitèsses', label: '5 vitèsses' },
  { value: 'Automatique', label: 'Automatique' }
];

const nbrPortes = [
  { value: '3 portes', label: '3 portes' },
  { value: '5 portes', label: '5 portes' }
];

const couleurs = [
  { value: 'Bleu', label: 'Bleu' },
  { value: 'Rouge', label: 'Rouge' }
];
