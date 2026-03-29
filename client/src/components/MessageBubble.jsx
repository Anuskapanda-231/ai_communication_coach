const MessageBubble = ({ msg }) => {
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
        isUser 
        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-tr-none shadow-lg" 
        : "bg-[#1a1a25] text-white/90 border border-white/5 rounded-tl-none shadow-inner"
      }`}>
        {isUser ? (
          msg.text
        ) : (
          <>
            <p><strong>Reply:</strong> {msg.reply}</p>
            <p><strong>Corrected:</strong> {msg.corrected}</p>
            <p><strong>Feedback:</strong> {msg.feedback}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default MessageBubble;