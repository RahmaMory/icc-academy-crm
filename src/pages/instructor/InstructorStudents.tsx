
import { useMemo, useState } from "react";

import {
  classStudents,
  trackInstructors,
  instructorClasses,
  type Status,
} from "../../data";

import StudentFilters from "../../components/students/StudentFilters";
import StudentTableRow from "../../components/students/StudentTableRow";
import EmptyState from "../../components/shared/EmptyState";


const CURRENT_INSTRUCTOR_ID = 1;

function getStudentStatus(progress: number) {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}

function getStatusClass(status: string) {
  if (status === "Good") {
    return "bg-emerald-400/10 text-emerald-300";
  }

  if (status === "Average") {
    return "bg-yellow-400/10 text-yellow-300";
  }

  return "bg-red-400/10 text-red-300";
}

export default function InstructorStudents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<Status>("All");

  const currentInstructor = trackInstructors.find(
    (item) => item.id === CURRENT_INSTRUCTOR_ID
  );

  const instructorClassIds =
    currentInstructor?.classIds || [];

  const studentsWithClass = classStudents
    .filter((student) =>
      instructorClassIds.includes(student.classId)
    )
    .map((student) => {
      const classItem = instructorClasses.find(
        (item) => item.id === student.classId
      );

      return {
        ...student,
        id: String(student.id),
        classTitle:
          classItem?.title || "Unknown Class",

        group:
          classItem?.group || "Unknown Group",

        branch:
          classItem?.branch || "Unknown Branch",

        session:
          classItem?.session || "Unknown Session",
      };
    });

  const filteredStudents = useMemo(() => {
    return studentsWithClass.filter((student) => {
      const status = getStudentStatus(
        student.progress
      );

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search) ||
        student.email
          .toLowerCase()
          .includes(search) ||
        student.classTitle
          .toLowerCase()
          .includes(search) ||
        student.group
          .toLowerCase()
          .includes(search) ||
        student.branch
          .toLowerCase()
          .includes(search) ||
        student.session
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        selectedStatus === "All" ||
        selectedStatus === status;

      return matchesSearch && matchesStatus;
    });
  }, [
    studentsWithClass,
    searchTerm,
    selectedStatus,
  ]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">

      <section className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 pl-14 lg:pl-0">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Students
          </h1>

          <p className="mt-2 text-white/50">
            View students assigned to your
            classes.
          </p>
        </div>

        {/* FILTERS */}
        <StudentFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        {/* TABLE */}
        <div className="overflow-x-auto rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl">

          <table className="w-full min-w-287.5 border-separate border-spacing-y-3">

            <thead>
              <tr className="text-left text-sm text-white/45">

                <th className="px-4 py-2">
                  Student
                </th>

                <th className="px-4 py-2">
                  Class
                </th>

                <th className="px-4 py-2">
                  Group
                </th>

                <th className="px-4 py-2">
                  Branch
                </th>

                <th className="px-4 py-2">
                  Session
                </th>

                <th className="px-4 py-2">
                  Progress
                </th>

                <th className="px-4 py-2">
                  Attendance
                </th>

                <th className="px-4 py-2">
                  Status
                </th>

                <th className="px-4 py-2">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => {
                const status =
                  getStudentStatus(
                    student.progress
                  );

                return (
                  <StudentTableRow
                    key={student.id}
                    student={student}
                    status={status}
                    getStatusClass={
                      getStatusClass
                    }
                  />
                );
              })}
            </tbody>
          </table>

          {/* EMPTY STATE */}
          {filteredStudents.length === 0 && (
            <EmptyState
              title="No students found"
              description="Try another search or filter."
            />
          )}
        </div>
      </section>
    </main>
  );
}