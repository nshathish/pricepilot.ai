from sqlmodel import create_engine, SQLModel, Session

from app.core.config import get_settings

settings = get_settings()
engine = create_engine(settings.database_url, echo=True)


def init_db():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
