type HealthLineProps = {
  label: string;
  value: string | number;
};

export default function HealthLine({
  label,
  value,
}: HealthLineProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-black/25 p-4">
      <span className="text-sm text-white/50">
        {label}
      </span>

      <span className="font-bold text-cyan-300">
        {value}
      </span>
    </div>
  );
}