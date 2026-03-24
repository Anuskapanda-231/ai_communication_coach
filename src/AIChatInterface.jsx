import React from "react";
import { FaMicrophone } from "react-icons/fa";

export default function App() {
  const messages = [
    { id: 1, role: "assistant", text: "That's great! Tell me more." },
    { id: 2, role: "user", text: "I am working on my communication skills." },
    {
      id: 3,
      role: "assistant",
      text: "Corrected: I am working on improving my communication skills.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050507] relative overflow-hidden font-sans">
      
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[80px] top-[10%] left-[20%]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[80px] bottom-[10%] right-[15%]"></div>

      {/* Chat Container */}
      <div className="w-full max-w-3xl h-[85vh] bg-[#14141e]/90 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col shadow-[0_20px_80px_rgba(255,0,150,0.2)] z-10">

        {/* HEADER */}
 <div className="flex items-center justify-center px-6 py-4 border-b border-white/10 relative">

  {/* Center Icon */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-[0_0_10px_#ff0080]">
    ✦
  </div>

  {/* Left Text */}
  <div className="absolute left-6 flex flex-col justify-center">
    <p className="text-white font-bold text-sm">
      PIPPO
    </p>

    <div className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
      <span className="text-green-400 text-xs">Active now</span>
    </div>
  </div>

</div>

        {/* CHAT AREA */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl text-white max-w-[70%] ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_10px_rgba(255,0,150,0.4)]"
                    : "bg-[#1a1a25]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="flex items-center gap-2 p-4 border-t border-white/10">
          <input
            type="text"
            placeholder="Write your thoughts..."
            className="flex-1 px-3 py-2 rounded-lg bg-[#1a1a25] text-white outline-none"
          />

          <button className="p-2 rounded-lg bg-[#1f1f2e] text-white">
            <FaMicrophone />
          </button>

          <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-[0_0_10px_rgba(255,0,150,0.5)]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}