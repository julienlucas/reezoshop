import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import MultiSelect from '../MultiSelect';

import { bodies, colorsExt, doors, energies, gearbox } from '../../constants/search';
import { medias, theme } from '../../constants/theme';

const Filters = ({ onFilters }) => {
   const router = useRouter();
   const [occasion, setOccasion] = useState(false);
   const [neuf, setNeuf] = useState(false);
   const [toogleFilters, setToogleFilters] = useState(false);
   const [filters, setFilters] = useState('');

   const resetFilters = () => {
      setFilters('');
      onFilters({ size: 12 });
   };

   const onReset = filters === '' ? true : false;

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
      // Condition uniquement pour la recherche mobile (width =< 990px)
      if (e) {
        e.preventDefault();
      }

      if ((neuf && occasion) || (!neuf && !occasion)) {
         delete filters.onlyNew;
         onFilters(filters);

         return;
      }

      onFilters(filters);
   };

   // Si width > 990px la recherche se lance automatiquement au changement d'un filtre
   useEffect(() => {
      function onResizeWidth() {
         const width = document.documentElement.clientWidth;
         if (width > 990) {
            filters && onFiltersSearch();
         }
      }
      window.addEventListener('resize', onResizeWidth);

      onResizeWidth();
   }, [filters])

   // Si params dans l'URL, changer les filtres
   useEffect(() => {
      const URLParams = router.query;
      if (URLParams) setFilters(URLParams);
   }, [])

   return (
      <FiltersComp className={toogleFilters ? 'open' : ''}>
         <div className={`btn-close ${toogleFilters ? 'open' : ''}`} onClick={() => setToogleFilters(!toogleFilters)}>
            <span/>
            <span/>
            <span/>
         </div>

         <form>
            <div className="row">
               <h3>Filtres</h3>
               <p className="reset-filters"><span onClick={resetFilters}>Réinitialiser les filtres</span></p>
            </div>

            <MultiSelect
               placeholder="Type de véhicules"
               options={bodies}
            />

            <div className="row">
               <Checkbox label="Neuf / 0km" id="neuf" name="onlyNew" onChange={onChange} onReset={onReset} />
               <Checkbox label="Occasion" id="occasion" name="onlyNew" onClick={() => setOccasion(!occasion)} onChange={onChange} onReset={onReset} />
            </div>

            <div className="row">
               <Input
                  type="number"
                  name="priceMin"
                  placeholder="Prix min"
                  onChange={onChange}
                  onReset={onReset}
               />
               <Input
                  type="number"
                  name="priceMax"
                  placeholder="Prix max"
                  onChange={onChange}
                  onReset={onReset}
               />
            </div>

            <MultiSelect
               options={energies}
               placeholder="Énergie"
            />

            <MultiSelect
               className="gearbox"
               options={gearbox}
               placeholder="Tranmission"
            />

            <MultiSelect
               options={doors}
               placeholder="Nombre de portes"
            />

            <MultiSelect
               className="colorsExt"
               options={colorsExt}
               placeholder="Couleur extérieure"
            />

            <div className="wrapper-btn-search-mobile">
               <Button third onClick={e => onFiltersSearch(e)}>
                  Rechercher
               </Button>
            </div>

            <Button secondary className="button-filtres-mobile" onClick={() => setToogleFilters(!toogleFilters)}>Filtres</Button>
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
      z-index: 99;
      background white;
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
   .wrapper-btn-search-mobile {
      position: fixed;
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
   button.button-filtres-mobile {
      display: block;
   }
   .btn-close {
      position: fixed;
      top: 20px;
      right: 6px;
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
   ${medias.min990} {
      padding: 0;
      display: block;
      form {
         display: block;
      }
      button.button-filtres-mobile {
         display: none;
      }
      .wrapper-btn-search-mobile {
         display: none;
      }
   }
}`