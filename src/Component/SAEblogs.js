import { ChevronRight, Cpu, Hexagon, Share2 } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
      {children}
    </span>
    <span className="relative">{children}</span>
  </span>
);

const projectDetails = {
  "abhedya-robotics": {
    1: {
      title: "Robowars",
      description: "Battle robot designed for combat competitions",
      details: "Detailed info about Robowars...",
    },
    2: {
      title: "Maze Solver",
      description: "Robot designed to navigate and solve mazes autonomously",
      details: "Detailed info about Maze Solver...",
    },
    // add more project details
  },
  "garuda-motorsports": {
    1: {
      title: "H-BAJA",
      description: "Off-road vehicle project done by Garuda Motorsports",
      details: "Detailed info about H-BAJA...",
    },
  },
  "vayuveer-aerospace": {
    1: {
      title: "RC Craft",
      description:
        "Remote-controlled aircraft designed for aerospace experiments",
      details: "Detailed info about RC Craft...",
    },
    2: {
      title: "Drone Rescue",
      description: "Drone capable of executing rescue missions",
      details: "Detailed info about Drone Rescue...",
    },
  },
};

export default function ProjectDetails() {
  const { wing, projectId } = useParams();
  const project = projectDetails[wing] && projectDetails[wing][projectId];

  if (!project) {
    return (
      <>
        <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
          </div>
          <div className="container mx-auto px-6 pt-32">
            <h2 className="text-5xl font-bold mb-12 text-center">
              {project ? project.title : "Project Details"}
            </h2>

            <div className="flex justify-center">
              <div className="group relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 cursor-pointer z-[50]">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                <div className="relative">
                  <div className="text-blue-400 mb-2">
                    <Cpu className="w-8 h-8" />
                  </div>
                  {project ? (
                    <>
                      <h3 className="text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-blue-300">{project.description}</p>
                    </>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-1">
                        Content Yet to be Uploaded
                      </h3>
                      <p className="text-blue-300">
                        Please check back later for more details.
                      </p>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        </div>
        <div className="container mx-auto px-6 pt-32">
          <h2 className="text-5xl font-bold mb-12 text-center">
            {project ? project.title : "Project Details"}
          </h2>

          <div className="flex justify-center">
            <div className="group relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 cursor-pointer z-[50]">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-blue-400 mb-2">
                  <Cpu className="w-8 h-8" />
                </div>
                {project ? (
                  <>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-blue-300">{project.description}</p>
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-1">
                      Content Yet to be Uploaded
                    </h3>
                    <p className="text-blue-300">
                      Please check back later for more details.
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
