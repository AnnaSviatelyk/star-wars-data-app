import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

import Loader from '../Loader';
import ListItem from './ListItem';

const NamesList = ({ people }) => {
  return (
    <Container>
      {!R.isEmpty(people) ? (
        <>
          {people.map((el) => (
            <ListItem name={el.name} url={el.url} />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  height: 100vh;
  padding: 50px;
  background-color: #1f2329;
  overflow: scroll;
`;

export default NamesList;
