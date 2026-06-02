interface MaterialItemProps {
  material: {
    title: string;
    type: string;
    uploadedAt: string;
    status: string;
  };
  getStatusClass: (status: string) => string;
}

export default function MaterialItem({ material, getStatusClass }: MaterialItemProps) {
  return (
    <div className="flex justify-between rounded-2xl bg-black/25 p-4">
      <div>
        <h3 className="font-bold">{material.title}</h3>
        <p className="text-xs text-white/45">
          {material.type} • {material.uploadedAt}
        </p>
      </div>

      <span className={`px-3 py-1 rounded-full text-xs ${getStatusClass(material.status)}`}>
        {material.status}
      </span>
    </div>
  );
}