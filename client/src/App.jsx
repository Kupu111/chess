import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import axios from 'axios';
import { io } from 'socket.io-client';
import './App.css';

function App() {
    const [game, setGame] = useState(new Chess());
    const [moves, setMoves] = useState([]);
    const [player, setPlayer] = useState({ username: 'Ivanov.K' });
    const [stockfish, setStockfish] = useState(null);
    const [socket, setSocket] = useState(null);
    const [gameId, setGameId] = useState('');
    const [isOnlineGame, setIsOnlineGame] = useState(false);

    // Инициализация Socket.io
    useEffect(() => {
        const newSocket = io('http://localhost:3000');
        setSocket(newSocket);

        newSocket.on('move', (move) => {
            try {
                const result = game.move(move);
                if (result) {
                    setMoves([...moves, result.san]);
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
    }, [game, moves]);

    // Инициализация Stockfish
    useEffect(() => {
        const engine = new Worker('/stockfish.js');
        engine.onmessage = (event) => {
            const message = event.data;
            if (message.startsWith('bestmove')) {
                const bestMove = message.split(' ')[1];
                if (bestMove && bestMove !== '(none)') {
                    const move = game.move({
                        from: bestMove.slice(0, 2),
                        to: bestMove.slice(2, 4),
                        promotion: 'q',
                    });
                    if (move) {
                        setMoves([...moves, move.san]);
                        setGame(new Chess(game.fen()));
                    }
                }
            }
        };
        setStockfish(engine);
        return () => engine.terminate();
    }, [game, moves]);

    function onDrop(sourceSquare, targetSquare) {
        try {
            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });
            if (move === null) return false;
            setMoves([...moves, move.san]);
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

    async function saveGame() {
        try {
            const response = await axios.post('http://localhost:3000/api/games', {
                player1: player.username,
                moves,
                pgn: game.pgn(),
                is_bot_game: !isOnlineGame,
            });
            alert('Партия сохранена!');
            console.log(response.data);
        } catch (error) {
            alert('Ошибка при сохранении партии: ' + error.message);
        }
    }

    function resetGame() {
        setGame(new Chess());
        setMoves([]);
    }

    function startOnlineGame() {
        const newGameId = Date.now().toString(); // Простой ID игры
        setGameId(newGameId);
        setIsOnlineGame(true);
        if (socket) {
            socket.emit('joinGame', newGameId);
            alert(`Вы создали игру с ID: ${newGameId}. Поделитесь ID с другим игроком!`);
        }
    }

    function joinOnlineGame() {
        if (gameId && socket) {
            socket.emit('joinGame', gameId);
            setIsOnlineGame(true);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Шахматы</h1>
            <div style={{ marginBottom: '20px' }}>
                <h2>Профиль игрока</h2>
                <p>Имя: {player.username}</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3>Онлайн-игра</h3>
                <button
                    onClick={startOnlineGame}
                    style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}
                >
                    Создать игру
                </button>
                <input
                    type="text"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                    placeholder="Введите ID игры"
                    style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                />
                <button
                    onClick={joinOnlineGame}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Присоединиться
                </button>
            </div>
            <Chessboard position={game.fen()} onPieceDrop={onDrop} boardWidth={500} />
            <div style={{ marginTop: '10px' }}>
                <button
                    onClick={saveGame}
                    style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}
                >
                    Сохранить партию
                </button>
                <button
                    onClick={resetGame}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Новая игра
                </button>
            </div>
            <h3>Ходы:</h3>
            <ul>
                {moves.map((move, index) => (
                    <li key={index}>{move}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;