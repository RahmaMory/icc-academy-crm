import type { InstructorUser } from "./sharedTypes";
import type { Role } from "./sharedTypes";

export const currentUser: {
  id: number;
  name: string;
  email: string;
  role: Role;
  track: string;
} = {
  id: 1,
  name: "Ahmed Ali",
  email: "ahmed@email.com",
  role: "student",
  track: "Frontend",
};

export const instructorUser: InstructorUser = {
  id: 1,
  name: "Instructor Name",
  email: "instructor@email.com",
  role: "instructor",
};

export const managerUser = {
  name: "Manager Name",
  email: "manager@email.com",
  role: "manager",
};


