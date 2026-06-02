import { currentUser } from "../../data";

type Props = {
  title: string;
  subtitle?: string;
};

export default function StudentHeader({ title, subtitle }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-cyan-400/20 px-8 py-7">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {subtitle && (
          <p className="mt-2 text-sm text-white/55">{subtitle}</p>
        )}
      </div>

      <div className="hidden items-center gap-3 rounded-2xl border border-cyan-300/30 bg-white/4 px-4 py-3 md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-300 to-violet-500 text-sm font-bold text-[#050816]">
          {currentUser.name.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-bold">{currentUser.name}</p>
          <p className="text-xs text-white/45">{currentUser.role}</p>
        </div>
      </div>
    </header>
  );
}