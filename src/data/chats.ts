import type { ChatMessage, PrivateChatMessage } from "./sharedTypes";

export const classChatMessages: ChatMessage[] = [
  {
    id: 1,
    classId: 1,
    sender: "Ahmed Ali",
    role: "student",
    message: "Can we get more examples?",
    time: "10:30 AM",
  },
];

export const privateChatMessages: PrivateChatMessage[] = [
  {
    id: 1,
    classId: 1,
    studentId: 1,
    instructorId: 1,
    sender: "Instructor",
    role: "instructor",
    message: "Good job",
    time: "10:30 AM",
  },
];