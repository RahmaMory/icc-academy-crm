import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Users,
} from "lucide-react";
import StudentsTable from "../../components/class-details/StudentsTable";
import ClassChatCard from "../../components/class-details/ClassChatCard";
import AnnouncementsCard from "../../components/class-details/AnnouncementsCard";
import MaterialsPreview from "../../components/class-details/MaterialsPreview";
import ClassCalendar from "../../components/class-details/ClassCalendar";
import UploadMaterialCard from "../../components/class-details/UploadMaterialCard";
import InfoCard from "../../components/shared/InfoCard";
import {
  getEventClass,
  getStatusClass,
  getStudentStatus,
} from "../../utils/class/classHelpers";
import useClassDetails from "../../hooks/useClassDetails";

export default function ClassDetails() {

const {
  classId,

  currentClass,

  students,
  materials,
  announcements,

  filteredStudents,

  calendarRef,

  selectedDate,
  selectedDayEvents,

  dayNote,
  setDayNote,
  handleAddDayNote,

  searchTerm,
  setSearchTerm,

  selectedStatus,
  setSelectedStatus,

  materialTitle,
  setMaterialTitle,
  handleUploadMaterial,

  announcement,
  setAnnouncement,
  handleAnnouncement,

  chatMessages,

  chatMessage,
  setChatMessage,
  handleSendMessage,
} = useClassDetails();

  if (!currentClass) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">Class not found</h1>
        <Link
          to="/instructor/classes"
          className="mt-5 inline-flex items-center gap-2 text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to classes
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-3 py-6 text-white sm:px-6 lg:px-8 ">
      <section className="mx-auto max-w-7xl">
        <Link
          to="/instructor/classes"
          className="mb-6 inline-flex items-center gap-2 pl-14 text-sm font-bold text-cyan-300 lg:pl-0"
        >
          <ArrowLeft size={17} />
          Back to classes
        </Link>

        <div className="rounded-[30px] border border-cyan-300/25 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_35%),#171b20] p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-semibold text-cyan-300">
            {currentClass.group} • {currentClass.branch}
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            {currentClass.title}
          </h1>

          <p className="mt-3 text-white/55">
            Shared class room for materials, calendar, students, announcements
            and chat.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Users} label="Students" value={students.length} />

            <InfoCard
              icon={BookOpen}
              label="Progress"
              value={`${currentClass.progress}%`}
            />

            <Link to={`/instructor/classes/${classId}/materials`}>
              <InfoCard
                icon={FileText}
                label="Materials"
                value={materials.length}
              />
            </Link>
          </div>
        </div>

       <ClassCalendar
  calendarRef={calendarRef}
  selectedDate={selectedDate}
  selectedDayEvents={selectedDayEvents}
  dayNote={dayNote}
  setDayNote={setDayNote}
  handleAddDayNote={handleAddDayNote}
  getEventClass={getEventClass}
/>

<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
   <section className="space-y-6">
      <UploadMaterialCard
  materialTitle={materialTitle}
  setMaterialTitle={setMaterialTitle}
  handleUploadMaterial={handleUploadMaterial}
/>

  <MaterialsPreview
  materials={materials}
  classId={classId ?? ""}
/>

<StudentsTable
  students={students}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedStatus={selectedStatus}
  setSelectedStatus={setSelectedStatus}
  classId={classId ?? ""}
  getStudentStatus={getStudentStatus}
  getStatusClass={getStatusClass}
/>
     </section>

 <aside className="space-y-6">        
            <AnnouncementsCard
  announcement={announcement}
  setAnnouncement={setAnnouncement}
  handleAnnouncement={handleAnnouncement}
  announcements={announcements}
/>          
<ClassChatCard
  chatMessages={chatMessages}
  chatMessage={chatMessage}
  setChatMessage={setChatMessage}
  handleSendMessage={handleSendMessage}
/>
          </aside>
        </div>
      </section>
    </main>
  );
}





