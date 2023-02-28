import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './views/Home';
import Devis from './views/Devis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="devis" element={<Devis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
