import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Track = {
  id: number;
  title: string;
  level: string;
  groupsCount: number;
  instructorsCount: number;
  studentsCount: number;
  averageProgress: number;
};

type Props = {
  track: Track;
};

export default function TrackOverviewCard({ track }: Props) {
  return (
    <Link
      to={`/manager/tracks/${track.id}`}
      className="block rounded-2xl bg-black/25 p-5 transition hover:-translate-y-1 hover:bg-black/40 hover:ring-1 hover:ring-cyan-300/30"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">{track.title}</h3>

          <p className="mt-1 text-sm text-white/45">
            {track.groupsCount} groups • {track.instructorsCount} instructors •{" "}
            {track.studentsCount} students
          </p>
        </div>

        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-300">
          {track.level}
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-white/45">Progress</span>
          <span className="font-bold text-cyan-300">
            {track.averageProgress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-300"
            style={{ width: `${track.averageProgress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end text-cyan-300">
        <ArrowRight size={16} />
      </div>
    </Link>
  );
}