type Material = {
  id: number;
  title: string;
  type: string;
  uploadedAt: string;
};

type Props = {
  materials: Material[];
};

export default function ClassroomMaterialsPreview({
  materials,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-6">
      
      <div className="mb-5 flex items-center justify-between">
        
        <h2 className="text-2xl font-bold text-white">
          Materials Preview
        </h2>

        <button className="rounded-full border border-cyan-300 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-300 hover:text-black">
          Open all materials
        </button>
      </div>

      <div className="space-y-4">
        {materials.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
          >
            <div>
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-white/45">
                {item.type}
              </p>
            </div>

            <span className="text-sm text-white/35">
              {item.uploadedAt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}