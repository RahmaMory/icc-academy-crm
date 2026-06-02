type Props = {
  title: string;
  group: string;
  branch: string;
  session: string;
  image: string;

  instructorName?: string;
};
export default function ClassroomHeader({
  title,
  group,
  branch,
  session,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-cyan-300/20 bg-white/4">
      
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          
          <div>
            
            <h1 className="text-3xl font-bold text-white">
              {title}
            </h1>

            <p className="mt-2 text-white/50">
              {group}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              {branch}
            </span>

            <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm text-violet-200">
              {session}
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}