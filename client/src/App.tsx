import React from 'react';
import './App.scss';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Restaurants from './components/Pages/Restaurants/Restaurants';
import Chefs from './components/Pages/Chefs/Chefs';


const App = () => {

  return (
    <Router>
    <div>
      <Header />
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/chefs' element={<Chefs />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
