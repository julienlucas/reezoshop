import Image from 'next/image';
import { Aside } from './styles';
import { categories, colorsExt, doors, energies, gearboxes } from '../../constants/search';
import Select from '../Select';
import React, { useState } from 'react';

function SearchAside() {
  const [filters, setFilters] = useState({});

  const resetFilters = () => {
    setFilters('')
  };

  const onReset = filters === '' ? true : false;

  const onChange = (name, option) => {
    setFilters({
      ...filters,
      [name]: option
    });
  };

  return (
    <Aside>
      <div className="wrapper-filters">
        <form>
          <div className="row">
            <h3>Filtres</h3>
            <p className="btn-reset" onClick={resetFilters}>Réinitialiser les filtres</p>
          </div>

          <Select
            name="categories"
            options={categories}
            placeholder="Type de véhicules"
            onChange={(name, option) => onChange(name, option)}
            onReset={onReset}
          />

          <div className="row">
            <div>
              <input type="checkbox" className="checkbox" name="neuf" id="neuf" />
              <label htmlFor="neuf">Neuf / 0km</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox" name="occasion" id="occasion" />
              <label htmlFor="occasion">Occasion</label>
            </div>
          </div>

          <div className="row">
            <div className="box-input-number"><input type="number" name="prix-min" placeholder="Prix min" /></div>
            <div className="box-input-number"><input type="number" name="prix-max" placeholder="Prix max" /></div>
          </div>

          <Select
            name="energies"
            options={energies}
            placeholder="Énergie"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            name="gearboxes"
            options={gearboxes}
            placeholder="Tranmission"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            name="doors"
            options={doors}
            placeholder="Nombre de portes"
            onChange={onChange}
            onReset={onReset}
          />

          <Select
            name="colorsExt"
            options={colorsExt}
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