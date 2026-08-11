export default function Hero() {
  return (
    <section className="relative bg-[#0b0b0f] text-white py-20 px-6 overflow-hidden">
      {/* Efek Garis Grid Tipis di Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Kolom Kiri: Teks Utama */}
        <div>
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            IT Student & Full-Stack Developer
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 leading-tight">
            Hello, I&apos;m <span className="text-blue-600">Jose Manuel.</span>
          </h1>
          <p className="mt-6 text-neutral-400 text-base md:text-lg leading-relaxed">
            A passionate IT student at Universitas Budi Luhur, exploring Full-Stack Web Development and Modern Technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition shadow-lg shadow-blue-600/25 cursor-pointer hover:scale-105"
            >
              Discuss for Projects
            </a>
            {/* <a
              href="#projects"
              className="px-6 py-3 text-neutral-300 hover:text-white font-medium transition flex items-center gap-2 group cursor-pointer"
            >
              View Portfolios
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a> */}
          </div>
        </div>
        
        {/* Kolom Kanan: Kotak Kartu Visual */}
        <div className="relative">
          <div className="relative w-full h-[320px] bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600/20 rounded-full blur-xl" />
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 font-mono text-xl font-bold mb-3 shadow-inner">
              JD
            </div>
            <p className="text-neutral-200 font-medium text-sm">Jose Dev Space</p>
            <p className="text-xs text-neutral-500 mt-1 font-mono">Budi Luhur University</p>
          </div>
        </div>
      </div>
    </section>
  )
}

