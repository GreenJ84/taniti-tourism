import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";

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
import { AppContextProvider } from './utils/AppContext';


function App() {

  return (
    <HashRouter>
      <AppContextProvider>
        <Navigation />
        <main>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Activities" element={<Activities />} />
              <Route path="/Cuisine" element={<Cuisine />} />
              <Route path="/Lodging" element={<Lodging />} />
              <Route path="/Transportation" element={<Transportation />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        <Footer />
      </AppContextProvider>
    </HashRouter>
  )
}

export default App;
