from sqlalchemy import Column, Integer, Float, String, Date, Text, ForeignKey, create_engine
from api.ext.db import Base
from api.shop.shop import Shop
from api.user.user_dto import User
from api.food.food import Food
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class Review(Base):
    __tablename__ = "review"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    review_id = Column(Integer, primary_key=True, index=True)
    review_cmnt = Column(Text)
    taste_rate = Column(Float)
    quantity_rate = Column(Float)
    delivery_rate = Column(Float)
    review_time = Column(Date)
    review_img = Column(String(300))
    userid = Column(String(20), ForeignKey(User.userid))
    shop_id = Column(Integer, ForeignKey(Shop.shop_id))
    food_id = Column(Integer, ForeignKey(Food.food_id))

    # def __repr__(self):
    #     return f'Shop(id="{self.id}", userid="{self.userid}", ' \
    #            f'password="{self.password}", name="{self.name}",' \
    #            f'addr="{self.addr}", lat="{self.lat}", lng="{self.lng}"'


engine = create_engine('mysql+mysqlconnector://root:1004@127.0.0.1/mariadb?charset=utf8', encoding='utf8', echo=True)
# Base.metadata.create_all(engine)  # metadata: 스키마 구조 DDL create문 실행해 줌. 최초만 실행
# Base.metadata.drop_all(bind=engine, tables=[Review.__table__])  # drop table

if not engine.dialect.has_table(engine, "review"):
    Base.metadata.create_all(engine)  # metadata: 스키마 구조 DDL create문 실행해 줌. 최초만 실행
    print('테이블 생성')
else:
    print('이미 테이블이 존재')

# Session = sessionmaker(bind=engine)
# session = Session()
# session.add(User(userid='tom', password='1', name='thomas'))
# query = session.query
# session.commit()
