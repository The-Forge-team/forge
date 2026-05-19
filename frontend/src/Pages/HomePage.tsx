import Navbar from "@/components/Navbar";
import { useState } from "react";
import { FiCode, FiUsers, FiArrowRight } from "react-icons/fi";
import HeroImage from "@/components/HeroImage";
import { FaInstagram, FaStar } from "react-icons/fa";
import { FiSearch, FiPaperclip } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsGridFill } from "react-icons/bs";

import {
  FaBullseye,
  FaChartPie,
  FaBullhorn,
  FaHourglassHalf,
  FaChartLine,
} from "react-icons/fa6";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    title: "Social Media Strategy & Implementation",
    icon: <FaBullseye />,
    color: "bg-blue-500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    title: "Content Creation",
    icon: <FaChartPie />,
    color: "bg-orange-500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
    title: "Influencer & Collaboration Marketing",
    icon: <FaBullhorn />,
    color: "bg-green-500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    title: "Design",
    icon: <FaHourglassHalf />,
    color: "bg-yellow-400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400",
    title: "Social Media Analysis",
    icon: <FaChartLine />,
    color: "bg-purple-500",
  },
];

export default function HomePage() {
  const [handle, setHandle] = useState("");
  const icons = [
    <FaInstagram />,
    <FiSearch />,
    <FaInstagram />,
    <FiPaperclip />,
    <HiOutlinePhotograph />,
    <FaStar />,
    <BsGridFill />,
  ];
  return (
    <div className="relative bg-linear-to-b from-green-50 via-cyan-50 to-violet-100 overflow-x-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <section className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-green-50 to-cyan-100 overflow-hidden">
          <div className="w-full max-w-full text-center">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
                {/* ── LEFT ── */}
                <div className="flex flex-col">
                  {/* Eyebrow */}
                  <div className="mb-5 self-start">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full uppercase tracking-widest">
                      <FiCode className="text-blue-400 text-xs" />
                      Hello, your new home for tech
                    </span>
                  </div>

                  {/* Headline */}
                  <h1
                    className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-gray-600 leading-1.0 tracking-tight mb-6"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    We live and breathe{" "}
                    <span className="bg-linear-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                      social media.
                    </span>
                  </h1>

                  {/* Stat */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                      <FiUsers className="text-blue-400 text-sm" />
                    </div>
                    <div>
                      <span className="text-shadow-green-600 text-sm font-bold">
                        120K+ developers
                      </span>
                      <span className="text-zinc-500 text-sm">
                        {" "}
                        using Forge
                      </span>
                    </div>
                  </div>

                  {/* Input + CTA */}
                  <div className="flex flex-wrap items-center gap-3 max-w-md">
                    <div className="flex-1 min-w-0 relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 text-sm select-none">
                        @
                      </span>
                      <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        placeholder="Enter your handle"
                        className="w-full h-12 bg-white/0.05 border border-white/0.10 hover:border-white/20 focus:border-blue-500/50 focus:outline-none rounded-2xl pl-8 pr-4 text-zinc-600 text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                    <button className="relative h-12 px-5 rounded-2xl font-semibold text-sm text-white overflow-hidden group shrink-0 bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 transition-all">
                      <span className="flex flex-wrap items-center gap-2 justify-center">
                        Let's Get Coding
                        <FiArrowRight className="text-xs" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* ── RIGHT ── */}
                <div className="flex justify-center lg:justify-end">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen flex items-center justify-center px-6  bg-linear-to-b from-cyan-100 to-sky-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              {/* Gradient Card */}
              <div className="relative w-full max-w-340px h-45 rounded-r-[90px] bg-linear-to-r from-pink-500 via-purple-500 to-orange-400 overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size_[20px_20px]" />

                {/* Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-5">
                    {icons.map((icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-700 shadow-md text-lg"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-10 max-w-md">
                <p className="text-gray-800 font-semibold leading-relaxed">
                  We live and breathe social media and creativity runs through
                  everything we do.
                </p>

                <p className="mt-6 text-gray-500 leading-7 text-sm">
                  We work with brands as a social media partner and strategy
                  team, building and delivering brand stories across social
                  platforms, connecting their businesses to the world - one post
                  at a time.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* Hello text */}
              <h1 className="text-5xl md:text-[90px] lg:text-[120px] font-black text-green-400 leading-none max-w-full wrap-break-word">
                Hello!
              </h1>

              {/* Main text */}
              <div className="mt-8 max-w-lg">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug">
                  We are a team of creatives, researchers, strategists, graphic
                  designers, photographers, trendsetters, and copywriters.
                </h2>

                {/* Button */}
                <button className="mt-10 border-2 border-orange-400 text-orange-500 px-10 py-4 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Learn More About Services
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-linear-to-b from-sky-100 to-violet-100">
          <div className="max-w-6xl mx-auto">
            {/* SERVICES */}
            <div className="border-t border-gray-300">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-start md:items-center gap-4 border-b border-gray-300 py-5 group cursor-pointer"
                >
                  {/* IMAGE BLOB */}
                  <div className="relative">
                    <div
                      className={`w-20 h-20 sm:w-22.5 sm:h-22.5 md:w-30 md:h-30 rounded-[45%] ${service.color} overflow-hidden`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-3xl text-orange-400 shrink-0">
                      {service.icon}
                    </div>

                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 leading-snug max-w-full">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-14 items-start md:items-center">
              {/* LEFT */}
              <div>
                <p className="uppercase text-xs tracking-[3px] text-gray-400">
                  Our Crew
                </p>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mt-2">
                  Welcome to <br /> The Team
                </h2>
              </div>

              {/* CENTER */}
              <div className="md:col-span-1 max-w-xl">
                <p className="text-gray-500 leading-7">
                  Our team of highly skilled, results-driven creatives are ready
                  & waiting to help you to shake up the social scene!
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex md:justify-end">
                <button className="w-full sm:w-auto border-2 border-orange-300 text-orange-400 px-6 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Meet The Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
