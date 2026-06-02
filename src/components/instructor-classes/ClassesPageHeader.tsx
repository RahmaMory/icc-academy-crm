type Props = {
  title: string;
  description: string;
};

export default function ClassesPageHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-8 pl-14 lg:pl-0">
      <h1 className="text-3xl font-bold sm:text-4xl">
        {title}
      </h1>

      <p className="mt-2 text-white/50">
        {description}
      </p>
    </div>
  );
}