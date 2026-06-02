type Props = {
  students: number;
  progress: number;
  materials: number;
};

export default function ClassroomStats({
  students,
  progress,
  materials,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      
      <div className="rounded-3xl border border-cyan-300/20 bg-white/4 p-5">
        <p className="text-sm text-white/45">
          Students
        </p>

        <h3 className="mt-3 text-3xl font-bold text-white">
          {students}
        </h3>
      </div>

      <div className="rounded-3xl border border-cyan-300/20 bg-white/4 p-5">
        <p className="text-sm text-white/45">
          Progress
        </p>

        <h3 className="mt-3 text-3xl font-bold text-cyan-300">
          {progress}%
        </h3>
      </div>

      <div className="rounded-3xl border border-cyan-300/20 bg-white/4 p-5">
        <p className="text-sm text-white/45">
          Materials
        </p>

        <h3 className="mt-3 text-3xl font-bold text-white">
          {materials}
        </h3>
      </div>

    </div>
  );
}