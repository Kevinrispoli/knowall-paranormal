// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SubmitStoryPage from "./components/SubmitStoryPage";
import ThankYouPage from "./components/ThankYouPage";
import TikTokPage from "./components/TikTokPage";
import YouTubePage from "./components/YouTubePage";
import DonatePage from "./components/DonatePage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submit" element={<SubmitStoryPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/tiktoks" element={<TikTokPage />} />
          <Route path="/youtube" element={<YouTubePage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
