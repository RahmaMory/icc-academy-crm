
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import { currentUser, dashboardStats } from "../../data";


import ProgressCircle from "../../components/shared/ProgressCircle";
import StudentHeader from "../../components/shared/UserHeader";
import DashboardHero from "../../components/shared/DashboardHero";
import StatCard from "../../components/shared/StatCard";
const firstName = currentUser.name.split(" ")[0];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#0b0f10] text-white">
      
      {/* HEADER */}
      <StudentHeader
        title="Student Dashboard"
        subtitle="Track your learning progress and continue your courses"
      />

      <div className="px-8 py-8">
        <section>

          {/* HERO */}
        <DashboardHero
  role="student"
  name={firstName}
  badgeText="Welcome back"
  subtitle={`You have ${dashboardStats.enrolledCourses} active courses this week.`}
>
  <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:items-center">
    
    {/* Progress - هيتحرك لفوق بصريًا */}
    <div className="md:-translate-y-2">
      <ProgressCircle value={dashboardStats.averageProgress} />
    </div>

    {/* Button */}
    <Link
      to="/student/my-courses"
      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#0b0f10] transition hover:scale-105"
    >
      Continue Learning
      <ArrowRight size={18} />
    </Link>

  </div>
</DashboardHero>
          {/* STATS */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link to="/student/my-courses">
              <StatCard
                icon={BookOpen}
                value={dashboardStats.enrolledCourses}
                label="Enrolled Courses"
                trend="+2 this month"
              />
            </Link>

            <StatCard
              icon={CheckCircle2}
              value={dashboardStats.completedSteps}
              label="Completed Steps"
              trend="+1 today"
            />

            <StatCard
              icon={GraduationCap}
              value={`${dashboardStats.averageProgress}%`}
              label="Average Progress"
              trend="+12% this week"
            />
          </div>

          {/* SECTION TITLE */}
          <div className="mt-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Active Courses</h2>
              <p className="mt-1 text-sm text-white/50">
                Pick up where you left off
              </p>
            </div>

            <Link
              to="/student/my-courses"
              className="flex items-center gap-2 text-sm font-bold text-cyan-300"
            >
              View My Courses
              <ArrowRight size={17} />
            </Link>
          </div>

        </section>
      </div>
    </div>
  );
}