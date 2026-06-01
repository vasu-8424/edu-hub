import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 20 }
    }
  };

  return (
    <section id="about" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Bottom: Image + floating badge row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" id="about-image-row">
          {/* Image */}
          <motion.div variants={cardVariants} className="lg:col-span-5 flex justify-center items-center relative" id="about-visual-right">
            <div className="relative group w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-purple via-[#bfdbfe]/10 to-brand-cyan opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent">
                <div className="rounded-[2.5rem] overflow-hidden relative bg-[#0b041c] p-2 shadow-2xl">
                  <div className="rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                    <img
                      src="/about_handwriting_setup.png"
                      alt="Professional Handwriting Teacher Training at Alphabet Educational Hub"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 filter saturate-[0.85] group-hover:scale-105 group-hover:saturate-100"
                      id="concept-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-cyan/20 pointer-events-none mix-blend-overlay" />
                    <div className="absolute bottom-5 left-5 right-5 bg-black/40 backdrop-blur-xl px-5 py-4 rounded-2xl border border-white/10 shadow-lg">
                      <span className="block text-sm font-serif font-bold text-white tracking-wide">
                        Professional Handwriting Teacher Training
                      </span>
                      <span className="block text-xs font-mono text-brand-cyan mt-1.5 uppercase tracking-wider">
                        100% Placement Assistance · Since 2008
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#090814]/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 border border-brand-purple/30 z-20"
              >
                <Award className="w-6 h-6 text-brand-purple" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">15+ Years Legacy</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Additional About text */}
          <motion.div variants={cardVariants} className="lg:col-span-7 flex flex-col gap-6" id="about-extra-content">
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
              <div className="glass-panel p-10 md:p-12 rounded-[2rem] bg-[#090814]/80 backdrop-blur-xl relative z-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-brand-cyan pointer-events-none" />
                
                {/* Text Content */}
                <div className="mb-10">
                  <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-[0.25em] block mb-4">
                    About Us
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    India's Trusted Handwriting Education Hub
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-light">
                    For over a decade, we have been dedicated to transforming lives through the art of handwriting. Our programs are uniquely designed to foster cognitive development, fine motor skills, and an enduring appreciation for beautiful penmanship.
                  </p>
                </div>

                {/* Stats Grid at the bottom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { value: '2,00,000+', label: 'Students Trained', color: 'text-brand-cyan' },
                    { value: '20,000+', label: 'Teachers Empowered', color: 'text-brand-purple' },
                    { value: '200+', label: 'Schools Associated', color: 'text-pink-400' },
                    { value: '100%', label: 'Placement Support', color: 'text-emerald-400' }
                  ].map((stat) => (
                    <motion.div 
                      key={stat.label}
                      whileHover={{ y: -5 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 shadow-inner hover:bg-white/10 hover:border-white/10 transition-colors"
                    >
                      <span className={`block text-2xl sm:text-3xl font-serif font-black tracking-tight ${stat.color} mb-1`}>{stat.value}</span>
                      <span className="block text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Inline — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="vision-mission-inline">
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden"
            id="about-vision-card"
          >
            <div className="relative h-full glass-panel p-10 md:p-12 rounded-[2rem] flex flex-col overflow-hidden bg-[#090814]/60">
              {/* Background Image */}
              <img src="/vision_bg.png" alt="Vision Background" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#090814]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-cyan/20 blur-[100px] pointer-events-none group-hover:bg-brand-cyan/30 transition-colors duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/5 border border-brand-cyan/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow duration-500">
                    <Eye className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Our Vision
                    </h3>
                    <p className="text-xs font-bold text-brand-cyan tracking-widest mt-1 uppercase">
                      Transforming handwriting into a powerful tool for lifelong learning.
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-base text-slate-300 leading-relaxed font-light mt-4">
                  To become India's premier education and teacher training academy by fostering confidence, creativity, and communication, while creating highly skilled professionals who inspire future generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden"
            id="about-mission-card"
          >
            <div className="relative h-full glass-panel p-10 md:p-12 rounded-[2rem] flex flex-col overflow-hidden bg-[#090814]/60">
              {/* Background Image */}
              <img src="/mission_bg.png" alt="Mission Background" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#090814]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-purple/20 blur-[100px] pointer-events-none group-hover:bg-brand-purple/30 transition-colors duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 border border-brand-purple/20 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                    <Target className="w-7 h-7 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Our Mission
                    </h3>
                    <p className="text-xs font-bold text-brand-purple tracking-widest mt-1 uppercase">
                      Empowering educators, transforming learners, brightening futures.
                    </p>
                  </div>
                </div>

                {/* Points */}
                <div className="flex flex-col gap-4 mt-4">
                  {[
                    'To train and empower aspiring educators to become certified Professional Handwriting Teachers with advanced teaching methodologies and practical expertise.',
                    'To support students, schools, teachers, and professionals with personalized learning experiences and quality educational guidance.',
                    'To create meaningful learning transformations that contribute to academic excellence and a brighter future in the handwriting teaching profession.'
                  ].map((point, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex gap-4 items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed font-light">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
