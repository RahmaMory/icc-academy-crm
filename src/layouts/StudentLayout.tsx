

import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Menu,
  X,
  LibraryBig,
  Award,
  Settings,
} from "lucide-react";
import { currentUser } from "../data";

const navItems = [
  {
    label: "Dashboard",
    path: "/student",
    icon: LayoutDashboard,
  },
  {
    label: "My Courses",
    path: "/student/my-courses",
    icon: BookOpen,
  },
  {
    label: "All Courses",
    path: "/student/courses",
    icon: LibraryBig,
  },   {
    label: "Certificates",
    path: "/student/certificates",
    icon: Award,
  },
  {
    label: "Settings",
    path: "/student/settings",
    icon: Settings,
  },
];

export default function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0f10] text-white">
      {/* Mobile top button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-2xl border border-cyan-300/25 bg-[#151817] p-3 text-cyan-200 shadow-xl lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-screen border-r border-cyan-400/20 bg-[#151817] transition-all duration-300",
          isSidebarOpen ? "lg:w-64" : "lg:w-20",
          isMobileOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full",
          "lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-24 items-center justify-between border-b border-cyan-400/20 px-4">
            <Link to="/student" className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-[#050816]">
                <GraduationCap size={24} />
              </div>

              {isSidebarOpen && (
                <div>
                  <h1 className="text-xl font-bold leading-6">ICC</h1>
                  <p className="text-xl font-bold leading-6">Academy</p>
                </div>
              )}
            </Link>

            {/* Desktop collapse button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden rounded-xl bg-white/5 p-2 text-white/60 hover:text-white lg:block"
            >
              <Menu size={20} />
            </button>

            {/* Mobile close button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl bg-white/5 p-2 text-white/60 hover:text-white lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/student"}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      isSidebarOpen ? "justify-start" : "justify-center",
                      isActive
                        ? "border border-cyan-300/50 bg-cyan-300/15 text-cyan-200"
                        : "text-white/60 hover:bg-white/5 hover:text-white",
                    ].join(" ")
                  }
                >
                  <Icon size={19} />

                  {isSidebarOpen && <span>{item.label}</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* User card */}
          <div className="border-t border-cyan-400/20 p-4">
            <div
              className={[
                "flex items-center rounded-2xl border border-cyan-300/30 bg-white/[0.04] p-4",
                isSidebarOpen ? "gap-3" : "justify-center",
              ].join(" ")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-sm font-bold text-[#050816]">
                {currentUser.name.charAt(0)}
              </div>

              {isSidebarOpen && (
                <div>
                  <p className="text-sm font-bold">{currentUser.name}</p>
                  <p className="text-xs text-white/50">{currentUser.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <section
        className={[
          "min-h-screen transition-all duration-300",
          isSidebarOpen ? "lg:pl-64" : "lg:pl-20",
        ].join(" ")}
      >
        <Outlet />
      </section>
    </main>
  );
}