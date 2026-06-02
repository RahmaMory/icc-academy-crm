
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { classStudents } from "../../data";

import StudentHeader from "../../components/student-details/StudentDetailsHeader";
import SessionHistory from "../../components/student-details/SessionHistory";
import StudentStats from "../../components/student-details/StudentStats";
import WeakPointsCard from "../../components/student-details/WeakPoints";
import PerformanceAlertsCard from "../../components/student-details/PerformanceAlerts";
import InstructorNotesCard from "../../components/student-details/InstructorNotes";
import QuickSummaryCard from "../../components/student-details/QuickSummary";
import LearningProgress from "../../components/student-details/LearningProgress";
import TaskAssignments from "../../components/student-details/TasksAssignments";

import { useStudentNotes } from "../../hooks/useStudentNotes";

import { priorityStyles } from "../../utils/students/priority";
import {
  getStudentStatus,
  getStatusClass,
} from "../../utils/students/studentStatus";
import { instructorClasses } from "../../data";
export default function StudentDetails() {
  const { classId, studentId } = useParams();

  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  const student = classStudents.find(
    (item) =>
      item.id === Number(studentId) &&
      item.classId === Number(classId)
  );

const status = student ? getStudentStatus(student.progress) : "Unknown";
  const {
    notes,
    showNoteBox,
    setShowNoteBox,
    addNote,
    newNote,
    setNewNote,
  } = useStudentNotes(student);

  if (!currentClass || !student) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Student not found
        </h1>

        <Link
          to={`/instructor/classes/${classId}`}
          className="mt-5 inline-flex items-center gap-2 text-cyan-300 text-sm sm:text-base"
        >
          <ArrowLeft size={17} />
          Back to class
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Link
          to={`/instructor/classes/${classId}`}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to class
        </Link>

        {/* HEADER */}
        <StudentHeader
          student={student}
          currentClass={currentClass}
          status={status}
          classId={classId!}
          showNoteBox={showNoteBox}
          setShowNoteBox={setShowNoteBox}
          getStatusClass={getStatusClass}
        />

        {/* STATS */}
        <div className="mt-4 sm:mt-6">
          <StudentStats student={student} />
        </div>

        {/* MAIN GRID */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-5 sm:gap-6">
          
          {/* LEFT SIDE */}
          <section className="space-y-5 sm:space-y-6">
            <LearningProgress
              learningProgress={student.learningProgress}
            />

            <SessionHistory sessions={student.sessionHistory} />

            <WeakPointsCard weakPoints={student.weakPoints} />

            <PerformanceAlertsCard
              performanceAlerts={student.performanceAlerts}
            />

            <TaskAssignments tasks={student.tasks} />
          </section>

          {/* RIGHT SIDE */}
          <aside className="space-y-5 sm:space-y-6">
            <InstructorNotesCard
              notes={notes}
              showNoteBox={showNoteBox}
              setShowNoteBox={setShowNoteBox}
              handleAddNote={() => addNote(newNote)}
              newNote={newNote}
              setNewNote={setNewNote}
            />

            <QuickSummaryCard
              status={status || "Unknown"}
              recommendedAction={student.recommendedAction}
              priority={student.priority}
              priorityStyles={priorityStyles}
            />
          </aside>

        </div>
      </section>
    </main>
  );
}