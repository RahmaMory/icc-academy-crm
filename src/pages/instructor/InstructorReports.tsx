import {
  classStudents,
  instructorUser,
  instructorClasses,
} from "../../data";

import {
  BookOpen,  
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import RiskStudentCard from "../../components/reports/RiskStudentCard";
import ClassBreakdownCard from "../../components/reports/ClassBreakdownCard";
import ReportsKpiGrid from "../../components/reports/ReportsKpiGrid";
import SectionHeader from "../../components/shared/SectionHeader";
import SuggestedActionsCard from "../../components/reports/SuggestedActions";

export default function InstructorReports() {

  // ================= MY CLASSES =================
  const myClassIds = instructorClasses
    .filter((c) => c.instructorId === instructorUser.id)
    .map((c) => c.id);

  const myClasses = instructorClasses.filter((c) =>
    myClassIds.includes(c.id)
  );

  const myStudents = classStudents.filter((s) =>
    myClassIds.includes(s.classId)
  );

  // ================= KPI =================
  const avgProgress =
    myStudents.reduce((a, s) => a + s.progress, 0) /
    (myStudents.length || 1);

  const avgAttendance =
    myStudents.reduce((a, s) => a + s.attendance, 0) /
    (myStudents.length || 1);

  const weakStudents = myStudents.filter(
    (s) => s.progress < 40
  );

  // ================= TOTAL MISSING TASKS =================
  const totalMissingTasks = myStudents.reduce(
    (acc, student) =>
      acc +
      (student.tasks?.filter(
        (t) => t.status === "Missing"
      ).length || 0),
    0
  );

  // ================= CHART DATA =================
  const classProgressData = myClasses.map((cls) => ({
    id: cls.id,
    name: cls.title,
    progress: cls.progress,
  }));

  const highRisk = myStudents.filter(
    (s) => s.progress < 40
  ).length;

  const mediumRisk = myStudents.filter(
    (s) => s.progress >= 40 && s.progress < 70
  ).length;

  const normalStudents =
    myStudents.length - highRisk - mediumRisk;

  const riskData = [
    { name: "High Risk", value: highRisk },
    { name: "Medium Risk", value: mediumRisk },
    { name: "Normal", value: normalStudents },
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  return (
    <div className="min-h-screen bg-[#0b0f10] text-white p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Instructor Reports
        </h1>

        <p className="text-white/50 text-sm mt-2">
          {instructorUser.name} • Performance Overview
        </p>
      </div>

      {/* KPI CARDS */}
     <ReportsKpiGrid
  studentsCount={myStudents.length}
  avgProgress={avgProgress}
  avgAttendance={avgAttendance}
  weakStudentsCount={weakStudents.length}
  totalMissingTasks={totalMissingTasks}
/>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {/* CLASS PROGRESS */}
        <div className="p-5 rounded-2xl border border-white/10 bg-white/5">

       <SectionHeader
  title="Class Progress Overview"
  link="/instructor/classes"
  linkText="View Classes"
/>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={classProgressData}>
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#22d3ee" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* RISK DISTRIBUTION */}
        <div className="p-5 rounded-2xl border border-white/10 bg-white/5">

       
        <SectionHeader
  title="Student Risk Distribution"
  link="/instructor/students"
  linkText="View Students"
  titleClassName="text-orange-300"
/>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riskData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {riskData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={COLORS[i]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CLASS BREAKDOWN */}
      <div className="mb-10">

            <SectionHeader
  title="Class Breakdown"
  icon={BookOpen}
  link="/instructor/classes"
  linkText="View All"
/>

        <div className="grid md:grid-cols-2 gap-4">

         {myClasses.map((cls) => {

  const students = classStudents.filter(
    (s) => s.classId === cls.id
  );

  const progress =
    students.reduce(
      (a, s) => a + s.progress,
      0
    ) / (students.length || 1);

  const risk = students.filter(
    (s) => s.progress < 40
  ).length;

  return (
    <ClassBreakdownCard
      key={cls.id}
      cls={cls}
      studentsCount={students.length}
      progress={progress}
      risk={risk}
    />
  );
})}
        </div>
      </div>

      {/* RISK STUDENTS */}
      <div className="mb-10">

          <SectionHeader
  title="Risk Students"
  link="/instructor/students"
  linkText="View All"
  titleClassName="text-orange-300"
/>

        {weakStudents.length === 0 ? (

          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
            Great! No high risk students currently.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-4">

           {weakStudents.slice(0, 6).map((s) => (
  <RiskStudentCard
    key={s.id}
    student={s}
  />
))}
          </div>
        )}
      </div>

      {/* SUGGESTED ACTIONS */}
     <SuggestedActionsCard
  title="Suggested Actions"
  link="/instructor/students"
  linkText="Open Students"
  actions={[
    "Schedule extra sessions for weak students",
    "Review pending and missing assignments",
    "Contact students with attendance below 60%",
    "Assign revision tasks for low progress classes",
    "Follow up with high priority students weekly",
  ]}
/>
    </div>
  );
}

