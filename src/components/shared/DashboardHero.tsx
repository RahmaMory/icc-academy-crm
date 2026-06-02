type Props = {
  role: "student" | "instructor";

  name: string;

  subtitle?: string;

  badgeText?: string;

  children?: React.ReactNode; 
};

export default function DashboardHero({
  role,
  name,
  subtitle,
  badgeText,
  children,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%),#171b20] p-6 shadow-2xl sm:p-8">
      
      <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold text-cyan-200">
        {badgeText ?? (role === "student" ? "Student Area" : "Instructor Area")}
      </span>

      <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        Welcome back,{" "}
        <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
          {name}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}