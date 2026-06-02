import { Link } from "react-router-dom";

type Student = {
  id: string;
  name: string;
  classId: string;
  progress: number;
};

type Props = {
  student: Student;
  classTitle: string;
};

export default function StudentTopItem({
  student,
  classTitle,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${student.classId}/student/${student.id}`}
      className="flex items-center justify-between rounded-2xl bg-black/25 p-4 transition hover:bg-black/40"
    >
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-bold">
            {student.name}
          </h4>

          <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
            TOP
          </span>
        </div>

        <p className="mt-1 text-xs text-white/45">
          {classTitle}
        </p>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-emerald-300">
          {student.progress}%
        </p>

        <p className="text-[11px] text-white/45">
          Progress
        </p>
      </div>
    </Link>
  );
}