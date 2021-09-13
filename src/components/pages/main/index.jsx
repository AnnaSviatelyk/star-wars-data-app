import React, { useContext } from 'react';

import NamesList from './NamesList';
import Favorites from './FavoritesList';
import { DataContext } from '../../../App';

const Main = () => {
  const { people, species, films } = useContext(DataContext);

  return (
    <>
      <NamesList allPeople={people} species={species} films={films} />
      <Favorites />
    </>
  );
};

export default Main;
