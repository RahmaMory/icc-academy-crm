import { useMemo } from "react";
import { classStudents } from "../data";

export function useStudents(classId?: number) {
  const students = useMemo(() => {
    if (!classId) return classStudents;

    return classStudents.filter(
      (student) => student.classId === classId
    );
  }, [classId]);

  return {
    students,
    total: students.length,
  };
}