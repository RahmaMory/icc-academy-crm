import React from "react";

type Props = {
  icon: React.ElementType;
  label: string;
  value: string | number;
  hint: string;
  warning?: boolean;
};

export default function SummaryCard({
  icon: Icon,
  label,
  value,
  hint,
  warning = false,
}: Props) {
  return (
    <div
      className={`rounded-3xl border bg-white/4 p-6 shadow-xl transition hover:-translate-y-1 ${
        warning
          ? "border-orange-400/30 hover:border-orange-300/60"
          : "border-cyan-300/25 hover:border-cyan-300/60"
      }`}
    >
      <div
        className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${
          warning ? "bg-orange-400/10 text-orange-300" : "bg-cyan-300/10 text-cyan-300"
        }`}
      >
        <Icon size={22} />
      </div>

      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-1 text-sm text-white/50">{label}</p>
      <p className="mt-3 text-xs font-semibold text-cyan-300">{hint}</p>
    </div>
  );
}