# from sqlalchemy import Column, Integer, Float, String, ForeignKey, create_engine
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT
from typing import List
from flask import request
from flask_restful import Resource, reqparse
from flask import jsonify
import json
import os
import numpy as np
import pandas as pd


from sklearn.ensemble import RandomForestClassifier  # rforest
from sklearn.tree import DecisionTreeClassifier  # dtree
from sklearn.ensemble import RandomForestClassifier  # rforest
from sklearn.naive_bayes import GaussianNB  # nb
from sklearn.neighbors import KNeighborsClassifier  # knn
from sklearn.svm import SVC  # svm
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold  # k value is understood as count
from sklearn.model_selection import cross_val_score
from pathlib import Path

from chatbot_api.ext.db import db, openSession
from chatbot_api.util.file_handler import FileReader

from chatbot_api.resources.food import FoodDto, FoodDao
from chatbot_api.resources.user import UserDao, UserDto
from chatbot_api.resources.order_review import OrderReviewDto, OrderReviewDao

parser = reqparse.RequestParser()
parser.add_argument('shop_id', type=str, required=True)

class ShopDto(db.Model):
    __tablename__ = "shop"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    shop_id: int = db.Column(db.Integer, primary_key=True, index=True)
    shop_name: str = db.Column(db.String(30))
    shop_addr: str = db.Column(db.String(100))
    shop_img: str = db.Column(db.String(200), default='shop_default.png')
    cat: str = db.Column(db.String(100))
    shop_lat: float = db.Column(db.Float)
    shop_lng: float = db.Column(db.Float)
    shop_rev_avg: float = db.Column(db.Float)
    shop_rev_cnt: int = db.Column(db.Integer)
    open_time: str = db.Column(db.Date)

    foods = db.relationship('FoodDto', backref='shop', lazy='dynamic', cascade="all, delete, delete-orphan")
    order_reviews = db.relationship('OrderReviewDto', backref='shop', lazy='dynamic', cascade="all, delete, delete-orphan")
    

    def __init__(self, shop_id, shop_name, shop_addr, shop_img, cat,
                 shop_lat, shop_lng, shop_rev_avg, shop_rev_cnt, open_time):
        self.shop_id = shop_id
        self.shop_name = shop_name
        self.shop_addr = shop_addr
        self.shop_img = shop_img
        self.cat = cat
        self.shop_lat = shop_lat
        self.shop_lng = shop_lng
        self.shop_rev_avg = shop_rev_avg
        self.shop_rev_cnt = shop_rev_cnt
        self.open_time =open_time

    def __repr__(self):
        return f'Shop(shop_id={self.shop_id}, shop_name={self.shop_name}, ' \
               f'shop_addr={self.shop_addr}, ,shop_img={self.shop_img}, cat={self.cat},' \
               f'shop_lat={self.shop_lat}, shop_lng="{self.shop_lng}"' \
               f'shopt_rev_avg={self.shop_rev_avg}, shop_rev_cnt={self.shop_rev_cnt}' \
               f'open_time={self.open_time}'

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
            'shop_rev_cnt': self.shop_rev_cnt,
            'open_time': self.open_time
        }


class ShopVo:
    shop_id: int = 0
    shop_name: str = ''
    shop_addr: str = ''
    shop_img: str = ''
    cat: str = ''
    shop_lat: float = 0.0
    shop_lng: float = 0.0
    shop_rev_avg: float = 0.0 
    shop_rev_cnt: int = 0
    open_time: str = ''

class ShopDao(ShopDto):
    
    @classmethod
    def find_all(cls):
        sql = cls.query
        df = pd.read_sql(sql.statement, sql.session.bind)
        return json.loads(df.to_json(orient='records'))

    @classmethod
    def find_by_shopid(cls,shop_id):
        sql = cls.query.filter_by(shop_id = shop_id)
        df = pd.read_sql(sql.statement, sql.session.bind)
        return json.loads(df.to_json(orient='records'))
        # return cls.query.filter_by(shop_id = shopid).all()

    @classmethod
    def find_limit(cls):
        # sql = cls.query.join(FoodDto).filter(FoodDto.shop_id == cls.shop_id).all()
        sql = cls.query
        # print(type(sql))
        # print('**************test******************')
        df = pd.read_sql(sql.statement, sql.session.bind)
        df = df.head(50)
        return json.loads(df.to_json(orient='records'))

    @classmethod
    def find_cat(cls):
        sql = cls.query.filter(ShopDto.cat)
        print(catlist)
        # return json.loads(df.to_json(orient='recoeds')



class Shops(Resource):

    # @staticmethod
    # def get():
    #     print('select all')
    #     shop = ShopDao.find_all()
    #     return shop, 200

    @staticmethod
    def get():
        print('select 10')
        shops = ShopDao.find_limit()
        # print('shops: ', shops)
        # test = ShopDao.find_cat()
        # print("-------------shops-----------------")
        # print(type(shops))
        # print(shops)
        return shops, 200


class Shop(Resource):
    
    # @staticmethod
#     def get(shopid : str):
#         shop = ShopDao.find_by_shopid(shopid)
#         return shop[0].json, 200
      
      
    @staticmethod
    def get(shop_id : str):

        print("==============으아아아아=================")
        shopAfoodAreview = []
        shop = {'Shop' : ShopDao.find_by_shopid(shop_id)}
        food = {'Food' : FoodDao.food_find_by_shopid(shop_id)}
        review = {'Review' : OrderReviewDao.review_find_by_shopid(shop_id)}
        shopAfoodAreview.append(shop)
        shopAfoodAreview.append(food)
        shopAfoodAreview.append(review)
        print('*'*40)
        # print(review)
        # shop = shop.json()
        # print(shop)
        # print(type(shopAfood))    
        # print(shopAfoodAreview[2])
        return shopAfoodAreview, 200


    # @staticmethod
    # def get(shopid : str):
    #     food = FoodDao.food_find_by_shopid(shopid)
    #     print('*'*40)
    #     # shop = shop.json()
    #     # print(shop)
    #     print(type(food))    
    #     print(food)
    #     return food, 200


# ------------ 실행 영역 --------------
if __name__ == '__main__':

    # import pdb
    # 데이터 일괄 입력
    # df = pd.read_csv('./data/db/shop.csv', sep=',', encoding='utf-8-sig') # 혜정
    df = pd.read_csv('./data/csv/important/db/shop.csv', sep=',', encoding='utf-8-sig') # 영돈
    df = df.replace(np.nan, '', regex=True)

    # ------------------
    # 서울만 임시로 넣었을 때 사용
    # shop_seoul = df.loc[df['shop_addr'].str.contains('서울', na=False)]
    # print(shop_seoul['shop_addr'])

    # shop_seoul.to_csv('./data/csv/important/shop(seoul).csv', sep=',', encoding='utf-8-sig', index=False)

    # pdb.set_trace()
    # -------------------


    Session = openSession()
    session = Session()
    session.bulk_insert_mappings(ShopDto, df.to_dict(orient="records"))
    session.commit()
    session.close()