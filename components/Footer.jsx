import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 bg-[#070709] border-t border-neutral-800/80 text-white relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Identitas / Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="font-mono text-base font-bold tracking-tight text-white">
            <span className="text-blue-500">$</span> jose
          </Link>
          <span className="text-neutral-500 text-sm ml-2 font-mono">
            © 2026 Jose. All rights reserved.
          </span>
        </div>

        {/* Tautan Sosial Media / Profesional */}
        <div className="flex items-center gap-6 text-sm text-neutral-400 font-mono">
          <a 
            href="https://github.com/JoseManuel-j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:josemanlll04@gmail.com" 
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}   