import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  FileText,
  MessageCircle,
} from "lucide-react";

import {
  classAnnouncements,
  classCalendarEvents,
  classMaterialLibrary,
  instructorClasses
} from "../../data";

import { useClassChat } from "../../context/ClassChatContext";
import { useState } from "react";
export default function StudentClassroom() {
  const { classId } = useParams();
    const [chatMessage, setChatMessage] = useState("");

  const chatContext = useClassChat();

const getClassMessages = chatContext?.getClassMessages;
const sendMessage = chatContext?.sendMessage;

const chatMessages = getClassMessages?.(Number(classId)) || [];

  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  const materials = classMaterialLibrary.filter(
    (item) => item.classId === Number(classId)
  );

  const announcements = classAnnouncements.filter(
    (item) => item.classId === Number(classId)
  );

 
  const calendarEvents = classCalendarEvents.filter(
    (item) => item.classId === Number(classId)
  );
  function handleSendMessage() {
    if (!chatMessage.trim()) return;

    sendMessage({
      classId: Number(classId),
      sender: "Student",
      role: "student",
      message: chatMessage,
      time: "now",
    });

    setChatMessage("");
  }
  if (!currentClass) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0f10] text-white">
        <p className="text-xl font-bold">Classroom not found</p>
      </main>
    );
  }

  // STUDENT DATA
  const studentProgress = 68;

  // LATEST ONLY
  const latestEvents = [...calendarEvents]
    .reverse()
    .slice(0, 2);

  const latestAnnouncements = [...announcements]
    .reverse()
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">

        {/* BACK */}
        <Link
          to="/student/my-courses"
          className="mb-6 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
        >
          <ArrowLeft size={18} />
          Back to my courses
        </Link>

        {/* HERO */}
        <div className="overflow-hidden rounded-4xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%),#171b20] p-6 shadow-2xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-cyan-300">
                {currentClass.group} • {currentClass.branch}
              </p>

              <h1 className="mt-3 text-4xl font-black">
                {currentClass.title}
              </h1>

              <p className="mt-3 max-w-2xl text-white/55">
                Continue your learning journey and stay updated with your class.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                  {currentClass.session}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  {materials.length} Materials
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <img
              src={currentClass.image}
              alt={currentClass.title}
              className="h-44 w-full rounded-3xl object-cover lg:w-[320px]"
            />
          </div>

          {/* STATS */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <InfoCard
              icon={BookOpen}
              label="Your Progress"
              value={`${studentProgress}%`}
            />

            <Link to={`/student/classroom/${classId}/materials`}>
              <InfoCard
                icon={FileText}
                label="Course Materials"
                value={`${materials.length} Files`}
              />
            </Link>

          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">

          {/* LEFT SIDE */}
          <section className="space-y-6">

            {/* CLASS SCHEDULE */}
            <Panel title="Class Schedule" icon={CalendarDays}>

              <div className="space-y-4">

                {latestEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-cyan-300/15 bg-black/25 p-5 transition hover:border-cyan-300/30"
                  >
                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <h3 className="text-lg font-bold">
                          {event.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/55">
                          {event.date}
                        </p>
                      </div>

                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                        {event.time}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/70">
                      {event.note}
                    </p>
                  </div>
                ))}

              </div>

             <Link
  to={`/student/classroom/${classId}/schedule`}
  className="mt-5 inline-flex rounded-full border border-cyan-300/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-black"
>
  View Full Schedule
</Link>
            </Panel>

            {/* ANNOUNCEMENTS */}
            <Panel title="Announcements" icon={MessageCircle}>

              <div className="space-y-4">

                {latestAnnouncements.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-black/25 p-5"
                  >
                    <div className="flex items-center justify-between gap-3">

                      <h3 className="font-bold">
                        {item.author}
                      </h3>

                      <span className="text-xs text-cyan-300">
                        {item.date}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/70">
                      {item.message}
                    </p>
                  </div>
                ))}

              </div>

            </Panel>

          </section>

          {/* RIGHT SIDE */}
          <aside className="space-y-6">

            {/* CHAT */}
          <div className="relative">

  <Link
    to={`/student/classroom/${classId}/private-chat`}
    className="absolute -top-3 right-4 z-20 rounded-full border border-purple-400/40 bg-[#18122B] px-5 py-2 text-sm font-semibold text-purple-300 shadow-lg shadow-purple-500/10 transition hover:scale-105 hover:bg-purple-400 hover:text-black"
  >
    Message Instructor
  </Link>

  <Panel title="Class Chat" icon={MessageCircle}>

    {/* TOP BAR */}
    <div className="mb-5">

      <h3 className="font-semibold text-white">
        Community Chat
      </h3>

      <p className="mt-1 text-xs text-white/40">
        Messages visible to all students
      </p>

    </div>

    {/* CHAT MESSAGES */}
    <div className="max-h-96 space-y-3 overflow-y-auto pr-1">

      {chatMessages.map((msg) => (
        <div
          key={msg.id}
          className={`rounded-2xl p-4 ${
            msg.role === "student"
              ? "ml-6 border border-cyan-300/10 bg-cyan-300/10"
              : "mr-6 border border-white/5 bg-white/5"
          }`}
        >
          <div className="flex items-center justify-between gap-3">

            <p className="text-sm font-bold">
              {msg.sender}
            </p>

            <span className="text-[11px] text-white/40">
              {msg.time}
            </span>

          </div>

          <p className="mt-3 text-sm leading-6 text-white/70">
            {msg.message}
          </p>
        </div>
      ))}

    </div>

    {/* INPUT */}
    <div className="mt-5 flex gap-2">

     <input
  value={chatMessage}
  onChange={(e) => setChatMessage(e.target.value)}
  placeholder="Write message..."
  className="flex-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
/>

      <button
  onClick={handleSendMessage}
  className="rounded-2xl bg-cyan-300 px-5 font-semibold text-black transition hover:bg-cyan-200"
>
  Send
</button>

    </div>

  </Panel>

</div>
          </aside>

        </div>
      </section>
    </main>
  );
}

function Panel({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-5 shadow-2xl backdrop-blur-sm">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
          <Icon size={20} />
        </div>

        <h2 className="text-xl font-bold">
          {title}
        </h2>

      </div>

      {children}

    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/40 hover:bg-black/30">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
        <Icon size={22} />
      </div>

      <p className="text-sm text-white/45">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-black">
        {value}
      </h3>

    </div>
  );
}