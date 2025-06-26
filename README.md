# SkySaver

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status: Planning](https://img.shields.io/badge/status-planning-yellow)]()

SkySaver is an open-source tool to optimize Azure cloud costs for freelancers, small businesses, and developers. Get real-time insights, actionable savings, and a modern dashboard.

---

## Table of Contents

- [Vision](#vision)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Backend setup (FastAPI)](#backend-setup-fastapi)
  - [Frontend setup (Next.js)](#frontend-setup-nextjs)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Vision

SkySaver simplifies Azure cost management for non-experts:

- 📊 Track and visualize spending
- 💡 Get actionable recommendations
- ⚡ Enjoy a fast, modern dashboard

---

## Features

- Cost tracking via Azure APIs
- Idle resource detection
- Responsive Next.js dashboard
- Freemium model (core free, premium analytics soon)
- Azure-native deployment

---

## Repository Structure

- `backend/` – FastAPI backend (Azure cost API, mock mode, etc.)
- `frontend/` – Next.js frontend (dashboard UI)

---

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+ and npm (for frontend)
- Git
- A valid Azure subscription (for API access) or enable mock mode for local testing

---

### Backend setup (FastAPI)

1. **Clone the repository**

   ```sh
   git clone https://github.com/lucaszub/SkySaver.git
   cd SkySaver/backend
   ```

2. **Create and activate a virtual environment**

   ```sh
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```sh
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   Create a `.env` file in the `backend/` directory. These environment variables are required to connect to the Azure Cost Management API. For details on what values to provide, see [ENV_SETUP.md](./ENV_SETUP.md).

5. **Enable Mock Mode (Optional, No Azure Account Required)**

   To use the app without an Azure account, you can enable mock mode:

   ```
   MOCK_MODE=true
   ```

   When mock mode is enabled, the backend will return realistic sample cost data for all cost queries.
   To disable mock mode and use real Azure data, set `MOCK_MODE=false` or remove the variable.

6. **Run the application**

   ```sh
   uvicorn main:app --reload
   ```

   - The API will be available at [http://localhost:8000](http://localhost:8000)
   - Interactive documentation (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)
   - Alternative documentation (ReDoc): [http://localhost:8000/redoc](http://localhost:8000/redoc)

7. **(Alternative) Run as a script**

   You can also run the application as a script (for CLI testing):

   ```sh
   python main.py
   ```

---

### Frontend setup (Next.js)

1. **Navigate to the frontend directory**

   ```sh
   cd ../frontend
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the development server**

   ```sh
   npm run dev
   ```

   - The app will be available at [http://localhost:3000](http://localhost:3000)
   - Edit files in `src/` and see changes live.

---

## Roadmap

| Period  | Goal                                      |
| ------- | ----------------------------------------- |
| Q3 2025 | PoC: Cost tracking, basic recommendations |
| Q4 2025 | MVP: Auth, premium analytics              |
| 2026+   | Alerts, AI, multi-cloud support           |

---

## Contributing

We welcome contributors! Open issues, suggest features, or join development.

---

## License

MIT License

---

## Author

Created by Lucas
