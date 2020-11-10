import React from 'react'


// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }


  helloworldHandler = () => {
    const message = this.createChatBotMessage("Hello. i'm not slkjaflkaajile")
    this.setChatbotMessage(message)
  }

  todosHandler = () => {
    const message = this.createChatBotMessage("Sure todos", {
      widget: "todos",
    });
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state, messages: [...state.messages, message],
    }));
  }

  recommendSearchBotMessage = (key, menu, userid) => {
    const message = this.createChatBotMessage(key + " 을(를) 찾으시는 군요")
    this.setChatbotMessage(message);
    this.recommendSearchViewBotMessage(key, menu, userid)
  }

  recommendSearchViewBotMessage = (key, menu, userid) => {
    const message = this.createChatBotMessage(userid + " 님 위치를 기준으로 가장 평점이 높은 메뉴 입니다.", {
      widget: "ChatbotMenuSearchContents",
    });
    console.log(JSON.stringify(menu))
    this.setChatbotMessage(message);
    this.setState((state) => ({
      ...state, menu: [menu]

    }));
  };
  greetingLoginUserBotMessage = (userid) => {
    const message = this.createChatBotMessage(userid + "님 안녕하세요")
    this.setChatbotMessage(message)
    this.helpQuestionBotMessage()
  };
  helpQuestionBotMessage = () => {
    const message = this.createChatBotMessage("무엇을 도와드릴까요?")
    this.setChatbotMessage(message)
  };
  greetingBotMessage = () => {
    const message = this.createChatBotMessage("로그인후 추천 서비스를 이용하실 수 있습니다.")
    this.setChatbotMessage(message)
  };
  sorryBotMessage = () => {
    const message = this.createChatBotMessage("죄송합니다. 다시한번 말씀해주세요")
    this.setChatbotMessage(message)
  }
  nonMassage = () => {
    const message = this.createChatBotMessage("입력된 메세지가 없습니다.")
    this.setChatbotMessage(message)
  }
}

export default ActionProvider;