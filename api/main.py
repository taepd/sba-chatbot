from flask import Flask
from flask_restful import Api
from com_sba_api.ext.db import url, db
from com_sba_api.ext.routes import initialize_routes
from com_sba_api.item.api import Item, Items
from com_sba_api.article.api import Article, Articles
from com_sba_api.user.api import User, Users


app = Flask(__name__)
print('========== url ==========')
print(url)
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
