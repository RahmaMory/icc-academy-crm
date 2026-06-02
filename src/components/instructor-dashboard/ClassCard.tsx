import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ClassItem {
  id: string | number;
  image: string;
  title: string;
  group: string;
  branch: string;
  session: string;
  progress: number;
}

type Props = {
  classItem: ClassItem;
  studentsCount: number;
};

export default function ClassCard({
  classItem,
  studentsCount,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl transition hover:border-cyan-300/50">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

        <img
          src={classItem.image}
          alt={classItem.title}
          className="h-28 w-full rounded-2xl object-cover lg:w-40"
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold">
            {classItem.title}
          </h3>

          <p className="mt-2 text-sm text-white/50">
            {classItem.group} • {studentsCount} students
          </p>

          <p className="mt-1 text-xs text-white/40">
            {classItem.branch} • {classItem.session}
          </p>

          <div className="mt-4">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-white/45">
                Class Progress
              </span>

              <span className="font-bold text-cyan-300">
                {classItem.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
                style={{ width: `${classItem.progress}%` }}
              />
            </div>
          </div>
        </div>

        <Link
          to={`/instructor/classes/${classItem.id}`}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
        >
          View Class

          <ArrowRight
            size={17}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}