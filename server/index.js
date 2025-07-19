// server/index.js

// 1. Load dotenv before anything else
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '.env') });

// 2. Now import the rest
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';


import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
app.use(helmet(), express.json());
app.use(cors());

// Mount routes
app.use('/api/auth', authRoutes);
app.get('/api/health', (_req, res) => res.json({ status: 'OK' }));
app.use('/api/posts',  postRoutes);
app.use('/api/projects', projectRoutes);

// Connect & start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
);