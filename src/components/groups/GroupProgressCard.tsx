type Props = {
  group: string;
  title: string;
  studentsCount: number;
  progress: number;
};

export default function GroupProgressCard({
  group,
  title,
  studentsCount,
  progress,
}: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold">
            {group}
          </h3>

          <p className="mt-1 text-sm text-white/45">
            {title}
          </p>
        </div>

        <div className="text-sm text-white/60">
          {studentsCount} students
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-white/45">
            Group Progress
          </span>

          <span className="font-bold text-cyan-300">
            {progress}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}