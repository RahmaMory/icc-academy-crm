type Props = {
  status: "Active" | "Draft";
};

export default function TrackStatusBadge({ status }: Props) {
  const styles = {
    Active: "bg-emerald-500/20 text-emerald-300",
    Draft: "bg-yellow-500/20 text-yellow-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}