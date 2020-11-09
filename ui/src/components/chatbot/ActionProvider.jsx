// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    helloworldHandler = () =>{
      const message = this.createChatBotMessage("Hello. i'm not slkjaflkaajile")
      this.setChatbotMessage(message)
    }

    todosHandler = () =>{
      const message = this.createChatBotMessage("Sure todos",{
        widget : "todos",
      });
      this.setChatbotMessage(message);
    };

    setChatbotMessage = (message) =>{
      this.setState((state) => ({ ... state, messages : [...state.messages, message],
       }));
    }
  }
  
  export default ActionProvider;