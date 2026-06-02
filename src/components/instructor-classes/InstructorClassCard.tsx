import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  MapPin,
  Users,
} from "lucide-react";

import MiniInfo from "./MiniInfo";
import ClassProgress from "./ClassProgress";

interface ClassItem {
  id: string;
  image: string;
  title: string;
  group: string;
  branch?: string;
  session?: string;
  progress: number;
}

interface NextSession {
  date: string;
  time: string;
}

type Props = {
  classItem: ClassItem;
  studentsCount: number;
  nextSession?: NextSession;
};

export default function InstructorClassCard({
  classItem,
  studentsCount,
  nextSession,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${classItem.id}`}
      className="group overflow-hidden rounded-[28px] border border-cyan-300/25 bg-white/4 shadow-2xl transition hover:-translate-y-1 hover:border-cyan-300/50"
    >
      {/* IMAGE */}
      <img
        src={classItem.image}
        alt={classItem.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{classItem.title}</h2>
            <p className="mt-2 text-sm text-white/45">
              {classItem.group}
            </p>
          </div>

          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-300">
            Room
          </span>
        </div>

        {/* INFO GRID */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <MiniInfo
            icon={Users}
            label={`${studentsCount} students`}
          />

          <MiniInfo
            icon={MapPin}
            label={classItem.branch || "Unknown branch"}
          />

          <MiniInfo
            icon={BookOpen}
            label={classItem.session || "No schedule"}
          />

          <MiniInfo
            icon={CalendarClock}
            label={
              nextSession
                ? `${nextSession.date} • ${nextSession.time}`
                : "No upcoming session"
            }
          />
        </div>

        {/* PROGRESS */}
        <ClassProgress progress={classItem.progress} />

        {/* BUTTON */}
        <div className="mt-6 flex justify-end">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-5 py-3 text-sm font-bold text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#0b0f10]">
            Enter Room
            <ArrowRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}