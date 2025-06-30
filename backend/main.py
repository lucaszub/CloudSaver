from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from service.azure_cost import (
    get_cost_data,
    get_daily_costs,
    get_costs_by_resource_group,
    get_costs_custom_period,
    get_costs_by_resource,
    get_access_token
)


app = FastAPI(title="SkySaver API")

# CORS middleware for localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Compteur global (attention : non thread-safe en prod, mais ok pour debug)
call_counter = 0

token = get_access_token()
@app.get("/")
def root():
    return {"message": "Welcome to SkySaver API!"}

@app.get("/api/costs/service")
def costs_by_service():
    global call_counter
    call_counter += 1
    print(f"API called {call_counter} times")
    return get_cost_data(token)

@app.get("/api/costs/daily")
def costs_by_day():
    global call_counter
    call_counter += 1
    print(f"API called {call_counter} times")
    return get_daily_costs(token)

@app.get("/api/costs/resource-group")
def costs_by_resource_group():
    return get_costs_by_resource_group(token)

@app.get("/api/costs/custom")
def costs_custom(start_date: str, end_date: str):
    return get_costs_custom_period(token, start_date=start_date, end_date=end_date)

@app.get("/api/costs/resource")
def costs_by_resource():
    return get_costs_by_resource(token)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
