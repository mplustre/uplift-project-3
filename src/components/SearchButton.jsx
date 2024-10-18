import React from 'react';

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="search-button">
      SEARCH
    </button>
  );
};

export default SearchButton;
