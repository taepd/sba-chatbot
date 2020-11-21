# from sqlalchemy import Column, Integer, Float, String, ForeignKey, create_engine
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT
from flask import request, session
from flask_cors import cross_origin

from flask_restful import Resource, reqparse
from flask import jsonify
import json
import os
import numpy as np
import pandas as pd

from chatbot_api.ext.db import db, openSession
from chatbot_api.util.file_handler import FileReader
from chatbot_api.resources.order_review import OrderReviewDto


class UserDto(db.Model):
    __tablename__ = "user"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    userid: str = db.Column(db.String(20), primary_key=True, index=True)
    password: str = db.Column(db.String(200))
    name: str = db.Column(db.String(30))
    age: int = db.Column(db.Integer)
    gender: int = db.Column(db.Integer)
    addr: str = db.Column(db.String(100))
    lat: float = db.Column(db.Float)
    lng: float = db.Column(db.Float)

    order_reviews = db.relationship('OrderReviewDto', backref='user', lazy='dynamic', cascade="all, delete, delete-orphan")

    def __init__(self, userid, password, name, age=0, gender=0, addr='', lat=0, lng=0):
        self.userid = userid
        self.password = password
        self.name = name
        self.age = age
        self.gender = gender
        self.addr = addr
        self.lat = lat
        self.lng = lng

    def __repr__(self):
        return f'User(userid={self.userid}, ' \
               f'password={self.password}, ' \
               f'name={self.name},' \
               f'age={self.age},' \
               f'gender={self.gender},' \
               f'addr={self.addr}, ' \
               f'lat={self.lat}, ' \
               f'lng={self.lng})'

    @property
    def json(self):
        return {
            'userid': self.userid,
            'password': self.password,
            'name': self.name,
            'age': self.age,
            'gender': self.gender,
            'addr': self.addr,
            'lat': self.lat,
            'lng': self.lng
        }

class UserVo:
    userid: str = ''
    password: str = ''
    name: str = ''
    age: int = 0
    gender: int = 0
    addr: str = ''
    lat: float = 0.0
    lng: float =  0.0



class UserDao(UserDto):
    

    @classmethod
    def find_all(cls):
        sql = cls.query
        df = pd.read_sql(sql.statement, sql.session.bind)
        return json.loads(df.to_json(orient='records'))

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filer_by(name == name).all()

    @classmethod
    def find_by_id(cls, userid):
        return cls.query.filter_by(userid == userid).first()

    # @cross_origin(supports_credentials=True)
    @classmethod
    def login(cls, user):  
        sql = cls.query\
            .filter(cls.userid.like(user.userid))\
            .filter(cls.password.like(user.password))
        df = pd.read_sql(sql.statement, sql.session.bind)
        print('==================================')
        print(json.loads(df.to_json(orient='records')))
        return json.loads(df.to_json(orient='records'))


    @staticmethod
    def save(user):
        db.session.add(user)
        db.session.commit()

    # @staticmethod
    # def insert_many():
    #     service = UserService()
    #     Session = openSession()
    #     session = Session()
    #     df = service.hook()
    #     print(df.head())
    #     session.bulk_insert_mappings(UserDto, df.to_dict(orient="records"))
    #     session.commit()
    #     session.close()

    @staticmethod
    def modify_user(user):
        db.session.add(user)
        db.session.commit()

    @classmethod
    def delete_user(cls,id):
        data = cls.query.get(id)
        db.session.delete(data)
        db.session.commit()


# ==============================================================
# ==============================================================
# ====================     Service  ============================
# ==============================================================
# ==============================================================



# ==============================================================
# ==============================================================
# =================     Controller  ============================
# ==============================================================
# ==============================================================

parser = reqparse.RequestParser()  # only allow price changes, no name changes allowed   # deprecated 예정이라고 함
parser.add_argument('userid', type=str, required=True,
                                        help='This field should be a userid')
parser.add_argument('password', type=str, required=True,
                                        help='This field should be a password')
parser.add_argument('name', type=str, required=False,
                                        help='This field should be a password')

class User(Resource):
    @staticmethod
    def post():
        print('================user post 요청받음 =================')
        
        # --------------
        # parameter 받는 방법
        # parser.parse_args(): <class 'flask_restful.reqparse.Namespace'>
        args = parser.parse_args()
        print('type(args): ', type(args))
        print('args: ', args)
        # print(f'User {args["userid"]} added ')

        # request.get_json(): <class 'dict'>
        params = request.get_json()
        # params = json.loads(request.get_data(), encoding='utf-8')
        print('type(params): ', type(params))
        print('params: ', params)
        if len(params) == 0:
            return 'No parameter'

        params_str = ''
        for key in params.keys():
            params_str += 'key: {}, value: {}<br>'.format(key, params[key])
        # ---------------

        # create 구현
        user = UserDto(**params)
        UserDao.save(user)
        userid = user.userid
        
        return {'code':0, 'message': 'SUCCESS', 'userid': userid }, 200
    
    @staticmethod
    def get(id):
        print(f'User {id} added ')
        try:
            user = UserDao.find_by_id(id)
            if user:
                return user.json()
        except Exception as e:
            return {'message': 'User not found'}, 404

    @staticmethod
    def update():
        args = parser.parse_args()
        print(f'User {args["id"]} updated ')
        return {'code':0, 'message': 'SUCCESS'}, 200

    @staticmethod
    def delete():
        args = parser.parse_args()
        print(f'USer {args["id"]} deleted')
        return {'code' : 0, 'message' : 'SUCCESS'}, 200

    
    
class Users(Resource):
    
    def post(self):
        ud = UserDao()
        ud.insert_many('users')

    def get(self):
        print('========== 10 ==========')
        data = UserDao.find_all()
        return data, 200

class Auth(Resource):

    def post(self):
        body = request.get_json()
        user = UserDto(**body)
        UserDao.save(user)
        id = user.userid
        
        return {'id': str(id)}, 200 


class Access(Resource):

    @staticmethod
    def post():
        print('========== access post 요청 받음 ==========')
        args = parser.parse_args()
        user = UserVo()
        user.userid = args.userid
        user.password = args.password
        data = UserDao.login(user)
        if data[0]:
            # session[f'{args.userid}'] = data[0]
            session['user'] = data[0]
        print(session)
        return data[0], 200

    @staticmethod
    def delete(userid):
        print('========== access delete 요청 받음 ==========')
        print(session)
        session.pop('user', None)
        # session.pop('user', None)
        # session.clear()   
        return {'code' : 0, 'message' : 'SUCCESS'}, 200



# ------------ 실행 영역 --------------

if __name__ == '__main__':
     
    # 데이터 일괄 입력
    df = pd.read_csv('./../../../data/db/user.csv', sep=',', encoding='utf-8-sig') 
    df = df.replace(np.nan, 0, regex=True)


    Session = openSession()
    session = Session()
    session.bulk_insert_mappings(UserDto, df.to_dict(orient="records"))
    session.commit()
    session.close()

