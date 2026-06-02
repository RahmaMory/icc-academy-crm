import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleSelection from "./pages/auth/RoleSelection";
import Login from "./pages/auth/Login";
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import AllCourses from "./pages/student/AllCourses";
import CourseDetails from "./pages/student/CourseDetails";
import MyCourses from "./pages/student/MyCourses";
import SignUp from "./pages/auth/SignUp";
import { Toaster } from "react-hot-toast";
import InstructorLayout from "./layouts/InstructorLayout";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import ClassDetails from "./pages/instructor/ClassDetails";
import StudentDetails from "./pages/instructor/StudentDetails";
import InstructorClasses from "./pages/instructor/InstructorClasses";
import InstructorStudents from "./pages/instructor/InstructorStudents";
import ManagerLayout from "./layouts/ManagerLayout";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerInstructors from "./pages/manager/ManagerInstructors";
import ManagerStudents from "./pages/manager/ManagerStudents";
import ManagerReports from "./pages/manager/ManagerReports";
import ManagerTracks from "./pages/manager/ManagerTracks";
import ManagerTrackDetails from "./pages/manager/ManagerTrackDetails";
import ManagerInstructorDetails from "./pages/manager/ManagerInstructorDetails";
import InstructorWorkspace from "./pages/instructor/InstructorWorkspace";
import ManagerInstructorStudents from "./pages/manager/ManagerInstructorStudents";
import ClassMaterials from "./pages/instructor/ClassMaterials";
import InstructorReports from "./pages/instructor/InstructorReports";
import InstructorFollowUp from "./pages/instructor/InstructorFollowUp";
import StudentClassroom from "./pages/student/StudentClassroom";
import StudentMaterials from "./pages/student/StudentMaterials";
import StudentSchedule from "./pages/student/StudentSchedule";
import StudentPrivateChat from "./pages/student/StudentPrivateChat";
import { ChatProvider } from "./context/ChatContext";
import InstructorPrivateChat from "./pages/instructor/InstructorPrivateChat";
import { ClassChatProvider } from "./context/ClassChatContext";
export default function App() {
  return (
    <ClassChatProvider>
    <ChatProvider>
    <BrowserRouter>
  <Toaster position="top-right" />
  <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/signup/:role" element={<SignUp />} />

        <Route path="/student" element={<StudentLayout />}>
  <Route index element={<StudentDashboard />} />
  <Route path="my-courses" element={<MyCourses />} />
  <Route path="courses" element={<AllCourses />} />
  <Route path="courses/:courseId" element={<CourseDetails />} />
 
   <Route
  path="classroom/:classId"
  element={<StudentClassroom />}
/>
<Route
  path="classroom/:classId/materials"
  element={<StudentMaterials />}
/>

<Route
  path="classroom/:classId/schedule"
  element={<StudentSchedule />}
/>
<Route
  path="classroom/:classId/private-chat"
  element={<StudentPrivateChat />}
/>


</Route>

<Route path="/instructor" element={<InstructorLayout />}>
  <Route index element={<InstructorDashboard />} />
  <Route path="classes" element={<InstructorClasses />} />
  <Route path="workspace" element={<InstructorWorkspace />} />
  <Route path="reports" element={<InstructorReports />} />
  <Route path="classes/:classId" element={<ClassDetails />} />
  <Route
    path="classes/:classId/student/:studentId"
    element={<StudentDetails />}
  />
  <Route
  path="/instructor/classes/:classId/chat/:studentId"
  element={<InstructorPrivateChat />}
/>

  <Route path="classes/:classId/materials" element={<ClassMaterials />} />
  <Route path="students" element={<InstructorStudents />} />
  <Route
  path="follow-up"
  element={<InstructorFollowUp />}
/>

</Route>

<Route path="/manager" element={<ManagerLayout />}>
  <Route index element={<ManagerDashboard />} />
  <Route path="tracks" element={<ManagerTracks />} />
  <Route path="tracks/:trackId" element={<ManagerTrackDetails />} />
  <Route path="instructors" element={<ManagerInstructors />} />
  <Route
  path="instructors/:instructorId"
  element={<ManagerInstructorDetails />}
/>
  <Route path="students" element={<ManagerStudents />} />
  <Route path="reports" element={<ManagerReports />} />
  <Route
  path="instructors/:instructorId/students"
  element={<ManagerInstructorStudents />}
/>
</Route>

      </Routes>
    </BrowserRouter>
    </ChatProvider>
    </ClassChatProvider>
  );
}