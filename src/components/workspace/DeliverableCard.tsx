import { StatusBadge } from "../shared/StatusBadge";

type Props = {
  deliverable: {
    id: number;
    title: string;
    group: string;
    deadline?: string;
    status: string;
  };

  onReview: (id: number) => void;
};

export default function DeliverableCard({
  deliverable,
  onReview,
}: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">

      <h3 className="font-bold">
        {deliverable.title}
      </h3>

      <p className="mt-1 text-xs text-white/45">
        {deliverable.group}
        {deliverable.deadline &&
          ` • Deadline: ${deliverable.deadline}`}
      </p>

      <div className="mt-3 flex items-center justify-between">

        <StatusBadge status={deliverable.status} />

        {deliverable.status !== "Reviewed" && (
          <button
            onClick={() => onReview(deliverable.id)}
            className="rounded-full border border-cyan-300 px-3 py-1 text-xs text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
          >
            Mark Reviewed
          </button>
        )}

      </div>

    </div>
  );
}