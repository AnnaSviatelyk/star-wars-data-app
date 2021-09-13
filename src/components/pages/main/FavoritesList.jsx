import React, { useState, useEffect, useCallback } from 'react';
import { isEmpty, isNil } from 'ramda';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

import DraggableTypes from 'constants/draggableTypes';

import ListItem from './ListItem';

const Favorites = () => {
  const [favoriteCharacters, setFavouriteCharacters] = useState([]);

  const handleDrop = useCallback((item) => {
    setFavouriteCharacters((state) => {
      const isItemAlreadyExists = state.some((el) => el.name === item.name);

      if (isItemAlreadyExists) {
        return state;
      }

      localStorage.setItem('favorites', JSON.stringify([...state, item]));
      return [...state, item];
    });
  }, []);

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

  const itemDeleteHandler = useCallback(
    (id) => {
      const newFavorites = favoriteCharacters.filter((el) => el.id !== id);

      setFavouriteCharacters(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    },
    [favoriteCharacters],
  );

  useEffect(() => {
    const persistedFavorites = localStorage.getItem('favorites');
    if (!isNil(persistedFavorites)) {
      setFavouriteCharacters(JSON.parse(persistedFavorites));
    }
  }, []);

  return (
    <Container ref={drop} isOver={isOver}>
      <Title>Favorite Characters</Title>
      {!isEmpty(favoriteCharacters) &&
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
  height: 100vh;
  flex: 1;
  padding: 0px 30px 0px 30px;
  background-color: #1f2329;
  overflow: scroll;

  border-left: ${({ isOver }) =>
    !isOver ? '1px solid transparent' : '1px solid #7ab6fc'};
  border-right: ${({ isOver }) =>
    !isOver ? '1px solid transparent' : '1px solid #7ab6fc'};

  transition: all 0.3s;
`;

const Title = styled.h4`
  font-family: 'Roboto';
  font-weight: 200;
`;

export default Favorites;
