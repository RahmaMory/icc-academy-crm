import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MiniStat from "../../shared/MiniStat";

type Props = {
  track: {
    id: number;
    title: string;
    level: string;
    description: string;
    status: string;
    image: string;
    groupsCount: number;
    instructorsCount: number;
    studentsCount: number;
    averageProgress: number;
  };
};

export default function TrackCard({ track }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/4 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="relative h-40 bg-white">
        <span
          className={[
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white",
            track.status === "Active"
              ? "bg-emerald-600"
              : "bg-yellow-600",
          ].join(" ")}
        >
          {track.status}
        </span>

        <img
          src={track.image}
          alt={track.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold capitalize">
          {track.title}
        </h3>

        <span className="mt-3 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          {track.level}
        </span>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/50">
          {track.description}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <MiniStat label="Groups" value={track.groupsCount} />
          <MiniStat label="Inst." value={track.instructorsCount} />
          <MiniStat label="Students" value={track.studentsCount} />
        </div>

        <div className="mt-5">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-white/45">Progress</span>

            <span className="font-bold text-cyan-300">
              {track.averageProgress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-linear-to-r from-cyan-300 via-blue-500 to-violet-500"
              style={{
                width: `${track.averageProgress}%`,
              }}
            />
          </div>
        </div>

        <Link
          to={`/manager/tracks/${track.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 py-3 text-center text-sm font-semibold transition hover:bg-cyan-400 hover:text-[#050816]"
        >
          Open Track
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}