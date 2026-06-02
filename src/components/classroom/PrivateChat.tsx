import { useState } from "react";

export default function InstructorDirectChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="rounded-[28px] border border-purple-300/20 bg-white/4 p-6">

      <h2 className="text-2xl font-bold text-white">
        Private Chat with Instructor
      </h2>

      <p className="text-xs text-white/40 mt-1 mb-4">
        Only you and your instructor can see this
      </p>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-400 text-black px-5 py-2 rounded-full font-semibold"
        >
          Ask privately
        </button>
      ) : (
        <div className="space-y-3">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your question..."
            className="w-full h-24 p-3 rounded-xl bg-black/30 border border-white/10 text-white"
          />

          <div className="flex gap-2">

            <button
              onClick={() => {
                console.log("Send private message:", message);
                setMessage("");
                setOpen(false);
              }}
              className="bg-cyan-300 text-black px-4 py-2 rounded-xl font-semibold"
            >
              Send
            </button>

            <button
              onClick={() => setOpen(false)}
              className="text-white/60 px-4 py-2"
            >
              Cancel
            </button>

          </div>

        </div>
      )}
    </div>
  );
}