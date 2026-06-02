import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

interface Student {
  id: string;
  name: string;
  classId: string;
  priority: "High" | "Medium" | "Low";
  course: string;
  group: string;
  progress: number;
  attendance: number;
  weakPointsCount: number;
  recommendedAction: string;
}

export default function StudentFollowUpCard({ student }: { student: Student }) {
  const isLow = student.progress < 50;

  return (
    <Link
      to={`/instructor/classes/${student.classId}/student/${student.id}`}
      className="rounded-[28px] border border-white/10 bg-white/3 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
    >
      <div className="flex items-start justify-between gap-4">

        <div className="w-full">

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{student.name}</h2>

            <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${
              student.priority === "High"
                ? "bg-red-400/10 text-red-300"
                : student.priority === "Medium"
                ? "bg-yellow-400/10 text-yellow-300"
                : "bg-cyan-400/10 text-cyan-300"
            }`}>
              {student.priority}
            </span>
          </div>

          <p className="mt-1 text-sm text-white/50">
            {student.course} • {student.group}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">

            <div className="rounded-xl bg-white/5 px-3 py-2">
              Progress: {student.progress}%
            </div>

            <div className="rounded-xl bg-white/5 px-3 py-2">
              Attendance: {student.attendance}%
            </div>

            <div className="rounded-xl bg-white/5 px-3 py-2">
              Weak: {student.weakPointsCount}
            </div>

            {isLow && (
              <div className="flex items-center gap-1 rounded-xl bg-red-400/10 px-3 py-2 text-red-300">
                <AlertCircle size={14} />
                Low Progress
              </div>
            )}

          </div>

          <p className="mt-5 text-sm text-white/60">
            {student.recommendedAction}
          </p>

        </div>

      </div>
    </Link>
  );
}