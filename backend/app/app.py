#Libraries Import
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import webbrowser

#Services Import
from app.db import Base, engine
from app.routes.test_routes import test
from app.routes.employee import employee
from app.auth import auth


Base.metadata.create_all(bind=engine)

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth)
app.include_router(test)
app.include_router(employee)



# @app.on_event("startup")
# async def open_browser():
#     webbrowser.open("http://localhost:5173/")
#     webbrowser.open("http://localhost:8000/docs")




