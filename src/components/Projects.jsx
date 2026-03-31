import React from 'react';
// Import your images here once you have them in your assets folder
import hotelImg from '../images/Hotel.jpg'
import cbtImg from '../images/CbtImg.jpg';
import cyberTreeImg from '../images/CyberLinkTree.jpg'
import webBuyImg from '../images/WebBuy.jpg'

const projects = [
  {
    title: "CBT App",
    description: "A full-stack examination system with real-time timers, question navigation grids, and automated result processing.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    status: "In Development",
    image: cbtImg, // Placeholder
    link: "#"
  },
  {
    title: "Hotel Just Stay",
    description: "Professional hospitality website featuring a responsive hero section and booking UI for a luxury hotel.",
    tech: ["React", "Tailwind CSS", "Vite"],
    status: "Live but still in development",
    image: hotelImg, // Placeholder
    link: "#"
  },
  {
    title: "Cyber Link Tree",
    description: "Custom-built personal link aggregator for my YouTube content and social media presence.",
    tech: ["React", "Framer Motion"],
    status: "Coming Soon",
    image: cyberTreeImg, // Placeholder
    link: "#"
  },
  {
    title: "Web Buy",
    description: "E-commerce website for online shopping",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js", "MongoDB"],
    status: "In Development",
    image: webBuyImg, // Placeholder
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A showcase of my journey in full-stack development, from interactive UIs to secure backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl">

              {/* Project Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-8">

                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    {project.status === "Live but still in development" && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    )} 
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === "Live but still in development" ? 'bg-emerald-400' :
                        project.status === "In Development" ? 'bg-yellow-400' : 'bg-sky-400'
                      }`}></span>
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${project.status === "Live but still in development" ? 'text-emerald-400' :
                      project.status === "In Development" ? 'text-yellow-400' : 'text-sky-400'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-slate-800/80 text-sky-300 px-3 py-1 rounded-md border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-sky-400 transition-colors">
                  VIEW CASE STUDY
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects