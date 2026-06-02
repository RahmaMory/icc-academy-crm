type ActivityCardProps = {
  activity: {
    id: string;
    title: string;
    desc: string;
    time: string;
  };
};

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-bold">
            {activity.title}
          </h4>

          <p className="mt-2 text-sm leading-6 text-white/50">
            {activity.desc}
          </p>
        </div>

        <p className="text-xs font-bold text-cyan-300">
          {activity.time}
        </p>
      </div>
    </div>
  );
}