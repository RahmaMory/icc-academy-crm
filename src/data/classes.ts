
export type InstructorClass = {
  id: number;
  instructorId: number;
  title: string;
  level: string;
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
};

export const instructorClasses: InstructorClass[] =  [
  {
    id: 1,
    instructorId: 1,
    title: "Frontend Development",
    level: "Beginner",
    duration: "12h 30m",
    steps: 14,
    instructor: "Instructor Name",
    group: "FE-101",
    branch: "Online",
    session: "Sunday & Tuesday - 6:00 PM",
    students: 3,
    progress: 78,
    lastActivity: "Today",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },

  {
    id: 2,
    instructorId: 1,
    title: "React Advanced",
    level: "Advanced",
    duration: "18h",
    steps: 22,
    instructor: "Instructor Name",
    group: "FE-201",
    branch: "Nasr City",
    session: "Monday & Thursday - 6:00 PM",
    students: 3,
    progress: 64,
    lastActivity: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
  },

  {
    id: 3,
    instructorId: 2,
    title: "JavaScript Core",
    level: "Intermediate",
    duration: "10h",
    steps: 16,
    instructor: "Ahmed Hassan",
    group: "FE-401",
    branch: "Nasr City",
    session: "Wednesday & Friday - 6:00 PM",
    students: 3,
    progress: 82,
    lastActivity: "Today",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
  },

  {
    id: 4,
    instructorId: 2,
    title: "AI Fundamentals",
    level: "Intermediate",
    duration: "9h",
    steps: 12,
    instructor: "Sara Mohamed",
    group: "AI-101",
    students: 3,
    branch: "October",
    session: "Monday & Wednesday - 7:00 PM",
    progress: 70,
    lastActivity: "Today",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },

  {
    id: 5,
    instructorId: 3,
    title: "Prompt Engineering",
    level: "Advanced",
    duration: "8h",
    steps: 11,
    instructor: "Sara Mohamed",
    group: "AI-202",
    students: 3,
    branch: "October",
    session: "Monday & Wednesday - 7:00 PM",
    progress: 58,
    lastActivity: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
  },

 {
  id: 6,
  instructorId: 4,
  title: "Backend APIs",
    level: "Intermediate",
    duration: "15h",
    steps: 18,
    instructor: "Omar Adel",
    group: "BE-101",
    students: 3,
    progress: 61,
    branch: "October",
    session: "Monday & Wednesday - 7:00 PM",
    lastActivity: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
  },

  {
    id: 7,
    instructorId: 2,
    title: "Flutter Mobile Apps",
    level: "Beginner",
    duration: "13h",
    steps: 15,
    instructor: "Nada Emad",
    group: "FL-101",
    students: 3,
    progress: 54,
    branch: "Online",
    session: "Monday & Wednesday - 7:00 PM",
    lastActivity: "3 days ago",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },

  {
    id: 8,
    instructorId: 2,
    title: "Cyber Security Basics",
    level: "Advanced",
    duration: "20h",
    steps: 24,
    instructor: "Karim Mostafa",
    group: "CS-101",
    students: 3,
    progress: 43,
    branch: "Online",
    session: "Sunday & Tuesday - 8:00 PM",
    lastActivity: "1 week ago",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
  },
];







