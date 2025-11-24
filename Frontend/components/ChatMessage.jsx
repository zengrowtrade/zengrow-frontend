// frontend/src/components/ChatMessage.jsx
"use client";
export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm
          ${isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}
        `}
      >
        {content}
      </div>
    </div>
  );
}
