import { Link } from "react-router-dom";

type Props = {
  badge?: string;

  title: string;

  description?: string;

  backLink?: string;
  backText?: string;
};

export default function PageHeader({
  badge,
  title,
  description,
  backLink,
  backText,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="pl-14 lg:pl-0">
        {badge && (
          <p className="text-sm font-semibold text-cyan-300">
            {badge}
          </p>
        )}

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-sm text-white/50">
            {description}
          </p>
        )}
      </div>

      {backLink && backText && (
        <Link
          to={backLink}
          className="text-sm font-semibold text-cyan-300 lg:self-end"
        >
          {backText}
        </Link>
      )}
    </div>
  );
}