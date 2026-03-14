import { Github, Linkedin, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0D1117] border-t border-[#30363d]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#C9D1D9] font-semibold mb-1">Md Hasibul Hossain</p>
            <p className="text-[#8B949E] text-sm">
              © 2026 All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Hasib-shohag"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#21262d] border border-[#30363d] rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#C9D1D9] hover:border-[#C9D1D9]/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/hasibcuetmie/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#21262d] border border-[#30363d] rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#58A6FF] hover:border-[#58A6FF]/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Hasib-shohag/Resume/raw/8b72e2f0fe38caff46085d7c3a60420e602706c5/CV_Md_Hasibul_Hossain_PM.pdf"
              download
              className="w-10 h-10 bg-[#21262d] border border-[#30363d] rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#00FFC6] hover:border-[#00FFC6]/50 transition-all"
              aria-label="Resume"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#30363d] text-center">
          <p className="text-[#8B949E] text-sm">
            A product person who understands coding but love to build product which creates impact
          </p>
        </div>
      </div>
    </footer>
  );
}
