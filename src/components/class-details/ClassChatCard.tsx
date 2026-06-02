import { MessageCircle, Send } from "lucide-react";

type Message = {
  id: number;
  sender: string;
  role: string;
  message: string;
  time: string;
};

type Props = {
  chatMessages: Message[];
  chatMessage: string;
  setChatMessage: React.Dispatch<
    React.SetStateAction<string>
  >;
  handleSendMessage: () => void;
};

export default function ClassChatCard({
  chatMessages,
  chatMessage,
  setChatMessage,
  handleSendMessage,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center gap-3">
        <MessageCircle
          className="text-cyan-300"
          size={22}
        />

        <h2 className="text-xl font-bold">
          Class Chat
        </h2>
      </div>

      <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
        
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className="rounded-2xl bg-black/25 p-4"
          >
            <div className="flex justify-between gap-3">
              
              <h3 className="font-bold">
                {message.sender}
              </h3>

              <span className="text-xs text-white/35">
                {message.time}
              </span>
            </div>

            <p className="mt-1 text-xs text-cyan-300">
              {message.role}
            </p>

            <p className="mt-2 text-sm text-white/60">
              {message.message}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        
        <input
          value={chatMessage}
          onChange={(e) =>
            setChatMessage(e.target.value)
          }
          placeholder="Write message..."
          className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 outline-none"
        />

        <button
          onClick={handleSendMessage}
          disabled={!chatMessage.trim()}
          title="Send message"
          className="rounded-2xl bg-cyan-300 px-4 font-bold text-[#0b0f10] disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}