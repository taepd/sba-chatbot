from sqlalchemy import Column, Integer, Float, String, ForeignKey, create_engine
from chatbot_api.ext.db import Base
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class User(Base):
    __tablename__ = "user"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    userid = Column(String(20), primary_key=True, index=True)
    password = Column(String(200))
    name = Column(String(30))
    addr = Column(String(100))
    lat = Column(Float)
    lng = Column(Float)

    def __repr__(self):
        return f'User(userid={self.userid}, ' \
               f'password={self.password}, name={self.name},' \
               f'addr={self.addr}, lat={self.lat}, lng={self.lng})'

    @property
    def serialize(self):
        return {
            'userid': self.userid,
            'password': self.password,
            'name': self.name,
            'addr': self.addr,
            'lat': self.lat,
            'lng': self.lng
        }

class UserDto(object):
    userid: str
    password: str
    name: str
    addr: str
    lat: float
    lng: float


# engine = create_engine('mysql+mysqlconnector://root:1004@127.0.0.1/mariadb?charset=utf8', encoding='utf8', echo=True)
# Base.metadata.create_all(engine)  # metadata: 스키마 구조 DDL create문 실행해 줌. 최초만 실행
# Base.metadata.drop_all(bind=engine, tables=[User.__table__])  # drop table


# Session = sessionmaker(bind=engine)
# session = Session()
# session.add(User(userid='tom', password='1', name='thomas'))
# query = session.query
# session.commit()
