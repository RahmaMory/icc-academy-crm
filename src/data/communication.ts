import type { PrivateChatMessage } from "./sharedTypes";

export const classChatMessages = [
  {
    id: 1,
    classId: 1,
    sender: "Ahmed Ali",
    role: "student",
    message: "Can we get another example on Flexbox?",
    time: "10:30 AM",
  },
  {
    id: 2,
    classId: 1,
    sender: "Instructor Name",
    role: "Instructor",
    message: "Sure, I will add one before the next session.",
    time: "10:45 AM",
  },
    {
    id: 3,
    classId: 2,
    sender: "mona samir",
    role: "student",
    message: "Can we get another example on Flexbox?",
    time: "10:30 AM",
  },
  {
    id: 4,
    classId: 2,
    sender: "Instructor Name",
    role: "Instructor",
    message: "Sure, I will add one before the next session.",
    time: "10:45 AM",
  },
   
  {
    id: 5,
    classId: 2,
    sender: "you",
    role: "student",
    message: "lool",
    time: "10:45 AM",
  },
];
export const privateChatMessages: PrivateChatMessage[] = [
  {
    id: 1,
    classId: 1,
    studentId: 1,
    instructorId: 1,

    sender: "Instructor Name",
    role: "instructor",

    message:
      "Hello Ahmed, I reviewed your assignment and it looks good.",

    time: "10:30 AM",
  },

  {
    id: 2,
    classId: 1,
    studentId: 1,
    instructorId: 1,

    sender: "Ahmed Ali",
    role: "student",

    message:
      "Thank you! I still have a question about Flexbox alignment.",

    time: "10:33 AM",
  },

  {
    id: 3,
    classId: 1,
    studentId: 2,
    instructorId: 1,

    sender: "Mona Samir",
    role: "student",

    message:
      "Can you explain the React task requirements again?",

    time: "11:00 AM",
  },

  {
    id: 4,
    classId: 1,
    studentId: 2,
    instructorId: 1,

    sender: "Instructor Name",
    role: "instructor",

    message:
      "Sure, I will upload another explanation video tonight.",

    time: "11:05 AM",
  },

  {
    id: 5,
    classId: 2,
    studentId: 4,
    instructorId: 1,

    sender: "Salma Hassan",
    role: "student",

    message:
      "I finished the hooks practice task successfully.",

    time: "2:15 PM",
  },

  {
    id: 6,
    classId: 2,
    studentId: 4,
    instructorId: 1,

    sender: "Instructor Name",
    role: "instructor",

    message:
      "Great work! Your hooks usage became much better.",

    time: "2:20 PM",
  },

  {
    id: 7,
    classId: 3,
    studentId: 8,
    instructorId: 2,

    sender: "Farah Nabil",
    role: "student",

    message:
      "I still struggle with arrays and object methods.",

    time: "4:10 PM",
  },

  {
    id: 8,
    classId: 3,
    studentId: 8,
    instructorId: 2,

    sender: "Ahmed Hassan",
    role: "instructor",

    message:
      "No worries, I will send you extra exercises after class.",

    time: "4:18 PM",
  },
];

export const classAnnouncements = [
  {
    id: 1,
    classId: 1,
    author: "Instructor Name",
    message: "Please review the HTML slides before next session.",
    date: "Today",
  },
];

export const classRoomSessions = [
  {
    id: 1,
    classId: 1,
    title: "HTML Structure Session",
    date: "Today",
    time: "6:00 PM",
    status: "Completed",
    agenda: "HTML structure, semantic tags, and page sections.",
  },
  {
    id: 2,
    classId: 1,
    title: "CSS Layout Session",
    date: "Next Sunday",
    time: "6:00 PM",
    status: "Upcoming",
    agenda: "Flexbox, Grid, spacing, and responsive basics.",
  },
  {
    id: 3,
    classId: 2,
    title: "React Components",
    date: "Tomorrow",
    time: "6:00 PM",
    status: "Upcoming",
    agenda: "Reusable components, props, and basic composition.",
  },
];


export const classCalendarEvents = [
  {
    id: 1,
    classId: 1,
    date: "2026-05-03",
    title: "HTML Structure",
    type: "Lecture",
    time: "6:00 PM",
    note: "Explain semantic tags and page sections.",
  },
  {
    id: 2,
    classId: 1,
    date: "2026-05-06",
    title: "CSS Practice",
    type: "Practice",
    time: "6:00 PM",
    note: "Solve layout exercises together.",
  },
  {
    id: 3,
    classId: 1,
    date: "2026-05-10",
    title: "Flexbox Session",
    type: "Lecture",
    time: "6:00 PM",
    note: "Flexbox and spacing system.",
  },
  {
    id: 4,
    classId: 1,
    date: "2026-05-14",
    title: "Responsive Practice",
    type: "Practice",
    time: "6:00 PM",
    note: "Practice responsive cards and layouts.",
  },
  {
    id: 5,
    classId: 1,
    date: "2026-06-18",
    title: "JavaScript Intro",
    type: "Lecture",
    time: "6:00 PM",
    note: "Variables, functions and DOM overview.",
  },
  {
    id: 6,
    classId: 1,
    date: "2026-06-22",
    title: "Mini Project Lab",
    type: "Practice",
    time: "6:00 PM",
    note: "Students build a small landing page.",
  },
  {
    id: 7,
    classId: 2,
    date: "2026-05-05",
    title: "React Components",
    type: "Lecture",
    time: "6:00 PM",
    note: "Props and component structure.",
  }, 
 {
  id: 8,
  classId: 1,
  date: "2026-05-17",
  title: "React Components",
  type: "Practice",
    time: "6:00 PM",
    note: "Props and component structure.",
  },
];

export const classMaterialLibrary = [
  {
    id: 1,
    classId: 1,
    title: "HTML & CSS Introduction",
    type: "Slides",
    uploadedAt: "Today",
    uploadedBy: "Instructor Name",
    visibility: "Visible to students",
  },
  {
    id: 2,
    classId: 1,
    title: "Flexbox Practice Sheet",
    type: "PDF",
    uploadedAt: "Yesterday",
    uploadedBy: "Instructor Name",
    visibility: "Visible to students",
  },
  {
    id: 3,
    classId: 2,
    title: "React Components Guide",
    type: "PDF",
    uploadedAt: "2 days ago",
    uploadedBy: "Instructor Name",
    visibility: "Visible to students",
  },
];