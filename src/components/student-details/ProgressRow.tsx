function ProgressRow({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-semibold">
          {title}
        </span>

        <span className="font-bold text-cyan-300">
          {value}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressRow;