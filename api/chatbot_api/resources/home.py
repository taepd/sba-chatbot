from flask_restful import Resource, reqparse
from flask import session

import random

from chatbot_api.ext.db import config
from chatbot_api.ext.model import user_based_recommend
from chatbot_api.resources.shop import ShopDto, ShopDao, ShopService

class Home(Resource):
    @staticmethod
    def get():
        userid = session['user']['userid']
        userid = int(userid.lstrip('user'))
        print('userid: ', userid)
        recommend_shop_id_set , df_shop = user_based_recommend(userid)
        print(recommend_shop_id_set)
        shop_dict_list = []
        for shop_id in recommend_shop_id_set:
            shop = ShopDao.find_by_shopid(str(shop_id))
            shop_dict_list.append(shop[0])

        recommend = ShopService.shop_rev_predict_by_surprise(shop_dict_list)
        randaom_recommend = random.sample(recommend, 4)
        return randaom_recommend, 200        
 


        return {'message': 'Server Start'}


    