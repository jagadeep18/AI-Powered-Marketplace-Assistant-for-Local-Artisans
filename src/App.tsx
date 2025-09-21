import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductUpload from './pages/ProductUpload';
import MarketingTools from './pages/MarketingTools';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<ProductUpload />} />
          <Route path="/marketing" element={<MarketingTools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;