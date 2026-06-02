import SectionHeader from "./SectionHeader";

type Props = {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
};

export default function Panel({
  title,
  icon,
  children,
  rightAction,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center justify-between gap-3">
        <SectionHeader icon={icon} title={title} />
        
        {rightAction}
      </div>

      {children}
    </div>
  );
}