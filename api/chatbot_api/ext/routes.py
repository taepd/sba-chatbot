from com_sba_api.item.item_api import ItemsApi
def initialize_routes(api):
    api.add_resource(ItemsApi, '/api/items')
    api.add_resource(HomeApi,'/api/')