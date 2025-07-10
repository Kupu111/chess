import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Training from "./pages/Training";
import Games from "./pages/Games";
import Education from "./pages/Education";
import About from "./pages/About";
import Calls from "./pages/Calls";
import PlayVsBot from "./pages/PlayVsBot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/training" element={<Training />} />
        <Route path="/games" element={<Games />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/play-vs-bot" element={<PlayVsBot />} />
      </Routes>
    </Router>
  );
}