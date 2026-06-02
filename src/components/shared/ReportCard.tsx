type Props = {
  icon: React.ElementType;
  label: string;
  value: string | number;
  warning?: boolean;
};

export default function ReportCard({
  icon: Icon,
  label,
  value,
  warning = false,
}: Props) {
  return (
    <div
      className={`p-5 rounded-2xl border transition cursor-pointer
      ${
        warning
          ? "bg-white/5 border-orange-400/30 hover:border-orange-300/50"
          : "bg-white/5 border-white/10 hover:border-cyan-300/40"
      }`}
    >
      <Icon
        className={`mb-2 ${
          warning ? "text-orange-300" : "text-cyan-300"
        }`}
        size={18}
      />

      <p className="text-lg font-bold">{value}</p>

      <p className="text-xs text-white/50">{label}</p>
    </div>
  );
}




