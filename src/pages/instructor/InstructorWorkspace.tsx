
import { useRef, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  Upload,
} from "lucide-react";

import {
  instructorDeliverables,
  instructorMaterials,
  instructorNotifications,
  instructorSessions,
} from "../../data";

import Panel from "../../components/shared/Panel";
import EmptyState from "../../components/shared/EmptyState";
import SummaryCard from "../../components/workspace/SummaryCard";
import MaterialCard from "../../components/workspace/MaterialCard";
import DeliverableCard from "../../components/workspace/DeliverableCard";
import NotificationCard from "../../components/workspace/NotificationCard";
import SessionCard from "../../components/shared/SessionCard";

const CURRENT_INSTRUCTOR_ID = 1;

export default function InstructorWorkspace() {
  const todayWorkRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const attentionRef = useRef<HTMLDivElement | null>(null);

  const [materials, setMaterials] = useState(
    instructorMaterials.filter(
      (item) => item.instructorId === CURRENT_INSTRUCTOR_ID
    )
  );

  const [sessions, setSessions] = useState(
    instructorSessions.filter(
      (item) => item.instructorId === CURRENT_INSTRUCTOR_ID
    )
  );

  const [deliverables, setDeliverables] = useState(
    instructorDeliverables.filter(
      (item) => item.instructorId === CURRENT_INSTRUCTOR_ID
    )
  );

  const notifications = instructorNotifications.filter(
    (item) => item.instructorId === CURRENT_INSTRUCTOR_ID
  );

  const todaySessions = sessions.filter(
    (session) => session.date === "Today" || session.date === "Tomorrow"
  );

  const pendingReviews = deliverables.filter(
    (item) => item.status !== "Reviewed"
  );

  const missingMaterials = materials.filter(
    (item) =>
      item.status === "Missing" ||
      item.status === "Needs Review"
  );

  function scrollToSection(
    ref: React.RefObject<HTMLDivElement | null>
  ) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleUploadMaterial() {
    setMaterials((prev) => [
      {
        id: Date.now(),
        instructorId: CURRENT_INSTRUCTOR_ID,
        title: "New Uploaded Material",
        type: "PDF",
        status: "Uploaded",
        uploadedAt: "Now",
      },
      ...prev,
    ]);
  }

  function handlePrepareSession(sessionId: number) {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              prepared: true,
            }
          : session
      )
    );
  }

  function handleReviewDeliverable(
    deliverableId: number
  ) {
    setDeliverables((prev) =>
      prev.map((item) =>
        item.id === deliverableId
          ? {
              ...item,
              status: "Reviewed",
            }
          : item
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f10] px-4 py-6 text-white sm:px-6 lg:px-8 xl:px-10">
      <section className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 pl-14 lg:pl-0">
          <p className="text-sm font-semibold text-cyan-300">
            Instructor Workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Today’s Work Center
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Prepare sessions, upload materials,
            review deliverables, and follow
            manager notes.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grid gap-5 md:grid-cols-3">

          <button
            onClick={() =>
              scrollToSection(todayWorkRef)
            }
            className="text-left"
            title="Go to today's work"
          >
            <SummaryCard
              icon={BookOpen}
              label="Sessions Today"
              value={todaySessions.length}
              hint="Go to today’s work"
            />
          </button>

          <button
            onClick={() =>
              scrollToSection(reviewsRef)
            }
            className="text-left"
            title="Go to deliverables"
          >
            <SummaryCard
              icon={CheckCircle2}
              label="Pending Reviews"
              value={pendingReviews.length}
              hint="Go to deliverables"
            />
          </button>

          <button
            onClick={() =>
              scrollToSection(attentionRef)
            }
            className="text-left"
            title="Go to alerts/materials"
          >
            <SummaryCard
              icon={AlertTriangle}
              label="Needs Attention"
              value={
                missingMaterials.length +
                notifications.length
              }
              hint="Go to alerts/materials"
              warning
            />
          </button>

        </div>

        {/* NOTIFICATIONS */}
        <div ref={attentionRef}>
          {notifications.length > 0 && (
            <div className="mt-6 rounded-[28px] border border-orange-400/25 bg-orange-400/4 p-5 shadow-2xl scroll-mt-24">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                  <AlertTriangle size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Manager Notes
                  </h2>

                  <p className="text-xs text-white/45">
                    Alerts and follow-up
                    messages from management.
                  </p>
                </div>

              </div>

              <div className="space-y-3">
                {notifications.map(
                  (notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                    />
                  )
                )}
              </div>

            </div>
          )}
        </div>

        {/* GRID */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">

          {/* LEFT */}
          <section className="space-y-6">

            {/* TODAY WORK */}
            <div
              ref={todayWorkRef}
              className="scroll-mt-24"
            >
              <Panel
                icon={ClipboardList}
                title="Today’s Work"
              >

                <div className="space-y-4">

                  {todaySessions.length === 0 ? (
                    <EmptyState
                      title="No sessions today"
                      description="No sessions scheduled for today or tomorrow."
                    />
                  ) : (
                    todaySessions.map((session) => (
                      <SessionCard
                        key={session.id}
                        session={session}
                        onPrepare={
                          handlePrepareSession
                        }
                      />
                    ))
                  )}

                </div>

              </Panel>
            </div>

            {/* MATERIALS */}
            <Panel
              icon={FileText}
              title="Materials Center"
            >

              <button
                onClick={handleUploadMaterial}
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#0b0f10]"
              >
                <Upload size={17} />
                Upload Material
              </button>

              <div className="space-y-4">

                {materials.length === 0 ? (
                  <EmptyState
                    title="No materials yet"
                    description="Uploaded materials will appear here."
                  />
                ) : (
                  materials.map((material) => (
                    <MaterialCard
                      key={material.id}
                      material={material}
                    />
                  ))
                )}

              </div>

            </Panel>

            {/* SESSIONS */}
            <Panel
              icon={BookOpen}
              title="Sessions Preparation"
            >

              <div className="space-y-4">

                {sessions.length === 0 ? (
                  <EmptyState
                    title="No sessions found"
                    description="There are no sessions available right now."
                  />
                ) : (
                  sessions.map((session) => (
                    <SessionCard
                      key={session.id}
                      session={session}
                      onPrepare={
                        handlePrepareSession
                      }
                    />
                  ))
                )}

              </div>

            </Panel>

          </section>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* DELIVERABLES */}
            <div
              ref={reviewsRef}
              className="scroll-mt-24"
            >
              <Panel
                icon={CheckCircle2}
                title="Deliverables Review"
              >

                <div className="space-y-4">

                  {deliverables.length === 0 ? (
                    <EmptyState
                      title="No deliverables"
                      description="No submissions available for review."
                    />
                  ) : (
                    deliverables.map(
                      (deliverable) => (
                        <DeliverableCard
                          key={deliverable.id}
                          deliverable={
                            deliverable
                          }
                          onReview={
                            handleReviewDeliverable
                          }
                        />
                      )
                    )
                  )}

                </div>

              </Panel>
            </div>

            {/* QUICK ACTIONS */}
            <Panel
              icon={Upload}
              title="Quick Actions"
            >

              <div className="space-y-3">

                <button
                  onClick={handleUploadMaterial}
                  className="w-full rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-bold text-[#0b0f10]"
                >
                  Upload New Material
                </button>

                <button
                  onClick={() =>
                    scrollToSection(todayWorkRef)
                  }
                  className="w-full rounded-2xl border border-cyan-300 px-4 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#0b0f10]"
                >
                  Prepare Next Session
                </button>

                <button
                  onClick={() =>
                    scrollToSection(reviewsRef)
                  }
                  className="w-full rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-white/70 transition hover:bg-white/10"
                >
                  Review Pending Submissions
                </button>

              </div>

            </Panel>

          </aside>

        </div>

      </section>
    </main>
  );
}