interface Course {
  image: string;
  title: string;
  level?: string;
  description: string;
}

type Props = {
  course: Course;
};

export default function CourseHeader({ course }: Props) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-cyan-300/25 bg-white/4">
      <div className="relative h-72">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f10] via-[#0b0f10]/40 to-transparent" />

        <div className="absolute bottom-8 left-8">
          {course.level && (
            <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-bold text-cyan-200">
              {course.level}
            </span>
          )}

          <h1 className="mt-4 text-5xl font-bold capitalize">
            {course.title}
          </h1>

          <p className="mt-3 max-w-2xl text-white/60">
            {course.description}
          </p>
        </div>
      </div>
    </div>
  );
}