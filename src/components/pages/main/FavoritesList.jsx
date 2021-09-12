import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { useDrop } from 'react-dnd';

import DraggableTypes from '../../../constants/draggableTypes';
import ListItem from '../names-section/ListItem';

const Favorites = () => {
  const [favoriteCharacters, setFavouriteCharacters] = useState([]);

  const handleDrop = (item) => {
    setFavouriteCharacters((state) => {
      const isItemAlreadyExists = state.some((el) => el.name === item.name);

      if (isItemAlreadyExists) {
        return state;
      }

      localStorage.setItem('favorites', JSON.stringify([...state, item]));
      return [...state, item];
    });
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DraggableTypes.LIST_ITEM,
      drop: (item) => handleDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [],
  );

  useEffect(() => {
    const persistedFavorites = localStorage.getItem('favorites');
    setFavouriteCharacters(JSON.parse(persistedFavorites));
  }, []);

  return (
    <Container ref={drop}>
      <p>Favorites</p>
      {!R.isEmpty(favoriteCharacters) &&
        favoriteCharacters.map((el) => (
          <ListItem name={el.name} url={el.url} key={`fav_${el.url}`} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  background-color: #1f2329;
  height: 100vh;
  padding-left: 30px;
  overflow: scroll;
`;

export default Favorites;
