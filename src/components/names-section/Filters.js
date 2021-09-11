import * as R from 'ramda';
import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const Filters = ({ species, films, allPeople, setPeopleToDisplay }) => {
  const [isAndRelationship, setIsAndRelationship] = useState(true);
  const [filters, setFilters] = useState({
    film: films[0],
    specie: species[0],
    yearsRange: null,
  });

  const resetFiltersHandler = useCallback(() => {
    setFilters({
      film: films[0],
      specie: species[0],
      yearsRange: null,
    });
  }, [films, setFilters, species]);

  const toggleFilteringLogic = useCallback(() => {
    setIsAndRelationship((state) => !state);
  }, []);

  const customSelectStyles = {
    placeholder: () => ({
      width: '50%',
    }),
  };

  const filterCharachters = useCallback(() => {
    const activeFilters = Object.keys(filters).filter((key) => {
      return !R.isNil(filters[key]) && filters[key].value !== 'all';
    });

    if (R.isEmpty(activeFilters)) {
      return setPeopleToDisplay(allPeople);
    }

    console.log({ activeFilters });

    const filteredPeople = allPeople.filter((person) => {
      if (isAndRelationship) {
        return activeFilters.every((key) =>
          person[key].includes(filters[key].value),
        );
      }

      return activeFilters.some((key) =>
        person[key].includes(filters[key].value),
      );
    });

    console.log({ allPeople });
    setPeopleToDisplay(filteredPeople);
  }, [filters, allPeople, setPeopleToDisplay, isAndRelationship]);

  useEffect(() => {
    filterCharachters();
  }, [filterCharachters]);

  return (
    <Container>
      <p>Filter by</p>
      <p>Specie</p>
      <Select
        value={filters.specie}
        options={species}
        defaultValue={species[0]}
        isSearchable={true}
        onChange={(value) =>
          setFilters({
            ...filters,
            specie: value,
          })
        }
        styles={customSelectStyles}
      />
      <p>{isAndRelationship ? 'and' : 'or'}</p>
      <p>Film</p>
      <Select
        value={filters.film}
        options={films}
        defaultValue={films[0]}
        isSearchable={true}
        onChange={(value) =>
          setFilters({
            ...filters,
            film: value,
          })
        }
        styles={customSelectStyles}
      />
      <ChangeFilteringLogicButton onClick={toggleFilteringLogic}>
        {isAndRelationship
          ? 'Seach by one of the criterias'
          : 'Seach by all of criterias'}
      </ChangeFilteringLogicButton>
      <ResetButton onClick={resetFiltersHandler}>Reset filters</ResetButton>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 100px;
`;

const ResetButton = styled.button`
  border: none;
`;

const ChangeFilteringLogicButton = styled.button`
  margin-right: 30px;
`;

export default Filters;
