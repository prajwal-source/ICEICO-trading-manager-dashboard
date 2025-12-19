import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Plug } from "lucide-react";
import { useState } from "react";

/* ---------------- Schema ---------------- */
const loginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Login Data:", data);

    // Dummy auth logic
    if (data.email === "admin@gmail.com" && data.password === "123456") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/registration");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-100">
      {/* Login Card */}
      <div className="w-110 max-w-3xl bg-white rounded border border-gray-500 shadow-lg">
        
        {/* Title */}
        <div className="bg-linear-to-b from-gray-100 to-gray-50 border-b border-gray-400 px-6 py-3">
          <h2 className="text-xl md:text-2xl font-normal text-gray-700 flex items-center gap-3">
            <Plug size={20} />
            Sign in
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 space-y-6">

                {/* Email */}
                <div className="flex md:flex-row flex-col gap-3 mt-6">
                  <label className="w-24 text-sm text-gray-700 pt-1.5 md:text-right">
                    Login :
                  </label>
                  <div className="flex-1">
                    <input
                      {...register("email")}
                      className="w-full h-10 border border-gray-400 px-2 text-sm rounded
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="flex md:flex-row flex-col gap-3">
                  <label className="w-24 text-sm text-gray-700 pt-1.5 md:text-right">
                    Password :
                  </label>
                  <div className="flex-1">
                    <input
                      type={show ? "text" : "password"}
                      {...register("password")}
                      className="w-full h-10 border border-gray-400 px-2 text-sm rounded
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="flex justify-center gap-10">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={show}
                      onChange={(e) => setShow(e.target.checked)}
                    />
                    <span className="text-md">Show</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" />
                    <span className="text-md">Save</span>
                  </label>
                </div>

                <hr />

                {/* Server */}
                <div className="flex md:flex-row flex-col gap-3">
                  <label className="w-24 text-sm text-gray-700 pt-1.5 md:text-right">
                    Server :
                  </label>
                  <select className="border border-gray-400 w-40 px-3 py-1 rounded bg-white">
                    <option>RockField Trade</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pl-25 pb-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-32 h-10 text-sm border border-gray-400 rounded
                    bg-linear-to-b from-gray-100 to-gray-200
                    hover:from-gray-200 hover:to-gray-300
                    active:from-gray-300 active:to-gray-400
                    disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>

                  <button
                    type="button"
                    className="w-32 h-10 text-sm border border-gray-400 rounded
                    bg-linear-to-b from-gray-100 to-gray-200
                    hover:from-gray-200 hover:to-gray-300
                    active:from-gray-300 active:to-gray-400 transition-all"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
