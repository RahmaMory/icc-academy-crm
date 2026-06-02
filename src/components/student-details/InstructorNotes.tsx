import { MessageSquare } from "lucide-react";
import NoteCard from "./NoteCard";
import SectionHeader from "../shared/SectionHeader";

type Note = {
  title: string;
  text: string;
};

type InstructorNotesCardProps = {
  notes: Note[];
  showNoteBox: boolean;
  setShowNoteBox: React.Dispatch<React.SetStateAction<boolean>>;
  newNote: string;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
  handleAddNote: () => void;
};
export default function InstructorNotesCard({
  notes,
  showNoteBox,
  newNote,
  setNewNote,
  handleAddNote,
}: InstructorNotesCardProps) {
  return (
    <div className="rounded-[28px] border border-orange-400/25 bg-orange-400/4 p-6 shadow-2xl">
    <SectionHeader
  icon={MessageSquare}
  title="Instructor Notes"
  iconClassName="text-orange-300"
/>

      {showNoteBox && (
        <div className="mb-4 rounded-2xl bg-black/25 p-4">
          <textarea
            value={newNote}
            onChange={(e) =>
              setNewNote(e.target.value)
            }
            placeholder="Write a private note about this student..."
            className="min-h-28 w-full resize-none rounded-xl border border-white/10 bg-black/30 p-3 text-sm outline-none"
          />

          <button
            onClick={handleAddNote}
            className="mt-3 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-[#0b0f10]"
          >
            Save Note
          </button>
          
        </div>
      )}

      <div className="space-y-4">
        {notes.map((note, index) => (
          <NoteCard
            key={`${note.title}-${index}`}
            title={note.title}
            text={note.text}
          />
        ))}
      </div>
    </div>
  );
}