import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSection from './components/HeroSection';
import SearchResults from './pages/SearchResults';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<HeroSection />} />
        <Route path="/search" element={<SearchResults />} />

      </Routes>
    </Router>
  );
};

export default App;


