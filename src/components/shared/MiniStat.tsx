type Props = {
  label: string;
  value: string | number;
  className?: string;
};

export default function MiniStat({
  label,
  value,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-2xl bg-white/4 p-4 ${className}`}
    >
      <p className="text-xs text-white/45">
        {label}
      </p>

      <h4 className="mt-1 text-lg font-bold">
        {value}
      </h4>
    </div>
  );
}