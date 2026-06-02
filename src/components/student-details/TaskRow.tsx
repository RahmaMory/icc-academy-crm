type TaskRowProps = {
  title: string;
  status: "Submitted" | "Pending" | "Missing";
};

function TaskRow({
  title,
  status,
}: TaskRowProps) {
  const statusClass =
    status === "Submitted"
      ? "bg-emerald-400/10 text-emerald-300"
      : status === "Pending"
      ? "bg-yellow-400/10 text-yellow-300"
      : "bg-red-400/10 text-red-300";

  return (
    <div className="flex items-center justify-between rounded-2xl bg-black/25 p-4">
      <p className="font-semibold">{title}</p>

      <span
        className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass}`}
      >
        {status}
      </span>
    </div>
  );
}

export default TaskRow;