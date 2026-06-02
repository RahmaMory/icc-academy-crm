import {
  classRoomSessions,
  classStudents,
  instructorClasses,
  trackInstructors
} from "../../data";

const CURRENT_INSTRUCTOR_ID = 1;

export function getInstructorClasses() {
  const instructor = trackInstructors.find(
    (item) => item.id === CURRENT_INSTRUCTOR_ID
  );

  const instructorClassIds = instructor?.classIds || [];

  const myClasses = instructorClasses.map((classItem) => {
    const studentsCount = classStudents.filter(
      (student) => student.classId === classItem.id
    ).length;

    const nextSession = classRoomSessions.find(
      (session) =>
        session.classId === classItem.id &&
        session.status === "Upcoming"
    );

    return {
      ...classItem,
      studentsCount,
      nextSession,
    };
  }).filter((classItem) =>
    instructorClassIds.includes(classItem.id)
  );

  return myClasses;
}