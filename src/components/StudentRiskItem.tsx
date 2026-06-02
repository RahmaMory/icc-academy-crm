import { Link } from "react-router-dom";

type Student = {
  id: string;
  name: string;
  classId: string;
  course: string;
  reason: string;
  weakPointsCount: number;
  alertsCount: number;
  progress: number;
};

type Props = {
  student: Student;
};

export default function StudentRiskItem({
  student,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${student.classId}/student/${student.id}`}
      className="block rounded-2xl bg-black/25 p-4 transition hover:-translate-y-1 hover:bg-black/40 hover:ring-1 hover:ring-red-300/40"
    >
      <div className="flex items-start justify-between gap-3">

        <div>
          <div className="flex items-center gap-2">

            <h4 className="font-bold">
              {student.name}
            </h4>

            <span className="rounded-full bg-red-400/10 px-2 py-1 text-[10px] font-bold text-red-300">
              HIGH RISK
            </span>
          </div>

          <p className="mt-1 text-xs text-white/45">
            {student.course}
          </p>

          <p className="mt-2 text-sm text-red-300">
            {student.reason}
          </p>

          <div className="mt-3 flex gap-2 text-xs text-white/50">

            <span>
              {student.weakPointsCount} weak points
            </span>

            <span>•</span>

            <span>
              {student.alertsCount} alerts
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-red-300">
            {student.progress}%
          </p>

          <p className="text-[11px] text-white/45">
            Progress
          </p>
        </div>
      </div>
    </Link>
  );
}