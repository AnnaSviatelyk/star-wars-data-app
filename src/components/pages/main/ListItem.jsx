import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

import { Link } from 'react-router-dom';

import DraggableTypes from '../../constants/draggableTypes';

const ListItem = ({ name, url, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableTypes.LIST_ITEM,
    item: { name, url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleListItemClick = useCallback(() => {}, []);

  return (
    <StyledLink to={`/person/${id}`}>
      <ItemContainer onClick={handleListItemClick} ref={drag}>
        <NameText>{name}</NameText>
      </ItemContainer>
    </StyledLink>
  );
};

const ItemContainer = styled.div`
  height: 80px;
  width: 100%;
  margin-bottom: 15px;
  border: 0.5px dotted #ffe81f70;

  display: flex;
  align-items: center;
  justify-content: center;

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
  color: #ffe81f;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default ListItem;
