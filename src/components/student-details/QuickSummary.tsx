import SummaryLine from "../shared/SummaryLine";

type PriorityStyles = {
  [key: string]: string;
};

type QuickSummaryCardProps = {
  status: string;
  recommendedAction: string;
  priority: string;
  priorityStyles: PriorityStyles;
};

export default function QuickSummaryCard({
  status,
  recommendedAction,
  priority,
  priorityStyles,
}: QuickSummaryCardProps) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-6 shadow-2xl">
      <h2 className="text-xl font-bold">
        Quick Summary
      </h2>

      <div className="mt-5 space-y-4 text-sm">
        <SummaryLine
          label="Current status"
          value={status}
        />

        <SummaryLine
          label="Recommended action"
          value={recommendedAction}
        />

        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-white/45">
            Priority
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              priorityStyles[priority]
            }`}
          >
            {priority}
          </span>
        </div>
      </div>
    </div>
  );
}