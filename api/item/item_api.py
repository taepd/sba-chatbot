from flask_restful import Resource
from flask import Response, jsonify
from com_sba_api.item.item_dao import ItemDao


class ItemApi(Resource):

    def __init__(self):
        self.dao = ItemDao()

    def get(self):
       foods = self.dao.select_foods()
       return jsonify(foods[0])