export default function CourseContent() {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/4 p-6">
      <h2 className="text-2xl font-bold">Course Content</h2>

      <p className="mt-2 text-white/50">
        Content will be added here later.
      </p>

      <div className="mt-6 space-y-3">
        <div className="rounded-2xl bg-black/25 p-4">
          Lesson 1 - Introduction
        </div>
        <div className="rounded-2xl bg-black/25 p-4">
          Lesson 2 - Basics
        </div>
        <div className="rounded-2xl bg-black/25 p-4">
          Lesson 3 - Practice
        </div>
      </div>
    </div>
  );
}