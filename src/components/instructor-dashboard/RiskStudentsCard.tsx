import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import StudentRiskItem from "../StudentRiskItem";

type Student = {
  id: string | number;
  progress: number;
  attendance: number;
  priority: "High" | "Medium" | "Low";
};

type Props = {
  students: Student[];
};

export default function RiskStudentsCard({
  students,
}: Props) {
  return (
    <div className="rounded-[28px] border border-red-400/25 bg-red-400/4 p-6">

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
            <AlertCircle size={22} />
          </div>

          <div>
            <h3 className="font-bold">
              Low Performance Students
            </h3>

            <p className="text-xs text-white/45">
              Students needing immediate attention
            </p>
          </div>
        </div>

        <Link
          to="/instructor/follow-up?filter=low"
          className="text-sm font-bold text-red-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">

        {students
          .filter(
            (student) =>
              student.progress < 40 ||
              student.attendance < 60 ||
              student.priority === "High"
          )
          .sort((a, b) => a.progress - b.progress)
          .slice(0, 5)
          .map((student) => (
            <StudentRiskItem
              key={student.id}
              student={student}
            />
          ))}
      </div>
    </div>
  );
}