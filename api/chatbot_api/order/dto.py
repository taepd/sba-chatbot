# from sqlalchemy import Column, Integer, Float, String, Date, ForeignKey, create_engine
from chatbot_api.ext.db import Base, db
from chatbot_api.user.dto import UserDto
from chatbot_api.shop.dto import ShopDto
from chatbot_api.food.dto import FoodDto
from chatbot_api.review.dto import ReviewDto
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class OrderDto(db.Model):
    __tablename__ = "order"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    order_id: int = db.Column(db.Integer, primary_key=True, index=True)
    order_time: str = db.Column(db.Date)
    order_cmnt: str = db.Column(db.String(200))
    userid: str = db.Column(db.String(20), db.ForeignKey(UserDto.userid))
    shop_id: int = db.Column(db.Integer, db.ForeignKey(ShopDto.shop_id))
    food_id: int = db.Column(db.Integer, db.ForeignKey(FoodDto.food_id))
    review_id: int = db.Column(db.Integer, db.ForeignKey(ReviewDto.review_id))

    def __init__(self, order_id, order_time, order_cmnt, userid, shop_id, food_id, review_id):
        self.order_id = order_id
        self.order_time = order_time
        self.order_cmnt = order_cmnt
        self.userid = userid
        self.shop_id = shop_id
        self.food_id = food_id
        self.review_id = review_id

    def __repr__(self):
        return f'Order(order_id={self.order_id}, order_time={self.order_time}, ' \
               f'order_cmnt={self.order_cmnt}, userid={self.userid}, shop_id={self.shop_id}' \
               f'food_id={self.food_id}, review_id={self.review_id}'


    @property
    def json(self):
        return {
            'order_id': self.order_id,
            'order_time': self.order_time,
            'order_cmnt': self.order_cmnt,
            'userid': self.userid,
            'shop_id': self.shop_id,
            'food_id': self.food_id,
            'review_id': self.review_id
        }
