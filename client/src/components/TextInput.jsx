import React from "react";
import { FaMicrophone } from "react-icons/fa";

const TextInput = ({ input, setInput, handleSend }) => {
  return (
    <div className="w-full p-4 border-t border-white/10">
      <div className="w-full flex items-center gap-3 bg-[#1a1a25] p-2 pl-5 rounded-2xl border border-white/10 focus-within:border-pink-500/40 transition-all">
        <input 
          className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-white/20"
          placeholder="Write your thoughts..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="text-white/30 hover:text-white transition-colors p-2">
          <FaMicrophone size={14} />
        </button>
        <button 
          onClick={handleSend}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-transform"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TextInput;