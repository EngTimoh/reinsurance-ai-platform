Reinsurance AI Platform






📌 Overview

The Reinsurance AI Platform is designed to redefine reinsurance business processes using Artificial Intelligence. It leverages modern technologies to optimize underwriting, claims processing, risk assessment, and fraud detection.

Our mission is to streamline workflows, reduce manual effort, and provide data-driven insights to reinsurance firms.

🏗️ Tech Stack

Frontend: React (Vite), TypeScript, TailwindCSS

Backend: Node.js (Express.js)

AI Services: Python (FastAPI, scikit-learn, TensorFlow)

Database: PostgreSQL with Sequelize ORM

DevOps: Docker, GitHub Actions (CI/CD), Postman (API Testing)

📂 Project Structure
reinsurance-ai-platform/
│── .github/workflows/     # GitHub Actions CI/CD
│── ai-services/           # AI/ML microservices
│   └── risk_model/
│       ├── app.py
│       ├── requirements.txt
│       └── .env.example
│── backend/               # Node.js + Express.js API
│   ├── src/
│   ├── package.json
│   └── .env.example
│── frontend/              # React (Vite) application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│── docker-compose.yml     # Orchestration
│── README.md

🚀 Getting Started
Prerequisites

Node.js >= 18

Python >= 3.10

PostgreSQL >= 14

Git & Docker

Setup Instructions

Clone the repository

git clone https://github.com/EngTimoh/reinsurance-ai-platform.git
cd reinsurance-ai-platform


Setup Frontend

cd frontend
npm install
npm run dev


Setup Backend

cd backend
npm install
npm run dev


Setup AI Service

cd ai-services/risk_model
pip install -r requirements.txt
uvicorn app:app --reload


Database Migration

npx sequelize db:migrate

🛠 Features

🔍 AI-Powered Underwriting – Predictive risk modeling

⚡ Automated Claims Processing – Faster decision making

🔒 Fraud Detection Engine – Identify anomalies in claims

📊 Risk Assessment Dashboard – Real-time insights

🔗 Seamless Integrations – API-first architecture

🤝 Contribution Guide

We welcome contributions from the community!

Fork the repo

Create a feature branch (git checkout -b feature/awesome-feature)

Commit changes (git commit -m "Add awesome feature")

Push branch (git push origin feature/awesome-feature)

Open a Pull Request

📜 License

Distributed under the MIT License. See LICENSE for details.

👥 Authors

EngTimoh & Team 🚀
