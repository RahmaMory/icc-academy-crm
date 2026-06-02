import { Search } from "lucide-react";


type Status = "All" | "Good" | "Average" | "Needs Attention";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedStatus: Status;
  setSelectedStatus: React.Dispatch<React.SetStateAction<Status>>;
};
export default function StudentFilters({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row">

      <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 sm:max-w-lg">
        <Search size={18} className="text-white/35" />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search students, group, branch, or session..."
          className="w-full bg-transparent py-3 outline-none"
        />
      </div>

<select
  aria-label="Filter students by status"
  value={selectedStatus}
  onChange={(e) =>
    setSelectedStatus(e.target.value as Status)
  }
  className="rounded-2xl border border-white/10 bg-[#151817] px-4 py-3 outline-none"
>
        <option value="All">All Status</option>
        <option value="Good">Good</option>
        <option value="Average">Average</option>
        <option value="Needs Attention">Needs Attention</option>
      </select>
    </div>
  );
}