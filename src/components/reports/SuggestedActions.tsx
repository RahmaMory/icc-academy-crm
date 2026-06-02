import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  actions: string[];
  link: string;
  linkText: string;
};

export default function SuggestedActionsCard({
  title,
  actions,
  link,
  linkText,
}: Props) {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-5">
      
      <div className="mb-3 flex items-center justify-between">
        
        <h2 className="text-lg font-bold text-yellow-300">
          {title}
        </h2>

        <Link
          to={link}
          className="flex items-center gap-1 text-sm text-yellow-300 hover:text-yellow-200"
        >
          {linkText}
          <ArrowRight size={15} />
        </Link>
      </div>

      <ul className="space-y-2 text-sm text-white/70">
        {actions.map((action, index) => (
          <li key={index}>
            • {action}
          </li>
        ))}
      </ul>
    </div>
  );
}