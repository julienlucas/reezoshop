import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Autocomplete from '../Autocomplete';
import getSuggestions from './getSuggestions.graphql';
import graphQLQuery from '../../utils/graphql';
import requireStatic from '../../utils/require-static';
import { theme } from '../../constants/theme';

const getSuggestionsQuery = getSuggestions.loc.source.body;

const Hero = ({ headline }) => {
   const router = useRouter();
   const [params, setParams] = useState({ "query": ""});
   const [suggestions, setSuggestions] = useState([]);

   const seeAllCars = () => {
      router.push(`/recherche`);
   };

   const onSearch = (inputSearch) => {
      setParams({ "query": inputSearch });
   };

   const fetchGraphQL = async (query, params) => {
      const res = await graphQLQuery(query, params)
      return res
   };

   useEffect(() => {
      const arrayFormated = [];

      fetchGraphQL(getSuggestionsQuery, params)
         .then(res => res.suggestions.suggestions.map(item => arrayFormated.push(item.query)))
         .then(() => setSuggestions(arrayFormated))
   }, [params])

  return (
    <HeroStyles
      style={{
        background: `url(${requireStatic('images/header-home.png')})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container">
        <div>
          <h1>{headline}</h1>
          <h2 className="sub-headline">
            Voiture d'occasion et neuves à vendre dans notre agence
          </h2>


          <div className="row">
            <div className="col col-1">
              <Autocomplete onSearch={onSearch} suggestions={suggestions} />
            </div>

            <div className="col col-2">ou</div>

            <div className="col col-3">
              <button className="btn btn-primary" onClick={seeAllCars} type="button">
                Voir tous les véhicules
              </button>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;

Hero.propTypes = {
  headline: PropTypes.string.isRequired
};

export const HeroStyles = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 630px;
  display: table;
  background-position: 0% 0%;
  background-size: cover;
  z-index: 1;
  .container {
    position: absolute;
    top: calc(50% - 30px);
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    max-width: 820px;
    div {
      width: 100%;
    }
  }
  .btn {
    position: relative;
    margin: 0 auto;
    display: table;
    min-width: 270px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .icon {
    position: absolute;
    margin: 15px 0 0 -30px;
  }
  .row {
    position: relative;
    padding-top: 10px;
    display: block;
    grid-gap: 20px;
    max-width: 720px;
    width: 100%;
  }
  .col-2 {
    height: 50px;
    margin-top: -15px;
    font-size: 26px;
    color: ${theme.black};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 800px) {
    top: auto;
    height: 640px;
    input[type="text"] {
      width: 395px;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .col-2 {
      display: block;
      margin-top: 3px;
      color: white;
    }
  }
`;
