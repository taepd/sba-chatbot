from flask import Flask
from flask_restful import Api
from chatbot_api.ext.db import url, db
from chatbot_api.ext.routes import initialize_routes
from chatbot_api.user.dao import UserDao
from chatbot_api.shop.dto import ShopDto
from chatbot_api.food.dto import FoodDto
from chatbot_api.review.dto import ReviewDto
from chatbot_api.order.dto import OrderDto
from chatbot_api.user.dto import UserDto
from flask_cors import CORS


print('========== url ==========')
print(url)

app = Flask(__name__)
CORS(app)
app.register_blueprint(user)
app.config['SQLALCHEMY_DATABASE_URI'] = url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


initialize_routes(api)

with app.app_context():
    db.create_all()


@app.route('/api/test')
def test():
    return {'test': 'Success'}

# context 생성
app.app_context().push()

# 유저 추가 (create)
# user = UserDto(userid='tom', password='1', name='tom', addr="서울시 서초구", lat=37.1234, lng=128.1234)
# UserDao.add(user)

# 유저 조회
# 전체 조회
# user_list = UserDao.find_all()
# print(user_list)
# print(type(user_list))  # <class 'list'>
# print(user_list[0])
# print(type(user_list[0]))







