type Session = {
  session: string;
  topic: string;
attendance: "Present" | "Absent" | "Late";
  score: number;
  progress: number;
  taskStatus: "Submitted" | "Pending" | "Missing";
  instructorNote: string;
};

type Props = {
  sessions?: Session[];
};

export default function SessionHistory({
  sessions,
}: Props) {

  if (!sessions?.length) return null;

  return (
    <div className="rounded-[28px] border border-violet-400/25 bg-violet-400/4 p-6 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-violet-200">
            Student Session History
          </h2>

          <p className="mt-2 text-sm text-white/45">
            Instructor-only detailed performance tracking
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-80 border-separate border-spacing-y-3">

          <thead>
            <tr className="text-left text-sm text-white/45">
              <th className="px-4 py-2">
                Session
              </th>

              <th className="px-4 py-2">
                Topic
              </th>

              <th className="px-4 py-2">
                Attendance
              </th>

              <th className="px-4 py-2">
                Score
              </th>

              <th className="px-4 py-2">
                Progress
              </th>

              <th className="px-4 py-2">
                Task
              </th>

              <th className="px-4 py-2">
                Instructor Note
              </th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((session, index) => {

              const scoreClass =
                session.score >= 70
                  ? "text-emerald-300"
                  : session.score >= 40
                  ? "text-yellow-300"
                  : "text-red-300";

              return (
                <tr
                  key={index}
                  className="bg-black/25"
                >
                  <td className="rounded-l-2xl px-4 py-4 font-semibold">
                    {session.session}
                  </td>

                  <td className="px-4 py-4 text-sm text-cyan-300">
                    {session.topic}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        session.attendance === "Present"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-red-400/10 text-red-300"
                      }`}
                    >
                      {session.attendance}
                    </span>
                  </td>

                  <td
                    className={`px-4 py-4 font-bold ${scoreClass}`}
                  >
                    {session.score}%
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">

                      <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full rounded-full bg-linear-to-r from-violet-400 to-cyan-300"
                          style={{
                            width: `${session.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-sm text-white/70">
                        {session.progress}%
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        session.taskStatus === "Submitted"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : session.taskStatus === "Pending"
                          ? "bg-yellow-400/10 text-yellow-300"
                          : "bg-red-400/10 text-red-300"
                      }`}
                    >
                      {session.taskStatus}
                    </span>
                  </td>

                  <td className="rounded-r-2xl px-4 py-4 text-sm text-white/55">
                    {session.instructorNote}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ANALYSIS */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">

        <h3 className="text-lg font-bold text-cyan-300">
          Instructor Analysis
        </h3>

        <div className="mt-4 space-y-3 text-sm text-white/70">

          <p>
            • Student performance trend can be tracked across all sessions.
          </p>

          <p>
            • Weak areas become easier to identify based on low scores and missing tasks.
          </p>

          <p>
            • Attendance impact can be monitored directly with progress decline.
          </p>

          <p>
            • Helps instructors decide intervention plans and follow-up actions.
          </p>
        </div>
      </div>
    </div>
  );
}