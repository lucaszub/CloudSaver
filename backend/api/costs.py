from fastapi import APIRouter, Query
from service.azure_cost import get_cost_data
from service.mock_cost_data import get_mock_cost_data
import os

router = APIRouter()

@router.get("/costs")
def get_costs(mock: bool = Query(None, description="Enable mock mode")):
    # Priority: query param > env var
    mock_mode = mock if mock is not None else os.environ.get("MOCK_MODE", "false").lower() == "true"
    if mock_mode:
        return get_mock_cost_data()
    return get_cost_data()
