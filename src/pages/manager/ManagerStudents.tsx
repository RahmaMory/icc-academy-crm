
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

import {
  classStudents,
  managerTracks,
  trackInstructors,
  instructorClasses,
} from "../../data";
import { StatusBadge } from "../../components/shared/StatusBadge";



type Status = "All" | "Good" | "Average" | "Needs Attention";

function getStudentStatus(progress: number): Exclude<Status, "All"> {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}
export default function ManagerStudents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<Status>("All");

 const students = useMemo(() => {
  return classStudents.map((student) => {
    const classItem = instructorClasses.find(
      (item) => item.id === student.classId
    );

    const instructor = trackInstructors.find((item) =>
      item.classIds.includes(student.classId)
    );

    const track = managerTracks.find(
      (item) => item.id === instructor?.trackId
    );

    return {
      ...student,
      classTitle: classItem?.title || "Unknown Class",
      group: classItem?.group || "Unknown Group",
      instructorName: instructor?.name || "Unknown Instructor",
      trackName: track?.title || "Unknown Track",
    };
  });
}, []);
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const status = getStudentStatus(student.progress);
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(search) ||
        student.email.toLowerCase().includes(search) ||
        student.classTitle.toLowerCase().includes(search) ||
        student.group.toLowerCase().includes(search) ||
        student.instructorName.toLowerCase().includes(search) ||
        student.trackName.toLowerCase().includes(search) ||
        student.enrolledCourses.join(" ").toLowerCase().includes(search);

      const matchesStatus =
        selectedStatus === "All" || status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [students, searchTerm, selectedStatus]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 pl-14 lg:pl-0">
          <h1 className="text-3xl font-bold sm:text-4xl">Students</h1>
          <p className="mt-2 text-white/50">
            Monitor all students across the academy.
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 sm:max-w-lg">
            <Search size={18} className="text-white/35" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search student, track, instructor, group..."
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as Status)}
            className="rounded-2xl border border-white/10 bg-[#151817] px-4 py-3 outline-none"
            aria-label="Filter by student status"
          >
            <option value="All">All Status</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Needs Attention">Needs Attention</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl">
          <table className="w-full min-w-287.5 border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-white/45">
                <th className="px-4 py-2">Student</th>
                <th className="px-4 py-2">Track</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Group</th>
                <th className="px-4 py-2">Enrolled Courses</th>
                <th className="px-4 py-2">Instructor</th>
                <th className="px-4 py-2">Progress</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-white/40">
                    No students found
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const status = getStudentStatus(student.progress);

                  return (
                    <tr key={student.id} className="bg-black/25">
                      <td className="rounded-l-2xl px-4 py-4">
                        <p className="font-bold">{student.name}</p>
                        <p className="mt-1 text-xs text-white/45">
                          {student.email}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-300">
                          {student.trackName}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-white/70">
                        {student.classTitle}
                      </td>

                      <td className="px-4 py-4 text-white/70">
                        {student.group}
                      </td>

                      <td className="px-4 py-4 text-sm text-white/70">
                        {student.enrolledCourses.join(", ")}
                      </td>

                      <td className="px-4 py-4 text-white/70">
                        {student.instructorName}
                      </td>

                      <td className="px-4 py-4 font-bold text-cyan-300">
                        {student.progress}%
                      </td>

                      <td className="px-4 py-4">
                      <StatusBadge status={status} />

</td>

                      <td className="rounded-r-2xl px-4 py-4">
                        <Link
                          to={`/instructor/classes/${student.classId}/student/${student.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
                        >
                          View
                          <ArrowRight size={15} />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}