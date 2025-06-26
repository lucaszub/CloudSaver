# SkySaver – Quickstart Guide

This guide will help you clone, install, and run the SkySaver backend application.

## Prerequisites

- Python 3.9+
- Git
- A valid Azure subscription (for API access) or enable mock mode for local testing

## Enable Mock Mode (No Azure Account Required)

To use the app without an Azure account, you can enable mock mode:

1. In your `.env` file, add:
   ```
   MOCK_MODE=true
   ```
2. When mock mode is enabled, the backend will return realistic sample cost data for all cost queries.
3. To disable mock mode and use real Azure data, set `MOCK_MODE=false` or remove the variable.

## Clone the repository

```sh
git clone https://github.com/lucaszub/SkySaver.git
cd SkySaver/backend
```

## Create and activate a virtual environment

```sh
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

## Install dependencies

```sh
pip install -r requirements.txt
```

## Configure environment variables

Create a `.env` file in the `backend/` directory. These environment variables are required to connect to the Azure Cost Management API. For details on what values to provide, see [ENV_SETUP.md](./ENV_SETUP.md).

## Run the application

You can run the FastAPI application with Uvicorn:

```sh
uvicorn main:app --reload
```

- The API will be available at [http://localhost:8000](http://localhost:8000)
- Interactive documentation (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)
- Alternative documentation (ReDoc): [http://localhost:8000/redoc](http://localhost:8000/redoc)

## (Alternative) Run as a script

You can also run the application as a script (for CLI testing):

```sh
python main.py
```
