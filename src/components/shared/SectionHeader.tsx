
import { Link } from "react-router-dom";

type Props = {
  icon?: React.ElementType;

  title: string;

  subtitle?: string;
  description?: string;

  iconClassName?: string;
  titleClassName?: string;

  className?: string;

  rightElement?: React.ReactNode;

  link?: string;
  linkText?: string;
};

export default function SectionHeader({
  icon: Icon,

  title,

  subtitle,
  description,

  iconClassName = "text-cyan-300",
  titleClassName = "",

  className = "",

  rightElement,

  link,
  linkText,
}: Props) {
  const text = subtitle ?? description;

  return (
    <div
      className={`mb-5 flex items-center justify-between gap-3 ${className}`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon
            className={iconClassName}
            size={22}
          />
        )}

        <div>
          <h2
            className={`text-xl font-bold ${titleClassName}`}
          >
            {title}
          </h2>

          {text && (
            <p className="text-sm text-white/45">
              {text}
            </p>
          )}
        </div>
      </div>

      {rightElement}

      {!rightElement && link && linkText && (
        <Link
          to={link}
          className="text-sm text-cyan-300 hover:text-cyan-200"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}