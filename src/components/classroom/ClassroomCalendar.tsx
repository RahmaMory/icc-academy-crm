
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type CalendarEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  note?: string;
};

type Props = {
events: CalendarEvent[];
  allowNotes?: boolean;
};
interface CalendarDateElement extends HTMLElement {
  value: string;
}
function getEventClass(type: string) {
  if (type === "Lecture") {
    return "border-cyan-300/30 bg-cyan-300/10 text-cyan-200";
  }

  if (type === "Practice") {
    return "border-violet-300/30 bg-violet-400/10 text-violet-200";
  }

  return "border-white/10 bg-white/10 text-white/70";
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ClassroomCalendar({
  events,
  allowNotes = false,
}: Props) {

const calendarRef = useRef<CalendarDateElement | null>(null);
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [dayNote, setDayNote] = useState("");

  const selectedDayEvents = events.filter(
    (event) => event.date === selectedDate
  );

  const getDayParts = (date: Date) => {
    const dateKey = formatDateKey(date);

    const dayEvents = events.filter(
      (event) => event.date === dateKey
    );

    const hasLecture = dayEvents.some(
      (event) => event.type === "Lecture"
    );

    const hasPractice = dayEvents.some(
      (event) => event.type === "Practice"
    );

    return [
      dayEvents.length > 0 ? "has-event" : "",
      hasLecture ? "lecture-day" : "",
      hasPractice ? "practice-day" : "",
    ]
      .filter(Boolean)
      .join(" ");
  };

useEffect(() => {
  const calendar = calendarRef.current;

  if (!calendar) return;

  const handleChange = (event: Event) => {
    const target = event.target as CalendarDateElement;

    const value =
      target?.value ||
      calendar.value;

    if (value) {
      setSelectedDate(value);
    }
  };

  calendar.addEventListener(
    "change",
    handleChange
  );

  return () => {
    calendar.removeEventListener(
      "change",
      handleChange
    );
  };
}, []);
  function handleAddNote() {
    if (!dayNote.trim()) return;

    setDayNote("");
  }

  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <CalendarDays className="text-cyan-300" size={22} />

        <div>
          <h2 className="text-xl font-bold text-white">
            Class Calendar
          </h2>

          <p className="text-sm text-white/45">
            Lecture and practice days are highlighted inside the calendar.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div className="rounded-3xl border border-white/10 bg-black/25 p-4">
          <calendar-date
  ref={calendarRef as React.Ref<HTMLElement>}
            value={selectedDate}
            today={today}
            getDayParts={getDayParts}
            class="mx-auto block rounded-2xl bg-[#101615] p-3 text-white"
          >
            <ChevronLeft
              slot="previous"
              aria-label="Previous"
              size={18}
            />

            <ChevronRight
              slot="next"
              aria-label="Next"
              size={18}
            />

            <calendar-month></calendar-month>
          </calendar-date>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-cyan-200">
              Lecture
            </span>

            <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-3 py-1 text-violet-200">
              Practice
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-cyan-300">
                Selected Day
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {selectedDate}
              </h3>
            </div>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
              {selectedDayEvents.length} events
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {selectedDayEvents.length === 0 ? (
              <div className="rounded-2xl bg-white/4 p-4 text-sm text-white/45">
                No sessions scheduled for this day.
              </div>
            ) : (
              selectedDayEvents.map((event) => {
                const status =
                  event.date < today
                    ? "Past"
                    : event.date === today
                    ? "Today"
                    : "Upcoming";

                return (
                  <div
                    key={event.id}
                    className={`rounded-2xl border p-4 ${getEventClass(
                      event.type
                    )}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold">
                          {event.title}
                        </h4>

                        <p className="mt-1 text-xs opacity-80">
                          {event.type} • {event.time}
                        </p>

                        {event.note && (
                          <p className="mt-2 text-sm opacity-80">
                            {event.note}
                          </p>
                        )}

                        <span
                          className={`
                            mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold
                            ${
                              status === "Today"
                                ? "bg-cyan-300/15 text-cyan-200"
                                : status === "Upcoming"
                                ? "bg-emerald-400/15 text-emerald-300"
                                : "bg-white/10 text-white/45"
                            }
                          `}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {allowNotes && (
            <>
              <textarea
                value={dayNote}
                onChange={(e) => setDayNote(e.target.value)}
                placeholder="Add note for this day..."
                className="mt-4 min-h-20 w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 text-white outline-none"
              />

              <button
                onClick={handleAddNote}
                disabled={!dayNote.trim()}
                className="mt-3 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-[#0b0f10] disabled:opacity-50"
              >
                Add Note
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}