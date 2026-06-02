type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;

  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
};

export default function CoursesFilters({
  searchTerm,
  setSearchTerm,
  selectedLevel,
  setSelectedLevel,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search courses..."
        className="w-full rounded-[22px] border border-cyan-300/25 bg-white/4 px-6 py-4 outline-none"
      />

      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="rounded-[22px] border border-cyan-300/25 bg-[#151817] px-6 py-4 outline-none"
      >
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
}