type PerformanceAlert = {
  title: string;
  type: string;
  status: string;
  impact: string;
  instructorAction: string;
  score?: string | number;
  date?: string;
};

type PerformanceAlertsCardProps = {
  performanceAlerts?: PerformanceAlert[];
};

export default function PerformanceAlertsCard({
  performanceAlerts = [],
}: PerformanceAlertsCardProps) {
  if (!performanceAlerts.length) return null;

  return (
    <div className="rounded-[28px] border border-yellow-400/25 bg-yellow-400/4 p-6 shadow-2xl">
      <h2 className="mb-5 text-xl font-bold text-yellow-200">
        Performance Alerts
      </h2>
      <div className="space-y-4">
        {performanceAlerts.map((alert, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-black/25 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white">
                  {alert.title}
                </h3>

                <p className="mt-1 text-sm text-yellow-300">
                  {alert.type}
                </p>
              </div>

              <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
                {alert.status}
              </span>
            </div>

            {alert.score && (
              <p className="mt-3 text-sm text-cyan-300">
                Score: {alert.score}
              </p>
            )}

            {alert.date && (
              <p className="mt-2 text-sm text-white/45">
                Date: {alert.date}
              </p>
            )}

            <div className="mt-4 rounded-xl bg-white/5 p-3">
              <p className="text-sm text-white/70">
                <span className="font-bold text-yellow-200">
                  Impact:
                </span>{" "}
                {alert.impact}
              </p>

              <p className="mt-2 text-sm text-white/70">
                <span className="font-bold text-cyan-300">
                  Instructor Action:
                </span>{" "}
                {alert.instructorAction}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}