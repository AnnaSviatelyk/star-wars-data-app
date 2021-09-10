import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import styled from 'styled-components';

import NamesList from './components/names-list/NamesList';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

const App = () => {
  const [people, setPeople] = useState([]);

  const getPeople = useCallback(async () => {
    const urls = Array(9)
      .fill(null)
      .map((_, index) => `${SWAPI_BASE_URL}people/?page=${index + 1}`);

    const results = await axios.all(urls.map((url) => axios.get(url)));

    console.log({ results });

    const peopleData = results
      .map((el) => el.data.results)
      .flat()
      .map((el) => ({
        name: el.name,
        url: el.url,
      }));

    setPeople(peopleData);
  }, []);

  useEffect(() => {
    if (R.isEmpty(people)) {
      getPeople();
    }
  }, [getPeople, people]);

  return (
    <AppContainer>
      <NamesList people={people} />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-color: #282c34;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
