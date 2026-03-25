import React from "react";

const MessageBubble = ({ msg }) => {
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
        isUser 
        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-tr-none shadow-lg" 
        : "bg-[#1a1a25] text-white/90 border border-white/5 rounded-tl-none shadow-inner"
      }`}>
        {msg.text}
      </div>
    </div>
  );
};

export default MessageBubble;