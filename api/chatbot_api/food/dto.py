# from sqlalchemy import Column, Integer, Float, String, Date, ForeignKey, create_engine
from chatbot_api.ext.db import Base, db
from chatbot_api.shop.dto import ShopDto
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class FoodDto(db.Model):
    __tablename__ = "food"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    food_id: int = db.Column(db.Integer, primary_key=True, index=True)
    food_name: str = db.Column(db.String(30))
    price: int = db.Column(db.Integer)
    food_rev_avg: float = db.Column(db.Float)
    food_rev_amt: float = db.Column(db.Integer)
    shop_id: int = db.Column(db.Integer, db.ForeignKey(ShopDto.shop_id))

    def __init__(self, food_id, food_name, price, food_rev_avg,
                 food_rev_amt, shop_id):
        self.food_id = food_id
        self.food_name = food_name
        self.price = price
        self.food_rev_avg = food_rev_avg
        self.food_rev_amt = food_rev_amt
        self.shop_id = shop_id

    def __repr__(self):
        return f'Food(food_id={self.food_id}, food_name={self.food_name}, ' \
               f'price={self.price}, food_rev_avg={self.food_rev_avg},' \
               f'food_rev_amt={self.food_rev_amt}, shop_id="{self.shop_id}"'

    @property
    def json(self):
        return {
            'food_id': self.food_id,
            'food_name': self.food_name,
            'price': self.price,
            'food_rev_avg': self.food_rev_avg,
            'food_rev_amt': self.food_rev_amt,
            'shop_id': self.shop_id
        }
