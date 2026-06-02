import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import {
  classAnnouncements,
  classCalendarEvents,
  classMaterialLibrary,
  classStudents,
  instructorClasses
} from "../data";

;
import { useClassChat } from "../context/ClassChatContext";

import {
  formatDateKey,
  getStudentStatus,
} from "../utils/class/classHelpers";

type Status = "All" | "Good" | "Average" | "Needs Attention";

export default function useClassDetails() {
  const { classId } = useParams();

const calendarRef = useRef<HTMLElement | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<Status>("All");

  const [materialTitle, setMaterialTitle] = useState("");

  const [announcement, setAnnouncement] = useState("");

  const [chatMessage, setChatMessage] = useState("");

  const [selectedDate, setSelectedDate] =
    useState("2026-05-01");

  const [dayNote, setDayNote] = useState("");

  const currentClass = instructorClasses.find(
    (item) => item.id === Number(classId)
  );

  const students = classStudents.filter(
    (student) => student.classId === Number(classId)
  );

  const materials = classMaterialLibrary.filter(
    (material) => material.classId === Number(classId)
  );

  const announcements = classAnnouncements.filter(
    (item) => item.classId === Number(classId)
  );

  const calendarEvents = classCalendarEvents.filter(
    (event) => event.classId === Number(classId)
  );

  const selectedDayEvents = calendarEvents.filter(
    (event) => event.date === selectedDate
  );

  const getDayParts = (date: Date) => {
    const dateKey = formatDateKey(date);

    const events = calendarEvents.filter(
      (event) => event.date === dateKey
    );

    const hasLecture = events.some(
      (event) => event.type === "Lecture"
    );

    const hasPractice = events.some(
      (event) => event.type === "Practice"
    );

    return [
      events.length > 0 ? "has-event" : "",
      hasLecture ? "lecture-day" : "",
      hasPractice ? "practice-day" : "",
    ]
      .filter(Boolean)
      .join(" ");
  };

const chatContext = useClassChat();

  const getClassMessages =
    chatContext?.getClassMessages;

  const sendMessage = chatContext?.sendMessage;

  const chatMessages =
    getClassMessages?.(classId ?? "") || [];

  useEffect(() => {
    const calendar = calendarRef.current;

    if (!calendar) return;

    const handleChange = (event: any) => {
      const value =
        event?.target?.value ||
        event?.currentTarget?.value ||
        event?.value;

      if (value) {
        setSelectedDate(value);
      }
    };

    calendar.addEventListener?.(
      "change",
      handleChange
    );

    return () => {
      calendar.removeEventListener?.(
        "change",
        handleChange
      );
    };
  }, []);

  useEffect(() => {
    const calendar = calendarRef.current;

    if (!calendar) return;

    (calendar as any).getDayParts =
      getDayParts;
  }, [calendarEvents]);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const status = getStudentStatus(
        student.progress
      );

      const search =
        searchTerm.toLowerCase();

      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search) ||
        student.email
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        selectedStatus === "All" ||
        status === selectedStatus;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [students, searchTerm, selectedStatus]);

  function handleUploadMaterial() {
    if (!materialTitle.trim()) return;

    setMaterialTitle("");
  }

  function handleAnnouncement() {
    if (!announcement.trim()) return;

    setAnnouncement("");
  }

  function handleSendMessage() {
    if (!chatMessage.trim()) return;

    sendMessage({
      classId: Number(classId),
      sender: "Instructor",
      role: "instructor",
      message: chatMessage,
      time: "now",
    });

    setChatMessage("");
  }

  function handleAddDayNote() {
    if (!dayNote.trim()) return;

    setDayNote("");
  }

  return {
    classId,

    currentClass,

    students,
    materials,
    announcements,

    filteredStudents,

    calendarRef,

    selectedDate,
    selectedDayEvents,

    dayNote,
    setDayNote,
    handleAddDayNote,

    searchTerm,
    setSearchTerm,

    selectedStatus,
    setSelectedStatus,

    materialTitle,
    setMaterialTitle,
    handleUploadMaterial,

    announcement,
    setAnnouncement,
    handleAnnouncement,

    chatMessages,

    chatMessage,
    setChatMessage,
    handleSendMessage,
  };
}