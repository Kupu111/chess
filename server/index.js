const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chess_db',
    password: 'Nat1379728',
    port: 5432,
});

app.post('/api/games', async (req, res) => {
    const { player1, moves, pgn, is_bot_game } = req.body;
    const query = `
    INSERT INTO games (player1_id, moves, pgn, is_bot_game)
    VALUES ((SELECT id FROM players WHERE username = $1), $2, $3, $4)
    RETURNING *
  `;
    try {
        const result = await pool.query(query, [player1, moves, pgn, is_bot_game]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// WebSocket: обработка соединений
io.on('connection', (socket) => {
    console.log('Игрок подключился:', socket.id);

    socket.on('joinGame', (gameId) => {
        socket.join(gameId); // Присоединяем игрока к комнате
        console.log(`Игрок ${socket.id} присоединился к игре ${gameId}`);
        io.to(gameId).emit('playerJoined', socket.id); // Уведомляем всех в комнате
    });

    socket.on('move', ({ gameId, move }) => {
        io.to(gameId).emit('move', move); // Отправляем ход всем в комнате
        console.log(`Ход в игре ${gameId}:`, move);
    });

    socket.on('disconnect', () => {
        console.log('Игрок отключился:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});