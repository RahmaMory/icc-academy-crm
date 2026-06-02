
import type { ClassStudent } from "./sharedTypes";
// import { defaultSessionHistory } from "./sessions";

export const classStudents: ClassStudent[] = [
  {
    id: 1,
    classId: 1,
    name: "Ahmed Ali",
    email: "ahmed@email.com",
    progress: 75,
    attendance: 90,
    completedTasks: 8,
    totalTasks: 10,
    lastActivity: "Today",
    recommendedAction: "Keep challenging with advanced tasks",
    priority: "Normal",

    enrolledCourses: ["Frontend", "JavaScript", "React"],

    learningProgress: [
      { title: "HTML & CSS Basics", value: 95 },
      { title: "JavaScript Core", value: 80 },
      { title: "React Components", value: 70 },
      { title: "Final Project", value: 55 },
    ],sessionHistory: [
  {
    session: "Session 1",
    topic: "HTML Basics",
    attendance: "Present",
    score: 85,
    progress: 80,
    taskStatus: "Submitted",
    instructorNote: "Good performance",
  },
  {
    session: "Session 2",
    topic: "CSS",
    attendance: "Present",
    score: 70,
    progress: 60,
    taskStatus: "Pending",
    instructorNote: "Needs improvement",
  },
],

    tasks: [
      { title: "Build Landing Page", status: "Submitted" },
      { title: "JavaScript Practice", status: "Submitted" },
      { title: "React Mini Project", status: "Submitted" },
      { title: "Portfolio Section", status: "Pending" },
    ],

    notes: [
      {
        title: "Strong progress",
        text: "Student is consistent and understands layout concepts well.",
      },
    ],

    weakPoints: [],
    // sessionHistory: defaultSessionHistory,
  },

  {
    id: 2,
    classId: 1,
    name: "Mona Samir",
    email: "mona@email.com",
    progress: 35,
    attendance: 70,
    completedTasks: 4,
    totalTasks: 10,
    lastActivity: "2 days ago",
    recommendedAction: "Review missed tasks",
    priority: "Medium",

    enrolledCourses: ["Frontend", "UI Basics", "JavaScript"],

    learningProgress: [
      { title: "HTML & CSS Basics", value: 70 },
      { title: "JavaScript Core", value: 45 },
      { title: "React Components", value: 25 },
      { title: "Final Project", value: 10 },
    ],

    tasks: [
      { title: "Build Landing Page", status: "Submitted" },
      { title: "JavaScript Practice", status: "Pending" },
      { title: "React Mini Project", status: "Missing" },
      { title: "Portfolio Section", status: "Missing" },
    ],

    notes: [
      {
        title: "Follow-up needed",
        text: "Needs extra practice on JavaScript functions and DOM.",
      },
    ],

    weakPoints: [],
sessionHistory: [
  {
    session: "Session 1",
    topic: "HTML Basics",
    attendance: "Present",
    score: 85,
    progress: 80,
    taskStatus: "Submitted",
    instructorNote: "Good performance",
  },
  {
    session: "Session 2",
    topic: "CSS",
    attendance: "Present",
    score: 70,
    progress: 60,
    taskStatus: "Pending",
    instructorNote: "Needs improvement",
  },
],  },

  {
    id: 3,
    classId: 1,
    name: "Youssef Khaled",
    email: "youssef@email.com",
    progress: 20,
    attendance: 55,
    completedTasks: 2,
    totalTasks: 10,
    lastActivity: "1 week ago",
    recommendedAction: "Schedule 1:1 follow-up",
    priority: "High",

    enrolledCourses: ["Frontend", "HTML/CSS", "Portfolio Basics"],

    learningProgress: [
      { title: "HTML & CSS Basics", value: 40 },
      { title: "JavaScript Core", value: 20 },
      { title: "React Components", value: 5 },
      { title: "Final Project", value: 0 },
    ],

    tasks: [
      { title: "Build Landing Page", status: "Pending" },
      { title: "JavaScript Practice", status: "Missing" },
      { title: "React Mini Project", status: "Missing" },
      { title: "Portfolio Section", status: "Missing" },
    ],sessionHistory: [
  {
    session: "Session 1",
    topic: "HTML Basics",
    attendance: "Present",
    score: 75,
    progress: 90,
    taskStatus: "Submitted",
    instructorNote: "Good performance",
  },
  {
    session: "Session 2",
    topic: "CSS",
    attendance: "Present",
    score: 30,
    progress: 40,
    taskStatus: "Pending",
    instructorNote: "Needs improvement",
  },
],

    notes: [
      {
        title: "High priority",
        text: "Low attendance and missing assignments.",
      },
    ],

    weakPoints: [],
    // sessionHistory: defaultSessionHistory,
  },

  {
    id: 4,
    classId: 2,
    name: "Salma Hassan",
    email: "salma@email.com",
    progress: 88,
    attendance: 95,
    completedTasks: 9,
    totalTasks: 10,
    lastActivity: "Today",
    recommendedAction: "Assign bonus challenge",
    priority: "Normal",

    enrolledCourses: ["React", "Hooks", "Routing"],

    learningProgress: [
      { title: "React Hooks", value: 90 },
      { title: "Routing", value: 85 },
    ],

    tasks: [
      { title: "Hooks Practice", status: "Submitted" },
    ],

    notes: [
      {
        title: "Excellent",
        text: "Very strong performance.",
      },
    ],

    weakPoints: [],
    // sessionHistory: defaultSessionHistory,
  },

  {
    id: 5,
    classId: 2,
    name: "Omar Adel",
    email: "omar@email.com",
    progress: 60,
    attendance: 82,
    completedTasks: 6,
    totalTasks: 10,
    lastActivity: "Yesterday",
    recommendedAction: "Review state management",
    priority: "Normal",

    enrolledCourses: ["React", "State Management"],

    learningProgress: [
      { title: "Hooks", value: 75 },
      { title: "State", value: 45 },
    ],

    tasks: [
      { title: "Dashboard UI", status: "Pending" },
    ],

    notes: [
      {
        title: "Needs review",
        text: "Struggles with state flow.",
      },
    ],

    weakPoints: [],
    // sessionHistory: defaultSessionHistory,
  },
];




