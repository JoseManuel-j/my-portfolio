export default function Stack() {
  const skills = [
    { name: "Next.js & React", category: "Frontend Framework" },
    { name: "TypeScript & JavaScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL & MySQL", category: "Database" },
    { name: "Laravel & PHP", category: "Backend" },
    { name: "Python & Tkinter", category: "Desktop & ML" },
    { name: "Unity & C#", category: "Game Development" },
    { name: "Git & GitHub", category: "Version Control" },
  ];

  return (
    <section id="stack" className="py-24 px-6 w-full bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Expertise & Technologies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-4">
            My <span className="text-blue-600">Tech Stack</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Tools, frameworks, and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <h3 className="font-medium text-sm text-neutral-200 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-1 font-mono">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}