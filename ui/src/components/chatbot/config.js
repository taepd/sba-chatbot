// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import Todos from"./Todos";
import ChatbotMenuSearchContents from './ChatbotMenuSearchContents'

const config = {
  initialMessages: [createChatBotMessage(`어서오세요 메추리 입니다.`)],
  botName :'메추리',
  customcomponents:{
    botAvatar:(props) => <BotAvatar {...props} />
  },
  customStyles:{
    botMessageBos:{
      backgroundColor : "#f50057",
    },
    chatButton :{
      backgroundColor:"#f50057",
    },
  },
  state:{
    menu:'',
  },
  widgets:[
    {
      widgetName: "ChatbotMenuSearchContents",
      widgetFunc: (props) => <ChatbotMenuSearchContents {...props} />,
      mapStateToProps: ["menu"],
      
    },
  ],
}

export default config