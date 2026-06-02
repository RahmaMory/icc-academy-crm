
import getAverage from "../../../utils/shared/getAverage";

interface GroupCardProps {
  group: { group: string; title: string };
  students: { progress: number }[];
}

export default function GroupCard({ group, students }: GroupCardProps) {
  const avg = getAverage(students.map((s: { progress: number }) => s.progress));

  return (
    <div className="rounded-2xl bg-black/25 p-5">
      <h3 className="text-lg font-bold">{group.group}</h3>
      <p className="text-sm text-white/45">{group.title}</p>

      <div className="mt-3 text-sm text-white/60">
        {students.length} students
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-sm">
          <span className="text-white/45">Progress</span>
          <span className="text-cyan-300 font-bold">{avg}%</span>
        </div>

        <div className="h-2 bg-white/10 rounded-full mt-2">
          <div
            className="h-full bg-cyan-300 rounded-full"
            style={{ width: `${avg}%` }}
          />
        </div>
      </div>
    </div>
  );
}