import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  classId: string;
  classTitle: string;
  group: string;
  branch: string;
  session: string;
  progress: number;
  attendance: number;
}

type Props = {
  student: Student;
  status: string;
  getStatusClass: (status: string) => string;
};

export default function StudentTableRow({
  student,
  status,
  getStatusClass,
}: Props) {
  return (
    <tr className="bg-black/25">

      <td className="rounded-l-2xl px-4 py-4">
        <p className="font-bold">{student.name}</p>

        <p className="mt-1 text-xs text-white/45">
          {student.email}
        </p>
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.classTitle}
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.group}
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.branch}
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.session}
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">

          <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
              style={{ width: `${student.progress}%` }}
            />
          </div>

          <span className="text-sm font-bold text-cyan-300">
            {student.progress}%
          </span>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.attendance}%
      </td>

      <td className="px-4 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
            status
          )}`}
        >
          {status}
        </span>
      </td>

      <td className="rounded-r-2xl px-4 py-4">
        <Link
          to={`/instructor/classes/${student.classId}/student/${student.id}`}
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
        >
          View

          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </td>
    </tr>
  );
}