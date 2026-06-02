type Props = {
  value: number;
};

export default function ProgressCircle({ value }: Props) {
  return (
    <div
      className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full shadow-[0_0_40px_rgba(103,232,249,0.18)]"
      style={{
        background: `conic-gradient(
          #67e8f9 ${value * 3.6}deg,
          rgba(255,255,255,0.1) 0deg
        )`,
      }}
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#171b20]">
        <div className="text-center">
          <p className="text-3xl font-bold">{value}%</p>
          <p className="text-[10px] font-bold uppercase text-cyan-200">
            Overall
          </p>
        </div>
      </div>
    </div>
  );
}