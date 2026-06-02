import { Plus, Upload } from "lucide-react";

type Props = {
  materialTitle: string;
  setMaterialTitle: React.Dispatch<
    React.SetStateAction<string>
  >;
  handleUploadMaterial: () => void;
};

export default function UploadMaterialCard({
  materialTitle,
  setMaterialTitle,
  handleUploadMaterial,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center gap-3">
        
        <Upload
          className="text-cyan-300"
          size={22}
        />

        <h2 className="text-xl font-bold">
          Upload Material
        </h2>
      </div>

      <p className="mb-4 text-sm text-white/50">
        Add materials visible for
        students inside this class room.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        
        <input
          value={materialTitle}
          onChange={(e) =>
            setMaterialTitle(
              e.target.value
            )
          }
          placeholder="Material title..."
          className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 outline-none"
        />

        <button
          onClick={handleUploadMaterial}
          disabled={!materialTitle.trim()}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-[#0b0f10] disabled:opacity-50"
        >
          <Plus size={18} />
          Add
        </button>
      </div>
    </div>
  );
}