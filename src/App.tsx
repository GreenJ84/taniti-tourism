import React from 'react';
import { Outlet } from "react-router-dom";

import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import { AppContextProvider } from './utils/AppContext';


function App() {

  return (
    <AppContextProvider>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppContextProvider>
  );
}

export default App;
