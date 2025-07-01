import React, { useState, useEffect } from "react";
import {
  Cpu,
  Zap,
  Box,
  Share2,
  ChevronRight,
  Clock,
  Activity,
  Hexagon,
} from "lucide-react";
import CyberpunkNavbar from "./Navbar";
import CyberpunkProjects from "./Projects";
import Contact from "./Contact";
import logo from "../Asset/wlogo.png";
import SAETeams from "./SaeTeams";
import Footer from "./Footer";
import Recruitment from "../Component/Recruitment";

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
      {children}
    </span>
    <span className="relative">{children}</span>
  </span>
);

export default function SAEHomepage() {
  const [scrolled, setScrolled] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    if (!showThankYou) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        </div>

        {/* Hero Section */}
        <div className="relative min-h-screen">
          {/* Decorative Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse top-1/4 -skew-y-12"></div>
            <div className="absolute w-1 h-full bg-blue-500/20 animate-pulse left-1/4 -skew-x-12"></div>
            <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse bottom-1/3 -skew-y-12"></div>
          </div>
          <div className="relative container mx-auto px-6 pt-32">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <Hexagon className="w-24 h-24 text-blue-400 animate-spin-slow absolute -top-12 -left-12 opacity-50" />
                <h1 className="text-5xl font-bold">
                  <GlowingText>
                    SAE UIET PU
                    <br />
                    Society of Automotive Engineers
                  </GlowingText>
                </h1>
                <Hexagon className="w-24 h-24 text-blue-400 animate-spin-slow absolute -bottom-12 -right-12 opacity-50" />
              </div>

              <p className="text-2xl text-blue-300 max-w-2xl">
                Engineering the Future Through Innovation and Technology
              </p>

              <div className="flex gap-6 mt-8">
                <button onClick={()=>setShowThankYou(true)} className="group relative px-8 py-4 bg-transparent overflow-hidden border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition-all duration-300">
                  <div className="absolute inset-0 bg-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Join Our Family 😊 <Share2 size={20} />
                  </span>
                </button>
                <button
                  className="group relative px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300"
                  onClick={scrollToProjects}
                >
                  <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Explore Our Projects <ChevronRight size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
              {[
                {
                  icon: <Activity className="w-8 h-8" />,
                  value: "150+",
                  label: "Active Members",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  value: "5K",
                  label: "Campus Reach",
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  value: "10+",
                  label: "Events",
                },
                {
                  icon: <Box className="w-8 h-8" />,
                  value: "15+",
                  label: "Projects",
                },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                  <div className="relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
                    <div className="text-blue-400 mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-blue-300">{stat.label}</div>
                    <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
            {/* SAE teams*/}
            <div id="Teams-section">
              <SAETeams />
            </div>
            {/* project */}
            <div id="projects-section" className="">
              <CyberpunkProjects />
            </div>
            {/* contact */}
            <div id="Contact-section" className="">
              <Contact />
            </div>
            {/* footer */}
            <div id="footer-section">
              <Footer />
            </div>
            <div className="absolute top-1/4 right-1/4">
              <Box className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
            <div className="absolute bottom-1/4 left-1/4">
              <Zap className="w-10 h-10 text-blue-400 animate-ping" />
            </div>
            <div className="absolute top-1/2 right-1/3">
              <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      <Recruitment isOpen={showThankYou} onClose={handleCloseThankYou} />
    </>
  );
}
