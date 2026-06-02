type InstructorUser = {
  name: string;
  role: string;
};

type Props = {
  instructorUser: InstructorUser;
};

export default function DashboardHeader({
  instructorUser,
}: Props) {
  return (
    <header className="flex flex-col gap-4 border-b border-cyan-400/20 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

      <div className="pl-14 lg:pl-0">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Instructor Dashboard
        </h1>

        <p className="mt-2 text-sm text-white/55">
          Manage your classes and track student progress
        </p>
      </div>

      <div className="flex w-fit items-center gap-3 rounded-2xl border border-cyan-300/30 bg-white/4 px-4 py-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-300 to-violet-500 text-sm font-bold text-[#050816]">
          {instructorUser.name.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-bold">
            {instructorUser.name}
          </p>

          <p className="text-xs text-white/45">
            {instructorUser.role}
          </p>
        </div>
      </div>
    </header>
  );
}