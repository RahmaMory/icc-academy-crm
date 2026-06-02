import { classStudents, instructorClasses, managerTracks } from "../../data";

interface Instructor {
  trackId: string | number;
  classIds: (string | number)[];
}

function getAverage(numbers: number[]) {
  if (!numbers.length) return 0;
  return Math.round(numbers.reduce((sum, n) => sum + n, 0) / numbers.length);
}

export function getInstructorStats(instructor: Instructor) {
  const track = managerTracks.find((t) => t.id === instructor.trackId);

  const groups = instructorClasses.filter((g) =>
    instructor.classIds.includes(g.id)
  );

  const students = classStudents.filter((s) =>
    instructor.classIds.includes(s.classId)
  );

  return {
    trackName: track?.title || "Unknown Track",
    classes: groups.length,
    students: students.length,
    averageProgress: getAverage(students.map((s) => s.progress)),
  };
}