import React, { useState, useContext } from 'react';
import FilterBar from './FilterBar';
import Results from './Results';
import SearchButton from './SearchButton';
import ActivityData from './ActivityData';
import { FilterContext } from '../context/FilterContext';

const HomePage = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const { filters } = useContext(FilterContext);

  const handleSearchClick = () => {
    setTriggerSearch(prev => !prev);
  };

  return (
    <div className="container">
      <div className="filter-bar-container">
        <FilterBar />
      </div>
      <div className="search-button-container">
        <SearchButton onClick={handleSearchClick} />
      </div>
      <ActivityData filters={filters} triggerSearch={triggerSearch}>
        {(filteredActivities) => (
          <Results activities={filteredActivities} triggerSearch={triggerSearch} />
        )}
      </ActivityData>
    </div>
  );
};

export default HomePage;
