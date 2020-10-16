from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base

db = SQLAlchemy()
Base = declarative_base()  # SqlAlchemy에서 사용
config = {
    'user': 'root',
    'password': '1004',
    'host': 'localhost',
    'port': '3306',
    'database': 'mariadb'
}

charset = {'utf8':'utf8'}
url = f"mysql+mysqlconnector://{config['user']}:{config['password']}@{config['host']}:{config['port']}/" \
      f"{config['database']}?charset=utf8"

def openSession():
    ...
