import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import Favorites from './Pages/Favorites/Favorites';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

