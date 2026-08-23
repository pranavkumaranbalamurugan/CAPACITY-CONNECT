#Libraries Import
import os
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")