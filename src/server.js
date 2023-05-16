import express from 'express';
import "dotenv/config.js";
import './config/database.js';

// Express middleware
const server = express(); // crear servidor
const PORT = process.env.PORT || 8080; // definir el puerto

// Middleware
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Listen on http://localhost
const ready = () => console.log('Server ready on port: ', PORT);
server.listen(PORT, ready); // iniciar servidor
