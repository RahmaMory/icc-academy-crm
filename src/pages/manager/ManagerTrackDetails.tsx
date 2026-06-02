
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Search, Users, BookOpen, TrendingUp } from "lucide-react";

import {
  classStudents,
  managerTracks,
  trackInstructors,
  instructorClasses,
} from "../../data";

import InfoCard from "../../components/shared/InfoCard";
import EmptyState from "../../components/shared/EmptyState";
import { StatusBadge } from "../../components/shared/StatusBadge";
import getAverage from "../../utils/shared/getAverage";

type Tab = "instructors" | "students";
type Status = "All" | "Good" | "Average" | "Needs Attention";

function getStudentStatus(progress: number): Exclude<Status, "All"> {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}

export default function ManagerTrackDetails() {
  const { trackId } = useParams();

  const [activeTab, setActiveTab] = useState<Tab>("instructors");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<Status>("All");

  const track = managerTracks.find((t) => t.id === Number(trackId));

  const instructors = trackInstructors.filter(
    (i) => i.trackId === Number(trackId)
  );

  const trackClassIds = instructors.flatMap((i) => i.classIds);

  const trackStudents = classStudents
    .filter((s) => trackClassIds.includes(s.classId))
    .map((s) => {
      const group = instructorClasses.find((g) => g.id === s.classId);
      const instructor = instructors.find((i) =>
        i.classIds.includes(s.classId)
      );

      return {
        ...s,
        groupName: group?.group || "Unknown Group",
        instructorName: instructor?.name || "Unknown Instructor",
      };
    });

  const averageProgress = getAverage(trackStudents.map((s) => s.progress));

  // 🔥 instructor cards stats
  const instructorCards = instructors.map((i) => {
    const students = classStudents.filter((s) =>
      i.classIds.includes(s.classId)
    );

    const groups = instructorClasses.filter((g) =>
      i.classIds.includes(g.id)
    );

    return {
      ...i,
      studentsCount: students.length,
      groupsCount: groups.length,
      progress: getAverage(students.map((s) => s.progress)),
    };
  });

  const filteredInstructors = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return instructorCards.filter((i) => {
      const groupsText = i.classIds
        .map((id) => instructorClasses.find((g) => g.id === id))
        .filter(Boolean)
        .map((g) => `${g!.group} ${g!.title}`)
        .join(" ")
        .toLowerCase();

      return (
        i.name.toLowerCase().includes(search) ||
        i.email.toLowerCase().includes(search) ||
        groupsText.includes(search)
      );
    });
  }, [instructorCards, searchTerm]);

  const filteredStudents = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return trackStudents.filter((s) => {
      const status = getStudentStatus(s.progress);

      const matchSearch =
        s.name.toLowerCase().includes(search) ||
        s.email.toLowerCase().includes(search) ||
        s.groupName.toLowerCase().includes(search) ||
        s.instructorName.toLowerCase().includes(search);

      const matchStatus =
        selectedStatus === "All" || status === selectedStatus;

      return matchSearch && matchStatus;
    });
  }, [trackStudents, searchTerm, selectedStatus]);

  if (!track) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">Track not found</h1>
        <Link to="/manager/tracks" className="text-cyan-300 mt-4 block">
          <ArrowLeft size={17} /> Back
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl">

        {/* BACK */}
        <Link
          to="/manager/tracks"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to tracks
        </Link>

        {/* HEADER */}
        <div className="overflow-hidden rounded-[30px] border border-cyan-300/25 bg-white/4 shadow-2xl">
          <div className="relative h-72">
            <img src={track.image} alt={track.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b0f10]/90 via-[#0b0f10]/40" />

            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-cyan-300/15 px-4 py-2 text-xs font-bold text-cyan-200">
                {track.level}
              </span>

              <h1 className="mt-3 text-4xl font-bold">{track.title}</h1>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-3 gap-4 p-6">
            <InfoCard icon={Users} label="Instructors" value={instructors.length} />
            <InfoCard icon={BookOpen} label="Students" value={trackStudents.length} />
            <InfoCard icon={TrendingUp} label="Avg Progress" value={`${averageProgress}%`} />
          </div>
        </div>

        {/* TABS */}
        <div className="mt-8 rounded-[28px] border border-cyan-300/25 bg-white/4 p-6">

          {/* tabs */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setActiveTab("instructors")}
              className={`px-4 py-2 rounded-xl font-bold ${
                activeTab === "instructors"
                  ? "bg-cyan-300 text-black"
                  : "text-white/50"
              }`}
            >
              Instructors
            </button>

            <button
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 rounded-xl font-bold ${
                activeTab === "students"
                  ? "bg-cyan-300 text-black"
                  : "text-white/50"
              }`}
            >
              Students
            </button>
          </div>

          {/* SEARCH */}
          <div className="mt-6 flex">
            <div className="flex w-full items-center gap-2 rounded-xl bg-black/30 px-3">
              <Search size={18} className="text-white/40" />
              <input
                className="w-full bg-transparent py-2 outline-none"
                placeholder={
                  activeTab === "instructors"
                    ? "Search instructors, emails, groups..."
                    : "Search students, instructor, group..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {activeTab === "students" && (
              <select
                aria-label="Filter by student status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as Status)}
                className="rounded-xl bg-black px-3"
              >
                <option value="All">All</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Needs Attention">Needs Attention</option>
              </select>
            )}
          </div>

          {/* INSTRUCTORS */}
          {activeTab === "instructors" && (
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {filteredInstructors.length === 0 ? (
                <EmptyState title="No instructors found" description="" />
              ) : (
                filteredInstructors.map((i) => (
                  <Link
                    key={i.id}
                    to={`/manager/instructors/${i.id}`}
                    className="group rounded-[26px] border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50"
                  >
                    <div>
                      <p className="text-xl font-bold">{i.name}</p>
                      <p className="text-xs text-white/50">{i.email}</p>
                    </div>

                    {/* stats */}
                    <div className="mt-5 grid grid-cols-3 text-center text-xs text-white/60">
                      <div>
                        <p className="font-bold text-white">{i.studentsCount}</p>
                        Students
                      </div>
                      <div>
                        <p className="font-bold text-white">{i.groupsCount}</p>
                        Groups
                      </div>
                      <div>
                        <p className="font-bold text-cyan-300">{i.progress}%</p>
                        Progress
                      </div>
                    </div>
                      {/* PROGRESS BAR */}
      <div className="mt-10 h-2 w-full rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
          style={{ width: `${i.progress}%` }}
        />
      </div>
              
                  </Link>
                ))
              )}
            </div>
          )}

          {/* STUDENTS (UPDATED - STATUS ONLY) */}
          {activeTab === "students" && (
            <div className="mt-6 space-y-3">
              {filteredStudents.length === 0 ? (
                <EmptyState title="No students found" description="" />
              ) : (
                filteredStudents.map((s) => {
                  const status = getStudentStatus(s.progress);

                  return (
                    <Link
                      key={s.id}
                      to={`/instructor/classes/${s.classId}/student/${s.id}`}
                      className="flex items-center justify-between rounded-xl bg-black/30 p-4 hover:border hover:border-cyan-300/40 transition"
                    >
                      <div>
                        <p className="font-bold">{s.name}</p>
                        <p className="text-xs text-white/50 mt-5">
                         📚 {s.groupName} 
                          👨‍🏫  {s.instructorName}

                        </p>
                      </div>

                      {/* 🔥 بدل progress رقم → Status Badge */}
                      <StatusBadge status={status} />
                    </Link>
                  );
                })
              )}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}