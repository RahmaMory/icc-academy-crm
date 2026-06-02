export function getStatusClass(status: string) {
  if (status === "Uploaded" || status === "Reviewed") {
    return "bg-emerald-400/10 text-emerald-300";
  }

  if (
    status === "Needs Review" ||
    status === "Pending Review"
  ) {
    return "bg-yellow-400/10 text-yellow-300";
  }

  return "bg-red-400/10 text-red-300";
}