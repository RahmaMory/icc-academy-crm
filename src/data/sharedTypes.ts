export type Role = "student" | "instructor" | "manager";
export type AttendanceStatus = "Present" | "Absent" | "Late";
export type TaskStatus = "Submitted" | "Pending" | "Missing";
export type Level =
  | "Beginner"
  | "Intermediate"
  | "Advanced";
  export type Priority =
  | "Normal"
  | "Medium"
  | "High";
export type Course = {
  id: number;
  title: string;
  level?: Level;
  duration?: string;
  steps: number;
  image: string;
  isNew?: boolean;
  description?: string;
};

export type Notification = {
  id: number;
  instructorId: number;
  message: string;
  date: string;
};

export type StudentEnrollment = {
  studentId: number;
  classId: number;
  progress: number;
  completedSteps: number;
};

export type SessionHistory = {
  session: string;
  topic: string;
  attendance: AttendanceStatus;
  score: number;
  progress: number;
taskStatus: TaskStatus;
  instructorNote: string;
};
export type WeakPoint = {
  title: string;
  type: "Lecture" | "Assignment" | "Quiz" | "Attendance" | "Skill";
  status: "Weak" | "Missing" | "Needs Review" | "Pending" | "Critical";
  note: string;
};

export type PerformanceAlert = {
  type: "Assignment" | "Quiz" | "Attendance" | "Session";
  title: string;
  status:
  | "Pending"
  | "Missing"
  | "Critical"
  | "Weak Performance"
  | "Average"
  | "Absent"
  | "Needs Review";
  date?: string;
  score?: string;
  impact: string;
  instructorAction: string;
};


export type LearningProgressItem = {
  title: string;
  value: number;
};

export type StudentTask = {
  title: string;
  status: TaskStatus;
};

export type StudentNote = {
  title: string;
  text: string;
};

export interface DashboardStats {
  enrolledCourses: number;
  completedSteps: number;
  averageProgress: number;
}
export interface InstructorClass {
  id: number;
  instructorId: number;

  title: string;
  level: Level;

  duration: string;
  steps: number;

  instructor: string;

  group: string;
  branch: string;
  session: string;

  students: number;
  progress: number;

  lastActivity: string;

  image: string;
}
export interface Student {
  id: number;
  classId: number;

  name: string;
  email: string;

  progress: number;
  attendance: number;

  avatar?: string;
}

export interface Material {
  id: number;
  classId: number;

  title: string;
  type: string;

  uploadedAt: string;
}

export interface Announcement {
  id: number;
  classId: number;

  title: string;
  message: string;

  createdAt: string;
}

export interface CalendarEvent {
  id: number;
  classId: number;

  title: string;

  date: string;
  time: string;

  type: CalendarEventType;
}


export type ClassStudent = {
  id: number;
  classId: number;
  name: string;
sessionHistory?: SessionHistory[];
  email: string;
  progress: number;
  attendance: number;
  completedTasks: number;
  totalTasks: number;
  lastActivity: string;
  recommendedAction: string;
  priority: Priority;

  enrolledCourses: string[];

learningProgress: LearningProgressItem[];

tasks: StudentTask[];

notes: StudentNote[];

  weakPoints?: WeakPoint[];

  performanceAlerts?: PerformanceAlert[];
};

export type ChatRole = "student" | "instructor";

export type ChatMessage = {
  id: number;
  classId: number;
  sender: string;
  role: ChatRole;
  message: string;
  time: string;
};

export type PrivateChatMessage = {
  id: number;
  classId: number;
  studentId: number;
  instructorId: number;
  sender: string;
  role: ChatRole;
  message: string;
  time: string;
};
export type InstructorUser = {
  id: number;
  name: string;
  email: string;
  role: "instructor";
};
export type Status =
  | "All"
  | StudentStatus;
export type StudentStatus =
  | "Good"
  | "Average"
  | "Needs Attention";

export type CalendarEventType =
  | "Lecture"
  | "Practice"
  | "Exam";

  export type TrackStatus = "Active" | "Draft";

export type ManagerTrack = {
  id: number;
  title: string;
  level: Level;
  description: string;
  status: TrackStatus;
  image: string;
};
export type TrackWithStats = ManagerTrack & {
  groupsCount: number;
  instructorsCount: number;
  studentsCount: number;
  averageProgress: number;
};

export interface MyCourseView {
    id: number;
  courseId: number;

  title: string;
  image: string;

  progress: number;
  completedSteps: number;

  instructor: string;

level?: Level;
  duration?: string;
  steps?: number;

  group: string;
  branch: string;
  session: string;
};

import type { LucideIcon } from "lucide-react";

export type RoleCard = {
  title: string;
  path: string;
  desc: string;
  icon: LucideIcon;
  featured?: boolean;
};