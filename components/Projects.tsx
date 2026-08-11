export default function Projects() {
  const dummyProjects = [
    {
      id: "1",
      title: "Portfolio website",
      description: "A developer-focused portfolio built with Next.js and Tailwind CSS. It features a scalable backend integration using PostgreSQL for dynamic project and content management.",
      year: 2026,
      tech: ["Next.js", "TypreScript", "Tailwind", "PostgreSQL"],
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
      projectUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Some of the works I have built recently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dummyProjects.map((project) => (
          <div 
            key={project.id} 
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition shadow-sm"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <a 
              href={project.projectUrl} 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}