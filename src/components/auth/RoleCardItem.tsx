import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

type RoleCard = {
  title: string;
  path: string;
  desc: string;
  icon: LucideIcon;
  featured?: boolean;
};

type Props = {
  role: RoleCard;
  featured?: boolean;
};

export default function RoleCardItem({
  role,
  featured = false,
}: Props) {
  const Icon = role.icon;

  return (
    <Link
      to={role.path}
      className={[
        "group block rounded-[30px] border bg-white/4 shadow-2xl transition hover:-translate-y-1",
        featured
          ? "border-cyan-300/30 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%),rgba(255,255,255,0.04)] p-8 hover:border-cyan-300/60"
          : "border-white/10 p-7 hover:border-cyan-400/50",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col gap-6",
          featured ? "md:flex-row md:items-center md:justify-between" : "",
        ].join(" ")}
      >
        <div className="flex items-start gap-5">
          <div
            className={[
              "flex shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300",
              featured ? "h-16 w-16" : "h-14 w-14",
            ].join(" ")}
          >
            <Icon size={featured ? 32 : 28} />
          </div>

          <div>
            <h2
              className={
                featured
                  ? "text-3xl font-bold"
                  : "text-2xl font-bold"
              }
            >
              {role.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
              {role.desc}
            </p>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#050816]">
          Continue
          <ArrowRight size={17} />
        </div>
      </div>
    </Link>
  );
}