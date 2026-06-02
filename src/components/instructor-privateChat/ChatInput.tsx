import { Send } from "lucide-react";

interface ChatInputProps {
  classId: string | number;
  studentId: string | number;
  newMessage: string;
  setNewMessage: (message: string) => void;
  sendMessage: (message: ChatMessage) => void;
}

interface ChatMessage {
  id: number;
  classId: number;
  studentId: number;
  instructorId: number;
  sender: string;
  role: string;
  message: string;
  time: string;
}

export default function ChatInput({
  classId,
  studentId,
  newMessage,
  setNewMessage,
  sendMessage,
}: ChatInputProps) {
  return (
    <div className="flex gap-2 border-t border-white/10 p-3 sm:p-4">
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write a reply..."
        className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
      />

      <button
        type="button"
        onClick={() => {
          if (!newMessage.trim()) return;

          sendMessage({
            id: Date.now(),
            classId: Number(classId),
            studentId: Number(studentId),
            instructorId: 1,
            sender: "Instructor",
            role: "instructor",
            message: newMessage,
            time: "now",
          });

          setNewMessage("");
        }}
        className="rounded-2xl bg-cyan-300 px-5 font-bold text-black"
        title="Send message"
        aria-label="Send message"
      >
        <Send size={18} />
      </button>
    </div>
  );
}