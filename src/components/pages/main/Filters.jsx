import * as R from 'ramda';
import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Range } from 'rc-slider';

const DEFAULT_YEARS_RANGE = [8, 896];

const Filters = ({ species, films, allPeople, setPeopleToDisplay }) => {
  const [isAndRelationship, setIsAndRelationship] = useState(true);
  const [filters, setFilters] = useState({
    film: films[0],
    specie: species[0],
    yearsRange: DEFAULT_YEARS_RANGE,
  });

  const resetFiltersHandler = useCallback(() => {
    setFilters({
      film: films[0],
      specie: species[0],
      yearsRange: DEFAULT_YEARS_RANGE,
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

  const filterItems = useCallback(
    (person, key) => {
      if (key === 'yearsRange') {
        const [minYear, maxYear] = filters[key];
        const birthYear = person.birthYear;

        return birthYear >= minYear && birthYear <= maxYear;
      }

      const filterValue = filters[key].value;

      return person[key].includes(filterValue);
    },
    [filters],
  );

  const filterCharachters = useCallback(() => {
    const activeFilters = Object.keys(filters).filter((key) => {
      if (key === 'yearsRange') {
        return (
          filters[key][0] !== DEFAULT_YEARS_RANGE[0] ||
          filters[key][1] !== DEFAULT_YEARS_RANGE[1]
        );
      }

      return filters[key].value !== 'all';
    });

    if (R.isEmpty(activeFilters)) {
      return setPeopleToDisplay(allPeople);
    }

    const filteredPeople = allPeople.filter((person) => {
      if (isAndRelationship) {
        return activeFilters.every((key) => filterItems(person, key));
      }

      return activeFilters.some((key) => filterItems(person, key));
    });

    setPeopleToDisplay(filteredPeople);
  }, [filters, allPeople, setPeopleToDisplay, isAndRelationship, filterItems]);

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
            specie: value.reverse(),
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
      <p>{isAndRelationship ? 'and' : 'or'}</p>
      <p>Birth Year</p>
      <RangeContainer>
        <Range
          defaultValue={DEFAULT_YEARS_RANGE}
          value={filters.yearsRange}
          min={DEFAULT_YEARS_RANGE[0]}
          max={DEFAULT_YEARS_RANGE[1]}
          step={1}
          reverse
          onChange={(value) => {
            console.log({ value });
            setFilters({
              ...filters,
              yearsRange: value,
            });
          }}
        />
        <div style={{ display: 'inline-block' }}>
          {filters.yearsRange[1]} BBY
        </div>
        <div style={{ display: 'inline-block', marginLeft: '50px' }}>
          {filters.yearsRange[0]} BBY
        </div>
      </RangeContainer>
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

const RangeContainer = styled.div`
  height: 50px;
`;

export default Filters;
