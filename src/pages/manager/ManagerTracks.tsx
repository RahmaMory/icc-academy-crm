import { useMemo, useState } from "react";

import { classStudents ,managerTracks,trackInstructors,instructorClasses} from "../../data";
import TracksFilters from "../../components/manager/TracksFilters";
import NoTracksFound from "../../components/manager/NoTracksFound";
import TrackCard from "../../components/manager/cards/TrackCard";
import PageHeader from "../../components/shared/PageHeader";
import getAverage from "../../utils/shared/getAverage";

export default function ManagerTracks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const tracks = managerTracks.map((track) => {
    const instructors = trackInstructors.filter((i) => i.trackId === track.id);
    const classIds = instructors.flatMap((i) => i.classIds);
    const students = classStudents.filter((s) => classIds.includes(s.classId));
    const groups = instructorClasses.filter((c) => classIds.includes(c.id));

    return {
      ...track,
      instructorsCount: instructors.length,
      groupsCount: groups.length,
      studentsCount: students.length,
      averageProgress: getAverage(students.map((s) => s.progress)),
    };
  });

  const filteredTracks = useMemo(() => {
    return tracks.filter((track) => {
      const matchesSearch = track.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || track.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [tracks, searchTerm, selectedStatus]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">
       <PageHeader
  badge="Academy Management"
  title="Tracks"
  description="Browse academy tracks and open each track details."
  backLink="/manager"
  backText="← Back to dashboard"
/>

       <TracksFilters
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedStatus={selectedStatus}
  setSelectedStatus={setSelectedStatus}
/>

        {filteredTracks.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ) : (
         <NoTracksFound />
        )}
      </section>
    </main>
  );
}

