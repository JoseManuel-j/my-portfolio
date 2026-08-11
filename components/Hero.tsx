export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Hi, I&apos;m <span className="text-blue-600">Jose</span>
      </h1>
      <p className="mt-5 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
        A passionate IT student at Universitas Budi Luhur, exploring Full-Stack Web Development, Programming, and Modern Technologies.
      </p>
      <div className="mt-10 flex gap-4">
        {/* Tombol View Projects */}
        <a 
          href="#projects" 
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all cursor-pointer hover:scale-105 shadow-sm"
        >
          View Projects
        </a>
        {/* Tombol Get in Touch */}
        <a 
          href="#contact" 
          className="px-6 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-200 transition-all cursor-pointer hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}