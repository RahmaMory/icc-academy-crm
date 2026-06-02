import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type {
  ClassStudent,
  InstructorClass,
  StudentStatus,
} from "../../data/sharedTypes";

type Props = {
  student: ClassStudent;

  currentClass: Pick<
    InstructorClass,
    "title" | "group"
  >;

  status: StudentStatus;

  classId: string;

  showNoteBox: boolean;

  setShowNoteBox: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  getStatusClass: (
    status: StudentStatus
  ) => string;
};

export default function StudentHeader({
  student,
  currentClass,
  status,
  classId,
  showNoteBox,
  setShowNoteBox,
  getStatusClass,
}: Props) {
  return (
    <div className="rounded-[30px] border border-cyan-300/25 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_35%),#171b20] p-8 shadow-2xl">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        
        <div className="flex items-center gap-5">
          
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-cyan-300 to-violet-500 text-3xl font-bold text-[#0b0f10]">
            {student.name.charAt(0)}
          </div>

          <div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                status
              )}`}
            >
              {status}
            </span>

            <h1 className="mt-4 text-4xl font-bold">
              {student.name}
            </h1>

            <p className="mt-2 text-white/50">
              {student.email}
            </p>

            <p className="mt-1 text-sm text-cyan-300">
              {currentClass.title} • {currentClass.group}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          
          <button
            onClick={() =>
              setShowNoteBox(!showNoteBox)
            }
            className="rounded-full border border-cyan-300 px-6 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
          >
            Add Private Note
          </button>

          <Link
            to={`/instructor/classes/${classId}/chat/${student.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-300 px-6 py-3 text-sm font-bold text-purple-200 transition hover:bg-purple-300 hover:text-black"
          >
            <MessageCircle size={16} />
            Private Chat
          </Link>
        </div>
      </div>
    </div>
  );
}