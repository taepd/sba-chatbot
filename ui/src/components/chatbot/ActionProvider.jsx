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
  recommendSearchBotMessage = (key) => {
    const message = this.createChatBotMessage(key + "를 추천해 드리겠습니다.", {
      widget: "ChatbotMenuSearch",
    });
    this.setChatbotMessage(message);
  };
  greetingLoginUserBotMessage = (userid) => {
    const message = this.createChatBotMessage(userid + "님 안녕하세요")
    this.setChatbotMessage(message)
  };
  greetingBotMessage = () => {
    const message = this.createChatBotMessage("안녕하세요 메추리 입니다. 로그인후 추천 서비스를 이용하실 수 있습니다.")
    this.setChatbotMessage(message)
  };
  sorryBotMessage = () => {
    const message = this.createChatBotMessage("죄송합니다. 다시한번 말씀해주세요")
    this.setChatbotMessage(message)
  }
}

export default ActionProvider;