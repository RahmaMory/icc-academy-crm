
interface Props {
  messages: Array<{
    id: string;
    sender: string;
    role: string;
    time: string;
    message: string;
  }>;
  onOpenPrivate: () => void;
}

export default function ClassroomChat({
  messages,
  onOpenPrivate,
}: Props) {
  return (
    <div className="rounded-[28px] border border-cyan-300/20 bg-white/4 p-6">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-white">
          Class Chat
        </h2>

       <button
  onClick={onOpenPrivate}
  className="text-xs px-4 py-2 rounded-full bg-cyan-300 text-black font-semibold"
>
  Ask privately
</button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-white">
                  {message.sender}
                </h3>
                <p className="text-xs text-cyan-300">
                  {message.role}
                </p>
              </div>

              <span className="text-sm text-white/35">
                {message.time}
              </span>

            </div>

            <p className="mt-4 text-sm text-white/70">
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}