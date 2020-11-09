// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName :'메추리',
  customcomponents:{
    botAvatar:(props) => <BotAvatar {...props} />

  },
  state:{
    movieTitles:["The load od the rings" ,"Con air" ]
  }
}

export default config