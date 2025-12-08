import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import VirtualOfficeThankYou from './VirtualOfficeThankYou.tsx';
import PrivateOfficeThankYou from './PrivateOfficeThankYou.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you/virtual-office" element={<VirtualOfficeThankYou />} />
        <Route path="/thank-you/private-office" element={<PrivateOfficeThankYou />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
