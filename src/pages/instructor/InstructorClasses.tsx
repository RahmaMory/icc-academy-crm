
import ClassesPageHeader from "../../components/instructor-classes/ClassesPageHeader";
import InstructorClassCard from "../../components/instructor-classes/InstructorClassCard";
import {
  classRoomSessions,
  classStudents,
  instructorClasses,
  trackInstructors,
} from "../../data";

const CURRENT_INSTRUCTOR_ID = 1;

export default function InstructorClasses() {
  const instructor = trackInstructors.find(
    (item) => item.id === CURRENT_INSTRUCTOR_ID
  );

  const instructorClassIds = instructor?.classIds || [];

  const myClasses = instructorClasses.filter((classItem) =>
    instructorClassIds.includes(classItem.id)
  );

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">

        {/* HEADER COMPONENT */}
        <ClassesPageHeader
          title="My Classes"
          description="Enter each class room to manage materials, sessions, students and chat."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {myClasses.map((classItem) => {
            const studentsCount = classStudents.filter(
              (student) => student.classId === classItem.id
            ).length;

            const nextSession = classRoomSessions.find(
              (session) =>
                session.classId === classItem.id &&
                session.status === "Upcoming"
            );

            return (
              <InstructorClassCard
                key={classItem.id}
                classItem={{ ...classItem, id: String(classItem.id) }}
                studentsCount={studentsCount}
                nextSession={nextSession}
              />
            );
          })}
        </div>

      </section>
    </main>
  );
}