import React from 'react';
import { Outlet } from "react-router-dom";

import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
