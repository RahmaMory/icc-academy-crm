type WeakPoint = {
  title: string;
  status: string;
  type: string;
  note: string;
};

type WeakPointsCardProps = {
  weakPoints?: WeakPoint[];
};

export default function WeakPointsCard({
  weakPoints = [],
}: WeakPointsCardProps) {
  if (!weakPoints.length) return null;

  return (
    <div className="rounded-[28px] border border-red-400/25 bg-red-400/4 p-6 shadow-2xl">
      <h2 className="mb-5 text-xl font-bold text-red-200">
        Attention Needed
      </h2>

      <div className="space-y-4">
        {weakPoints.map((point, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-black/25 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white">
                {point.title}
              </h3>

              <span className="rounded-full bg-red-400/10 px-3 py-1 text-xs font-bold text-red-300">
                {point.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-cyan-300">
              {point.type}
            </p>

            <p className="mt-3 text-sm leading-6 text-white/55">
              {point.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}