import {
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  classStudents,
  managerTracks,
  trackInstructors,
  instructorClasses,
} from "../../data";

import ReportCard from "../../components/shared/ReportCard";
import SummaryLine from "../../components/shared/SummaryLine";
import getAverage from "../../utils/shared/getAverage";

export default function ManagerReports() {
  const avgProgress = getAverage(classStudents.map((s) => s.progress));
  const avgAttendance = getAverage(classStudents.map((s) => s.attendance));
  const needAttention = classStudents.filter((s) => s.progress < 30).length;

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="pl-14 lg:pl-0">
          <h1 className="text-3xl font-bold sm:text-4xl">Reports</h1>
          <p className="mt-2 text-white/50">
            High-level academy performance summary.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <ReportCard icon={TrendingUp} label="Average Progress" value={`${avgProgress}%`} />
          <ReportCard icon={Users} label="Average Attendance" value={`${avgAttendance}%`} />
          <ReportCard icon={BookOpen} label="Tracks" value={managerTracks.length} />
          <ReportCard icon={AlertTriangle} label="Need Attention" value={needAttention} warning />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-6 shadow-2xl">
            <h2 className="text-2xl font-bold">Academy Summary</h2>

            <div className="mt-6 space-y-4">
              <SummaryLine label="Total Tracks" value={managerTracks.length} />
              <SummaryLine label="Total Classes" value={instructorClasses.length} />
              <SummaryLine label="Total Instructors" value={trackInstructors.length} />
              <SummaryLine label="Total Students" value={classStudents.length} />
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-6 shadow-2xl">
            <h2 className="text-2xl font-bold">Risk Summary</h2>

            <div className="mt-6 space-y-4">
              <SummaryLine label="Students below 30%" value={needAttention} />
              <SummaryLine
                label="Students below 60% attendance"
                value={classStudents.filter((s) => s.attendance < 60).length}
              />
              <SummaryLine
                label="Average Attendance"
                value={`${avgAttendance}%`}
              />
              <SummaryLine
                label="Average Progress"
                value={`${avgProgress}%`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

