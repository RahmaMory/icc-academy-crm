import { useParams } from "react-router-dom";
import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import { instructorClasses } from "../../data";
import ChatHeader from "../../components/instructor-privateChat/ChatHeader";
import ChatMessages from "../../components/instructor-privateChat/ChatMessages";
import ChatInput from "../../components/instructor-privateChat/ChatInput";


export default function InstructorPrivateChat() {
  const { classId, studentId } = useParams();
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  if (!classId || !studentId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Invalid parameters
      </div>
    );
  }

  const currentClass = instructorClasses.find(
    (c) => c.id === Number(classId)
  );

  if (!currentClass) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Class not found
      </div>
    );
  }

  const filteredMessages = messages.filter(
    (msg) =>
      msg.classId === Number(classId) &&
      msg.studentId === Number(studentId)
  ).map(msg => ({
    ...msg,
    id: String(msg.id),
    role: msg.role as "student" | "instructor"
  }));

  return (
    <main className="min-h-screen bg-[#0b0f10] text-white px-4 py-6">
      <section className="mx-auto max-w-4xl">

        {/* HEADER */}
        <ChatHeader classTitle={currentClass.title} classId={classId} />

        {/* MESSAGES */}
        <ChatMessages messages={filteredMessages} />

        {/* INPUT */}
        <ChatInput
          classId={classId}
          studentId={studentId}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
        />

      </section>
    </main>
  );
}