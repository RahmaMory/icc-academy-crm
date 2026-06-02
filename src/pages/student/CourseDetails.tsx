

import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Layers, BookOpen } from "lucide-react";
import { allCourses } from "../../data";

import InfoCard from "../../components/shared/InfoCard";
import CourseHeader from "../../components/course-details/CourseHeader";
import CourseContent from "../../components/course-details/CourseContent";

export default function CourseDetails() {
  const { courseId } = useParams();

  const course = allCourses.find(
    (course) => course.id === Number(courseId)
  );

  if (!course) {
    return (
      <main className="min-h-screen bg-[#0b0f10] px-8 py-8 text-white">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <Link to="/student/courses" className="mt-5 inline-block text-cyan-300">
          Back to courses
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-8 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        
        <Link
          to="/student/courses"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to courses
        </Link>

        {/* HEADER */}
        <CourseHeader course={{ ...course, description: course.description || "" }} />

        {/* INFO CARDS */}
       <div className="grid gap-5 p-6 md:grid-cols-3">
  <InfoCard
    icon={Clock}
    label="Duration"
    value={course.duration || "—"}
  />

  <InfoCard
    icon={Layers}
    label="Steps"
    value={course.steps}
  />

  <InfoCard
    icon={BookOpen}
    label="Status"
    value="Available"
  />
</div>
        {/* CONTENT */}
        <CourseContent />

      </section>
    </main>
  );
}