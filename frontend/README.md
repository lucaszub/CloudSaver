# Cloud Saver

---

**Cloud Saver** is an open source tool designed to help teams visualize and analyze their Azure cloud costs with simplicity and clarity. It provides quick insights into cost evolution and identifies the top resource consumers, enabling better cloud cost management.

---

## Current Status

Cloud Saver is currently in active development. The core features are functional, allowing users to:

- View a **daily cost evolution chart** (line chart)
- See the **Top 10 cost-consuming Azure resources** (bar chart)
- Use either **mock data** for testing or real Azure Cost Management API data
- Deploy quickly with a lightweight stack (Next.js frontend + FastAPI backend)

The project aims to remain simple to deploy and easy to use, with no mandatory database setup for now.

---

## Features

### Available now

- Daily cost trends visualization
- Top 10 resource cost breakdown
- Support for mock and real data sources
- Fast deployment with minimal configuration

### Planned features

- Advanced filtering options to explore costs by different dimensions (resource group, tags, time range, etc.)
- Intelligent detection and automated suggestions for cost optimizations
- Multi-cloud support (extending beyond Azure)
- User authentication and multi-user support
- Improved caching and rate limiting handling for API calls

---

## Roadmap

| Milestone                          | Target Date | Status  |
| ---------------------------------- | ----------- | ------- |
| Core visualization features        | Completed   | ✅      |
| Advanced filters                   | Q4 2025     | Planned |
| Automated cost optimization alerts | Q1 2026     | Planned |
| Multi-cloud support                | Mid 2026    | Planned |
| User management & authentication   | Late 2026   | Planned |

---

## Installation & Usage

1. Clone the repo  
   git clone https://github.com/yourusername/cloud-saver.git
   cd cloud-saver

2. Install backend dependencies  
   cd backend
   pip install -r requirements.txt

3. Install frontend dependencies  
   cd ../frontend
   npm install

4. Run backend and frontend  
   In backend folder:
   uvicorn main:app --reload

   In frontend folder:
   npm run dev

5. Open your browser at `http://localhost:3000` to access the dashboard.

---

## How to Start the Frontend

1. Open a terminal and navigate to the `frontend` directory:
   cd frontend
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Contribution

Cloud Saver is an open source project and welcomes contributions!  
If you want to help improve the tool, please:

- Check the [issues](https://github.com/yourusername/cloud-saver/issues) for tasks and feature requests
- Open a new issue if you find bugs or want to suggest new features
- Fork the repo and submit pull requests with clear descriptions

Your feedback and ideas will help shape the future of Cloud Saver.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you want to discuss the project, request features, or need help deploying Cloud Saver in your environment, feel free to contact me at [your-email@example.com].

---

_Thank you for your interest in Cloud Saver!_
