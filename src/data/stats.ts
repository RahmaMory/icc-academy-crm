import { studentEnrollments } from "./enrollments";
import { currentUser } from "./users";
export const dashboardStats = (() => {
  const studentCourses = studentEnrollments.filter(
    (enrollment) => enrollment.studentId === currentUser.id
  );

  const enrolledCourses = studentCourses.length;

  const completedSteps = studentCourses.reduce(
    (total, course) => total + course.completedSteps,
    0
  );

  const averageProgress =
    studentCourses.length > 0
      ? Math.round(
          studentCourses.reduce(
            (total, course) => total + course.progress,
            0
          ) / studentCourses.length
        )
      : 0;

  return {
    enrolledCourses,
    completedSteps,
    averageProgress,
  };
})();

export const instructorStats = {
  activeClasses: 4,
  totalStudents: 132,
  averageProgress: 74,
};

export const managerRecentActivity = [
  {
    id: 1,
    title: "New student enrolled",
    desc: "A new student joined Frontend Development.",
    time: "Today",
  },
  {
    id: 2,
    title: "Class progress updated",
    desc: "React Advanced reached 64% average progress.",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Follow-up required",
    desc: "Some students are currently below expected progress.",
    time: "2 days ago",
  },
];

