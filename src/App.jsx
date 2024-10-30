import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import Favorites from './Pages/Favorites/Favorites';
import DetailsPage from './Pages/DetailsPage/DetailsPage';


const App = () => {
  return (
    <Router>
              <Header />
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/details/:id" element={<DetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

