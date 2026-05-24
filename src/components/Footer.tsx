import { GraduationCap, ArrowUp, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05060f] pt-20 pb-12 px-4 md:px-8 border-t border-white/5 overflow-hidden" id="footer-section">
      {/* Absolute background color flare glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] rounded-full bg-brand-purple/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16" id="footer-grid">
          {/* Main Logo & pitch */}
          <div className="md:col-span-5 flex flex-col gap-6" id="footer-pitch-column">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] shadow-lg">
                <div className="w-full h-full bg-[#05060f] rounded-xl flex items-center justify-center">
                  <span className="font-serif font-black text-xl tracking-tight bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wide text-white leading-tight">
                  ALPHABET
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-[#8b5cf6] font-semibold leading-none uppercase">
                  Educational Hub
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
              India's leading handwriting education and teacher training institute, empowering students, teachers, and aspiring educators through expert-designed programs since 2008. Based in Kakinada, Andhra Pradesh.
            </p>

            {/* Quick Contacts details */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>+91 90635 26196</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Mail className="w-3.5 h-3.5 text-brand-purple" />
                <span>hr@alphabeteducationalhub.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-pink-500" />
                <span>Santhi Nagar, Kakinada, AP – 533003</span>
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 flex flex-col gap-5" id="footer-programs-column">
            <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-widest">
              ACADEMIC OFFERINGS
            </span>

            <nav className="flex flex-col gap-3 text-xs md:text-sm text-slate-400 font-light">
              <a href="#courses" className="hover:text-white transition-colors">Program Diplomas</a>
              <a href="#courses" className="hover:text-white transition-colors">Courses & Training</a>
              <a href="#materials" className="hover:text-white transition-colors">Books & Materials</a>
              <a href="#workshops" className="hover:text-white transition-colors">Staff Development Summits</a>
            </nav>
          </div>

          {/* Quick jumps navigation */}
          <div className="md:col-span-2 flex flex-col gap-5" id="footer-navigation-column">
            <span className="text-[10px] font-mono font-bold text-[#8b5cf6] uppercase tracking-widest">
              QUICK SECTIONS
            </span>

            <nav className="flex flex-col gap-3 text-xs md:text-sm text-slate-400 font-light">
              <a href="#about" className="hover:text-white transition-colors">Our Legacy</a>
              <a href="#why-choose-us" className="hover:text-white transition-colors">The Methodology</a>
              <a href="#materials" className="hover:text-white transition-colors">Books & Materials</a>
              <a href="#workshops" className="hover:text-white transition-colors">Workshops</a>
              <a href="#contact" className="hover:text-white transition-colors">Apply Admissions</a>
            </nav>
          </div>

          {/* Core certifications credits */}
          <div className="md:col-span-2 flex flex-col gap-5" id="footer-badges-column">
            <span className="text-[10px] font-mono font-bold text-pink-400 uppercase tracking-widest">
              LEGACY METRIC
            </span>

            <div className="p-4 rounded-xl bg-white/3 border border-white/5 text-center">
              <span className="block text-xl font-serif font-black text-white leading-none">15+</span>
              <span className="block text-[8px] tracking-wider uppercase font-extrabold text-slate-400 mt-2">
                Years of Excellence
              </span>
              <span className="block text-[8px] text-brand-cyan font-mono mt-0.5">ESTABLISHED 2008</span>
            </div>
          </div>
        </div>

        {/* Double-layered modern metallic custom gradient divider */}
        <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent my-8" id="footer-divider-container">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Bottom row copyrights and return trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-bottom-bar">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <span className="text-xs text-slate-400 font-light">
              © 2008 - 2026 Alphabet Educational Hub. All Rights Reserved.
            </span>
            <span className="text-[10px] text-slate-600 font-mono font-medium">
              Registered Trademark | Curriculum Material Protected by Copyright Laws.
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-cyan/40 text-slate-400 hover:text-white transition-all flex items-center justify-center shadow-lg"
            aria-label="Scroll to Top"
            id="btn-scroll-to-top"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
