type Session = {
  id: number;
  title: string;
  date: string;
  time: string;
  status: string;
  agenda: string;
};

type Props = {
  sessions: Session[];
};

export default function ClassroomSessions({
  sessions,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-6">
      
      <h2 className="mb-5 text-2xl font-bold text-white">
        Sessions
      </h2>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="rounded-2xl border border-white/10 bg-black/20 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              
              <h3 className="font-semibold text-white">
                {session.title}
              </h3>

              <span className="text-sm text-cyan-300">
                {session.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-white/45">
              {session.date} • {session.time}
            </p>

            <p className="mt-4 text-sm leading-6 text-white/70">
              {session.agenda}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}