import {
  GraduationCap,
  UserRoundCog,
  BriefcaseBusiness,
} from "lucide-react";
import RoleCardItem from "../../components/auth/RoleCardItem";
import type { RoleCard } from "../../data";

const roles: RoleCard[] = [
  {
    title: "Student",
    path: "/login/student",
    icon: GraduationCap,
    desc: "Access your courses, lessons, progress and learning dashboard.",
    featured: true,
  },
  {
    title: "Instructor",
    path: "/login/instructor",
    icon: UserRoundCog,
    desc: "Manage courses, groups, students and learning content.",
  },
  {
    title: "Manager",
    path: "/login/manager",
    icon: BriefcaseBusiness,
    desc: "Monitor academy users, courses, reports and performance.",
  },
];

export default function RoleSelection() {
  const featuredRole = roles.find((role) => role.featured);
  const normalRoles = roles.filter((role) => !role.featured);

  return (
    <main className="min-h-screen bg-[#050816] px-5 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold text-cyan-400">
            ICC Academy System
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Choose Your Portal
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Select your role to continue to your personalized dashboard.
          </p>
        </div>

        {featuredRole && <RoleCardItem role={featuredRole} featured />}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {normalRoles.map((role) => (
            <RoleCardItem key={role.title} role={role} />
          ))}
        </div>
      </section>
    </main>
  );
}



