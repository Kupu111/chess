import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import axios from 'axios';
import { io } from 'socket.io-client';
import { Stockfish } from 'stockfish.js';
import './Game.css';

function Game() {
    const [game, setGame] = useState(new Chess());
    const [moves, setMoves] = useState([]);
    const [player, setPlayer] = useState({ username: import.meta.env.VITE_PLAYER_NAME });
    const [stockfish, setStockfish] = useState(null);
    const [socket, setSocket] = useState(null);
    const [gameId, setGameId] = useState('');
    const [isOnlineGame, setIsOnlineGame] = useState(false);

    // Инициализация Socket.IO
    useEffect(() => {
        const newSocket = io(import.meta.env.VITE_API_URL);
        setSocket(newSocket);

        newSocket.on('move', (move) => {
            try {
                const result = game.move(move);
                if (result) {
                    setMoves(prev => [...prev, result.san]);
                    setGame(new Chess(game.fen()));
                }
            } catch (error) {
                console.error('Недопустимый ход:', move);
            }
        });

        newSocket.on('playerJoined', (playerId) => {
            alert(`Игрок ${playerId} присоединился к игре!`);
        });

        return () => newSocket.disconnect();
    }, [game]);

    // Инициализация Stockfish
    useEffect(() => {
        const engine = new Stockfish();
        setStockfish(engine);

        engine.onmessage = (event) => {
            console.log('Сообщение от Stockfish:', event);
            if (event.startsWith('bestmove')) {
                const bestMove = event.split(' ')[1];
                if (bestMove && bestMove !== '(none)') {
                    const move = game.move({
                        from: bestMove.slice(0, 2),
                        to: bestMove.slice(2, 4),
                        promotion: 'q',
                    });
                    if (move) {
                        setMoves(prev => [...prev, move.san]);
                        setGame(new Chess(game.fen()));
                    }
                }
            }
        };

        // Тестовые команды для проверки работы Stockfish
        engine.postMessage('uci');
        engine.postMessage('isready');
        engine.postMessage('go depth 10');

        return () => {
            engine.postMessage('quit');
        };
    }, [game]);

    // Дополнительный useEffect для отладки Stockfish
    useEffect(() => {
        if (stockfish) {
            console.log('Stockfish initialized and ready');
            // Можно добавить дополнительные тестовые команды здесь
        }
    }, [stockfish]);

    function onDrop(sourceSquare, targetSquare) {
        try {
            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });
            if (move === null) return false;

            setMoves(prev => [...prev, move.san]);
            setGame(new Chess(game.fen()));

            if (isOnlineGame && socket) {
                socket.emit('move', { gameId, move });
            } else if (stockfish) {
                stockfish.postMessage(`position fen ${game.fen()}`);
                stockfish.postMessage('go movetime 1000');
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    // ... остальные функции (saveGame, resetGame и т.д.) остаются без изменений ...
    // Верните тот же JSX, что и в вашем исходном коде

    return (
        <div style={{ padding: '20px' }}>
            {/* Ваш существующий JSX */}
        </div>
    );
}

export default Game;