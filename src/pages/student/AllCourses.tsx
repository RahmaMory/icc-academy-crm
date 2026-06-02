import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { allCourses, type Course } from "../../data";

export default function AllCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-8 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-cyan-300">
              Academy Courses
            </p>
            <h1 className="mt-2 text-3xl font-bold">All Courses</h1>
            <p className="mt-2 text-sm text-white/50">
              Browse all available academy courses.
            </p>
          </div>

          <Link to="/student" className="text-sm font-semibold text-cyan-300">
            ← Back to dashboard
          </Link>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <select
          title="selcetedLevel"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#151817] px-4 py-3 outline-none"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4">
            <Search size={18} className="text-white/35" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses"
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/4 p-10 text-center">
            <h3 className="text-xl font-bold">No courses found</h3>
            <p className="mt-2 text-sm text-white/50">
              Try another search word or level.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/4 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="relative h-40 bg-white">
        {course.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-[#21134f] px-3 py-1 text-xs font-semibold text-white">
            New Content
          </span>
        )}

        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold capitalize">{course.title}</h3>

        {course.level && (
          <span className="mt-3 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {course.level}
          </span>
        )}

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/50">
          {course.description}
        </p>

        <div className="mt-5 flex justify-between text-xs text-white/50">
          <span>{course.duration || "—"}</span>
          <span>{course.steps} steps</span>
        </div>

        <Link
          to={`/student/courses/${course.id}`}
          className="mt-5 block w-full rounded-2xl bg-white/10 py-3 text-center text-sm font-semibold transition hover:bg-cyan-400 hover:text-[#050816]"
        >
          Open Course
        </Link>
      </div>
    </div>
  );
}