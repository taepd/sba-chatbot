# from sqlalchemy import Column, Integer, Float, String, ForeignKey, create_engine
from chatbot_api.ext.db import Base, db
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class UserDto(db.Model):
    __tablename__ = "user"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    userid: str = db.Column(db.String(20), primary_key=True, index=True)
    password: str = db.Column(db.String(200))
    name: str = db.Column(db.String(30))
    addr: str = db.Column(db.String(100))
    lat: float = db.Column(db.Float)
    lng: float = db.Column(db.Float)

    # def __init__(self, userid, password, name, addr, lat, lng):
    #     self.userid = userid
    #     self.password = password
    #     self.name = name
    #     self.addr = addr
    #     self.lat = lat
    #     self.lng = lng

    def __repr__(self):
        return f'User(userid={self.userid}, ' \
               f'password={self.password}, name={self.name},' \
               f'addr={self.addr}, lat={self.lat}, lng={self.lng})'

    @property
    def json(self):
        return {
            'userid': self.userid,
            'password': self.password,
            'name': self.name,
            'addr': self.addr,
            'lat': self.lat,
            'lng': self.lng
        }




# engine = create_engine('mysql+mysqlconnector://root:1004@127.0.0.1/mariadb?charset=utf8', encoding='utf8', echo=True)
# Base.metadata.create_all(engine)  # metadata: 스키마 구조 DDL create문 실행해 줌. 최초만 실행
# Base.metadata.drop_all(bind=engine, tables=[User.__table__])  # drop table


# Session = sessionmaker(bind=engine)
# session = Session()
# session.add(User(userid='tom', password='1', name='thomas'))
# query = session.query
# session.commit()
