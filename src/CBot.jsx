import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CBot = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to my portfolio website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please Enter your name",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "name",
    },

    {
      id: "name",
      message:
        "Hi {previousValue}, glad to see you here. Do you want to connect?",
      trigger: "opt",
    },
    {
      id: "opt",
      options: [
        { value: "yes", label: "yes", trigger: "yes" },
        { value: "no", label: "no", trigger: "no" },
      ],
    },
    {
      id: "yes",
      message:
        "Okay thanks for your concern please mail me at aritra.chakraborty203@gmail.com.I will be happy to hear you ,😇",
      trigger: "opt2",
    },
    {
      id: "no",
      message: "Ok Please give a feedback to my website 🙏",
      trigger: "opt4",
    },
    {
      id: "opt2",
      message: "Please give a feed back to my website 🙏",
      trigger: "opt3",
    },
    {
      id: "opt3",
      options: [
        { value: "nice", label: "nice", trigger: "end1" },
        {
          value: "excellent",
          label: "excellent",
          trigger: "end1",
        },
        { value: "worst", label: "worst", trigger: "end1" },
      ],
    },
    {
      id: "opt4",
      options: [
        { value: "nice", label: "nice", trigger: "end2" },
        {
          value: "excellent",
          label: "excellent",
          trigger: "end2",
        },
        { value: "worst", label: "worst", trigger: "end2" },
      ],
    },
    {
      id: "end2",
      message: "Thank you for your rating 😊",
      end: true,
    },
    {
      id: "end1",
      message: "Thank you for your rating 😊",
      end: true,
    },
  ];
  const theme = {
    background: "#51acff",
    headerBgColor: "#FFBF00",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "black",
    botFontColor: "white",
    userBubbleColor: "#FFBF00",
    userFontColor: "black",
  };

  // Set some properties of the bot
  const config = {
    botAvatar: "./images/img.png",
    floating: true,
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="Chatbot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};
export default CBot;
