import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Select from '../Select';
import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { bodies, colorsExt, doors, energies, gearbox } from '../../constants/search';
import React, { useEffect, useState } from 'react';

const Filters = ({ onFilters }) => {
   const [occasion, setOccasion] = useState(undefined);
   const [neuf, setNeuf] = useState(undefined);
   const [toogleFilters, setToogleFilters] = useState(false);
   const [filters, setFilters] = useState('');

   const resetFilters = () => {
      setFilters('');
      onFilters({ size: 12 });
   };

   const onReset = filters === '' ? true : false;

   const onSearch = e => {
      setFilters({
         ...filters,
         'match': e.target.value
      });
   };

   const onChange = (value, name) => {
      setFilters({
         ...filters,
         [name]: value
      });
   };

   useEffect(() => {
      // console.log('occasion: ' + occasion);
      // console.log('neuf: ' + neuf);
      // console.log(filters);
      filters && onFilters(filters);
   }, [filters])

   return (
      <FiltersComp className={toogleFilters ? 'open' : ''}>
         <button className="btn btn-secondary btn-filtres-mobile" onClick={() => setToogleFilters(!toogleFilters)}>Filtres(xxx)</button>
         <div className={`btn-close ${toogleFilters ? 'open' : ''}`} onClick={() => setToogleFilters(!toogleFilters)}>
            <span/>
            <span/>
            <span/>
         </div>

         <input type="text" className="search" placeholder="Marque, Modèle" name="match" onChange={e => onSearch(e)}/>

         <form>
            <div className="row">
               <h3>Filtres</h3>
               <p className="btn-reset" onClick={resetFilters}>Réinitialiser les filtres</p>
            </div>

            <Select
               name="body"
               options={bodies}
               placeholder="Type de véhicules"
               onChange={onChange}
               onReset={onReset}
            />

            <div className="row">
               <div><Checkbox label="Neuf / 0km" id="neuf" name="onlyNew" onChange={onChange} /></div>
               <div><Checkbox label="Occasion" id="occasion" name="onlyNew" onChange={onChange} /></div>
            </div>

            <div className="row">
               <div className="box-input-number">
                  <Input
                     type="number"
                     name="priceMin"
                     placeholder="Prix min"
                     onChange={onChange}
                     onReset={onReset}
                  />
               </div>
               <div className="box-input-number">
                  <Input
                     type="number"
                     name="priceMax"
                     placeholder="Prix max"
                     onChange={onChange}
                     onReset={onReset}
                  />
               </div>
            </div>

            <Select
               name="energy"
               options={energies}
               placeholder="Énergie"
               onChange={onChange}
               onReset={onReset}
            />

            <Select
               name="gearbox"
               options={gearbox}
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
               name="colorExt"
               options={colorsExt}
               placeholder="Couleur extérieure"
               onChange={onChange}
               onReset={onReset}
            />

            <button className="btn btn-tertiary btn-search-mobile">Rechercher (XXX véhicules)</button>
         </form>
      </FiltersComp>
   )
};

Filters.propTypes = {
   onFilters: PropTypes.func.isRequired
};

export default Filters;

export const FiltersComp = styled.div`
   width: 100%;
   padding: 21px 16px 27px;
   &.open {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      z-index: 9;
      background white;
      form {
         padding: 70px 0 0;
         background: white;
         border-radius: 0;
         height: 100%;
         backrkound green;
         display: block;
      }
      .btn-filtres-mobile {
         z-index: 0;
      }
   }
   .search {
      position: fixed;
      top: 48px;
      right: 90px;
      display: none;
      z-index: 8;
   }
   form {
      padding: 21px 16px 27px;
      background: ${theme.grey300};
      border-radius: 4px;
      display: none;
   }
   .btn-search-mobile {
      position: fixed;
      left: 20px;
      bottom: 20px;
      display: block;
      width: calc(100% - 40px);
      z-index: 7;
   }
   .btn-filtres-mobile {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 7;
      display: block;
      width: calc(50vw - 26px);
   }
   .btn-close {
      position: fixed;
      top: 20px;
      right: 16px;
      width: 35px; height: 35px;
      display: none;
      cursor: pointer;
      z-index: 999;
      &.open {
         display: block;
      }
      span {
         position: absolute;
         width: 29px; height: 3px;
         border-radius: 1px;
         background: ${theme.blue100};
         &:nth-child(1) {
            top: .4rem;
            transform: rotate(135deg)
         }
         &:nth-child(2) {
            top: .4rem;
            transform: rotate(-135deg);
         }
         &:nth-child(3) {
            top: .4rem;
            transform: rotate(-135deg);
         }
      }
   }
   @media (min-width: 990px) {
      padding: 0;
      .search {
         display: block;
      }
      form {
         display: block;
      }
      display: block;
      .btn-filtres-mobile {
         display: none;
      }
      .btn-search-mobile {
         display: none;
      }
   }
}`