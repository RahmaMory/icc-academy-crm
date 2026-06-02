import { Send } from "lucide-react";

type Announcement = {
  id: number;
  author: string;
  message: string;
  date: string;
};

type Props = {
  announcement: string;
  setAnnouncement: React.Dispatch<
    React.SetStateAction<string>
  >;
  handleAnnouncement: () => void;
  announcements: Announcement[];
};

export default function AnnouncementsCard({
  announcement,
  setAnnouncement,
  handleAnnouncement,
  announcements,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center gap-3">
        
        <Send
          className="text-cyan-300"
          size={22}
        />

        <h2 className="text-xl font-bold">
          Announcements
        </h2>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
        
        <textarea
          value={announcement}
          onChange={(e) =>
            setAnnouncement(e.target.value)
          }
          placeholder="Post important update..."
          className="min-h-20 w-full resize-none bg-transparent text-sm outline-none placeholder:text-white/35"
        />

        <div className="mt-3 flex items-center justify-between gap-3">
          
          <p className="text-xs text-white/35">
            Visible to all students
          </p>

          <button
            onClick={handleAnnouncement}
            disabled={!announcement.trim()}
            className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-[#0b0f10] disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        
        {announcements.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/5 bg-black/25 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              
              <div>
                <h3 className="text-sm font-bold">
                  {item.author}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.message}
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-bold text-cyan-300">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}