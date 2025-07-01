import React from 'react';
import { Cpu, Zap, Box } from 'lucide-react';
import CyberpunkNavbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const projectCategories = [
  {
    wing: "Garuda Motorsports",
    projects: [
      { id: 1, title: "hBAJA", description: "Hydrogen-CNG ATV designed to balance efficiency and off road performance" },
      { id: 2, title: "IC Go-Kart", description: "High performance kart with 125 cc engine designed to prioritise stability and handling." },
    ],
  },
  {
    wing: "Abhedya Robotics",
    projects: [
      { id: 1, title: "Robowars", description: "Battle robot designed for combat competitions" },
      { id: 2, title: "Maze Solver", description: "Robot designed to navigate and solve mazes autonomously" },
      { id: 3, title: "Line Follower", description: "Robot capable of following predefined lines" },
      { id: 4, title: "Self-Balancing Bot", description: "Two-wheeled robot with a gyroscope for self-balancing" },
      { id: 6, title: "RC Car", description: "Remote-controlled car for dynamic movement" },
      { id: 7, title: "Robosoccer", description: "Soccer-playing robots for robotics competitions" },
    ],
  },
  {
    wing: "Vayuveer Aerospace",
    projects: [
      { id: 1, title: "Fixed Wing Aircraft", description: "Remote-controlled aircraft designed for aerospace experiments" },
      { id: 2, title: "Drone", description: "Drone capable of executing rescue missions" },
      { id: 3, title: "Water Rocket", description: "A Rocket power by Water Air mixture" },
      { id: 4, title: "Solid Rocket Propulsion", description: "Exploring model/hobby Solid fuel rocketry" },
    ],
  },
];

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{children}</span>
    <span className="relative">{children}</span>
  </span>
);

export default function Projects() {
  const handleProjectClick = (project) => {
    window.location.href = `/sae-project-blog`; 
  };
   const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white overflow-hidden relative z-[0]">
      <div className="container mx-auto px-6 pt-32">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <GlowingText>Explore Projects</GlowingText>
        </h2>

        {projectCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400">
              {category.wing}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 cursor-pointer z-[50]"
                  onClick={()=>{
                    navigate(`/sae-project-blog/${category.wing.toLowerCase().replace(/\s/g, '-')}/${project.id}`);
                  }}
                >
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="text-blue-400 mb-2">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-blue-300">{project.description}</p>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div> 
        ))}
        <div className="absolute top-1/4 right-1/4">
          <Box className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
