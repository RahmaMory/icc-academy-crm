import { createContext, useContext, useState } from "react";
import { privateChatMessages } from "../data";

export type ChatMessage = {
  id: number;
  classId: number;
  studentId: number;
  instructorId: number;
  sender: string;
  role: "student" | "instructor";
  message: string;
  time: string;
};

type ChatContextType = {
  messages: ChatMessage[];
  sendMessage: (msg: ChatMessage) => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] =
    useState<ChatMessage[]>(privateChatMessages);

  function sendMessage(msg: ChatMessage) {
    setMessages((prev) => [...prev, msg]);
  }

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used inside ChatProvider");
  return context;
}