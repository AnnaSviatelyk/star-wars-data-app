import React, { useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { isEmpty, isNil } from 'ramda';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from 'App';
import Loader from 'components/shared/Loader';
import convertNumberToRoman from 'helpers/convertNumberToRoman';

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
        ? 'Unknown'
        : charactersSpeciesNames,
      starships: isEmpty(charactersStarshipsNames)
        ? 'No starships'
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
          <CharacterInfoTitle>Species: </CharacterInfoTitle>
          <CharacterInfoDecription>
            {charactersData.species}
          </CharacterInfoDecription>
          <CharacterInfoTitle>Films: </CharacterInfoTitle>
          <CharacterInfoDecription>
            {charactersData.films}
          </CharacterInfoDecription>
          <CharacterInfoTitle>Starships:</CharacterInfoTitle>
          <CharacterInfoDecription>
            {charactersData.starships}
          </CharacterInfoDecription>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  min-height: 500px;
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

const CharacterInfoTitle = styled.p`
  font-family: 'SfDistantGalaxy-Italic';
  font-size: 24px;
  color: #ffe81f;
`;

const CharacterInfoDecription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`;

export default CharacterPage;
