import express from 'express';
import mongoose from 'mongoose';
import { Socket } from "socket.io";
import http from 'http';
import { Server as SocketServer } from 'socket.io';
const cors = require('cors')

import { usersRouter } from './routes/users';
import { featureRouter } from './routes/features';
import { medicineRouter } from './routes/medicines';
import { orderRouter } from './routes/order';

require('dotenv').config();

const app = express();
export const server = http.createServer(app);
export const io = new SocketServer(server, {
  cors: {
      origin: "*",
  }
});

app.use(express.json());

app.use(cors());
// Use your user routes
app.use('/api/users', usersRouter);
app.use('/api', featureRouter);
app.use('/medicines', medicineRouter);
app.use('/order', orderRouter);


io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle Socket.IO events (e.g., webs) here
  socket.on('web', (message) => {
    io.emit('web', message); // Broadcast the message to all connected clients
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('Database URL is not defined in the environment variables.');
  process.exit(1); // Exit the application or handle the error accordingly
}

// Now you can use dbUrl in your Mongoose connection code
mongoose.connect(dbUrl);

app.get('/health', (req, res) => {
  res.send('Hello, World!');
});

export default server;
