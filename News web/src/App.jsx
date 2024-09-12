import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Category from './components/Category';
import Search from './components/Search';

function App() {
  // State to hold the current theme ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  // Toggle function to switch between dark and light mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the current theme to the body or a wrapper element
  useEffect(() => {
    document.body.className = theme; // Set the className to 'light' or 'dark'
  }, [theme]);

  return (
    <Router>
      {/* Toggle Button for Theme */}
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="btn btn-secondary mt-3">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>

      {/* Your other components */}
      <Header />
      
      <Search />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
