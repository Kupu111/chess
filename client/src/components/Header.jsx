import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ onLogin }) {
  return (
    <header>
      <div className="nav-left">
        <div className="logo">
          <img src="../assets/images/BraINChess 1.png" alt="BrainChess Logo" />
          <span>BrainChess</span>
        </div>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Главная</Link>
          <Link to="/games" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Турниры</Link>
          <Link to="/education" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>Уроки</Link>
          <span style={{ color: '#888', fontWeight: 600, cursor: 'default' }}>Гроссмейстеры</span>
          <Link to="/about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 600 }}>О нас</Link>
        </nav>
      </div>
      <div className="nav-right">
        <button className="button-outline" onClick={onLogin}>Вход</button>
      </div>
    </header>
  );
} 