from fastapi import APIRouter,HTTPException, Depends
from sqlalchemy.orm import Session
from datetime import datetime

dashboard=APIRouter(tags=["dashboard"])

@dashboard.post("/api/attendance/checkin")