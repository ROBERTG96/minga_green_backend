import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config.js";
import './config/database.js';
import indexRouter from './router/index.js';

// Express middleware
const server = express(); // crear servidor
const PORT = process.env.PORT || 8080; // definir el puerto

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(morgan('dev'));
// Router
server.use('/api', indexRouter);

// Listen on http://localhost
const ready = () => console.log('Server ready on port: ', PORT);
server.listen(PORT, ready); // iniciar servidor
