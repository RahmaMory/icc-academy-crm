import { useParams } from "react-router-dom";
import { classMaterialLibrary } from "../../data";

export default function StudentMaterials() {
  const { classId } = useParams();

  const materials = classMaterialLibrary.filter(
    (item) => item.classId === Number(classId)
  );

  return (
    <main className="min-h-screen bg-[#0b0f10] p-6 text-white">
      <section className="mx-auto max-w-5xl">

        <h1 className="mb-6 text-4xl font-bold">
          Course Materials
        </h1>

        <div className="space-y-4">

          {materials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-cyan-300/20 bg-white/4 p-5"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    {item.type}
                  </p>
                </div>

                <button className="rounded-full bg-cyan-300 px-5 py-2 font-semibold text-black">
                  Open
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}