import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ArtisanDashboard from './pages/ArtisanDashboard';
import ProductUpload from './pages/ProductUpload';
import Storefront from './pages/Storefront';
import MarketingTools from './pages/MarketingTools';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ArtisanDashboard />} />
          <Route path="/upload" element={<ProductUpload />} />
          <Route path="/storefront/:artisanId" element={<Storefront />} />
          <Route path="/marketing" element={<MarketingTools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;