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

from chatbot_api.resources.food import FoodDto
from chatbot_api.resources.order_review import OrderReviewDto

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
    shop_rev_cnt: int = db.Column(db.Integer)
    opentime: str = db.Column(db.Date)

    foods = db.relationship('FoodDto', backref='shop', lazy=True)
    order_reviews = db.relationship('OrderReviewDto', backref='shop', lazy=True)
    

    def __init__(self, shop_id, shop_name, shop_addr, shop_img, cat,
                 shop_lat, shop_lng, shop_rev_avg, shop_rev_cnt, opentime):
        self.shop_id = shop_id
        self.shop_name = shop_name
        self.shop_addr = shop_addr
        self.shop_img = shop_img
        self.cat = cat
        self.shop_lat = shop_lat
        self.shop_lng = shop_lng
        self.shop_rev_avg = shop_rev_avg
        self.shop_rev_cnt = shop_rev_cnt
        self.opentime =opentime

    def __repr__(self):
        return f'Shop(shop_id={self.shop_id}, shop_name={self.shop_name}, ' \
               f'shop_addr={self.shop_addr}, ,shop_img={self.shop_img}, cat={self.cat},' \
               f'shop_lat={self.shop_lat}, shop_lng="{self.shop_lng}"' \
               f'shopt_rev_avg={self.shop_rev_avg}, shop_rev_cnt={self.shop_rev_cnt}' \
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
            'shop_rev_cnt': self.shop_rev_cnt,
            'opentime': self.opentime
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
    opentime: str = ''




# ------------ 실행 영역 --------------
if __name__ == '__main__':

    # import pdb
    # # 데이터 일괄 입력
    df = pd.read_csv('./data/csv/important/shop.csv', sep=',', encoding='utf-8-sig')
    df = df.replace(np.nan, '', regex=True)

    # shop_seoul = df.loc[df['shop_addr'].str.contains('서울', na=False)]
    # print(shop_seoul['shop_addr'])

    # shop_seoul.to_csv('./data/csv/important/shop(seoul).csv', sep=',', encoding='utf-8-sig', index=False)

    # pdb.set_trace()


    Session = openSession()
    session = Session()
    session.bulk_insert_mappings(ShopDto, df.to_dict(orient="records"))
    session.commit()
    session.close()