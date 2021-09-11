import React, { useCallback } from 'react';
import styled from 'styled-components';

const ListItem = ({ name, url }) => {
  const handleListItemClick = useCallback(() => {
    alert('HEy hey hey');
  }, []);

  return (
    <ItemContainer onClick={handleListItemClick}>
      <NameText>{name}</NameText>
    </ItemContainer>
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

export default ListItem;
