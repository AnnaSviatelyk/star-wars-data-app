import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

import Filters from './Filters';
import ListItem from './ListItem';
import Loader from '../../../Loader';

const NamesList = ({ allPeople, species, films }) => {
  const [peopleToDisplay, setPeopleToDisplay] = useState([]);

  const listRef = useRef(null);

  const handleScrollToTop = useCallback(
    () => listRef.current.scrollTo({ top: 0, behavior: 'smooth' }),
    [],
  );

  return (
    <Container ref={listRef}>
      {!R.isEmpty(allPeople) && !R.isEmpty(species) && !R.isEmpty(films) ? (
        <>
          <Filters
            species={species}
            films={films}
            peopleToDisplay={peopleToDisplay}
            allPeople={allPeople}
            setPeopleToDisplay={setPeopleToDisplay}
          />

          {peopleToDisplay.map((el, index) => (
            <ListItem name={el.name} url={el.url} key={el.url} id={el.id} />
          ))}

          {peopleToDisplay.length > 10 && (
            <ScrollToTopButton onClick={handleScrollToTop} type="button">
              Scroll to top ↑
            </ScrollToTopButton>
          )}

          {peopleToDisplay.length === 0 && (
            <p>
              Opps, no characters found. <br />
              Try another filter parameters
            </p>
          )}
        </>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  height: 100vh;
  padding: 50px 50px 50px 50px;
  margin-right: 40px;
  background-color: #1f2329;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollToTopButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: 'SfDistantGalaxy';
  font-size: 16px;
  color: white;
`;

export default NamesList;
