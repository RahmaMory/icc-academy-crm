import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Event = {
  id: number;
  title: string;
  type: string;
  time: string;
  note: string;
  date: string;
};

type Props = {
  calendarRef: React.RefObject<HTMLElement>;
  selectedDate: string;
  selectedDayEvents: Event[];
  dayNote: string;
  setDayNote: React.Dispatch<
    React.SetStateAction<string>
  >;
  handleAddDayNote: () => void;
  getEventClass: (
    type: string
  ) => string;
};

export default function ClassCalendar({
  calendarRef,
  selectedDate,
  selectedDayEvents,
  dayNote,
  setDayNote,
  handleAddDayNote,
  getEventClass,
}: Props) {
  return (
    <div className="mt-6 rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center gap-3">
        
        <CalendarDays
          className="text-cyan-300"
          size={22}
        />

        <div>
          <h2 className="text-xl font-bold">
            Class Calendar
          </h2>

          <p className="text-sm text-white/45">
            Lecture and practice days
            are highlighted inside the
            calendar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
        
        {/* CALENDAR */}

        <div className="rounded-3xl border border-white/10 bg-black/25 p-4">
          
          <calendar-date
            ref={calendarRef}
            value={selectedDate}
            today="2026-05-07"
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

        {/* EVENTS */}

        <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
          
          <div className="flex items-center justify-between gap-3">
            
            <div>
              <p className="text-xs font-bold text-cyan-300">
                Selected Day
              </p>

              <h3 className="mt-1 text-lg font-bold">
                {selectedDate}
              </h3>
            </div>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
              {
                selectedDayEvents.length
              }{" "}
              events
            </span>
          </div>

          <div className="mt-4 space-y-3">
            
            {selectedDayEvents.length ===
            0 ? (
              <div className="rounded-2xl bg-white/4 p-4 text-sm text-white/45">
                No sessions scheduled
                for this day.
              </div>
            ) : (
              selectedDayEvents.map(
                (event) => (
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
                          {event.type} •{" "}
                          {event.time}
                        </p>

                        <p className="mt-2 text-sm opacity-80">
                          {event.note}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>

          <textarea
            value={dayNote}
            onChange={(e) =>
              setDayNote(
                e.target.value
              )
            }
            placeholder="Add note for this day..."
            className="mt-4 min-h-20 w-full resize-none rounded-2xl border border-white/10 bg-black/25 p-4 outline-none"
          />

          <button
            onClick={handleAddDayNote}
            disabled={!dayNote.trim()}
            className="mt-3 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-[#0b0f10] disabled:opacity-50"
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}