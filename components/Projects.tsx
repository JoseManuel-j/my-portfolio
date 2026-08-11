export default function Projects() {
  const dummyProjects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A developer-focused portfolio built with Next.js and Tailwind CSS. It features a scalable backend integration using PostgreSQL for dynamic project and content management.",
      year: "2026",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      projectUrl: "#"
    },
    {
      id: "2",  
      title: "Computer Course Web Application",
      description: "A full-stack web-based computer course platform built using Laravel and MySQL, featuring robust database management, course modules, and a responsive user interface.",
      year: "2024-2026",
      tech: ["Laravel", "MySQL", "Full-Stack", "PHP"],
      projectUrl: "#"
    },
    {
      id: "3",
      title: "Ocean Guardian 3D",
      description: "A 3D game project in Unity implementing custom item spawners, score increments, and collision logic.",
      year: "2025",
      tech: ["Unity", "C#"],
      projectUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 w-full bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Selected Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-2 text-neutral-400 text-sm">
            Some of the works I have built recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-base font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono">
                    {project.year}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <a 
                href={project.projectUrl} 
                className="inline-flex items-center text-xs md:text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}