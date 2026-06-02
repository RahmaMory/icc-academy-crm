import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

import {
  classCalendarEvents,
  instructorClasses
} from "../../data";

export default function StudentSchedule() {
  const { classId } = useParams();

  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  const events = classCalendarEvents.filter(
    (item) => item.classId === Number(classId)
  );

  if (!currentClass) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0f10] text-white">
        Classroom not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">

        {/* BACK */}
        <Link
          to={`/student/classroom/${classId}`}
          className="mb-6 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
        >
          <ArrowLeft size={18} />
          Back to classroom
        </Link>

        {/* HEADER */}
        <div className="rounded-[30px] border border-cyan-300/20 bg-white/4 p-6 shadow-2xl">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
              <CalendarDays size={28} />
            </div>

            <div>
              <p className="text-sm text-cyan-300">
                {currentClass.group}
              </p>

              <h1 className="mt-1 text-3xl font-black">
                Full Class Schedule
              </h1>
            </div>

          </div>

        </div>

        {/* EVENTS */}
        <div className="mt-6 space-y-5">

          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-[28px] border border-cyan-300/15 bg-white/4 p-6 shadow-xl"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    {event.title}
                  </h2>

                  <p className="mt-3 text-sm text-white/50">
                    {event.date}
                  </p>

                  <p className="mt-4 max-w-3xl leading-7 text-white/75">
                    {event.note}
                  </p>
                </div>

                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-200">
                  {event.time}
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}