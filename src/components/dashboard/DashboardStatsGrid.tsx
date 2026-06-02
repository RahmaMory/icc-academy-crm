import { BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../shared/StatCard";

type Props = {
  enrolledCourses: number;
  completedSteps: number;
  averageProgress: number;
};

export default function DashboardStatsGrid({
  enrolledCourses,
  completedSteps,
  averageProgress,
}: Props) {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-3">
      <Link to="/student/my-courses">
        <StatCard
          icon={BookOpen}
          value={enrolledCourses}
          label="Enrolled Courses"
          trend="+2 this month"
        />
      </Link>

      <StatCard
        icon={CheckCircle2}
        value={completedSteps}
        label="Completed Steps"
        trend="+1 today"
      />

      <StatCard
        icon={GraduationCap}
        value={`${averageProgress}%`}
        label="Average Progress"
        trend="+12% this week"
      />
    </div>
  );
}