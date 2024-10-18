import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

const FilterBar = () => {
  const { filters, dispatch } = useContext(FilterContext);

  return (
    <div className="filter-bar">
      <select value={filters.pax} onChange={(e) => dispatch({ type: 'SET_PAX', payload: e.target.value })}
      >
        <option value="">PAX</option>
        <option value="solo">Solo</option>
        <option value="date">Date</option>
        <option value="barkada">Barkada</option>
      </select>
      <select value={filters.location} onChange={(e) => dispatch({ type: 'SET_LOCATION', payload: e.target.value })}
      >
        <option value="">CITY</option>
        <option value="Makati">Makati</option>
        <option value="Manila">Manila</option>
        <option value="Pasay">Pasay</option>
        <option value="Quezon City">Quezon City</option>
        <option value="Taguig">Taguig</option>
      </select>
      <select value={filters.type} onChange={(e) => dispatch({ type: 'SET_TYPE', payload: e.target.value })}
      >
        <option value="">ALL TYPES</option>
        <option value="Dining">Dining</option>
        <option value="Cultural">Cultural</option>
        <option value="Recreational">Recreational</option>
      </select>
      <select value={filters.price} onChange={(e) => dispatch({ type: 'SET_PRICE', payload: e.target.value })}
      >
        <option value="">PRICE (PHP)</option>
        <option value="0-999">Free-PHP 999</option>
        <option value="1000-2999">PHP 1000-2999</option>
        <option value="3000-Infinity">PHP 3000+</option>
      </select>
    </div>
  );
};

export default FilterBar;
