import { useEffect, useState } from "react";

export function useStudentNotes(student: any) {
      const [showNoteBox, setShowNoteBox] = useState(false);
  const [notes, setNotes] = useState(student?.notes ?? []);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    setNotes(student?.notes ?? []);
  }, [student]);

  function addNote(text: string) {
    if (!text.trim()) return;

    setNotes((prev: any[]) => [
      { title: "Instructor note", text },
      ...prev,
    ]);

    setNewNote("");
    setShowNoteBox(false);
  }

  function toggleNoteBox() {
    setShowNoteBox((prev) => !prev);
  }

  return {
    notes,
    showNoteBox,
    setShowNoteBox,
    addNote,
    newNote,
    setNewNote,
    toggleNoteBox,
  };
}