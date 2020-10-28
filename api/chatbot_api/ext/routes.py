import logging
from flask import Blueprint
from flask_restful import Api
# from chatbot_api.resources.home import Home
from chatbot_api.resources.user import User
from chatbot_api.resources.home import Home
from chatbot_api.resources.shop import Shop, Shops
from chatbot_api.resources.food import Food


home = Blueprint('home', __name__, url_prefix='/')
user = Blueprint('user', __name__, url_prefix='/api/user')
shops = Blueprint('shops', __name__, url_prefix='/shops')
shop = Blueprint('shop', __name__, url_prefix='/shop')
food = Blueprint('food', __name__, url_prefix='/foodmenu')
# users = Blueprint('users', __name__, url_prefix='/api/users')
# auth = Blueprint('auth', __name__, url_prefix='/api/auth')
# access = Blueprint('access', __name__, url_prefix='/api/access')
# article = Blueprint('article', __name__, url_prefix='/api/article')
# articles = Blueprint('articles', __name__, url_prefix='/api/articles')

api = Api(home)
api = Api(user)
api = Api(shops)
api = Api(shop)
api = Api(food)
# api = Api(users)
# api = Api(auth)
# api = Api(access)
# api = Api(article)
# api = Api(articles)


def initialize_routes(api):
    print('========== routes ==========')
    api.add_resource(Home,'/main')
    api.add_resource(User, '/api/user/<string:id>')
    api.add_resource(Shops,'/shops')
    api.add_resource(Shop,'/shop/<string:shopid>')
    api.add_resource(Food,'/foodmenu/<string:shopid>')
    # api.add_resource(Home, '/api')
    # api.add_resource(Item, '/api/item/<string:id>')
    # api.add_resource(Items,'/api/items')
    # api.add_resource(User, '/api/user/<string:id>')
    # api.add_resource(Users, '/api/users')
    # api.add_resource(Auth, '/api/auth')
    # api.add_resource(Access, '/api/access')
    # api.add_resource(Article, '/api/article')
    # api.add_resource(Articles, '/api/articles/')

@user.errorhandler(500)
def user_api_error(e):
    logging.exception('An error occurred during user request. %s' % str(e))
    return 'An internal error occurred.', 500

@home.errorhandler(500)
def home_api_error(e):
    logging.exception('An error occurred during home request. %s' % str(e))
    return 'An internal error occurred.', 500