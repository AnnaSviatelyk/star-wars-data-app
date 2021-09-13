import React, {
  useState,
  useCallback,
  useRef,
  useContext,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { isEmpty } from 'ramda';

import { DataContext } from 'App';
import Yoda from 'assets/yoda.png';
import Loader from 'components/shared/Loader';

import Filters from './Filters';
import ListItem from './ListItem';

const NamesList = () => {
  const { people, species, films } = useContext(DataContext);

  const [peopleToDisplay, setPeopleToDisplay] = useState([]);

  const listRef = useRef(null);

  const handleScrollToTop = useCallback(
    () => listRef.current.scrollTo({ top: 0, behavior: 'smooth' }),
    [],
  );

  const isAllDataFetched = useMemo(
    () => !isEmpty(people) && !isEmpty(species) && !isEmpty(films),
    [films, people, species],
  );

  return (
    <Container ref={listRef} isAllDataFetched={isAllDataFetched}>
      {isAllDataFetched ? (
        <>
          <Filters
            species={species}
            films={films}
            peopleToDisplay={peopleToDisplay}
            allPeople={people}
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
            <NothingFoundMessageContainer>
              <NothingFoundMessage>
                Opps, no characters found... <br />
                Try another filter parameters and may the force be with you!
              </NothingFoundMessage>
              <YodaImage src={Yoda} alt="yoda icon" />
            </NothingFoundMessageContainer>
          )}
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
  padding: 0px 50px 50px 50px;
  margin-right: 40px;
  background-color: #1f2329;
  overflow: scroll;

  display: flex;
  flex-direction: column;

  ${({ isAllDataFetched }) => !isAllDataFetched && 'justify-content: center'};
`;

const ScrollToTopButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: 'SfDistantGalaxy';
  font-size: 16px;
  color: white;
`;

const NothingFoundMessage = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 20px;
`;

const YodaImage = styled.img`
  width: 120px;
`;

const NothingFoundMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 50%;
`;

export default NamesList;
