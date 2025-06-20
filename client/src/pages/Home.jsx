import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header>
                <div className="nav-left">
                    <div className="logo">
                        <img src="./BraINChess 1.png" alt="BrainChess Logo" />
                        <span>BrainChess</span>
                    </div>
                    <nav>
                        <a href="#">Play</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Help</a>
                    </nav>
                </div>
                <div className="nav-right">
                    <button className="button-outline" onClick={() => navigate('/login')}>Вход</button>
                    <button className="button-outline" onClick={() => navigate('/register')}>Регистрация</button>
                </div>
            </header>

            <section className="main">
                <h1>Play. Learn. Connect. Master chess.</h1>
                <p>
                    Welcome! Dive into a world where chess is more than a game—it's a journey.
                    Challenge friends, train your skills, or explore legendary matches. Whether
                    you're here to compete, learn, or just have fun, you're in the right place.
                    Ready to make your next move?
                </p>
                <div className="main-buttons">
                    <button onClick={() => navigate('/game')}>Get started</button>
                    <button>See features</button>
                </div>
            </section>

            <main className="main-content">
                <section className="features-section">
                    <h2>Features</h2>
                    <div className="feature-cards">
                        <article className="feature-card">
                            <h3>Multiplayer</h3>
                            <p>Challenge players around the world in real-time games.</p>
                        </article>
                        <article className="feature-card">
                            <h3>Play vs Computer</h3>
                            <p>Train offline against various AI difficulty levels.</p>
                        </article>
                        <article className="feature-card">
                            <h3>Statistics</h3>
                            <p>Track your progress and review past games.</p>
                        </article>
                    </div>
                </section>

                <section className="faq-section">
                    <h2>FAQ</h2>
                    <details className="faq-item">
                        <summary>Can I play without registering?</summary>
                        <p>Yes, you can play as a guest or create an account to save your games and stats.</p>
                    </details>
                    <details className="faq-item">
                        <summary>Is this site free to use?</summary>
                        <p>Absolutely. The chess platform is completely free and open-source.</p>
                    </details>
                    <details className="faq-item">
                        <summary>How do I improve my game?</summary>
                        <p>Practice regularly, solve puzzles, and analyze your past games using our tools.</p>
                    </details>
                </section>
            </main>

            <footer style={{
                backgroundColor: "#1c1c1c",
                fontFamily: "'Montserrat', sans-serif",
                color: "#ccc",
                padding: "60px 80px 20px"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}>
                    <div>
                        <ul style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 40px"
                        }}>
                            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Sign up</a></li>
                            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Log in</a></li>
                            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Play</a></li>
                            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Train</a></li>
                            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Games</a></li>
                        </ul>
                        <p style={{ color: "#fff", fontSize: "14px" }}>Join a community that loves chess.</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ marginBottom: "30px" }}>
                            <img
                                src="./BraINChess 1.png"
                                alt="BrainChess Logo"
                                style={{
                                    height: "32px",
                                    verticalAlign: "middle",
                                    marginRight: "8px"
                                }}
                            />
                            <span style={{ fontSize: "16px", color: "#fff" }}>BRAINCHESS</span>
                        </div>
                        <div>
                            <a href="#"><img src="./icons8-instagram-48.png" alt="instagram Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
                            <a href="#"><img src="./icons8-telegram-app-48.png" alt="telegram Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
                            <a href="#"><img src="./icons8-vk-circled-48.png" alt="vk Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
                            <a href="#"><img src="./icons8-whatsapp-48.png" alt="whatsapp Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
                            <a href="#"><img src="./icons8-youtube-48.png" alt="youtube Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: "#333", margin: "40px 0" }} />
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "13px",
                    color: "#888"
                }}>
                    <p>All rights reserved © 2025</p>
                    <p style={{ color: "#fff" }}>Made by Kirill Demidenko</p>
                </div>
            </footer>
        </div>
    );
}
