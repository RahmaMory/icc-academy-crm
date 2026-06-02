import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

type Message = {
  id: number;

  classId: number;

  sender: string;

  role: "student" | "instructor";

  message: string;

  time: string;
};

type ClassChatContextType = {
  messages: Message[];

  sendMessage: (
    message: Omit<Message, "id">
  ) => void;

  getClassMessages: (
    classId: number | string
  ) => Message[];
};

const ClassChatContext =
  createContext<ClassChatContextType | null>(null);

export function ClassChatProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (
    message: Omit<Message, "id">
  ) => {
    const newMsg: Message = {
      ...message,
      id: Date.now(),
    };

    setMessages((prev) => [...prev, newMsg]);
  };

  const getClassMessages = (
    classId: number | string
  ) =>
    messages.filter(
      (m) => m.classId === Number(classId)
    );

  return (
    <ClassChatContext.Provider
      value={{
        messages,
        sendMessage,
        getClassMessages,
      }}
    >
      {children}
    </ClassChatContext.Provider>
  );
}

export function useClassChat() {
  const context =
    useContext(ClassChatContext);

  if (!context) {
    throw new Error(
      "useClassChat must be used within ClassChatProvider"
    );
  }

  return context;
}