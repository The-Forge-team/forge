import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSlack } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

// Dotwork Logo
const DotworkLogo = () => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <TbGridDots size={18} color="white" />
    </div>
    <span className="text-green-800 font-semibold text-4xl tracking-tight">Forge</span>
  </div>
);

// Right panel illustration (same as login)
const RightIllustration = () => (
  <div className="relative flex flex-col items-center justify-center h-full px-10 text-white">
    {/* Background glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full opacity-20"
        style={{
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, #4ade80 0%, transparent 70%)",
        }}
      />
    </div>

    {/* Dashboard card mock */}
    <div className="relative z-10 flex items-center justify-center mb-10">
      <div className="relative" style={{ width: "320px", height: "260px" }}>
        {/* Slack */}
        <div
          className="absolute flex items-center justify-center rounded-full shadow-lg"
          style={{
            top: "0px",
            left: "40px",
            width: "52px",
            height: "52px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
          }}
        >
          <FaSlack size={26} color="#E01E5A" />
        </div>

        {/* Dotwork small icon */}
        <div
          className="absolute flex items-center justify-center rounded-full shadow-lg"
          style={{
            top: "100px",
            left: "0px",
            width: "52px",
            height: "52px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
          }}
        >
          <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
            <TbGridDots size={16} color="white" />
          </div>
        </div>

        {/* Google icon */}
        <div
          className="absolute flex items-center justify-center rounded-full shadow-lg"
          style={{
            bottom: "10px",
            left: "55px",
            width: "52px",
            height: "52px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
          }}
        >
          <FcGoogle size={26} />
        </div>

        {/* Connection lines */}
        <svg
          className="absolute inset-0"
          width="320"
          height="260"
          viewBox="0 0 320 260"
          fill="none"
        >
          <path d="M92 26 L190 100" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M52 126 L190 120" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M107 216 L190 140" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Dashboard card */}
        <div
          className="absolute rounded-xl shadow-2xl overflow-hidden"
          style={{ top: "30px", right: "0px", width: "175px", background: "white" }}
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          {[
            { color: "bg-blue-400" },
            { color: "bg-purple-400" },
            { color: "bg-green-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-50">
              <div className={`w-6 h-6 rounded-full ${item.color} flex-shrink-0`} />
              <div className="flex-1 space-y-1">
                <div className="h-2 bg-gray-200 rounded-full w-full" />
                <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* <div className="relative z-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Start your journey today.</h2>
      <p className="text-green-200 text-sm leading-relaxed max-w-xs">
        Join thousands of teams already using dotwork to streamline their workflow.
      </p>
    </div> */}

    {/* Pagination dots */}
    <div className="absolute bottom-8 flex gap-2">
      <div className="w-2 h-2 rounded-full bg-white opacity-90" />
      <div className="w-2 h-2 rounded-full bg-white opacity-40" />
      <div className="w-2 h-2 rounded-full bg-white opacity-40" />
    </div>
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
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 rounded-lg"
            >
              <FcGoogle size={18} />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 rounded-lg"
            >
              <FaFacebook size={18} color="#1877F2" />
              Facebook
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
              <button className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Privacy Policy
              </button>
            </Label>
          </div>

          {/* Sign Up Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm transition-all shadow-sm hover:shadow-md mb-4"
          >
            Create Account
          </Button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            
          </p>
          <button className="text-green-600 hover:text-green-700 font-semibold transition-colors">
              Log in
            </button>
        </div>

        {/* Right Panel */}
        <div
          className="hidden md:flex flex-1 relative"
          style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 50%, #22c55e 100%)" }}
        >
          <RightIllustration />
        </div>
      </div>
    </div>
  );
}