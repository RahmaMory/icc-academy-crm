

type Props = {
  label: string;
  value: string | number;
  variant?: "card" | "line";
};

export default function SummaryLine({
  label,
  value,
  variant = "card",
}: Props) {
  const isLine = variant === "line";

  return (
    <div
      className={
        isLine
          ? "flex items-center justify-between border-b border-white/10 pb-3"
          : "flex items-center justify-between rounded-2xl bg-black/25 p-4"
      }
    >
      <span className={isLine ? "text-white/45" : "text-white/50"}>
        {label}
      </span>

      <span className={isLine ? "font-bold text-white" : "font-bold text-cyan-300"}>
        {value}
      </span>
    </div>
  );
}