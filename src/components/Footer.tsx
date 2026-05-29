import { ArrowUp, Mail, Phone, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#03040b] pt-24 pb-12 px-4 md:px-8 border-t border-white/5 overflow-hidden" id="footer-section">
      {/* Absolute background color flare glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[120px] -z-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20" id="footer-grid">
          {/* Main Logo & pitch */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col gap-8" id="footer-pitch-column">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent p-[1px] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <div className="w-full h-full bg-[#090814] rounded-2xl flex items-center justify-center p-1.5 overflow-hidden">
                  <img src="/logo.png" alt="Alphabet Educational Hub Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-white leading-none mb-1">
                  ALPHABET
                </span>
                <span className="font-sans text-[11px] md:text-xs tracking-[0.3em] text-[#c084fc] font-semibold leading-none uppercase">
                  Educational Hub
                </span>
              </div>
            </div>


            {/* Quick Contacts details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/30 transition-colors">
                  <Phone className="w-4 h-4 text-brand-cyan" />
                </div>
                <span className="group-hover:text-white transition-colors">+91 90635 26196</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30 transition-colors">
                  <Mail className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="group-hover:text-white transition-colors">hr@alphabeteducationalhub.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-pink-500/10 group-hover:border-pink-500/30 transition-colors">
                  <Clock className="w-4 h-4 text-pink-500" />
                </div>
                <span className="group-hover:text-white transition-colors leading-relaxed">Santhi Nagar, Kakinada, AP – 533003</span>
              </div>
            </div>

            {/* Social Media Networks */}
            <div className="flex items-center gap-5 mt-2">
              <a href="https://www.facebook.com/alphabeteducationalhub" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-brand-cyan/20 text-slate-400 hover:text-brand-cyan transition-all border border-white/5 hover:border-brand-cyan/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/alphabeteducationalhub/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-pink-500/20 text-slate-400 hover:text-pink-500 transition-all border border-white/5 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:-translate-y-1" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/alphabet-educational-hub-1a492b199" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-[#0a66c2]/20 text-slate-400 hover:text-[#0a66c2] transition-all border border-white/5 hover:border-[#0a66c2]/30 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick links columns */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-6" id="footer-programs-column">
            <span className="text-[11px] font-mono font-bold text-brand-cyan uppercase tracking-[0.2em]">
              Academic Offerings
            </span>

            <nav className="flex flex-col gap-4 text-sm text-slate-400 font-light">
              <a href="#courses" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" /> Program Diplomas</a>
              <a href="#courses" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" /> Courses & Training</a>
              <a href="#materials" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" /> Books & Materials</a>
              <a href="#workshops" className="hover:text-brand-cyan transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" /> Staff Summits</a>
            </nav>
          </motion.div>

          {/* Quick jumps navigation */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-6" id="footer-navigation-column">
            <span className="text-[11px] font-mono font-bold text-[#c084fc] uppercase tracking-[0.2em]">
              Quick Sections
            </span>

            <nav className="flex flex-col gap-4 text-sm text-slate-400 font-light">
              <a href="#about" className="hover:text-[#c084fc] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors" /> Our Legacy</a>
              <a href="#why-choose-us" className="hover:text-[#c084fc] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors" /> Methodology</a>
              <a href="#materials" className="hover:text-[#c084fc] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors" /> Books Library</a>
              <a href="#workshops" className="hover:text-[#c084fc] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors" /> Workshops</a>
              <a href="#contact" className="hover:text-[#c084fc] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors" /> Admissions</a>
            </nav>
          </motion.div>

          {/* Core certifications credits */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-6" id="footer-badges-column">
            <span className="text-[11px] font-mono font-bold text-pink-400 uppercase tracking-[0.2em]">
              Legacy Metric
            </span>

            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <div className="w-full h-full bg-[#090814]/80 backdrop-blur-xl p-5 text-center rounded-[15px] z-10 relative transition-transform duration-500 group-hover:scale-[0.98]">
                <span className="block text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 leading-none">15+</span>
                <span className="block text-[10px] tracking-widest uppercase font-bold text-slate-300 mt-3">
                  Years of Excellence
                </span>
                <span className="block text-[9px] text-brand-cyan font-mono mt-1 opacity-80">ESTABLISHED 2008</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Double-layered modern metallic custom gradient divider */}
        <motion.div variants={itemVariants} className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" id="footer-divider-container">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent shadow-[0_0_15px_#06b6d4]" />
        </motion.div>

        {/* Bottom row copyrights and return trigger */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-8" id="footer-bottom-bar">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <span className="text-sm text-slate-400 font-light">
              © 2008 - 2026 Alphabet Educational Hub. All Rights Reserved.
            </span>
            <span className="text-[11px] text-slate-600 font-mono font-medium tracking-wide">
              Registered Trademark | Curriculum Material Protected by Copyright Laws.
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group p-4 rounded-full bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 text-slate-400 hover:text-white transition-all flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
            aria-label="Scroll to Top"
            id="btn-scroll-to-top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
