import { ArrowRight, FileText, PhoneCall, Sparkles, PencilLine, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenEnroll: () => void;
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenEnroll, onOpenBrochure }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-32 pb-20 overflow-hidden bg-[#03040b]"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-slow-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-brand-cyan/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-slow-pulse" style={{ animationDelay: '2s' }} />

      {/* Handwriting Flow Motion Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-30">
        <svg 
          viewBox="0 0 1000 600" 
          fill="none" 
          className="w-full max-w-5xl h-auto"
          aria-hidden="true"
        >
          <g opacity="0.08">
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
          100% { stroke-dashoffset: 0; opacity: 0.1; }
        }
      `}</style>

      {/* Floating accent particles */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[15%] pointer-events-none filter drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] text-brand-purple/60"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[15%] pointer-events-none filter drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] text-brand-cyan/60"
      >
        <PencilLine className="w-10 h-10" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Admissions Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.03)] group cursor-default hover:bg-white/10 transition-colors duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
            </span>
            <span className="text-brand-cyan text-[11px] font-bold tracking-[0.15em] uppercase">
              Admissions Open for 2026 Batch
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-[5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-6 max-w-4xl"
        >
          Transforming{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 pb-2">
            Handwriting
            <span className="absolute left-0 bottom-1 w-full h-[4px] bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full opacity-50 blur-[2px]" />
            <span className="absolute left-0 bottom-1 w-full h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 rounded-full" />
          </span>
          .<br />
          Empowering{' '}
          <span className="font-light italic text-slate-200 font-serif">Futures</span>.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400 font-bold max-w-3xl leading-relaxed mb-4">
          Become a Certified Professional Handwriting Teacher
        </motion.p>

        <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-300 font-sans font-medium max-w-3xl leading-relaxed mb-8">
          India's trusted destination for Handwriting Teacher Training with 100% placement assistance, Calligraphy Excellence, and Student Development Programs.
        </motion.p>




        {/* CTA Paragraph */}
        <motion.p variants={itemVariants} className="text-sm md:text-base text-brand-purple/90 font-semibold max-w-2xl leading-relaxed mb-10">
          Immerse yourself in our premier curriculum and shape a distinguished career in educational excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 mb-20 w-full justify-center max-w-3xl px-4">
          <button
            onClick={onOpenEnroll}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
          >
            <span>Enroll Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-transparent backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
          >
            <FileText className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>Download Brochure</span>
          </button>

          <a
            href="https://wa.me/919063526196?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20Alphabet%20Educational%20Hub."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-transparent backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
          >
            <PhoneCall className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>Contact Us</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a 
          variants={itemVariants}
          href="#about" 
          className="flex flex-col items-center gap-3 group pointer-events-auto"
        >
          <span className="text-[10px] tracking-[0.3em] font-semibold text-slate-500 uppercase group-hover:text-white transition-colors duration-300">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/10 group-hover:border-brand-cyan/50 transition-colors duration-300 flex justify-center p-1.5 bg-white/5 backdrop-blur-sm">
            <motion.span 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-brand-cyan rounded-full" 
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
