import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  filter: string;
  setFilter: (value: string) => void;

  group: string;
  setGroup: (value: string) => void;

  groups: string[];
};



export default function FollowUpFilters({
  search,
  setSearch,
  filter,
  setFilter,
  group,
  setGroup,
  groups,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student..."
          className="w-full rounded-2xl border border-white/10 bg-[#0f1416] py-3 pl-11 pr-4 text-white placeholder:text-white/40 outline-none focus:border-cyan-300"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 lg:flex-row">

        {/* Status Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-2xl border border-white/10 bg-[#0f1416] px-4 py-3 text-sm text-white outline-none"
          title="Filter by status"
        >
          <option value="all">All Status</option>
          <option value="critical">Critical</option>
          <option value="top">Top</option>
          <option value="low">Low Progress</option>
          <option value="attendance">Low Attendance</option>
        </select>

        {/* Group Filter */}
        {groups.length > 0 && (
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="rounded-2xl border border-white/10 bg-[#0f1416] px-4 py-3 text-sm text-white outline-none"
            title="Filter by group"
          >
            <option value="all">All Groups</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        )}

      </div>
    </div>
  );
}