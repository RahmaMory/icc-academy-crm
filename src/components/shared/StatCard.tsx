type StatCardProps = {
  icon: React.ElementType;
  value: string | number;
  label: string;
  trend?: string; //  خليها optional
};

export default function StatCard({
  icon: Icon,
  value,
  label,
  trend,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-300/25 bg-white/4 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50">
      
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
          <Icon size={22} />
        </div>

        {trend && (
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
            {trend}
          </span>
        )}
      </div>

      <h3 className="mt-10 text-3xl font-bold">{value}</h3>

      <p className="mt-1 text-sm text-white/50">
        {label}
      </p>
    </div>
  );
}
