import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Material = {
  id: number;
  title: string;
  type: string;
  uploadedAt: string;
  visibility: string;
};

type Props = {
  materials: Material[];
  classId: string;
};

export default function MaterialsPreview({
  materials,
  classId,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center gap-3">
        
        <FileText
          className="text-cyan-300"
          size={22}
        />

        <h2 className="text-xl font-bold">
          Materials Preview
        </h2>
      </div>

      <div className="mb-4 flex justify-end">
        
        <Link
          to={`/instructor/classes/${classId}/materials`}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
        >
          Open all materials

          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="space-y-3">
        
        {materials.slice(0, 3).map(
          (material) => (
            <Link
              key={material.id}
              to={`/instructor/classes/${classId}/materials`}
              className="block rounded-2xl bg-black/25 p-4 transition hover:bg-black/40"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                
                <div>
                  <h3 className="font-bold">
                    {material.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/45">
                    {material.type} •{" "}
                    {material.uploadedAt}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  {material.visibility}
                </span>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}