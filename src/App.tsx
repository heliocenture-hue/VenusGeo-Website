import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { EnterpriseMobility } from './pages/EnterpriseMobility';
import { AboutUs } from './pages/AboutUs';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/enterprise-mobility/" element={<EnterpriseMobility />} />
        <Route path="/enterprise-mobility" element={<Navigate to="/enterprise-mobility/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
