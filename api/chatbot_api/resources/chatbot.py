from flask_restful import Resource, reqparse
from chatbot_api.resources.food import FoodDao
from chatbot_api.ext.searchChatbot import chatbot


class ChatbotService:
    
    @staticmethod
    def load_model_from_file():
        print("어디까지 오니 ================")
        fname = r'./modeling/chatbot_model.h5'
        model = joblib.load(fname)
        print("모델 리턴전 ")
        return model

    @staticmethod
    def text(text):
        print("chatbot 2 text : ", text)
        chat = chatbot(text)
        word = chat[1]
        text = chat[0]
        print('하이', chat[0])
        print('dhdn', chat[1])
        chatsearch = FoodDao.chat_food_find(word)
        print('조회',chatsearch)
        return chatsearch, text, word, 200

class Chatbot(Resource):
    
    @staticmethod
    def get(key : str):
        print("chatbot 1 key : ", key)
        words = ChatbotService.text(key)
        return words, 200