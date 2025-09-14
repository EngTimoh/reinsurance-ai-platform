import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

sequelize.sync().then(() => {
  console.log("✅ PostgreSQL connected & models synced");
});

import authRoutes from "./routes/auth.js";
import healthRoutes from "./routes/health.js";
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
