import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
