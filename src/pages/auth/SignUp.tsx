import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string().email("Invalid email"),

    phone: z.string().regex(/^01\d{9}$/, "Invalid Egyptian phone"),

    password: z
      .string()
      .min(8, "Min 8 characters")
      .regex(/[A-Z]/, "Must include uppercase")
      .regex(/[0-9]/, "Must include number")
      .regex(/[^A-Za-z0-9]/, "Must include symbol"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange", // live validation
  });

  function onSubmit(data: FormData) {
    console.log(data);
    navigate(`/login/${role}`);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-5 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-7"
      >
        <Link to={`/login/${role}`} className="text-cyan-300">
          ← Back
        </Link>

        <h1 className="mt-6 text-3xl font-bold capitalize">
          {role} Sign Up
        </h1>

        {/* NAME */}
        <input
          {...register("name")}
          placeholder="Full Name"
          className="mt-5 w-full rounded-xl bg-black/20 p-4 outline-none"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}

        {/* EMAIL */}
        <input
          {...register("email")}
          placeholder="Email"
          className="mt-4 w-full rounded-xl bg-black/20 p-4 outline-none"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}

        {/* PHONE */}
        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="mt-4 w-full rounded-xl bg-black/20 p-4 outline-none"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm">{errors.phone.message}</p>
        )}

        {/* PASSWORD */}
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-black/20 px-4">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full py-4 outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}

        {/* CONFIRM */}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="mt-4 w-full rounded-xl bg-black/20 p-4 outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        <button className="mt-6 w-full rounded-2xl bg-cyan-400 py-4 font-bold text-black">
          Create Account
        </button>
      </form>
    </main>
  );
}