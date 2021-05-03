import Image from 'next/image';
import Select from 'react-select';
import { Aside } from './styles';
import React, { useState } from 'react';

function SearchAside() {
  const [filters, setFilters] = useState('');

  const resetFilters = () => {

  };

  const onChange = e => {

    // setFilters({
    //   ...filters,
    //   [name]: value
    // })
  };

  return (
    <Aside>
      <div className="wrapper-filters">
        <form>
          <h3>Filtres</h3>
          <p className="btn-reset" onClick={(e) => resetFilters()}>Réinitialiser les filtres</p>

          <Select
            className="select"
            instanceId={String}
            placeholder="Meilleures réductions"
            options={nav}
            styles={customStyles}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            onChange={onChange}
          />

          <select name="marques" onChange={onChange}>
            <option selected disabled>Marques</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

          <select name="modèles" onChange={onChange}>
            <option selected disabled>Modèles</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

          <select name="marques" onChange={onChange}>
            <option selected disabled>Type de véhicule</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

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

          <select name="marques">
            <option selected disabled>Énergie</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

          <select name="marques">
            <option selected disabled>Transmission</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

          <select name="marques">
            <option selected disabled>Nombre de portes</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>

          <select name="marques">
            <option selected disabled>Couleur extérieur</option>
            <option value="1">Peugeot</option>
            <option value="2">Renault</option>
            <option value="3">Porsche</option>
          </select>
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

const nav = [
  { value: 'Lille', label: 'Agence Boulogne-Billacourt' },
  { value: 'Bordeaux', label: 'Agence Bordeaux' },
  { value: 'Marseille', label: 'Agence Marseille' }
];

// React Select : Styles
const customStyles = {
  option: (styles, state) => ({
    ...styles,
    fontSize: '16px',
    borderTop: '1px solid #C1C1C1',
    background: state.isSelected ? 'white' : 'white',
    color: '#313131',
    cursor: 'pointer',
    "&:focus": {
      background: 'white'
    },
    "&:hover": {
      background: 'white'
    },
    "&:active": {
      background: 'white'
    }
  }),
  singleValue: styles => ({
    ...styles
  }),
  control: styles => ({
    ...styles,
    marginBottom: '20px',
    width: '100%',
    fontSize: '14px',
    padding: '0',
    height: '31px',
    color: '#313131',
    border: '1px solid #C4C4C4',
    boxShadow: 'none',
    background: 'white url("/icons/arrow-bottom-light.svg") no-repeat',
    backgroundPosition: 'calc(100% - 10px) 50%',
    backgroundSize: '13px',
    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    position: 'absolute',
    border: 'none',
    boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
    width: '100%',
    borderRadius: '4px',
    zIndex: '10'
  })
};
