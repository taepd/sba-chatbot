from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db = SQLAlchemy()
config = {
    'user': 'mychatbot',
    'password': 'mychatbot',
    'host': 'mychatbot.cghkqk2zeb0q.ap-northeast-2.rds.amazonaws.com',
    'port': '3306',
    'database': 'mychatbot'
}

charset = {'utf8': 'utf8'}
url = f"mysql+mysqlconnector://{config['user']}:{config['password']}@{config['host']}:{config['port']}/" \
      f"{config['database']}?charset=utf8"

Base = declarative_base()  # SqlAlchemy에서 사용
engine = create_engine(url)

def openSession():
    return sessionmaker(bind=engine)

