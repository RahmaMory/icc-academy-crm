import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type AlertCardProps = {
  alert: {
    id: string;
    title: string;
    desc: string;
    meta: string;
    link: string;
  };
};

export default function AlertCard({
  alert,
}: AlertCardProps) {
  return (
    <Link
      to={alert.link}
      className="block rounded-2xl bg-black/25 p-4 transition hover:-translate-y-1 hover:bg-black/40 hover:ring-1 hover:ring-orange-300/40"
    >
      <div className="flex justify-between gap-3">
        <div>
          <h4 className="font-bold">
            {alert.title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-white/45">
            {alert.desc}
          </p>

          <p className="mt-2 text-sm text-orange-300">
            {alert.meta}
          </p>
        </div>

        <ArrowRight
          size={16}
          className="mt-1 shrink-0 text-orange-300"
        />
      </div>
    </Link>
  );
}