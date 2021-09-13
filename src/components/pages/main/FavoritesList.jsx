import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { useDrop } from 'react-dnd';

import DraggableTypes from '../../../constants/draggableTypes';
import ListItem from './ListItem';

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
    if (!R.isNil(persistedFavorites)) {
      setFavouriteCharacters(JSON.parse(persistedFavorites));
    }
  }, []);

  const itemDeleteHandler = (id) => {
    const newFavorites = favoriteCharacters.filter((el) => el.id !== id);

    setFavouriteCharacters(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <Container ref={drop} isOver={isOver}>
      <Title>Favorite Characters</Title>
      {!R.isEmpty(favoriteCharacters) &&
        favoriteCharacters.map((el) => (
          <ListItem
            name={el.name}
            url={el.url}
            key={`fav_${el.url}`}
            id={el.id}
            isFavorite
            onDelete={itemDeleteHandler}
          />
        ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  background-color: #1f2329;
  height: 100vh;
  padding: 0px 30px 0px 30px;
  overflow: scroll;
  transition: all 0.3s;
  border-left: ${({ isOver }) =>
    !isOver ? '1px solid transparent' : '1px solid #7ab6fc'};
  border-right: ${({ isOver }) =>
    !isOver ? '1px solid transparent' : '1px solid #7ab6fc'};
`;

const Title = styled.h4`
  font-family: 'Roboto';
  font-weight: 200;
`;

export default Favorites;
