import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import MessageBubble from "./components/MessageBubble";
import TextInput from "./components/TextInput";
import aiService from "./services/aiService";

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", text: "Ready to coach! Send me a sentence to improve." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const coachResponse = await aiService.sendMessage(currentInput); 
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", text: coachResponse }]);
    } catch (err) {
      setMessages((prev) => [...prev, { id: Date.now(), role: "assistant", text: "Coach: Check your server connection." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050507] relative overflow-hidden p-4">
      
      {/* --- THE BACKGROUND GLOW BLOBS --- */}
      {/* Pink glow - top left */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/30 blur-[100px] top-[10%] left-[20%] pointer-events-none rounded-full z-5"></div>
      <div className="absolute w-[700px] h-[700px] bg-red-400/15 blur-[100px] -bottom-40 -center-10 pointer-events-none rounded-full z-10"></div>
      
      {/* Purple glow - bottom right */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[100px] bottom-[10%] right-[15%] pointer-events-none rounded-full z-5"></div>
      

      <ChatBox>
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar z-10">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
          {loading && <div className="text-pink-500 text-xs animate-pulse ml-2">Pippo is analyzing...</div>}
        </div>
        <TextInput input={input} setInput={setInput} handleSend={handleSend} />
      </ChatBox>
    </div>
  );
}