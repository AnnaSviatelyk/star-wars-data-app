import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { isEmpty } from 'ramda';
import { Range } from 'rc-slider';
import Select from 'react-select';
import Switch from 'react-switch';
import styled from 'styled-components';

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

    if (isEmpty(activeFilters)) {
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

  const selectStyles = useMemo(
    () => ({
      control: (provided) => ({
        ...provided,
        backgroundColor: '#333',
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
      }),

      singleValue: (provided) => ({
        ...provided,
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
      }),
      menu: (provided, state) => ({
        ...provided,
      }),
      menuList: (provided) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#333' : '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
        padding: 20,
        backgroundColor: state.isSelected
          ? '#ffe81f'
          : state.isFocused
          ? '#33333380'
          : '#333',
        ':active': {
          backgroundColor: !state.isDisabled && '#33333380',
        },
      }),
    }),
    [],
  );

  useEffect(() => {
    filterCharachters();
  }, [filterCharachters]);

  return (
    <Container>
      <Title>Filter by</Title>
      <SelectsContainer>
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
            styles={selectStyles}
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
            styles={selectStyles}
          />
        </FilterContainer>
      </SelectsContainer>

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
          trackStyle={[
            {
              backgroundColor: '#7ab6fc',
            },
          ]}
          handleStyle={[
            {
              border: '2px solid #7ab6fc',
            },
            {
              border: '2px solid #7ab6fc',
            },
          ]}
        />
        <YearsContainer>
          <YearIndicator>{filters.yearsRange[1]} BBY</YearIndicator>
          <YearIndicator>{filters.yearsRange[0]} BBY</YearIndicator>
        </YearsContainer>
      </FilterContainer>

      <SwitchLogicContainer>
        <FilterName>Results must match all the filters</FilterName>
        <Switch
          onChange={() => setIsAndRelationship((state) => !state)}
          checked={isAndRelationship}
          offColor="#7ab6fc"
          onColor="#ffe81f"
        />
      </SwitchLogicContainer>

      <ResetButton onClick={resetFiltersHandler}>Reset filters</ResetButton>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
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
  flex: 1;

  &:first-of-type {
    margin-right: 20px;
  }
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

const SelectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background-color: #999999;
`;

export default Filters;
