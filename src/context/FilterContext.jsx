import React, { createContext, useReducer } from 'react';

const initialState = {
  pax: '',
  location: '',
  type: '',
  price: '',
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAX':
        return { ...state, pax: action.payload };
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    case 'SET_TYPE':
        return { ...state, type: action.payload };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filters: state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
