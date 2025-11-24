"use client";

import { useState } from "react";
import ChatbotWidget from "./ChatbotWidget";
import { MessageCircle } from "lucide-react";

export default function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40">
          <ChatbotWidget onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
