type Announcement = {
  id: number;
  author: string;
  message: string;
  date: string;
};

type Props = {
  announcements: Announcement[];
};

export default function ClassroomAnnouncements({
  announcements,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-6">
      
      <h2 className="mb-5 text-2xl font-bold text-white">
        Announcements
      </h2>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-black/20 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              
              <h3 className="font-semibold text-white">
                {item.author}
              </h3>

              <span className="text-sm text-white/35">
                {item.date}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}