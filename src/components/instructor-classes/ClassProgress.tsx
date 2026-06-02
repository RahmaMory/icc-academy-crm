type Props = {
  progress: number;
};

export default function ClassProgress({
  progress,
}: Props) {
  return (
    <div className="mt-5">
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/45">
          Class Progress
        </span>

        <span className="font-bold text-cyan-300">
          {progress}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}