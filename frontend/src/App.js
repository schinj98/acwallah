import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import OldListedAC from './pages/OldListedAC';
import Pricing from './pages/Pricing';
import SellerPostAC from './pages/SellerPostAC';
import SellerProfile from './pages/SellerProfile';
import HeroSection from "./components/HeroSection";
import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/popup.js';

function AppContent() {

  return (
    <>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/oldlistedac" element={<OldListedAC />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sellerpostac" element={<SellerPostAC />} />
        <Route path="/profile" element={<SellerProfile />} />
      </Routes>
      <Popup />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
