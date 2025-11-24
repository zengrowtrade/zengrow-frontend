"use client";

import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { sendChatMessage } from "../config/api";

export default function ChatbotWidget({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! How can I help you today?",
    },
  ]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (text) => {
    setError("");
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const { reply, conversationId: newConversationId } =
        await sendChatMessage({
          message: text,
          conversationId,
        });

      if (newConversationId && newConversationId !== conversationId) {
        setConversationId(newConversationId);
      }

      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: reply || "(Empty reply from server)",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
      const errorMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "Sorry, I couldn't reach the server. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 max-h-[70vh] bg-white shadow-xl rounded-xl flex flex-col border border-gray-200">
      {/* Header */}
      <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between bg-primary text-white rounded-t-xl">
        <div className="text-sm font-semibold">Zen</div>
        <div className="flex items-center gap-2 text-[10px]">
          {loading && <span className="opacity-80">Thinking...</span>}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold hover:opacity-80"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 text-sm bg-gray-50">
        {messages.map((m) => (
          <ChatMessage key={m.id} role={m.role} content={m.content} />
        ))}
        {error && (
          <div className="mt-2 text-xs text-red-600">
            Error: {error}
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
