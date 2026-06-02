import type { StudentEnrollment } from "./sharedTypes";

export const studentEnrollments: StudentEnrollment[] = [
  {
    studentId: 1,
    classId: 1,
    progress: 78,
    completedSteps: 11,
  },

  {
    studentId: 1,
    classId: 3,
    progress: 54,
    completedSteps: 8,
  },

  {
    studentId: 1,
    classId: 2,
    progress: 28,
    completedSteps: 5,
  },

  // another student
  {
    studentId: 2,
    classId: 4,
    progress: 65,
    completedSteps: 7,
  },
];

