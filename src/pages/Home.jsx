import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handlePlayNow = () => {
        navigate('/game');
    };

    return (
        <div>
            <header>
                <div className="logo">BraINChess</div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Play</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h1>Welcome to BraINChess</h1>
                    <p>Play chess with the power of AI and challenge your friends online!</p>
                    <button className="play-button" onClick={handlePlayNow}>Play Now</button>
                </section>
            </main>
            <footer>
                <p>© 2025 BraINChess. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;