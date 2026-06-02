import { useMemo, useState } from "react";
import { currentUser ,studentEnrollments,instructorClasses, type MyCourseView} from "../../data";
import SectionHeader from "../../components/shared/SectionHeader";
import CoursesFilters from "../../components/students/CoursesFilters";
import CourseCard from "../../components/students/CourseCard";
import EmptyState from "../../components/shared/EmptyState";

export default function MyCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const classMap = useMemo(() => {
    return new Map(instructorClasses.map((c) => [c.id, c]));
  }, []);

  
  const studentCourses: MyCourseView[] = useMemo(() => {
    return studentEnrollments
      .filter((item) => item.studentId === currentUser.id)
      .map((item) => {
        const course = classMap.get(item.classId);

        if (!course) return null;

        return {
          id: course.id,
          courseId: item.classId,
          title: course.title,
          image: course.image,
          instructor: course.instructor,
          level: course.level,
          duration: course.duration,
          steps: course.steps,
          group: course.group,
          branch: course.branch,
          session: course.session,
          progress: item.progress,
          completedSteps: item.completedSteps,
        };
      })
      .filter(Boolean) as MyCourseView[];
  }, [classMap]);

  const filteredCourses = useMemo(() => {
    return studentCourses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel, studentCourses]);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-8 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <SectionHeader
  title="My Courses"
  subtitle="Continue your learning journey"
/>

        {/* Filters */}
       <CoursesFilters
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedLevel={selectedLevel}
  setSelectedLevel={setSelectedLevel}
/>
        {/* Courses */}
        {filteredCourses.length > 0 ? (
          <div className="space-y-6">
            {filteredCourses.map((course) => (
            <CourseCard
  key={course.id}
  course={course}
/>
            ))}
          </div>
        ) : (
       <EmptyState
  title="No courses found"
  description="Try another search or level."
/>
        )}
      </section>
    </main>
  );
}