import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";

export default function PlayVsBot() {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <div className="home-page">
      <Header onLogin={() => setAuthOpen(true)} />
      <div className="hero-gradient absolute inset-0"></div>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
} 