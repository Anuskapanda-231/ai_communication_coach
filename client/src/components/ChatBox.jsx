import React from "react";

const ChatBox = ({ children }) => {
  return (
    
    /* shadow-[0_0_50px_rgba(0,0,0,0.8)] adds depth, border-white/10 adds the edge glow */
    <div className="w-full max-w-3xl h-[85vh] bg-[#14141e]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex flex-col shadow-[0_20px_80px_rgba(255,0,150,0.2)] z-10 relative overflow-hidden">
      
      <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/5">
        <div>
          <h1 className="text-white font-bold tracking-tight text-xl">PIPPO</h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Active now</span>
          </div>
        </div>

        {/* The Pink Star Icon Glow */}
          <div className="absolute left-1/2 -translate-x-1/2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600  flex items-center justify-center text-white shadow-[0_0_20px_rgba(236,72,153,0.6)] animate-[pulse_2s_infinite]">
          
          <span className="text-xl leading-none relative">✦</span>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ChatBox;
