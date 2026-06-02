export const statusStyles = {
  Good: "bg-emerald-400/10 text-emerald-300",
  Average: "bg-yellow-400/10 text-yellow-300",
  "Needs Attention": "bg-red-400/10 text-red-300",
} as const;

export function getStudentStatus(progress: number) {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}

export function getStatusClass(status: keyof typeof statusStyles) {
  return statusStyles[status];
}