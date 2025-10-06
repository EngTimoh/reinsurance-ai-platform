
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import claimRoutes from './routes/claims.js';   
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/claims', claimRoutes);   

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});