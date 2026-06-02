import { ElementType } from "react";

type InfoCardProps = {
  icon: ElementType;
  label: string;
  value: string | number;
};

export default function InfoCard({
  icon: Icon,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-300/25 bg-white/4 p-5 shadow-xl">
      
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
        <Icon size={21} />
      </div>

      <p className="text-sm text-white/45">
        {label}
      </p>

      <h3 className="mt-1 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}