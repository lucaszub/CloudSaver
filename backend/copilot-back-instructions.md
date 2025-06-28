# Copilot Backend Instructions

## Project Context

- FastAPI backend for Azure cost management
- Exposes REST API endpoints for frontend consumption
- Handles business logic, authentication, and Azure API integration

## Folder Structure Guidance

- `api/`: Contains FastAPI route definitions and API logic
- `apilogic/`: (If present) Contains business logic and service classes
- `app/`: (If present) May contain application setup, configuration, and submodules
- `service/`: (If present) Contains service classes for Azure cost, mock data, etc.
- `config.py`: Centralized configuration for environment variables and settings
- `main.py`: FastAPI app entry point
- `requirements.txt`: Python dependencies

## Best Practices

- Use environment variables for secrets and configuration
- Organize code by feature or responsibility
- Write clear docstrings for all public functions and classes
- Add unit tests for critical business logic
- Use type hints for all function signatures

## What Not to Do

- Do not hardcode secrets or credentials
- Do not expose internal logic directly via API endpoints
- Do not mix API and business logic in the same file

## Example: Adding a New API Endpoint

- Add a new route in `api/` (e.g., `api/costs.py`)
- Implement business logic in `apilogic/` or `service/`
- Register the route in `main.py`

---

You can copy-paste these instructions into your backend copilot-back-instructions.md to help contributors and Copilot understand the backend structure and best practices.
