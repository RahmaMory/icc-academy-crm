import {
  classStudents,
  instructorNotifications,
  instructorClasses,
  trackInstructors,
} from "../../data";

const CURRENT_INSTRUCTOR_ID = 1;

export function getInstructorDashboardData() {
  const currentInstructor = trackInstructors.find(
    (item) => item.id === CURRENT_INSTRUCTOR_ID
  );

  const instructorClassIds =
    currentInstructor?.classIds || [];

  const myClasses = instructorClasses.filter(
    (classItem) =>
      instructorClassIds.includes(classItem.id)
  );

  const myStudents = classStudents.filter(
    (student) =>
      instructorClassIds.includes(student.classId)
  );

  const notifications =
    instructorNotifications.filter(
      (item) =>
        item.instructorId ===
        CURRENT_INSTRUCTOR_ID
    );

  const studentsToFollowUpRaw = myStudents
    .map((student) => {
      const classItem =
        instructorClasses.find(
          (c) => c.id === student.classId
        );

      const weakPointsCount =
        student.weakPoints?.length || 0;

      const alertsCount =
        student.performanceAlerts?.length || 0;

      let reason = "Needs improvement";

      if (student.attendance < 60) {
        reason = "Low attendance";
      }

      if (student.progress < 30) {
        reason = "Very low progress";
      }

      if (
        student.performanceAlerts?.some(
          (alert) =>
            alert.status === "Critical"
        )
      ) {
        reason =
          "Critical performance alerts";
      }

      return {
        ...student,
        course:
          classItem?.title || "Unknown",
        weakPointsCount,
        alertsCount,
        reason,
      };
    })
    .filter(
      (student) =>
        student.progress < 50 ||
        student.attendance < 70 ||
        student.weakPointsCount > 0 ||
        student.alertsCount > 0
    )
    .sort((a, b) => {
      if (
        a.priority === "High" &&
        b.priority !== "High"
      )
        return -1;

      if (
        a.priority !== "High" &&
        b.priority === "High"
      )
        return 1;

      return a.progress - b.progress;
    });

  return {
    myClasses,
    myStudents,
    notifications,
    studentsToFollowUpRaw,
  };
}