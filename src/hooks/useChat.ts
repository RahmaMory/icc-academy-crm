import { useMemo } from "react";
import {
  classChatMessages,
  privateChatMessages,
} from "../data";

export function useChat(classId?: number) {
  const classMessages = useMemo(() => {
    if (!classId) return classChatMessages;

    return classChatMessages.filter(
      (m) => m.classId === classId
    );
  }, [classId]);

  return {
    messages: classMessages,
    privateMessages: privateChatMessages,
  };
}