import { ArrowRight, FileText, PhoneCall, Sparkles, PencilLine } from 'lucide-react';

interface HeroProps {
  onOpenEnroll: () => void;
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenEnroll, onOpenBrochure }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Handwriting Flow Motion Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-40">
        <svg 
          viewBox="0 0 1000 600" 
          fill="none" 
          className="w-full max-w-5xl h-auto"
          aria-hidden="true"
        >
          <g opacity="0.12">
            <line x1="10%" y1="15%" x2="90%" y2="15%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="10%" y1="35%" x2="90%" y2="35%" stroke="#06b6d4" strokeWidth="1.5" />
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="10%" y1="70%" x2="90%" y2="70%" stroke="#06b6d4" strokeWidth="1.5" />
          </g>
          <path
            d="M150,420 C220,180 340,120 420,280 C480,400 400,480 500,420 C580,370 650,220 720,250 C780,280 820,380 900,320"
            stroke="url(#hero-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1400"
            strokeDashoffset="1400"
            style={{ animation: 'drawStroke 9s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate' }}
          />
          <path
            d="M320,380 L350,340 C350,340 380,360 400,310 C420,260 450,230 480,270 L520,360"
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ animation: 'drawStroke 6s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate', animationDelay: '1.5s' }}
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 1400; opacity: 0; }
          10% { opacity: 0.8; }
          85% { stroke-dashoffset: 0; opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
      `}</style>

      {/* Floating accent particles */}
      <div className="absolute top-[28%] left-[20%] animate-float pointer-events-none filter drop-shadow-[0_0_10px_#8b5cf6] text-brand-purple/40">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-[35%] right-[15%] animate-float-slow pointer-events-none filter drop-shadow-[0_0_10px_#06b6d4] text-brand-cyan/40">
        <PencilLine className="w-8 h-8" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Admissions Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md animate-fade-in"
          id="hero-badge"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
          <span>Admissions Open for 2026 Batch</span>
        </div>

        {/* Main Headline */}
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 max-w-4xl"
          id="hero-headline"
        >
          Transforming{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 font-bold">
            Handwriting
            <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full opacity-60" />
          </span>
          .<br />
          Empowering{' '}
          <span className="font-light italic text-slate-100 font-serif">Futures</span>.
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-brand-cyan font-semibold max-w-3xl leading-relaxed mb-3" id="hero-subheadline-accent">
          Become a Certified Professional Handwriting Teacher
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans font-light max-w-3xl leading-relaxed mb-6" id="hero-subheadline">
          India's trusted destination for Handwriting Teacher Training with 100% placement assistance, Calligraphy Excellence, and Student Development Programs.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mb-4" id="hero-description">
          Since 2008, Alphabet Educational Hub has empowered thousands of students, teachers, schools, and aspiring educators through expert-designed programs that enhance handwriting, concentration, confidence, creativity, and presentation skills.
        </p>

        {/* Tagline quote */}
        <div className="mb-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <p className="text-sm font-serif italic text-brand-cyan font-semibold tracking-wide" id="hero-tagline">
            "Beautiful Handwriting Builds Bright Minds"
          </p>
        </div>

        {/* CTA Paragraph */}
        <p className="text-sm md:text-base text-brand-purple font-semibold max-w-2xl leading-relaxed mb-8" id="hero-cta-text">
          Join the Professional Handwriting Teacher Training Program and build a rewarding career in handwriting education.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center max-w-3xl px-4"
          id="hero-ctas"
        >
          {/* Enroll Now */}
          <button
            onClick={onOpenEnroll}
            className="w-full sm:w-auto relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-purple to-brand-cyan shadow-xl shadow-brand-purple/20 hover:scale-103 hover:shadow-brand-cyan/30 transition-all duration-300"
            id="hero-enroll-cta"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <span>Enroll Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Download Brochure */}
          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-emerald-600/80 border border-emerald-500/40 hover:bg-emerald-600 hover:border-emerald-400/60 transition-all duration-300"
            id="hero-brochure-cta"
          >
            <FileText className="w-4 h-4" />
            <span>Download Brochure</span>
          </button>

          {/* Contact Us */}
          <a
            href="https://wa.me/919063526196?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20Alphabet%20Educational%20Hub."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 hover:bg-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300"
            id="hero-contact-cta"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl"
          id="hero-trust-dashboard"
        >
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center transform hover:translate-y-[-4px] transition-all duration-400 group">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 group-hover:to-brand-cyan transition-colors">
              2,00,000+
            </span>
            <span className="font-serif text-xs font-bold text-brand-cyan tracking-wider uppercase mt-1">
              Students Trained
            </span>
            <p className="text-xs text-slate-400 mt-2">
              Transforming penmanship & confidence nationwide.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center transform hover:translate-y-[-4px] transition-all duration-400 group">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 group-hover:to-brand-purple transition-colors">
              20,000+
            </span>
            <span className="font-serif text-xs font-bold text-brand-purple tracking-wider uppercase mt-1">
              Teachers Empowered
            </span>
            <p className="text-xs text-slate-400 mt-2">
              Certified educators leading classrooms into the future.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center transform hover:translate-y-[-4px] transition-all duration-400 group">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 group-hover:to-pink-500 transition-colors">
              200+
            </span>
            <span className="font-serif text-xs font-bold text-pink-500 tracking-wider uppercase mt-1">
              Schools Associated
            </span>
            <p className="text-xs text-slate-400 mt-2">
              Integrated curriculum & professional skill partnerships.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="mt-14 flex flex-col items-center gap-2 group pointer-events-auto" id="hero-scroll-indicator">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-slate-500 uppercase group-hover:text-white transition-colors duration-300">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-600 group-hover:border-brand-cyan transition-colors duration-300 flex justify-center p-1.5">
            <span className="w-1 h-2 bg-brand-cyan rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
