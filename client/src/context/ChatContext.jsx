import React, { createContext, useState } from "react";
import { sendMessageAPI } from "../services/api";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const data = await sendMessageAPI(text);
    setMessages((prev) => [...prev, data]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};