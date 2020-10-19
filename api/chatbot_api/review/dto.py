# from sqlalchemy import Column, Integer, Float, String, Date, ForeignKey, create_engine
from chatbot_api.ext.db import Base, db
from chatbot_api.user.dto import UserDto
from chatbot_api.shop.dto import ShopDto
from chatbot_api.food.dto import FoodDto
from chatbot_api.order.dto import OrderDto
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class ReviewDto(db.Model):
    __tablename__ = "review"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    review_id: int = db.Column(db.Integer, primary_key=True, index=True)
    review_cmnt: str = db.Column(db.Text)
    taste_rate: float = db.Column(db.Float)
    quantity_rate: float = db.Column(db.Float)
    delivery_rate: float = db.Column(db.Float)
    review_time: str = db.Column(db.Date)
    review_img: str = db.Column(db.String(300))

    userid: str = db.Column(db.String(20), db.ForeignKey(UserDto.userid))
    shop_id: int = db.Column(db.Integer, db.ForeignKey(ShopDto.shop_id))
    food_id: int = db.Column(db.Integer, db.ForeignKey(FoodDto.food_id))
    order_id: int = db.Column(db.Integer, db.ForeignKey(OrderDto.food_id))


    def __init__(self, review_id, review_cmnt, taste_rate, quantity_rate,
                 delivery_rate, review_time, review_img, userid, shop_id, food_id, order_id):
        self.review_id = review_id
        self.review_cmnt = review_cmnt
        self.taste_rate = taste_rate
        self.quantity_rate = quantity_rate
        self.delivery_rate = delivery_rate
        self.review_time = review_time
        self.review_img = review_img
        self.userid = userid
        self.shop_id = shop_id
        self.food_id = food_id
        self.order_id = order_id


    def __repr__(self):
        return f'Review(review_id={self.review_id}, ' \
               f'review_cmnt={self.review_cmnt}, ' \
               f'taste_rate={self.taste_rate}, ' \
               f'quantity_rate={self.quantity_rate}, ' \
               f'delivery_rate={self.delivery_rate}, ' \
               f'review_time="{self.review_time}" ' \
               f'review_img={self.review_img}, ' \
               f'userid={self.userid}, ' \
               f'shop_id={self.shop_id} ' \
               f'food_id={self.food_id} ' \
               f'order_id={self.order_id} ' \


    @property
    def json(self):
        return {
            'review_id': self.review_id,
            'review_cmnt': self.review_cmnt,
            'taste_rate': self.taste_rate,
            'quantity_rate': self.quantity_rate,
            'delivery_rate': self.delivery_rate,
            'review_time': self.review_time,
            'review_img': self.review_img,
            'userid': self.userid,
            'shop_id': self.shop_id,
            'food_id': self.food_id,
            'order_id': self.order_id
        }



