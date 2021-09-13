import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { isEmpty } from 'ramda';
import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Switch, Route } from 'react-router-dom';

import convertNumberToRoman from './helpers/convertNumberToRoman';
import toDashCase from './helpers/toDashCase';
import Main from './components/pages/main';
import CharacterPage from './components/pages/character-page';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';
const TOTAL_PEOPLE_PAGES = 9;
const TOTAL_SPECIES_PAGES = 4;

export const DataContext = React.createContext({
  people: [],
  species: [],
  films: [],
});

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
      .flatMap((el) => el.data.results)
      .map((el) => ({
        name: el.name,
        url: el.url,
        birthYear:
          el.birth_year === 'unknown' ? el.birth_year : parseInt(el.birth_year),
        specie: el.species,
        film: el.films,
        starships: el.starships,
        id: toDashCase(el.name),
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
      .flatMap((el) => el.data.results)
      .map((el) => ({
        value: el.url,
        label: el.name,
      }));

    setSpecies([{ value: 'all', label: 'All' }, ...speciesData]);
  }, []);

  useEffect(() => {
    if (isEmpty(people)) {
      getPeople();
    }

    if (isEmpty(films)) {
      getFilms();
    }

    if (isEmpty(species)) {
      getSpecies();
    }
  }, [films, getFilms, getPeople, getSpecies, people, species]);

  return (
    <DataContext.Provider value={{ people, species, films }}>
      <DndProvider backend={HTML5Backend}>
        <AppContainer>
          <Switch>
            <Route path="/person/:id" component={CharacterPage} />
            <Route exact path="/" component={Main} />
          </Switch>
        </AppContainer>
      </DndProvider>
    </DataContext.Provider>
  );
};

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
