import { BookOpen } from "lucide-react";
import ProgressRow from "./ProgressRow";
import SectionHeader from "../shared/SectionHeader";

type LearningItem = {
  title: string;
  value: number;
};

type Props = {
  learningProgress?: LearningItem[];
};

export default function LearningProgress({
  learningProgress = [],
}: Props) {
  if (!learningProgress.length) return null;

  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-7 shadow-2xl">
      <SectionHeader
  icon={BookOpen}
  title="Learning Progress"
/>
      <div className="space-y-6">
        {learningProgress.map((item) => (
          <ProgressRow
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}