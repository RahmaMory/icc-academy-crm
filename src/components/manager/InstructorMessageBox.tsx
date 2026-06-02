import { Send } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  messageType: "warning" | "message";
  setMessageType: Dispatch<SetStateAction<"warning" | "message">>;
  handleSendMessage: () => void;
};


export default function InstructorMessageBox({
  message,
  setMessage,
  messageType,
  setMessageType,
  handleSendMessage,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
          <Send size={20} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Send Message to Instructor
          </h2>

          <p className="text-sm text-white/45">
            UI preview only.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            setMessageType("warning")
          }
          className={[
            "rounded-full px-4 py-2 text-sm font-bold transition",

            messageType === "warning"
              ? "bg-orange-300 text-[#0b0f10]"
              : "bg-white/10 text-white/60 hover:text-white",
          ].join(" ")}
        >
          Warning
        </button>

        <button
          type="button"
          onClick={() =>
            setMessageType("message")
          }
          className={[
            "rounded-full px-4 py-2 text-sm font-bold transition",

            messageType === "message"
              ? "bg-cyan-300 text-[#0b0f10]"
              : "bg-white/10 text-white/60 hover:text-white",
          ].join(" ")}
        >
          Message
        </button>
      </div>

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder={
          messageType === "warning"
            ? "Write a warning for this instructor..."
            : "Write a message for this instructor..."
        }
        className="mt-4 min-h-30 w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-sm outline-none"
      />

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/40">
          This will be connected to notifications later.
        </p>

        <button
          type="button"
          onClick={handleSendMessage}
          disabled={!message.trim()}
          className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-[#0b0f10] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}