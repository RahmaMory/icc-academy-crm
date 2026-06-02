
import {  Search } from "lucide-react";
import { useState } from "react";

import { trackInstructors } from "../../data";
import { getInstructorStats } from "../../utils/instructor/getInstructorStats";
import InstructorRow from "../../components/manager/table/InstructorRow";

export default function ManagerInstructors() {
  const [search, setSearch] = useState("");

  const instructors = trackInstructors.map((inst) => ({
    ...inst,
    ...getInstructorStats(inst),
  }));

  const filtered = instructors.filter((inst) => {
    const v = search.toLowerCase();

    return (
      inst.name.toLowerCase().includes(v) ||
      inst.email.toLowerCase().includes(v) ||
      inst.trackName.toLowerCase().includes(v)
    );
  });

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-bold">Instructors</h1>

        {/* SEARCH */}
        <div className="mt-4 mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
          <Search size={18} className="text-white/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-[28px] border border-cyan-300/25 bg-white/4 p-5">
          <table className="w-full min-w-96 border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-white/45">
                <th>Instructor</th>
                <th>Track</th>
                <th>Classes</th>
                <th>Students</th>
                <th>Avg</th>
                <th>Last Activity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-white/40">
                    No instructors found
                  </td>
                </tr>
              ) : (
                filtered.map((inst) => (
                  <InstructorRow key={inst.id} instructor={inst} />
                ))
              )}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  );
}