import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import ButtonClose from '../Buttons/ButtonClose';
import Checkbox from '../Checkbox';
import Input from '../Input';
import MultiSelect from '../MultiSelect';
import MultiSelectDoors from '../MultiSelectDoors';

import { bodies, colorsExt, doors, energies, gearboxes } from '../../constants/search';
import { medias, theme } from '../../constants/theme';

const Filters = ({ onFilters, onResetFilters }) => {
   const [occasion, setOccasion] = useState(false);
   const [neuf, setNeuf] = useState(false);
   const [openFilters, setOpenFilters] = useState(false);
   const [filters, setFilters] = useState({size: 12});
   const reset = filters === '' && true;

   const resetFilters = () => {
      setFilters('');
      onResetFilters();
   };

   const onChange = (value, name, id) => {
      if (id === 'occasion') {
         setOccasion(!occasion)
         value = !value;
      };

      if (id === 'neuf') setNeuf(!neuf);

      setFilters({
         ...filters,
         size: 12,
         [name]: value
      });
   };

   const onFiltersSearch = e => {
      // Condition onResizeWidth uniquement pour la recherche mobile (width =< 990px)
      if (e) e.preventDefault()

      if ((neuf && occasion) || (!neuf && !occasion)) {
         delete filters.onlyNew
         onFilters(filters)

         return;
      }

      onFilters(filters)
   };

   // Si width > 990px la recherche se lance automatiquement au changement d'un filtre
   useEffect(() => {
      const onResizeWidth = () => {
         const width = document.documentElement.clientWidth;
         if (width > 990 && filters) onFiltersSearch()
      }
      window.addEventListener('resize', onResizeWidth)

      onResizeWidth();
   }, [filters])

   return (
      <>
         <ButtonClose className={openFilters ? 'open' : ''} onClick={() => setOpenFilters(false)}>
            <span/>
            <span/>
            <span/>
         </ButtonClose>

         <Button secondary className="button-filtres" onClick={() => setOpenFilters(!openFilters)}>Filtres</Button>

         <FiltersComp className={openFilters ? 'open' : ''}>
            <form>
               <div className="row">
                  <h3>Filtres</h3>
                  <p className="reset-filters"><span onClick={resetFilters}>Réinitialiser les filtres</span></p>
               </div>

               <MultiSelect
                  name="body"
                  placeholder="Type de véhicules"
                  options={bodies}
                  onChange={onChange}
                  onReset={reset}
               />

               <div className="row">
                  <Checkbox label="Neuf / 0km" id="neuf" name="onlyNew" onClick={() => setNeuf(!neuf)} onChange={onChange} onReset={reset} />
                  <Checkbox label="Occasion" id="occasion" name="onlyNew" onClick={() => setOccasion(!occasion)} onChange={onChange} onReset={reset} />
               </div>

               <div className="row">
                  <Input
                     type="number"
                     name="priceMin"
                     placeholder="Prix min"
                     onChange={onChange}
                     onReset={reset}
                  />
                  <Input
                     type="number"
                     name="priceMax"
                     placeholder="Prix max"
                     onChange={onChange}
                     onReset={reset}
                  />
               </div>

               <MultiSelect
                  name="energy"
                  placeholder="Énergie"
                  options={energies}
                  onChange={onChange}
                  onReset={reset}
               />

               <MultiSelect
                  name="gearbox"
                  className="gearbox"
                  placeholder="Tranmission"
                  options={gearboxes}
                  onChange={onChange}
                  onReset={reset}
               />

               <MultiSelectDoors
                  name="doors"
                  placeholder="Nombre de portes"
                  options={doors}
                  onChange={onChange}
                  onReset={reset}
               />

               <MultiSelect
                  name="colorExt"
                  className="colorExt"
                  placeholder="Couleur extérieure"
                  options={colorsExt}
                  onChange={onChange}
                  onReset={reset}
               />

               <div className="wrapper-button-search">
                  <Button third className="full-width" onClick={e => onFiltersSearch(e)}>Rechercher</Button>
               </div>
            </form>
         </FiltersComp>
      </>
   )
};

Filters.propTypes = {
   onFilters: PropTypes.func.isRequired,
   onResetFilters: PropTypes.func.isRequired
};

export default Filters;

export const FiltersComp = styled.div`
   position: fixed;
   width: 100%;
   padding: 21px 16px 27px;
   top: 0;
   &.open {
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      z-index: 8;
      background white;
      display: flex;
      flex-direction: column;
      form {
         padding: 70px 0 0;
         background: white;
         border-radius: 0;
         height: 100%;
         backrkound green;
         display: block;
      }
   }
   h3 {
      margin: 0;
      padding: 0;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 30px;
   }
   .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
   }
   label {
      position: absolute;
      margin: 6px 0 0 6px;
      font-size: 13px;
   }
   form {
      padding: 21px 16px 27px;
      background: ${theme.grey300};
      border-radius: 4px;
      display: none;
   }
   .wrapper-button-search {
      position: absolute;
      display: block;
      left: 0px;
      bottom: 0;
      padding: 12px 20px 20px;
      background: white;
      box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
      z-index: 7;
      width: 100vw;
   }
   .reset-filters {
      position: relative;
      height: 20px;
      margin-top: 2px;
      font-size: 14px;
      text-align: right;
      float: right;
      color: ${theme.grey100};
      text-decoration: underline;
      cursor: pointer;
      &:hover {
         text-decoration: none;
      }
   }
   ${medias.min990} {
      position: relative;
      padding: 0;
      display: block;
      form {
         display: block;
      }
      .wrapper-button-search {
         display: none;
      }
   }
}`