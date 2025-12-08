import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VirtualOfficeThankYou from './pages/VirtualOfficeThankYou';
import PhysicalOfficeThankYou from './pages/PhysicalOfficeThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you/virtual" element={<VirtualOfficeThankYou />} />
      <Route path="/thank-you/physical" element={<PhysicalOfficeThankYou />} />
    </Routes>
  );
}

export default App;
