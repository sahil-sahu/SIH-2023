import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors')

import { usersRouter } from './routes/users';
import { featureRouter } from './routes/features';
import { PrismaClient } from '@prisma/client';
import { medicineRouter } from './routes/medicines';

export const prisma = new PrismaClient();
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

// Use your user routes
app.use('/api/users', usersRouter);
app.use('/api', featureRouter);
app.use('/medicines', medicineRouter);

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
