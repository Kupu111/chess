import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header>
                <div className="nav-right">
                    <button
                        className="button-outline"
                        onClick={() => navigate('/login')}
                    >
                        Sign in
                    </button>
                    <button
                        className="button-outline"
                        onClick={() => navigate('/register')}
                    >
                        Sign up
                    </button>

                    <div className="logo">
                        <img src="/BraINChess 1.png" alt="BrainChess Logo" />
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
                    <button className="button-outline">Sign in</button>
                    <button className="button-outline">Sign up</button>
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

            <footer className="footer">
                <p>© 2025 Chess Master. All rights reserved.</p>
            </footer>

            <style jsx>{`
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    background-color: #1a1a1a;
                    color: #fff;
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 32px;
                    background-color: #1a1a1a;
                    border-bottom: 1px solid #333;
                }
                .nav-left, .nav-right {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 700;
                    font-size: 18px;
                }
                .logo img {
                    width: 24px;
                    height: 24px;
                }
                nav a {
                    text-decoration: none;
                    color: #ccc;
                    font-weight: 500;
                }
                nav a:hover {
                    color: #fff;
                }
                .button-outline {
                    padding: 6px 14px;
                    border: 2px solid rgb(255,204,67);
                    border-radius: 6px;
                    color: rgb(255,204,67);
                    background: transparent;
                    font-weight: 600;
                    cursor: pointer;
                }
                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 20px;
                    text-align: center;
                }
                .main h1 {
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 20px;
                }
                .main p {
                    font-size: 18px;
                    max-width: 600px;
                    color: #aaa;
                    margin-bottom: 32px;
                }
                .main-buttons {
                    display: flex;
                    gap: 16px;
                }
                .main-buttons button:first-child {
                    background-color: rgb(255,204,67);
                    color: #000;
                    font-weight: 600;
                    padding: 10px 18px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
                .main-buttons button:last-child {
                    background-color: #333;
                    color: #fff;
                    font-weight: 600;
                    padding: 10px 18px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}