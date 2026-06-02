
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  GraduationCap,
  Users,
  AlertTriangle,
} from "lucide-react";

import {
  classStudents,
  instructorDeliverables,
  trackInstructors,
  instructorMaterials,
  instructorSessions,
  instructorClasses,
} from "../../data";

import StatCard from "../../components/shared/StatCard";
import HealthLine from "../../components/dashboard/HealthLine";

import SectionCard from "../../components/shared/SectionCard";
import InstructorMessageBox from "../../components/manager/InstructorMessageBox";


import getAverage from "../../utils/shared/getAverage";
import GroupProgressCard from "../../components/groups/GroupProgressCard";
import { useState } from "react";
import StudentPreviewCard from "../../components/students/StudentPreviewCard";
import toast from "react-hot-toast";
import { StatusBadge } from "../../components/shared/StatusBadge";



export default function ManagerInstructorDetails() {
  const { instructorId } = useParams();
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState<"warning" | "message">("warning");
  const instructor = trackInstructors.find(
    (item) => item.id === Number(instructorId)
  );

  if (!instructor) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">
          Instructor not found
        </h1>

        <Link
          to="/manager/tracks"
          className="mt-5 inline-flex items-center gap-2 text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to tracks
        </Link>
      </main>
    );
  }
function handleSendMessage() {
  if (!message.trim()) {
    toast.error("Write a message first");
    return;
  }

  toast.success(
    messageType === "warning"
      ? "Warning sent to instructor ✅"
      : "Message sent to instructor ✅"
  );

  setMessage("");
}
  const groups = instructorClasses.filter((group) =>
    instructor.classIds.includes(group.id)
  );

  const students = classStudents.filter((student) =>
    instructor.classIds.includes(student.classId)
  );

  const materials = instructorMaterials.filter(
    (item) => item.instructorId === instructor.id
  );

  const sessions = instructorSessions.filter(
    (item) => item.instructorId === instructor.id
  );

  const deliverables = instructorDeliverables.filter(
    (item) => item.instructorId === instructor.id
  );

  const averageProgress = getAverage(
    students.map((student) => student.progress)
  );

  const missingMaterials = materials.filter(
    (item) => item.status === "Missing"
  ).length;

  const unpreparedSessions = sessions.filter(
    (item) => !item.prepared
  ).length;

  const missingDeliverables = deliverables.filter(
    (item) => item.status === "Missing"
  ).length;

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">

        <Link
          to="/manager/tracks"
          className="mb-6 inline-flex items-center gap-2 pl-14 text-sm font-bold text-cyan-300 lg:pl-0"
        >
          <ArrowLeft size={17} />
          Back to tracks
        </Link>

        {/* HERO */}

        <div className="rounded-[30px] border border-cyan-300/25 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%),#171b20] p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>
              <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
                Instructor Profile
              </span>

              <h1 className="mt-5 text-3xl font-bold sm:text-5xl">
                {instructor.name}
              </h1>

              <p className="mt-2 text-white/50">
                {instructor.email}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {groups.map((group) => (
                  <span
                    key={group.id}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70"
                  >
                    {group.group}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-300/25 bg-black/25 p-5">
              <p className="text-sm text-white/45">
                Average Student Progress
              </p>

              <h2 className="mt-2 text-4xl font-bold text-cyan-300">
                {averageProgress}%
              </h2>
            </div>

          </div>
        </div>

        {/* STATS */}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={GraduationCap}
            label="Groups"
            value={groups.length}
          />

          <Link to={`/manager/instructors/${instructor.id}/students`}>
            <StatCard
              icon={Users}
              label="Students"
              value={students.length}
            />
          </Link>

          <StatCard
            icon={FileText}
            label="Materials"
            value={materials.length}
          />

          <StatCard
            icon={BookOpen}
            label="Sessions"
            value={sessions.length}
          />

        </div>

        {/* MESSAGE BOX */}

        <div className="mt-6">
<InstructorMessageBox
  message={message}
  setMessage={setMessage}
  messageType={messageType}
  setMessageType={setMessageType}
  handleSendMessage={handleSendMessage}
/>        </div>

        {/* ALERTS */}

        {(missingMaterials > 0 ||
          unpreparedSessions > 0 ||
          missingDeliverables > 0) && (
          <div className="mt-6 rounded-[28px] border border-orange-400/25 bg-orange-400/4 p-5 shadow-2xl sm:p-6">

            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle
                className="text-orange-300"
                size={24}
              />

              <div>
                <h2 className="text-xl font-bold">
                  Missing / Needs Attention
                </h2>

                <p className="text-sm text-white/45">
                  Items the manager should follow up with this instructor.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">

              <HealthLine
                label="Missing Materials"
                value={missingMaterials}
              />

              <HealthLine
                label="Unprepared Sessions"
                value={unpreparedSessions}
              />

              <HealthLine
                label="Missing Deliverables"
                value={missingDeliverables}
              />

            </div>
          </div>
        )}

        {/* CONTENT */}

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">

          {/* LEFT SIDE */}

          <section className="space-y-6">

            <SectionCard
              title="Groups"
              description="Groups handled by this instructor."
            >
              <div className="space-y-4">

                {groups.map((group) => {
                  const groupStudents = classStudents.filter(
                    (student) => student.classId === group.id
                  );

                  return (
                  <GroupProgressCard
  key={group.id}
  group={group.group}
  title={group.title}
  studentsCount={groupStudents.length}
  progress={getAverage(
    groupStudents.map((s) => s.progress)
  )}
/>
                  );
                })}

              </div>
            </SectionCard>

            <SectionCard
              title="Materials"
              description="Materials uploaded or missing from this instructor."
            >
              <div className="space-y-4">

                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex flex-col justify-between gap-3 rounded-2xl bg-black/25 p-4 sm:flex-row sm:items-center"
                  >

                    <div>
                      <h3 className="font-bold">
                        {material.title}
                      </h3>

                      <p className="mt-1 text-xs text-white/45">
                        {material.type} • {material.uploadedAt}
                      </p>
                    </div>

                    <StatusBadge status={material.status} />

                  </div>
                ))}

              </div>
            </SectionCard>

            <SectionCard
              title="Deliverables"
              description="Assignments and required submissions."
            >
              <div className="space-y-4">

                {deliverables.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between gap-3 rounded-2xl bg-black/25 p-4 sm:flex-row sm:items-center"
                  >

                    <div>
                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-white/45">
                        {item.group} • Deadline: {item.deadline}
                      </p>
                    </div>

                    <StatusBadge status={item.status} />

                  </div>
                ))}

              </div>
            </SectionCard>

          </section>

          {/* RIGHT SIDE */}

          <aside className="space-y-6">

            <SectionCard
              title="Sessions"
              description="Sessions conducted or planned with this instructor."
            >
              <div className="space-y-4">

                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-2xl bg-black/25 p-4"
                  >

                    <h3 className="font-bold">
                      {session.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/45">
                      {session.group} • {session.date}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">

                      <StatusBadge
                        status={
                          session.prepared
                            ? "Prepared"
                            : "Not Prepared"
                        }
                      />

                      <StatusBadge
                        status={
                          session.attended
                            ? "Attended"
                            : "Not Attended"
                        }
                      />

                    </div>
                  </div>
                ))}

              </div>
            </SectionCard>

            <SectionCard
              title="Students Preview"
              description="Students handled by this instructor."
            >
              <div className="space-y-4">

                {students.slice(0, 5).map((student) => (
                  <StudentPreviewCard
                    key={student.id}
                    id={student.id}
                    classId={student.classId}
                    name={student.name}
                    email={student.email}
                    progress={student.progress}
                  />
                ))}

              </div>
            </SectionCard>

          </aside>

        </div>
      </section>
    </main>
  );
}