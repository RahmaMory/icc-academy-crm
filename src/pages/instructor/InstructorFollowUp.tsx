
import { useMemo, useState } from "react";
import {
  classStudents,
  instructorClasses,
} from "../../data";
import FollowUpFilters from "../../components/instructor-followUP/FollowUpFilters";
import StudentFollowUpCard from "../../components/instructor-followUP/StudentFollowUpCard";

export default function InstructorFollowUp() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [group, setGroup] = useState("all");

  const instructorId = 1;

  const myClasses = useMemo(
    () =>
      instructorClasses.filter(
        (c) => c.instructorId === instructorId
      ),
    []
  );

  const instructorClassIds = useMemo(
    () => myClasses.map((c) => c.id),
    [myClasses]
  );

  const groups = useMemo(
    () => Array.from(new Set(myClasses.map((c) => c.group))),
    [myClasses]
  );

  const students = useMemo(() => {
    let data = classStudents
      .filter((s) =>
        instructorClassIds.includes(s.classId)
      )
      .map((student) => {
        const classItem = instructorClasses.find(
          (c) => c.id === student.classId
        );

        return {
          ...student,
          course: classItem?.title || "Unknown",
          group: classItem?.group || "Unknown",
          weakPointsCount: student.weakPoints?.length || 0,
        };
      });

    if (search) {
      data = data.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (group !== "all") {
      data = data.filter((s) => s.group === group);
    }

    switch (filter) {
      case "critical":
        data = data.filter((s) => s.priority === "High");
        break;
      case "top":
        data = data.filter((s) => s.progress >= 75);
        break;
      case "low":
        data = data.filter((s) => s.progress < 50);
        break;
      case "attendance":
        data = data.filter((s) => s.attendance < 70);
        break;
    }

    return data;
  }, [search, filter, group, instructorClassIds]);

  return (
    <div className="min-h-screen bg-[#0b0f10] px-6 py-8 text-white">

      {/* HEADER + FILTERS */}
      <FollowUpFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        group={group}
        setGroup={setGroup}
        groups={groups}
      />

      {/* STUDENTS */}
      <div className="grid gap-5 xl:grid-cols-2">
        {students.map((student) => (
          <StudentFollowUpCard
            key={student.id}
            student={{
              ...student,
              id: student.id.toString(),
              classId: student.classId.toString(),
              priority: student.priority === "Normal" ? "Medium" : student.priority,
            }}
          />
        ))}
      </div>

    </div>
  );
}