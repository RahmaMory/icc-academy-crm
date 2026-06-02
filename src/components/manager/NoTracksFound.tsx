export default function NoTracksFound() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/4 p-10 text-center">
      <h3 className="text-xl font-bold">
        No tracks found
      </h3>

      <p className="mt-2 text-sm text-white/50">
        Try another search word or status.
      </p>
    </div>
  );
}