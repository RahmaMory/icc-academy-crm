import { useMemo } from "react";
import { classCalendarEvents } from "../data";

export function useCalendar(classId?: number) {
  const events = useMemo(() => {
    if (!classId) return classCalendarEvents;

    return classCalendarEvents.filter(
      (e) => e.classId === classId
    );
  }, [classId]);

  return {
    events,
  };
}