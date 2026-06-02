import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import StudentTopItem from "../StudentTopItem";

type Student = {
  id: string;
  progress: number;
  attendance: number;
  classId: string;
};

type InstructorClass = {
  id: string;
  title: string;
};

type Props = {
  students: Student[];
  instructorClasses: InstructorClass[];
};

export default function TopStudentsCard({
  students,
  instructorClasses,
}: Props) {
  return (
    <div className="rounded-[28px] border border-emerald-400/25 bg-emerald-400/4 p-6">
      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
            <Users size={22} />
          </div>

          <div>
            <h3 className="font-bold">
              Top Students
            </h3>

            <p className="text-xs text-white/45">
              Best performing students
            </p>
          </div>
        </div>

        <Link
          to="/instructor/follow-up?filter=top"
          className="text-sm font-bold text-emerald-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3">

        {students
          .filter(
            (student) =>
              student.progress >= 75 &&
              student.attendance >= 80
          )
          .sort((a, b) => b.progress - a.progress)
          .slice(0, 3)
          .map((student) => {

            const classItem = instructorClasses.find(
              (c) => c.id === student.classId
            );

            return (
              <StudentTopItem
                key={student.id}
                student={student}
                classTitle={classItem?.title || "Unknown"}
              />
            );
          })}
      </div>
    </div>
  );
}