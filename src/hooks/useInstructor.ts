import { useMemo } from "react";
import { instructorClasses, instructorUser, } from "../data";

export function useInstructor(instructorId?: number) {
  const classes = useMemo(() => {
    if (!instructorId) return instructorClasses;

    return instructorClasses.filter(
      (c) => c.instructorId === instructorId
    );
  }, [instructorId]);

  return {
    instructor: instructorUser,
    classes,
    totalClasses: classes.length,
  };
}


