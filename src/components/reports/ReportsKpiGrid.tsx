import { Link } from "react-router-dom";

import {
  Users,
  TrendingUp,
  Activity,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

import ReportCard from "../shared/ReportCard";

type Props = {
  studentsCount: number;
  avgProgress: number;
  avgAttendance: number;
  weakStudentsCount: number;
  totalMissingTasks: number;
};

export default function ReportsKpiGrid({
  studentsCount,
  avgProgress,
  avgAttendance,
  weakStudentsCount,
  totalMissingTasks,
}: Props) {
  return (
    <div className="grid md:grid-cols-5 gap-4 mb-10">

      <Link to="/instructor/students">
        <ReportCard
          icon={Users}
          label="Students"
          value={studentsCount}
        />
      </Link>

      <Link to="/instructor/classes">
        <ReportCard
          icon={TrendingUp}
          label="Avg Progress"
          value={`${avgProgress.toFixed(0)}%`}
        />
      </Link>

      <Link to="/instructor/students">
        <ReportCard
          icon={Activity}
          label="Attendance"
          value={`${avgAttendance.toFixed(0)}%`}
        />
      </Link>

      <Link to="/instructor/students">
        <ReportCard
          icon={AlertTriangle}
          label="Weak Students"
          value={weakStudentsCount}
        />
      </Link>

      <Link to="/instructor/classes">
        <ReportCard
          icon={ClipboardList}
          label="Missing Tasks"
          value={totalMissingTasks}
        />
      </Link>

    </div>
  );
}