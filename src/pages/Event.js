import React from "react";
import { Cpu, Zap, Box, ChevronRight } from "lucide-react";
import linefollower from "../Asset/Line Follower.png";
import Cad from "../Asset/cad.png";
import aqua from "../Asset/Aqua Venture.png"
import foss from "../Asset/foss.jpg"
import fifa from "../Asset/fifa.jpg"
import quiz from "../Asset/quiz.jpg"
import technovate from "../Gallery/technovate.jpg"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsMarkdown } from "react-icons/bs";

const EventPage = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1, title: "Aqua Venture", description: "Ignite the thrusters with water", img: aqua, date:"19 Feb 2025" , venue:"UIET"
    },
    {
      id: 2, title: "PathFury", description: "Fastest Line Following competetion", img: linefollower, date:"20-feb-2025" , venue:"UIET"
    },
    {
      id: 3, title: "CAD Design Showdown", description: "Show your CAD prowess", img: Cad, date:"21 Feb 2025" , venue:"UIET"
    },
    {
      id: 7, title: "Technovate", description: "24 Hour Hackathon", img: technovate, date:"19 Feb 2025" , venue:"UIET"
    },
    {
      id: 4, title: "FOSS HACK", description: "Code! Create! Innovate!", img: foss, date:"22 Feb 2025" , venue:"UIET"
    },
    {
      id: 5, title: "Quiz Show", description: "Think fast! Win BIG!", img: quiz, date:"19-21 Feb 2025" , venue:"UIET"
    },
    {
      id: 6, title: "FIFA Competition", description: "Time to Settle the Debate Who’s the Ultimate Football Fan & Player?", img: fifa, date:"19 Feb 2025" , venue:"UIET"
    }
  ];

  return (
    <div className="min-h-screen  bg-black text-white overflow-hidden relative z-0">

      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>


      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse top-1/4 -skew-y-12"></div>
        <div className="absolute w-1 h-full bg-blue-500/20 animate-pulse left-1/4 -skew-x-12"></div>
        <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse bottom-1/3 -skew-y-12"></div>
      </div>

      <div className="relative container mx-auto mb-8 px-6 pt-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl font-bold">
            <span className="relative">
              <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
                Events
              </span>
              <span className="relative">Events</span>
            </span>
          </h1>
          <p className="text-2xl text-blue-300 max-w-2xl">
            Exciting Events going on
            . Don't miss out on the opportunity to be part of something amazing!
          </p>
        </div>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative group p-6 flex flex-col items-start border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>

                {/* Image Section */}
                <div className="w-full mb-4">
                  <img src={event.img} alt={event.title} className="rounded-lg w-full" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-white leading-snug">
                    {event.title}
                  </div>
                  <div className="text-blue-300 text-m">
                    <p className="flex items-center gap-2"><MdDateRange/>{event.date}</p>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt/>{event.venue}</p>
                  </div>
                  <p className="text-gray-400 text-lg mt-2">{event.description}</p>
                </div>
                <div className="mt-4 w-full">
                  <button
                    className="group relative w-full px-6 py-3 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300"
                    onClick={() => {
                      navigate(`/event-details/${event.id}`);
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      Learn more <ChevronRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        ) : (
          <div className="mt-16 text-center text-xl text-blue-300">
            <div className="p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm inline-block">
              <p>No upcoming events at the moment.</p>
              <p>Stay tuned for updates!</p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
      <div className="absolute top-1/4 right-1/4 z-[-1] ">
        <Box className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-[-1]">
        <Zap className="w-10 h-10 text-blue-400 animate-ping" />
      </div>
      <div className="absolute top-1/2 right-1/3 z-[-1]">
        <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
      </div>
    </div>
  );
};

export default EventPage;
