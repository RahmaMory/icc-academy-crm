

import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Search } from "lucide-react";

type Status =
  | "All"
  | "Good"
  | "Average"
  | "Needs Attention";

type Student = {
  id: number;
  name: string;
  email: string;
  progress: number;
  attendance: number;
  completedTasks: number;
  totalTasks: number;
};

type Props = {
  students: Student[];
  classId: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<
    React.SetStateAction<string>
  >;
  selectedStatus: Status;
  setSelectedStatus: React.Dispatch<
    React.SetStateAction<Status>
  >;
  getStudentStatus: (
    progress: number
  ) => string;
  getStatusClass: (status: string) => string;
};

export default function StudentsTable({
  students,
  classId,
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
  getStudentStatus,
  getStatusClass,
}: Props) {
  const filteredStudents = students.filter(
    (student) => {
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
        matchesSearch && matchesStatus
      );
    }
  );

  return (
    <div className="rounded-[28px] border border-cyan-300/25 bg-white/4 p-5 shadow-2xl sm:p-6">
      
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Students
        </h2>
      </div>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        
        <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4">
          
          <Search
            size={18}
            className="text-white/35"
          />

          <input
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            placeholder="Search students..."
            className="w-full bg-transparent py-3 outline-none"
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(
              e.target.value as Status
            )
          }
          className="rounded-2xl border border-white/10 bg-[#151817] px-4 py-3 outline-none"
          aria-label="Filter students by status"
        >
          <option value="All">
            All Status
          </option>

          <option value="Good">
            Good
          </option>

          <option value="Average">
            Average
          </option>

          <option value="Needs Attention">
            Needs Attention
          </option>
        </select>
      </div>

      <div className="w-full overflow-x-auto">
        
        <table className="w-full min-w-80 border-separate border-spacing-y-3">
          
          <thead>
            <tr className="text-left text-sm text-white/45">
              
              <th className="px-4 py-2">
                Student
              </th>

              <th className="px-4 py-2">
                Progress
              </th>

              <th className="px-4 py-2">
                Attendance
              </th>

              <th className="px-4 py-2">
                Tasks
              </th>

              <th className="px-4 py-2">
                Status
              </th>

              <th className="px-4 py-2">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map(
              (student) => {
                const status =
                  getStudentStatus(
                    student.progress
                  );

                return (
                  <tr
                    key={student.id}
                    className="bg-black/25"
                  >
                    
                    <td className="rounded-l-2xl px-4 py-4">
                      
                      <p className="font-bold">
                        {student.name}
                      </p>

                      <p className="mt-1 text-xs text-white/45">
                        {student.email}
                      </p>
                    </td>

                    <td className="px-4 py-4 font-bold text-cyan-300">
                      {student.progress}%
                    </td>

                    <td className="px-4 py-4 text-sm text-white/70">
                      {student.attendance}%
                    </td>

                    <td className="px-4 py-4 text-sm text-white/70">
                      {
                        student.completedTasks
                      }
                      /
                      {
                        student.totalTasks
                      }
                    </td>

                    <td className="px-4 py-4">
                      
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="rounded-r-2xl px-2 py-2">
                      
                      <div className="flex flex-row gap-2">
                        
                        <Link
                          to={`/instructor/classes/${classId}/student/${student.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
                        >
                          View
                          <ArrowRight size={15} />
                        </Link>

                        <Link
                          to={`/instructor/classes/${classId}/chat/${student.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-4 py-2 text-xs font-bold text-purple-200 transition hover:bg-purple-300 hover:text-black"
                        >
                          <MessageCircle size={14} />
                          Private Chat
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}