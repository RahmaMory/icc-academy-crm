export function getStudentStatus(progress: number) {
  if (progress < 30) return "Needs Attention";
  if (progress < 70) return "Average";
  return "Good";
}

export function getStatusClass(status: string) {
  if (status === "Good") {
    return "bg-emerald-400/10 text-emerald-300";
  }

  if (status === "Average") {
    return "bg-yellow-400/10 text-yellow-300";
  }

  return "bg-red-400/10 text-red-300";
}

export function getEventClass(type: string) {
  if (type === "Lecture") {
    return "border-cyan-300/30 bg-cyan-300/10 text-cyan-200";
  }

  if (type === "Practice") {
    return "border-violet-300/30 bg-violet-400/10 text-violet-200";
  }

  return "border-white/10 bg-white/10 text-white/70";
}

export function formatDateKey(date: Date) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}