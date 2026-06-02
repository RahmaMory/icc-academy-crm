export function getAverage(numbers: number[]): number {
  if (!numbers.length) return 0;

  return Math.round(
    numbers.reduce((sum, n) => sum + n, 0) / numbers.length
  );
}

export type StudentStatus = "Needs Attention" | "Average" | "Good";

export function getStudentStatus(progress: number): StudentStatus {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}