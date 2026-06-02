
import { classStudents,allCourses ,instructorUser ,instructorClasses} from "../../data";

function getAverage(numbers: number[]) {
  if (!numbers.length) return 0;
  return Math.round(numbers.reduce((sum, n) => sum + n, 0) / numbers.length);
}

export default function ManagerCourses() {
  const courses = allCourses.map((course) => {
    const relatedClasses = instructorClasses.filter((classItem) =>
      classItem.title.toLowerCase().includes(course.title.toLowerCase())
    );

    const relatedStudents = relatedClasses.flatMap((classItem) =>
      classStudents.filter((student) => student.classId === classItem.id)
    );

    return {
      ...course,
      classes: relatedClasses.length,
      students: relatedStudents.length,
      progress: getAverage(relatedStudents.map((s) => s.progress)),
      instructor: instructorUser.name,
    };
  });

  return (
    <main className="min-h-screen bg-[#0b0f10] px-8 py-8 text-white">
      <h1 className="text-4xl font-bold">Courses</h1>
      <p className="mt-2 text-white/50">Manage and monitor academy courses.</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-6 shadow-2xl">
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <p className="mt-2 text-sm text-white/50">{course.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MiniStat label="Classes" value={course.classes} />
              <MiniStat label="Students" value={course.students} />
              <MiniStat label="Progress" value={`${course.progress}%`} />
            </div>

            <p className="mt-4 text-sm text-white/45">
              Instructor: <span className="text-cyan-300">{course.instructor}</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

function MiniStat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">
      <p className="text-xs text-white/45">{label}</p>
      <h3 className="mt-1 text-xl font-bold">{value}</h3>
    </div>
  );
}