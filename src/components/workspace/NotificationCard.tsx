type Props = {
  notification: {
    id: number;
    message: string;
    date: string;
  };
};

export default function NotificationCard({
  notification,
}: Props) {
  return (
    <div className="rounded-2xl bg-black/25 p-4">

      <p className="font-semibold">
        {notification.message}
      </p>

      <p className="mt-1 text-xs text-white/45">
        {notification.date}
      </p>

    </div>
  );
}