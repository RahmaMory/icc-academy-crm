type Props = {
  icon: React.ElementType;
  label: string;
};

export default function MiniInfo({
  icon: Icon,
  label,
}: Props) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-black/25 px-4 py-3 text-sm text-white/60">
      <Icon size={16} className="text-cyan-300" />
      {label}
    </div>
  );
}


