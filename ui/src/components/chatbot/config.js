// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import Todos from"./Todos";
import ChatbotMenuSearch from './ChatbotMenuSearch'

const config = {
  initialMessages: [createChatBotMessage(`어서오세요 메추리 입니다.`)],
  botName :'메추리',
  customcomponents:{
    botAvatar:(props) => <BotAvatar {...props} />
  },
  customStyles:{
    botMessageBos:{
      backgroundColor : "purple",
    },
    chatButton :{
      backgroundColor:"purple",
    },
  },
  state:{
    menu:[]
  },
  widget:[
    {
      widgetName: "ChatbotMenuSearch",
      widgetFunc: (props) => <ChatbotMenuSearch {...props} />,
      mapStateToProps: ["menu"],
    },
  ],
}

export default config