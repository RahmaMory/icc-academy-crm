
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { classStudents, trackInstructors, instructorClasses } from "../../data";
import { getStudentStatus } from "../../utils/dashboard/utils";
import StudentRow from "../../components/manager/table/StudentRow";

type Status = "All" | "Good" | "Average" | "Needs Attention";

export default function ManagerInstructorStudents() {
  const { instructorId } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<Status>("All");

  const instructor = trackInstructors.find(
    (i) => i.id === Number(instructorId)
  );

  if (!instructor) return null;

  const students = classStudents
    .filter((s) => instructor.classIds.includes(s.classId))
    .map((s) => {
      const classItem = instructorClasses.find(
        (c) => c.id === s.classId
      );

      return {
        ...s,
        classTitle: classItem?.title || "",
        group: classItem?.group || "",
      };
    });

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const status = getStudentStatus(student.progress);

      const matchSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus =
        selectedStatus === "All" || status === selectedStatus;

      return matchSearch && matchStatus;
    });
  }, [students, searchTerm, selectedStatus]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl">

        <Link
          to={`/manager/instructors/${instructor.id}`}
          className="mb-6 inline-flex items-center gap-2 text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back
        </Link>

        {/* filters */}
        <div className="mb-6 flex gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-black/25 px-4">
            <Search size={16} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent py-3 outline-none"
              placeholder="Search..."
            />
          </div>

          <select
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value as Status)
            }
            className="rounded-2xl bg-black/25 px-4"
            aria-label="Filter students by status"
          >
            <option>All</option>
            <option>Good</option>
            <option>Average</option>
            <option>Needs Attention</option>
          </select>
        </div>

        {/* table */}
        <div className="overflow-x-auto rounded-[28px] bg-white/4 p-5">
          <table className="w-full min-w-237.5 border-spacing-y-3 border-separate">
            <thead>
              <tr className="text-left text-white/40">
                <th>Student</th>
                <th>Course</th>
                <th>Group</th>
                <th>Courses</th>
                <th>Progress</th>
                <th>Attendance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-10 text-center">
                    No students
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const status = getStudentStatus(student.progress);

                  return (
                    <StudentRow
                      key={student.id}
                      student={student}
                      status={status}
                    />
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