import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";

type Student = {
  progress: number;
  attendance: number;
  completedTasks: number;
  totalTasks: number;
  lastActivity: string;
  enrolledCourses: unknown[];
};

type Props = {
  student: Student;
};

type InfoCardProps = {
  icon: React.ElementType;
  label: string;
  value: string | number;
};

function InfoCard({
  icon: Icon,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-300/25 bg-white/4 p-5 shadow-xl">

      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
        <Icon size={21} />
      </div>

      <p className="text-sm text-white/45">
        {label}
      </p>

      <h3 className="mt-1 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}

export default function StudentStats({
  student,
}: Props) {

  return (
    <div className="mt-6 grid gap-5 md:grid-cols-5">

      <InfoCard
        icon={TrendingUp}
        label="Progress"
        value={`${student.progress}%`}
      />

      <InfoCard
        icon={CalendarCheck}
        label="Attendance"
        value={`${student.attendance}%`}
      />

      <InfoCard
        icon={CheckCircle2}
        label="Tasks"
        value={`${student.completedTasks}/${student.totalTasks}`}
      />

      <InfoCard
        icon={Clock}
        label="Last Activity"
        value={student.lastActivity}
      />

      <InfoCard
        icon={BookOpen}
        label="Enrolled Courses"
        value={`${student.enrolledCourses.length} Courses`}
      />
    </div>
  );
}