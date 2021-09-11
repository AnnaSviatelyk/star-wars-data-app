import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import styled from 'styled-components';

import NamesList from './components/names-section/NamesList';
import convertNumberToRoman from './helpers/convertNumberToRoman';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';
const TOTAL_PEOPLE_PAGES = 9;
const TOTAL_SPECIES_PAGES = 4;

const App = () => {
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [films, setFilms] = useState([]);

  const getPeople = useCallback(async () => {
    const urls = Array(TOTAL_PEOPLE_PAGES)
      .fill(null)
      .map((_, index) => `${SWAPI_BASE_URL}people/?page=${index + 1}`);

    const results = await axios.all(urls.map((url) => axios.get(url)));

    const peopleData = results
      .map((el) => el.data.results)
      .flat()
      .map((el) => ({
        name: el.name,
        url: el.url,
        birthYear: el.birth_year,
        specie: el.species,
        film: el.films,
      }));

    setPeople(peopleData);
  }, []);

  const getFilms = useCallback(async () => {
    const { data } = await axios.get(`${SWAPI_BASE_URL}films`);

    const filmsData = data.results.map((el) => ({
      label: `Episode ${convertNumberToRoman(el.episode_id)}: ${el.title}`,
      value: el.url,
    }));

    setFilms([{ value: 'all', label: 'All' }, ...filmsData]);
  }, []);

  const getSpecies = useCallback(async () => {
    const urls = Array(TOTAL_SPECIES_PAGES)
      .fill(null)
      .map((_, index) => `${SWAPI_BASE_URL}species/?page=${index + 1}`);

    const results = await axios.all(urls.map((url) => axios.get(url)));

    const speciesData = results
      .map((el) => el.data.results)
      .flat()
      .map((el) => ({
        value: el.url,
        label: el.name,
      }));

    setSpecies([{ value: 'all', label: 'All' }, ...speciesData]);
  }, []);

  useEffect(() => {
    if (R.isEmpty(people)) {
      getPeople();
    }

    if (R.isEmpty(films)) {
      getFilms();
    }

    if (R.isEmpty(species)) {
      getSpecies();
    }
  }, [films, getFilms, getPeople, getSpecies, people, species]);

  return (
    <AppContainer>
      <NamesList allPeople={people} species={species} films={films} />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-color: #282c34;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
