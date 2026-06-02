import { useMemo } from "react";
import { classMaterials } from "../data";

export function useMaterials(classId?: number) {
  const materials = useMemo(() => {
    if (!classId) return classMaterials;

    return classMaterials.filter(
      (m) => m.classId === classId
    );
  }, [classId]);

  return {
    materials,
  };
}