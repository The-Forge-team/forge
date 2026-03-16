import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "@tanstack/react-router";
import { FaGithub } from "react-icons/fa";
import RightPanel from "./RightPanel";

// Dotwork Logo to be replaced with forge logo
const DotworkLogo = () => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <TbGridDots size={18} color="white" />
    </div>
    <span className="text-green-800 font-semibold text-4xl tracking-tight">Forge</span>
  </div>
);



export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, confirmPassword, agreedToTerms });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="w-full flex overflow-hidden rounded-2xl shadow-2xl"
        style={{ maxWidth: "900px", minHeight: "520px" }}
      >
        {/* Left Panel */}
        <div className="flex-1 bg-white px-12 py-8 flex flex-col justify-center">
          <DotworkLogo />

          <h1 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Create an Account
          </h1>
          <p className="text-sm text-gray-500 mb-6">Get started for free. Select method to sign up:</p>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-5">
            <Button
              variant="outline"
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 rounded-lg hover:cursor-pointer"
            >
              <FcGoogle size={18} />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 rounded-lg hover:cursor-pointer"
            >
              <FaGithub size={18} color="#1877F2" />
              Github
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or continue with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* First & Last Name */}
          <div className="flex gap-3 mb-3">
            <div className="relative flex-1">
              <BsPerson size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="pl-9 h-11 border-gray-200 rounded-lg text-sm focus-visible:ring-blue-500 text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex-1">
              <BsPerson size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="pl-9 h-11 border-gray-200 rounded-lg text-sm focus-visible:ring-blue-500 text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative mb-3">
            <MdEmail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9 h-11 border-gray-200 rounded-lg text-sm focus-visible:ring-blue-500 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative mb-3">
            <RiLockPasswordLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9 pr-10 h-11 border-gray-200 rounded-lg text-sm focus-visible:ring-blue-500 text-gray-700 placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible size={16} /> : <AiOutlineEye size={16} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <RiLockPasswordLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-9 pr-10 h-11 border-gray-200 rounded-lg text-sm focus-visible:ring-blue-500 text-gray-700 placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible size={16} /> : <AiOutlineEye size={16} />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 mb-5">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(v) => setAgreedToTerms(v as boolean)}
              className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 w-4 h-4"
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-snug">
              I agree to the{" "}
              <button className="text-green-600 hover:text-green-700 font-medium transition-colors hover:cursor-pointer">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-green-600 hover:text-green-700 font-medium transition-colors hover:cursor-pointer">
                Privacy Policy
              </button>
            </Label>
          </div>

          {/* Sign Up Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm transition-all shadow-sm hover:shadow-md mb-4 hover:cursor-pointer"
          >
            Create Account
          </Button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            
          </p>
          <button onClick={() => navigate({ to: "/" })} 
          className="text-green-600 hover:text-green-700 font-semibold transition-colors hover:cursor-pointer">
              Log in
            </button>
        </div>

        {/* Right Panel */}
        <div
          className="hidden md:flex flex-1 relative"
          style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 50%, #22c55e 100%)" }}
        >
          <RightPanel />
        </div>
      </div>
    </div>
  );
}