import { StatusBadge } from "./StatusBadge";

type Session = {
  id: number;
  title: string;
  group: string;
  date: string;
  prepared: boolean;
  attended: boolean;
};

type Props = {
  session: Session;
  onPrepare: (id: number) => void;
};

export default function SessionCard({ session, onPrepare }: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">

      {/* Title */}
      <h3 className="font-bold text-white">
        {session.title}
      </h3>

      {/* Meta */}
      <p className="mt-1 text-xs text-white/45">
        {session.group} • {session.date}
      </p>

      {/* Status */}
      <div className="mt-3 flex flex-wrap items-center gap-2">

        <StatusBadge
          status={
            session.prepared
              ? "Prepared"
              : "Not Prepared"
          }
          
        />

        <StatusBadge
          status={
            session.attended
              ? "Attended"
              : "Not Attended"
          }
        />

      
        {/* Action */}
        {!session.prepared && (
          <button
            onClick={() => onPrepare(session.id)}
            className="ml-auto rounded-full border border-cyan-300 px-3 py-1 text-xs text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
          >
            Mark Prepared
          </button>
        )}

      </div>
    </div>
  );
}