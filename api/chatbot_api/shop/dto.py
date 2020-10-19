# from sqlalchemy import Column, Integer, Float, String, Date, ForeignKey, create_engine
from chatbot_api.ext.db import Base, db
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT


class ShopDto(db.Model):
    __tablename__ = "shop"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    shop_id: int = db.Column(db.Integer, primary_key=True, index=True)
    shop_name: str = db.Column(db.String(30))
    shop_addr: str = db.Column(db.String(100))
    shop_img: str = db.Column(db.String(200), default='shop_default.png')
    cat: str = db.Column(db.String(20))
    shop_lat: float = db.Column(db.Float)
    shop_lng: float = db.Column(db.Float)
    shop_rev_avg: float = db.Column(db.Float)
    shop_rev_amt: int = db.Column(db.Integer)
    opentime: str = db.Column(db.Date)

    foods = db.relationship('FoodDto', backref='shop', lazy=True)
    reviews = db.relationship('ReviewDto', backref='shop', lazy=True)
    orders = db.relationship('OrderDto', backref='shop', lazy=True)

    def __init__(self, shop_id, shop_name, shop_addr, shop_img, cat,
                 shop_lat, shop_lng, shop_rev_avg, shop_rev_amt, opentime):
        self.shop_id = shop_id
        self.shop_name = shop_name
        self.shop_addr = shop_addr
        self.shop_img = shop_img
        self.cat = cat
        self.shop_lat = shop_lat
        self.shop_lng = shop_lng
        self.shop_rev_avg = shop_rev_avg
        self.shop_rev_amt = shop_rev_amt
        self.opentime =opentime

    def __repr__(self):
        return f'Shop(shop_id={self.shop_id}, shop_name={self.shop_name}, ' \
               f'shop_addr={self.shop_addr}, ,shop_img={self.shop_img}, cat={self.cat},' \
               f'shop_lat={self.shop_lat}, shop_lng="{self.shop_lng}"' \
               f'shopt_rev_avg={self.shop_rev_avg}, shop_rev_amt={self.shop_rev_amt}' \
               f'opentime={self.opentime}'

    @property
    def json(self):
        return {
            'shop_id': self.shop_id,
            'shop_name': self.shop_name,
            'shop_addr': self.shop_addr,
            'shop_img': self.shop_img,
            'cat': self.cat,
            'shop_lat': self.shop_lat,
            'shop_lng': self.shop_lng,
            'shop_rev_avg': self.shop_rev_avg,
            'shop_rev_amt': self.shop_rev_amt,
            'opentime': self.opentime
        }
