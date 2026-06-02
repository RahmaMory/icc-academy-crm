import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  classId: string;
  progress: number;
  attendance: number;
  recommendedAction: string;
  performanceAlerts?: string[];
  weakPoints?: string[];
}

type Props = {
  student: Student;
};

export default function RiskStudentCard({
  student,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${student.classId}/student/${student.id}`}
      className="block p-4 rounded-2xl bg-white/5 border border-orange-500/20 hover:border-orange-400/50 hover:bg-white/[0.07] transition"
    >
      <div className="flex items-start justify-between">

        <div>
          <h3 className="font-bold">
            {student.name}
          </h3>

          <p className="text-sm text-white/50">
            Class ID: {student.classId}
          </p>
        </div>

        <ArrowRight
          size={16}
          className="text-orange-300"
        />
      </div>

      <p className="text-orange-300 text-sm mt-2">
        Progress: {student.progress}% • Attendance: {student.attendance}%
      </p>

      <p className="text-xs text-white/40 mt-2">
        {student.recommendedAction}
      </p>

      <div className="mt-3 flex gap-2 flex-wrap">

        {student.performanceAlerts &&
          student.performanceAlerts.length > 0 && (
            <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-300 text-[10px] font-bold">
              {student.performanceAlerts.length} alerts
            </span>
          )}

        {student.weakPoints &&
          student.weakPoints.length > 0 && (
            <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-[10px] font-bold">
              {student.weakPoints.length} weak points
            </span>
          )}

      </div>
    </Link>
  );
}