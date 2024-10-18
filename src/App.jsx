import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { FilterProvider } from './context/FilterContext';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <FilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </FilterProvider>
    </>
    
  );
};

export default App;
