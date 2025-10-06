import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import claimRoutes from './routes/claimRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();   

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/claims', claimRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
