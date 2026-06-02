import { useMemo } from "react";
import { allCourses, studentEnrollments,currentUser } from "../data";

export function useCourses() {
  const enrolledCourses = useMemo(() => {
    const myEnrollments = studentEnrollments.filter(
      (e) => e.studentId === currentUser.id
    );

    return allCourses.filter((course) =>
      myEnrollments.some((e) => e.classId === course.id)
    );
  }, []);

  return {
    courses: allCourses,
    enrolledCourses,
  };
}