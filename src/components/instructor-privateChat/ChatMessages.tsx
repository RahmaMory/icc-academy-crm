interface Message {
  id: string;
  role: "instructor" | "student";
  sender: string;
  time: string;
  message: string;
}

export default function ChatMessages({ messages }: { messages: Message[] }) {
  return (
    <div className="mt-5 rounded-3xl border border-white/10 bg-white/3">
      <div className="h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-4">

        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-white/40">
            No messages yet
          </div>
        ) : (
          messages.map((msg) => {
            const isInstructor = msg.role === "instructor";

            return (
              <div
                key={msg.id}
                className={`flex ${
                  isInstructor ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] sm:max-w-[60%] rounded-2xl px-4 py-3 text-sm ${
                    isInstructor
                      ? "bg-cyan-300 text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <div className="flex justify-between text-[11px] opacity-70 mb-1">
                    <span className="font-semibold">{msg.sender}</span>
                    <span>{msg.time}</span>
                  </div>

                  <p className="leading-relaxed">{msg.message}</p>
                </div>
              </div>
            );
          })
        )}

      </div>
    </div>
  );
}