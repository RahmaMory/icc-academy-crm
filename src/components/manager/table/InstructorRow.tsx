import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Instructor {
  id: string;
  name: string;
  email: string;
  trackName: string;
  classes: number;
  students: number;
  averageProgress: number;
  lastActivity: string;
}

type Props = {
  instructor: Instructor;
};

export default function InstructorRow({ instructor }: Props) {
  return (
    <tr className="bg-black/25">
      <td className="rounded-l-2xl px-4 py-4">
        <p className="font-bold">{instructor.name}</p>
        <p className="mt-1 text-xs text-white/45">
          {instructor.email}
        </p>
      </td>

      <td className="px-4 py-4">
        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-300">
          {instructor.trackName}
        </span>
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {instructor.classes}
      </td>

      <td className="px-4 py-4 text-sm text-white/70">
        {instructor.students}
      </td>

      <td className="px-4 py-4 font-bold text-cyan-300">
        {instructor.averageProgress}%
      </td>

      <td className="px-4 py-4 text-sm text-white/50">
        {instructor.lastActivity}
      </td>

      <td className="rounded-r-2xl px-4 py-4">
        <Link
          to={`/manager/instructors/${instructor.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 hover:bg-cyan-300 hover:text-[#0b0f10]"
        >
          View
          <ArrowRight size={15} />
        </Link>
      </td>
    </tr>
  );
}