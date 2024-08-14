import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Cuisine from './pages/Cuisine';
import FAQ from './pages/FAQ';
import Lodging from './pages/Lodging';
import NotFound from './pages/NotFound';
import Transportation from './pages/Transportation';


function App() {

  return (
    <>
    <Navigation />
      <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/Cuisine" element={<Cuisine />} />
            <Route path="/Lodging" element={<FAQ />} />
            <Route path="/Transportation" element={<Lodging />} />
            <Route path="/FAQ" element={<Transportation />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
