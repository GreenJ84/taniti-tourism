import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Cuisine from './pages/Cuisine';
import FAQ from './pages/FAQ';
import Lodging from './pages/Lodging';
import Transportation from './pages/Transportation';
import NotFound from './pages/NotFound';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Activities" element={<Activities />} />
          <Route path="Cuisine" element={<Cuisine />} />
          <Route path="Lodging" element={<FAQ />} />
          <Route path="Transportation" element={<Lodging />} />
          <Route path="FAQ" element={<Transportation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
