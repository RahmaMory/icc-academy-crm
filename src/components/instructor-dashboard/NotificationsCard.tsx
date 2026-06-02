import { Bell } from "lucide-react";

type Notification = {
  id: string | number;
  message: string;
  date: string;
};

type Props = {
  notifications: Notification[];
};

export default function NotificationsCard({
  notifications,
}: Props) {

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 rounded-[28px] border border-orange-400/25 bg-orange-400/4 p-5 shadow-2xl sm:p-6">

      <div className="mb-4 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
          <Bell size={22} />
        </div>

        <div>
          <h3 className="font-bold">
            Manager Alerts
          </h3>

          <p className="text-xs text-white/45">
            Messages and warnings from manager.
          </p>
        </div>
      </div>

      <div className="space-y-3">

        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-2xl bg-black/25 p-4"
          >
            <p className="font-semibold">
              {notification.message}
            </p>

            <p className="mt-1 text-xs text-white/45">
              {notification.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}