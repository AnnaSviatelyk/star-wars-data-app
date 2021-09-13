import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DraggableTypes from 'constants/draggableTypes';
import DeleteIcon from 'assets/delete.svg';

const ListItem = ({ name, url, id, isFavorite, onDelete }) => {
  const [, drag] = useDrag(() => ({
    type: DraggableTypes.LIST_ITEM,
    item: { name, url, id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledLink to={`/person/${id}`}>
      <ItemContainer ref={drag} isFavorite={isFavorite}>
        <NameText isFavorite={isFavorite}>{name}</NameText>
        {isFavorite && (
          <DeleteIconContainer
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onDelete(id);
            }}
          >
            <img src={DeleteIcon} alt="delete icon" />
          </DeleteIconContainer>
        )}
      </ItemContainer>
    </StyledLink>
  );
};

const ItemContainer = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.5px dotted
    ${({ isFavorite }) => (isFavorite ? '#7ab6fc70' : '#ffe81f70')};

  font-family: 'SfDistantGalaxy-Italic';

  transition: all 0.3s;

  &: hover {
    cursor: pointer;
    background-color: #ffffff05;
    font-family: 'SfDistantGalaxy';
  }
`;

const NameText = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  color: ${({ isFavorite }) => (isFavorite ? '#7ab6fc' : '#ffe81f')};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  right: 20px;
`;

export default ListItem;
