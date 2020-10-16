from com_sba_api.item.api import Item, Items
from com_sba_api.user.api import User, Users
from com_sba_api.article.api import Article, Articles
from com_sba_api.home.api import Home

def initialize_routes(api):
    api.add_resource(Home, '/api')
    api.add_resource(Item, '/api/item/<string:id>')
    api.add_resource(Items,'/api/items')
    api.add_resource(User, '/api/user/<string:id>')
    api.add_resource(Users, '/api/users')
    api.add_resource(Article, '/api/article/<string:id>')
    api.add_resource(Articles, '/api/articles/')
