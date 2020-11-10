from flask_restful import Resource, reqparse
from chatbot_api.resources.food import FoodDao
from chatbot_api.resources.shop import ShopDao, ShopService
# from chatbot_api.ext.searchChatbot import chatbot
from chatbot_api.ext.kobert_chatbot import chatbot


class ChatbotService:
    
    @staticmethod
    def load_model_from_file():
        print("어디까지 오니 ================")
        fname = r'./modeling/chatbot_model.h5'
        model = joblib.load(fname)
        print("모델 리턴전 ")
        return model

    @staticmethod
    def response_message(text):
        print("chatbot 2 text : ", text)
        chat = chatbot(text)
        intent = chat[0]
        keyword = chat[1]
        print('intent', chat[0])
        print('keyword', chat[1])
        chatsearch = ''
        if intent != '인사':
        # chatsearch = FoodDao.chat_food_find(keyword)
            chatsearch = ShopDao.search(keyword)
        # search = ShopService.shop_rev_predict_by_surprise(chatsearch[0])
        return chatsearch, intent, keyword, 200


class Chatbot(Resource):
    
    @staticmethod
    def get(key : str):
        print("chatbot 1 key : ", key)
        words = ChatbotService.response_message(key)
        return words, 200