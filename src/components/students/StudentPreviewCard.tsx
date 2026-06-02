import { Link } from "react-router-dom";

type Props = {
  id: number;
  classId: number;
  name: string;
  email: string;
  progress: number;
};

export default function StudentPreviewCard({
  id,
  classId,
  name,
  email,
  progress,
}: Props) {
  return (
    <Link
      to={`/instructor/classes/${classId}/student/${id}`}
      className="block rounded-2xl bg-black/25 p-4 transition hover:bg-black/40"
    >
      <div className="flex justify-between gap-3">
        <div>
          <h3 className="font-bold">
            {name}
          </h3>

          <p className="mt-1 text-xs text-white/45">
            {email}
          </p>
        </div>

        <span className="font-bold text-cyan-300">
          {progress}%
        </span>
      </div>
    </Link>
  );
}