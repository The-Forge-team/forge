import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useNavigate } from "@tanstack/react-router";
import { FaGithub } from "react-icons/fa";
import AuthImage from "../../components/AuthImage.tsx";
import ForgeLogo from "@/assets/forge-logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    navigate({ to: "/homepage" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f0] p-4">
      <div
        className="w-full flex overflow-hidden rounded-2xl shadow-2xl"
        style={{ maxWidth: "900px", minHeight: "520px" }}
      >
        {/* Left Panel */}
        <div className="flex-1 bg-white/90 px-12 py-10 flex flex-col justify-center">
          
          <div className="flex justify-center">
            <img
              src={ForgeLogo}
              alt="Forge logo"
              className="h-25 w-25 bg-[#0f766e] rounded-lg"
            />
          </div>

          <h1
            className="text-3xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Log in to your Account
          </h1>
          <p className="text-sm text-gray-500 mb-7">
            Welcome back! Select method to log in:
          </p>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-5">
            <Button
              variant="outline"
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-[#ecfdfb] hover:border-[#0f766e] hover:text-black rounded-lg hover:cursor-pointer"
            >
              <FcGoogle size={18} />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-[#ecfdfb] hover:border-[#0f766e] hover:text-black rounded-lg hover:cursor-pointer"
            >
              <FaGithub size={18} color="#1877F2" />
              Github
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email */}
          <div className="relative mb-3">
            <MdEmail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9 h-11 border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <RiLockPasswordLine
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9 pr-10 h-11 border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={16} />
              ) : (
                <AiOutlineEye size={16} />
              )}
            </button>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(v) => setRememberMe(v as boolean)}
                className="data-[state=checked]:bg-[#0f766e] data-[state=checked]:border-[#0f766e] w-4 h-4"
              />
              <Label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <button
            className="text-xs text-red-400 font-medium transition-colors hover:cursor-pointer"
              onClick={() => navigate({ to: "/forgotpassword" })}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-11 bg-[#0f766e] hover:bg-[#0d655d] text-white font-semibold rounded-lg text-sm transition-all shadow-sm hover:shadow-md mb-5 hover:cursor-pointer"
          >
            Log in
          </Button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={() => navigate({ to: "/signup" })}
              className="text-[#0f766e] font-semibold transition-colors hover:cursor-pointer"
            >
              Create an account
            </button>
          </p>
        </div>

        {/* Right Panel */}
        <div
          className="hidden md:flex flex-1 relative"
          style={{
            background: "#0f766e",
          }}
        >
          <AuthImage />
        </div>
      </div>
    </div>
  );
}
