type SectionCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      <h2 className="text-2xl font-bold">{title}</h2>

      {description && (
        <p className="mt-1 text-sm text-white/50">
          {description}
        </p>
      )}

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}