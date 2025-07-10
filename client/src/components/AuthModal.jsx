import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login"); // 'login' или 'register'
  const navigate = useNavigate();

  if (!open) return null;

  function handleLogin(e) {
    e.preventDefault();
    // Здесь может быть логика авторизации
    onClose();
    navigate("/profile");
  }

  function handleRegister(e) {
    e.preventDefault();
    // Здесь может быть логика регистрации
    onClose();
    navigate("/profile");
  }

  return (
    <div className="modal-overlay" style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)", zIndex: 1000,
      display: "flex", justifyContent: "center", alignItems: "center"
    }} onClick={onClose}>
      <div className="modal-content relative" style={{
        background: "linear-gradient(135deg, #e07a1e, #d5cea3)",
        padding: "2rem", borderRadius: 12, width: "90%", maxWidth: 400,
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)", position: "relative"
      }} onClick={e => e.stopPropagation()}>
        <span className="close-modal" style={{
          position: "absolute", top: 15, right: 15, fontSize: "1.5rem",
          color: "white", cursor: "pointer", transition: "transform 0.2s"
        }} onClick={onClose}>&times;</span>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <button onClick={() => setMode("login")}
            style={{
              background: mode === "login" ? "#1a120b" : "transparent",
              color: mode === "login" ? "#fff" : "#1a120b",
              border: "none", borderRadius: 8, padding: "8px 16px", marginRight: 8,
              fontWeight: 600, cursor: "pointer"
            }}>
            Войти
          </button>
          <button onClick={() => setMode("register")}
            style={{
              background: mode === "register" ? "#1a120b" : "transparent",
              color: mode === "register" ? "#fff" : "#1a120b",
              border: "none", borderRadius: 8, padding: "8px 16px",
              fontWeight: 600, cursor: "pointer"
            }}>
            Регистрация
          </button>
        </div>
        {mode === "login" ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Авторизация</h2>
            <div className="mb-4">
              <label className="form-label">Логин или Email</label>
              <input type="text" className="form-input" placeholder="Введите ваш логин или email" required autoComplete="username" />
            </div>
            <div className="mb-2">
              <label className="form-label">Пароль</label>
              <input type="password" className="form-input" placeholder="Введите ваш пароль" required autoComplete="current-password" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button type="button" className="forgot-password" style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 0 }} onClick={() => setMode("register")}>Регистрация</button>
              <a href="#" className="forgot-password">Забыли пароль?</a>
            </div>
            <button type="submit" className="submit-btn" style={{ marginTop: 16 }}>Войти</button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Регистрация</h2>
            <div className="mb-4">
              <label className="form-label">ФИО</label>
              <input type="text" className="form-input" placeholder="Введите ФИО" required />
            </div>
            <div className="mb-4">
              <label className="form-label">Возраст</label>
              <input type="number" className="form-input" placeholder="Введите возраст" required />
            </div>
            <div className="mb-4">
              <label className="form-label">Страна</label>
              <input type="text" className="form-input" placeholder="Введите страну" required />
            </div>
            <div className="mb-4">
              <label className="form-label">Email или логин</label>
              <input type="text" className="form-input" placeholder="Введите email или логин" required autoComplete="username" />
            </div>
            <div className="mb-2">
              <label className="form-label">Пароль</label>
              <input type="password" className="form-input" placeholder="Введите пароль" required autoComplete="new-password" />
            </div>
            <button type="submit" className="submit-btn" style={{ marginTop: 16 }}>Зарегистрироваться</button>
          </form>
        )}
      </div>
    </div>
  );
} 