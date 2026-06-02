import { StatusBadge } from "../shared/StatusBadge";

type Props = {
  material: {
    id: number;
    title: string;
    type: string;
    uploadedAt: string;
    status: string;
  };
};

export default function MaterialCard({
  material,
}: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">

      <h3 className="font-bold">
        {material.title}
      </h3>

      <p className="mt-1 text-xs text-white/45">
        {material.type} • {material.uploadedAt}
      </p>

      <div className="mt-3">
        <StatusBadge status={material.status} />
      </div>

    </div>
  );
}