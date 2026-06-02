import { FileText } from "lucide-react";
import TaskRow from "./TaskRow";
import SectionHeader from "../shared/SectionHeader";

type Task = {
  title: string;
  status: "Submitted" | "Pending" | "Missing";
};

type Props = {
  tasks?: Task[];
};

export default function TaskAssignments({
  tasks = [],
}: Props) {

  if (!tasks.length) return null;

  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-7 shadow-2xl">

      <SectionHeader
  icon={FileText}
  title="Tasks & Assignments"
/>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskRow
            key={task.title}
            title={task.title}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}