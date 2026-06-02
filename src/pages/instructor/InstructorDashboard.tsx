
import {
  BookOpen,
  Users,

} from "lucide-react";

import {
  instructorUser,
  classStudents,
  instructorClasses,
} from "../../data";

import { Link } from "react-router-dom";

import StatCard from "../../components/shared/StatCard";
import ClassCard from "../../components/instructor-dashboard/ClassCard";
import TopStudentsCard from "../../components/instructor-dashboard/TopStudentsCard";
import RiskStudentsCard from "../../components/instructor-dashboard/RiskStudentsCard";
import DashboardHeader from "../../components/shared/DashboardHeader";
import DashboardHero from "../../components/shared/DashboardHero";
import NotificationsCard from "../../components/instructor-dashboard/NotificationsCard";
import { getInstructorDashboardData }
from "../../utils/instructor/getInstructorDashboardData";
import SectionHeader from "../../components/shared/SectionHeader";


export default function InstructorDashboard() {


const {
  myClasses,
  myStudents,
  notifications,
  studentsToFollowUpRaw,
} = getInstructorDashboardData();
const firstName = instructorUser.name.split(" ")[0];
  return (


  <div className="min-h-screen bg-[#0b0f10] text-white">

    <DashboardHeader
      instructorUser={instructorUser}
    />

    <div className="grid gap-6 px-4 py-6 sm:px-6 lg:px-8 xl:grid-cols-[1fr_330px] xl:px-10">

      <section>

        <DashboardHero
  role="instructor"
  name={firstName}
  subtitle="Track class progress, manage students and active groups."
/>

        <NotificationsCard
          notifications={notifications}
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <Link to="/instructor/classes">
            <StatCard
              icon={BookOpen}
              value={myClasses.length}
              label="Active Classes"
              trend="Open classes"
            />
          </Link>

          <Link to="/instructor/students">
            <StatCard
              icon={Users}
              value={myStudents.length}
              label="Total Students"
              trend="View all"
            />
          </Link>
        </div>

        <SectionHeader
          title="My Classes"
          description="Classes you are currently teaching"
        />

        <div className="space-y-5">

          {myClasses.map((classItem) => {

            const studentsInClass =
              classStudents.filter(
                (student) =>
                  student.classId === classItem.id
              );

            return (
              <ClassCard
                key={classItem.id}
                classItem={classItem}
                studentsCount={studentsInClass.length}
              />
            );
          })}
        </div>
      </section>

      <aside className="space-y-6">

        <TopStudentsCard
          students={myStudents.map(student => ({ ...student, id: String(student.id), classId: String(student.classId) }))}
          instructorClasses={instructorClasses.map(cls => ({ ...cls, id: String(cls.id) }))}
        />

        <RiskStudentsCard
          students={studentsToFollowUpRaw.map(student => ({ ...student, id: String(student.id), classId: String(student.classId), priority: student.priority === "Normal" ? "Medium" : student.priority }))}
        />
      </aside>
    </div>
  </div>
);
  
}











