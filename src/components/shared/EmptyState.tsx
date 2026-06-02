type Props = {
  title: string;
  description: string;
  icon?: React.ElementType;
  action?: React.ReactNode;
};

export default function EmptyState({
  title,
  description,
  icon: Icon,
  action,
}: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-8 text-center">
      {Icon && (
        <div className="mb-3 flex justify-center text-white/40">
          <Icon size={28} />
        </div>
      )}

      <h3 className="font-bold">{title}</h3>

      <p className="mt-2 text-sm text-white/50">{description}</p>

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}