import { Link, useNavigate, useParams } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import type { Role } from "../../data";


// schema based on role
const getSchema = (role?: Role) =>
  z.object({
    email: z.string().email("Invalid email"),

    password:
      role === "manager"
        ? z.string().min(12, "Manager password must be at least 12 chars")
        : role === "instructor"
        ? z.string().min(10, "Instructor password must be at least 10 chars")
        : z.string().min(8, "Password must be at least 8 chars"),
  });

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { role } = useParams<{ role: Role }>();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const schema = getSchema(role);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange", // live validation
  });
  const [loading, setLoading] = useState(false);

async function onSubmit(data: FormData) {
  setLoading(true);

  // fake delay (simulate backend)
  await new Promise((res) => setTimeout(res, 1500));

  setLoading(false);

  toast.success("Login successful 🎉");

if (role === "student") {
  navigate("/student");
  return;
}

if (role === "instructor") {
  navigate("/instructor");
  return;
}

if (role === "manager") {
  navigate("/manager");
  return;
}

}

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-5 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl"
      >
        <Link to="/" className="text-sm text-cyan-300">
          ← Back
        </Link>

        <h1 className="mt-6 text-3xl font-bold capitalize">
          {role} Login
        </h1>

        {/* EMAIL */}
        <label className="mt-8 block text-sm">Email</label>
        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
          <Mail size={18} />
          <input
            {...register("email")}
            className="w-full bg-transparent py-4 outline-none"
            placeholder="example@email.com"
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}

        {/* PASSWORD */}
        <label className="mt-5 block text-sm">Password</label>
        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4">
          <Lock size={18} />

          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className="w-full bg-transparent py-4 outline-none"
            placeholder="••••••••"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm">
            {errors.password.message}
          </p>
        )}

        {/* BUTTON */}
        <button
  disabled={loading}
  className="mt-7 w-full rounded-2xl bg-cyan-400 py-4 font-bold text-black flex items-center justify-center gap-2 disabled:opacity-60"
>
  {loading ? (
    <>
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
      Loading...
    </>
  ) : (
    "Login"
  )}
</button>

        {/* SIGNUP */}
        <p className="mt-5 text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link
            to={`/signup/${role}`}
            className="text-cyan-300 font-bold"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
}