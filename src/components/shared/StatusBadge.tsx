
export function StatusBadge({ status }: { status: string }) {
  const style =
    status === "Uploaded" || status === "Reviewed"
      ? "bg-emerald-400/10 text-emerald-300"
      : status === "Needs Review" || status === "Pending Review"
      ? "bg-yellow-400/10 text-yellow-300"
      : "bg-red-400/10 text-red-300";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${style}`}>
      {status}
    </span>
  );
}