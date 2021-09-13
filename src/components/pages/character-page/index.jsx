import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { isEmpty, isNil } from 'ramda';
import axios from 'axios';

import Loader from '../../shared/Loader';
import { DataContext } from '../../../App';
import convertNumberToRoman from '../../../helpers/convertNumberToRoman';

const CharacterPage = () => {
  let { id } = useParams();
  const { people } = useContext(DataContext);

  const [charactersData, setCharactersData] = useState(null);

  const fetchCharacterData = useCallback(async () => {
    const { name, specie, film, starships } = people.find(
      (character) => character.id === id,
    );

    const charactersFilmsData = await axios.all(
      film.map((url) => axios.get(url)),
    );

    const charactersSpeciesData = await axios.all(
      specie.map((url) => axios.get(url)),
    );

    const charactersStarshipsData = await axios.all(
      starships.map((url) => axios.get(url)),
    );

    const charactersFilmNames = charactersFilmsData
      .flatMap((el) => el.data)
      .map(
        (film) =>
          `Episode ${convertNumberToRoman(film.episode_id)}: ${film.title}`,
      )
      .join(', ');

    const charactersSpeciesNames = charactersSpeciesData
      .flatMap((el) => el.data)
      .map((specie) => specie.name)
      .join(', ');

    const charactersStarshipsNames = charactersStarshipsData
      .flatMap((el) => el.data)
      .map((starship) => starship.name)
      .join(', ');

    setCharactersData({
      name,
      films: charactersFilmNames,
      species: isEmpty(charactersSpeciesNames)
        ? 'unknown'
        : charactersSpeciesNames,
      starships: isEmpty(charactersStarshipsNames)
        ? 'no starships'
        : charactersStarshipsNames,
    });
  }, [id, people]);

  useEffect(() => {
    if (!isEmpty(people)) {
      fetchCharacterData();
    }
  }, [fetchCharacterData, people]);

  return (
    <Container isDataFetched={!isNil(charactersData)}>
      {!isNil(charactersData) ? (
        <div>
          <Name>{charactersData.name}</Name>
          <p>Species: {charactersData.species}</p>
          <p>Films: {charactersData.films}</p>
          <p>Starships: {charactersData.starships}</p>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  height: 500px;
  margin: 0 auto;
  padding: 50px;

  display: flex;
  justify-content: ${({ isDataFetched }) =>
    isDataFetched ? 'flex-start' : 'center'};
  background-color: #1f2329;
  border-radius: 15px;
`;

const Name = styled.h2`
  font-family: 'SfDistantGalaxy';
  color: #ffe81f;
`;

export default CharacterPage;
