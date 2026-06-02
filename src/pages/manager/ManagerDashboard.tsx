import {
 
  BookOpen,
  GraduationCap,
  UserRoundCog,
  Users,
} from "lucide-react";

import {
  classStudents,
  instructorClasses,
  managerTracks,
  managerUser,
  instructorDeliverables,
  trackInstructors,
  instructorMaterials,
  instructorSessions,
} from "../../data";

import StatCard from "../../components/shared/StatCard";
import HealthLine from "../../components/dashboard/HealthLine";
import TrackOverviewCard from "../../components/dashboard/TrackOverviewCard";
import ActivityCard from "../../components/dashboard/ActivityCard";
import AlertCard from "../../components/dashboard/AlertCard";
import { getAverage, getStudentStatus } from "../../utils/dashboard/utils";

export default function ManagerDashboard() {
  const averageProgress = getAverage(classStudents.map((s) => s.progress));
  const averageAttendance = getAverage(classStudents.map((s) => s.attendance));

  const studentsNeedAttention = classStudents.filter(
    (student) => getStudentStatus(student.progress) === "Needs Attention"
  );

  const missingMaterials = instructorMaterials.filter(
    (item) => item.status === "Missing"
  );

  const unpreparedSessions = instructorSessions.filter(
    (item) => !item.prepared
  );

  const pendingDeliverables = instructorDeliverables.filter(
    (item) => item.status === "Pending Review" || item.status === "Missing"
  );

  const trackCards = managerTracks.map((track) => {
    const instructors = trackInstructors.filter(
      (i) => i.trackId === track.id
    );

    const classIds = instructors.flatMap((i) => i.classIds);

    const groups = instructorClasses.filter((g) =>
      classIds.includes(g.id)
    );

    const students = classStudents.filter((s) =>
      classIds.includes(s.classId)
    );

    return {
      ...track,
      instructorsCount: instructors.length,
      groupsCount: groups.length,
      studentsCount: students.length,
      averageProgress: getAverage(students.map((s) => s.progress)),
    };
  });

  const criticalAlerts = [
    ...studentsNeedAttention.slice(0, 2).map((student) => {
      const classItem = instructorClasses.find(
        (c) => c.id === student.classId
      );

      const instructor = trackInstructors.find((i) =>
        i.classIds.includes(student.classId)
      );

      return {
        id: `student-${student.id}`,
        title: "Student needs follow-up",
        desc: `${student.name} is at ${student.progress}% in ${
          classItem?.title || "Unknown Class"
        }.`,
        meta: instructor?.name || "Unknown Instructor",
        link: `/instructor/classes/${student.classId}/student/${student.id}`,
      };
    }),

    ...missingMaterials.slice(0, 2).map((m) => {
      const instructor = trackInstructors.find(
        (i) => i.id === m.instructorId
      );

      return {
        id: `material-${m.id}`,
        title: "Missing material",
        desc: `${m.title} has not been uploaded yet.`,
        meta: instructor?.name || "Unknown Instructor",
        link: `/manager/instructors/${instructor?.id}`,
      };
    }),

    ...unpreparedSessions.slice(0, 2).map((s) => {
      const instructor = trackInstructors.find(
        (i) => i.id === s.instructorId
      );

      return {
        id: `session-${s.id}`,
        title: "Unprepared session",
        desc: `${s.title} for ${s.group} is not prepared.`,
        meta: instructor?.name || "Unknown Instructor",
        link: `/manager/instructors/${instructor?.id}`,
      };
    }),
  ].slice(0, 5);

  const recentActivity = [
    ...instructorMaterials.slice(0, 2).map((m) => {
      const instructor = trackInstructors.find(
        (i) => i.id === m.instructorId
      );

      return {
        id: `material-${m.id}`,
        title:
          m.status === "Uploaded"
            ? "Material uploaded"
            : "Material update needed",
        desc: `${instructor?.name || "Instructor"} • ${m.title} • ${m.status}`,
        time: m.uploadedAt,
      };
    }),

    ...instructorSessions.slice(0, 2).map((s) => {
      const instructor = trackInstructors.find(
        (i) => i.id === s.instructorId
      );

      return {
        id: `session-${s.id}`,
        title: s.prepared ? "Session prepared" : "Session not prepared",
        desc: `${instructor?.name || "Instructor"} • ${s.title} • ${s.group}`,
        time: s.date,
      };
    }),

    ...pendingDeliverables.slice(0, 2).map((d) => {
      const instructor = trackInstructors.find(
        (i) => i.id === d.instructorId
      );

      return {
        id: `deliverable-${d.id}`,
        title: "Deliverable needs review",
        desc: `${instructor?.name || "Instructor"} • ${d.title} • ${d.status}`,
        time: d.deadline,
      };
    }),
  ].slice(0, 5);

  return (
  <main className="min-h-screen bg-[#0b0f10] text-white">
    
    {/* HEADER */}
    <header className="flex flex-col gap-4 border-b border-cyan-400/20 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Manager Dashboard
        </h1>
        <p className="mt-2 text-sm text-white/55">
          High-level overview for tracks, groups, students, and academy alerts.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/30 bg-white/4 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-black font-bold">
          {managerUser.name.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-bold">{managerUser.name}</p>
          <p className="text-xs text-white/45">{managerUser.role}</p>
        </div>
      </div>
    </header>

    <div className="px-4 py-6 sm:px-6 lg:px-8 xl:px-10">

      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={BookOpen} value={managerTracks.length} label="Tracks" />
        <StatCard icon={UserRoundCog} value={trackInstructors.length} label="Instructors" />
        <StatCard icon={GraduationCap} value={instructorClasses.length} label="Groups" />
        <StatCard icon={Users} value={classStudents.length} label="Students" />
      </section>

      {/* TRACKS */}
      <section className="mt-8 rounded-[28px] border border-cyan-300/25 bg-white/4 p-5">
        <h2 className="text-xl font-bold mb-4">Tracks Overview</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {trackCards.map((track) => (
            <TrackOverviewCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      {/* TWO COLUMN LAYOUT زي القديم */}
      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">

        {/* LEFT */}
        <div className="space-y-6">

          {/* ACTIVITY */}
          <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>

            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <aside className="space-y-6">

          {/* ALERTS */}
          <div className="rounded-[28px] border border-orange-400/25 bg-orange-400/4 p-5">
            <h3 className="font-bold mb-4">Critical Alerts</h3>

            <div className="space-y-4">
              {criticalAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
          </div>

          {/* HEALTH */}
          <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5">
            <h3 className="font-bold mb-4">Academy Health</h3>

            <div className="space-y-3">
              <HealthLine label="Average Attendance" value={`${averageAttendance}%`} />
              <HealthLine label="Average Progress" value={`${averageProgress}%`} />
              <HealthLine label="Pending Deliverables" value={pendingDeliverables.length} />
              <HealthLine label="Missing Materials" value={missingMaterials.length} />
            </div>
          </div>

        </aside>
      </section>
    </div>
  </main>
);
}