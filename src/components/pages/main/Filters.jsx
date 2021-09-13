import * as R from 'ramda';
import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Range } from 'rc-slider';
import Switch from 'react-switch';

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
      <Title>Filter by</Title>
      <FilterContainer>
        <FilterName>Specie</FilterName>
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
      </FilterContainer>

      <FilterContainer>
        <FilterName>Film</FilterName>
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
      </FilterContainer>

      <FilterContainer>
        <FilterName>Birth Year</FilterName>
        <Range
          defaultValue={DEFAULT_YEARS_RANGE}
          value={filters.yearsRange}
          min={DEFAULT_YEARS_RANGE[0]}
          max={DEFAULT_YEARS_RANGE[1]}
          step={1}
          reverse
          onChange={(value) => {
            setFilters({
              ...filters,
              yearsRange: value,
            });
          }}
        />
        <YearsContainer>
          <YearIndicator>{filters.yearsRange[1]} BBY</YearIndicator>
          <YearIndicator>{filters.yearsRange[0]} BBY</YearIndicator>
        </YearsContainer>
      </FilterContainer>

      <SwitchLogicContainer>
        <FilterName>Results must match all the filters</FilterName>
        <Switch
          onChange={toggleFilteringLogic}
          checked={isAndRelationship}
          offColor="#7ab6fc"
          onColor="#ffe81f"
        />
      </SwitchLogicContainer>

      <ResetButton onClick={resetFiltersHandler}>Reset filters</ResetButton>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 100px;
`;

const ResetButton = styled.div`
  width: 140px;
  height: 40px;
  background-color: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #7ab6fc90;
  border-radius: 6px;

  color: #7ab6fc;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 100;

  transition: all 0.3s;

  &: hover {
    background-color: #7ab6fc;
    color: #fff;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-family: 'Roboto';
  font-weight: 100;
`;

const FilterName = styled.span`
  display: block;
  margin-bottom: 16px;
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffe81f;
`;

const SwitchLogicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
`;

const YearsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const YearIndicator = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 300;
`;

export default Filters;
