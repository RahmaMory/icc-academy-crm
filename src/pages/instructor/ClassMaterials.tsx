import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText, Plus, Upload } from "lucide-react";
import { useState } from "react";
import {
  classMaterialLibrary,
  instructorClasses
} from "../../data";

export default function ClassMaterials() {
  const { classId } = useParams();
  const [title, setTitle] = useState("");

  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  const materials = classMaterialLibrary.filter(
    (item) => item.classId === Number(classId)
  );

  if (!currentClass) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">Class not found</h1>
      </main>
    );
  }

  function handleAddMaterial() {
    if (!title.trim()) return;
    setTitle("");
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">
        <Link
          to={`/instructor/classes/${classId}`}
          className="mb-6 inline-flex items-center gap-2 pl-14 text-sm font-bold text-cyan-300 lg:pl-0"
        >
          <ArrowLeft size={17} />
          Back to class room
        </Link>

        <div className="mb-8 pl-14 lg:pl-0">
          <p className="text-sm font-semibold text-cyan-300">
            {currentClass.group}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Class Materials
          </h1>
          <p className="mt-2 text-white/50">
            All materials visible to students in this class room.
          </p>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
              <Upload size={20} />
            </div>
            <div>
              <h2 className="font-bold">Add Material</h2>
              <p className="text-xs text-white/45">
                UI only for now. Backend will upload files later.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Material title..."
              className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 outline-none"
            />

            <button
              onClick={handleAddMaterial}
              disabled={!title.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-[#0b0f10] disabled:opacity-50"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {materials.map((material) => (
            <div
              key={material.id}
              className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <FileText size={22} />
              </div>

              <h3 className="text-xl font-bold">{material.title}</h3>

              <div className="mt-4 space-y-2 text-sm text-white/50">
                <p>Type: {material.type}</p>
                <p>Uploaded: {material.uploadedAt}</p>
                <p>Uploaded by: {material.uploadedBy}</p>
                <p>{material.visibility}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}