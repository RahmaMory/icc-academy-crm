import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

type Props = {
  course: {
    id: number;
    courseId: number;
    title: string;
    image: string;
    progress: number;
    instructor: string;
    level?: string;
    duration?: string;
    steps?: number;
    group: string;
    branch: string;
  };
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.05]">
      <div className="flex flex-col gap-6 lg:flex-row">
        <img
          src={course.image}
          alt={course.title}
          className="h-40 w-full rounded-2xl object-cover lg:w-60"
        />

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold capitalize">
                {course.title}
              </h2>

              <p className="mt-3 text-sm text-white/50">
                Instructor: {course.instructor}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-white/45">
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {course.duration || "—"}
                </span>

                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  {course.steps} steps
                </span>

                <span>{course.group}</span>
                <span>{course.branch}</span>
              </div>
            </div>

            {course.level && (
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
                {course.level}
              </span>
            )}
          </div>

          {/* progress */}
          <div className="mt-7">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white/45">Progress</span>

              <span className="font-bold text-cyan-300">
                {course.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              to={`/student/classroom/${course.courseId}`}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-6 py-3 font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
            >
              Continue
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}