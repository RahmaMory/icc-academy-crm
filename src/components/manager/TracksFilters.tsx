import { Search } from "lucide-react";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
};

export default function TracksFilters({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
      <select
        value={selectedStatus}
        onChange={(e) =>
          setSelectedStatus(e.target.value)
        }
        title="Filter tracks by status"
        className="rounded-xl border border-white/10 bg-[#151817] px-4 py-3 outline-none"
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Draft">Draft</option>
      </select>

      <div className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4">
        <Search size={18} className="text-white/35" />

        <input
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search tracks..."
          className="w-full bg-transparent py-3 outline-none"
        />
      </div>
    </div>
  );
}