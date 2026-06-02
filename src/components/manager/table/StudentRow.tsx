import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "../../shared/StatusBadge";

type Student = {
  id: string;
  name: string;
  email: string;
  classId: string;
  classTitle: string;
  group: string;
  enrolledCourses: string[];
  progress: number;
  attendance: number;
};

type Props = {
  student: Student;
  status: string;
};

export default function StudentRow({ student, status }: Props) {
  return (
    <tr className="bg-black/25">
      <td className="rounded-l-2xl px-4 py-4">
        <p className="font-bold">{student.name}</p>
        <p className="mt-1 text-xs text-white/45">
          {student.email}
        </p>
      </td>

      <td className="px-4 py-4 text-white/70">
        {student.classTitle}
      </td>

      <td className="px-4 py-4 text-white/70">
        {student.group}
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {student.enrolledCourses.join(", ")}
      </td>

      <td className="px-4 py-4 font-bold text-cyan-300">
        {student.progress}%
      </td>

      <td className="px-4 py-4 text-white/70">
        {student.attendance}%
      </td>

      <td className="px-4 py-4">
        <StatusBadge status={status} />
      </td>

      <td className="rounded-r-2xl px-4 py-4">
        <Link
          to={`/instructor/classes/${student.classId}/student/${student.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 hover:bg-cyan-300 hover:text-[#0b0f10]"
        >
          View
          <ArrowRight size={15} />
        </Link>
      </td>
    </tr>
  );
}