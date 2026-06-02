import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import {instructorClasses} from "../../data";
import { useChat } from "../../context/ChatContext";
import { useState } from "react";
export default function StudentPrivateChat() {
  const { classId } = useParams();
const { messages, sendMessage } = useChat();

const [newMessage, setNewMessage] = useState("");
  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  if (!currentClass) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0f10] text-white">
        Chat not found
      </main>
    );
  }

  // current logged in student
  const studentId = 1;


const filteredMessages = messages.filter(
  (msg) =>
    msg.classId === Number(classId) &&
    msg.studentId === studentId
);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8">

      <section className="mx-auto max-w-5xl">

        {/* BACK */}
        <Link
          to={`/student/classroom/${classId}`}
          className="mb-6 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
        >
          <ArrowLeft size={18} />
          Back to classroom
        </Link>

        {/* HEADER */}
        <div className="rounded-4xl border border-purple-400/20 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_35%),#171b20] p-6 shadow-2xl">

          <p className="text-sm font-semibold text-purple-300">
            Private Conversation
          </p>

          <h1 className="mt-3 text-4xl font-black">
            {currentClass.title} 
          </h1>

          <p className="mt-3 text-white/55">
            Only you and your instructor can view these messages.
          </p>

        </div>

        {/* CHAT */}
        <div className="mt-6 rounded-4xl border border-purple-400/15 bg-white/4 p-6 shadow-2xl">

          {/* MESSAGES */}
          <div className="max-h-125 space-y-4 overflow-y-auto pr-2">

{filteredMessages.map((msg) => (
                  <div
                key={msg.id}
                className={`rounded-2xl p-4 ${
                  msg.role === "student"
                    ? "ml-10 border border-cyan-300/10 bg-cyan-300/10"
                    : "mr-10 border border-white/5 bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between gap-3">

                  <p className="text-sm font-bold">
                    {msg.sender}
                  </p>

                  <span className="text-[11px] text-white/40">
                    {msg.time}
                  </span>

                </div>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  {msg.message}
                </p>
              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="mt-6 flex gap-3">
<input
  value={newMessage}
  onChange={(e) => setNewMessage(e.target.value)}
  placeholder="Write your private message..."
  className="flex-1 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 outline-none transition focus:border-purple-400/40"
/>

            <button
  onClick={() => {
    if (!newMessage.trim()) return;

    sendMessage({
      id: Date.now(),
      classId: Number(classId),
      studentId,
      instructorId: 1,
      sender: "Ahmed Ali",
      role: "student",
      message: newMessage,
      time: "now",
    });

    setNewMessage("");
  }}
  className="flex items-center gap-2 rounded-2xl bg-purple-400 px-5 font-semibold text-black transition hover:bg-purple-300"
>
  <Send size={18} />
  Send
</button>

          </div>

        </div>

      </section>

    </main>
  );
}