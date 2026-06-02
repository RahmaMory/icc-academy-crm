import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function ChatHeader({
  classTitle,
  classId,
}: {
  classTitle: string;
  classId: string | number;
}) {
  return (
    <>
      <Link
        to={`/instructor/classes/${classId}`}
        className="mb-6 inline-flex items-center gap-2 text-cyan-300"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <MessageCircle className="text-cyan-300" size={20} />

          <div>
            <h1 className="text-xl font-bold">Private Chat</h1>
            <p className="text-sm text-white/50">{classTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}