type NoteCardProps = {
  title: string;
  text: string;
};

export default function NoteCard({
  title,
  text,
}: NoteCardProps) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">
      <h3 className="font-bold text-orange-200">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/55">
        {text}
      </p>
    </div>
  );
}