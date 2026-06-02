import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Props = {
  cls: {
    id: string | number;
    title: string;
  };
  studentsCount: number;
  progress: number;
  risk: number;
};

export default function ClassBreakdownCard({
  cls,
  studentsCount,
  progress,
  risk,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${cls.id}`}
      className="block p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-300/40 hover:bg-white/[0.07] transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold">
            {cls.title}
          </h3>

          <p className="text-sm text-white/50 mt-1">
            {studentsCount} students
          </p>
        </div>

        <ArrowRight
          size={16}
          className="text-cyan-300"
        />
      </div>

      <div className="mt-3">
        <p className="text-sm text-cyan-300">
          Progress: {progress.toFixed(0)}%
        </p>

        <p className="text-sm text-red-300">
          Risk: {risk}
        </p>
      </div>
    </Link>
  );
}