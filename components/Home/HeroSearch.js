import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../Buttons/Button';
import InputSuggestions from '../InputSuggestions/InputSuggestions';

import graphQLQuery from '../../utils/graphql';
import getSuggestions from '../InputSuggestions/getSuggestions.graphql';
import { medias, theme } from '../../constants/theme';
import requireStatic from '../../utils/require-static';

const HeroSearch = ({ headline }) => {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState([]);
  const [queryParams, setQueryParams] = useState({ "query": ""});

  const seeAllCars = () => router.push(`/recherche`);

  const onChoice = innerText => router.push(`/recherche?match=${innerText}`);

  const onSearch = inputSearch => setQueryParams({ "query": inputSearch });

  const fetchGraphQL = async (query, queryParams) => {
    const res = await graphQLQuery(query, queryParams)
    return res
  };

  useEffect(() => {
    const arrayFormated = [];

    fetchGraphQL(getSuggestions.loc.source.body, queryParams)
        .then(res => res.suggestions.suggestions.map(item => arrayFormated.push(item.query)))
        .then(() => setSuggestions(arrayFormated))
  }, [queryParams])

  useEffect(() => {
    console.log(suggestions)
  }, [suggestions])

  return (
    <StyledHero background={`url(${requireStatic('images/header-home.png')})`}>
      <div className="container">
        <div>
          <h1>{headline}</h1>
          <h2 className="sub-headline">
            Voiture d'occasion et neuves à vendre dans notre agence
          </h2>

          <div className="row">
            <div className="col col-1">
              <InputSuggestions
                suggestionsData={suggestions}
                onUserInput={(inputSearch) => setQueryParams({ "query": inputSearch })}
                onChoice={onChoice}
                onSearch={onSearch}
                placeholder="Marque, Modèle"
              />
            </div>

            <div className="col col-2">ou</div>

            <div className="col col-3">
              <Button primary onClick={seeAllCars}>
                Voir tous les véhicules
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

HeroSearch.propTypes = {
  headline: PropTypes.string.isRequired
};

export default HeroSearch;

export const StyledHero = styled.section`
  position: relative;
  top: -60px;
  width: 100%;
  height: 630px;
  display: table;
  background: ${props => props.background};
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
  .col-3 button {
    width: 100%;
    min-width: 100%;
  }
  ${medias.min800} {
    top: 50%;
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
    .col-3 button {
      width: auto;
      min-width: 270px;
    }
  }
`;