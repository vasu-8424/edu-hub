import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            15+ Years Legacy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Transforming Handwriting, Empowering Futures
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-3xl mx-auto mt-4 leading-relaxed">
            Alphabet Educational Hub provides a comprehensive range of educational services, including in-person and online classes, structured courses, workshops for students and teachers, and professional teacher training programs. Our core offerings include teacher training, handwriting improvement, cursive, Lucida, calligraphy, and creative writing development.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Vision & Mission Inline — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" id="vision-mission-inline">

          {/* Vision Card */}
          <div
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl hover:border-brand-cyan/20 transition-all duration-500 border border-white/5 group"
            id="about-vision-card"
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-10 blur-3xl bg-brand-cyan group-hover:opacity-20 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 shadow-inner">
                  <Eye className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan tracking-wide mt-0.5">
                    Transforming handwriting into a powerful tool for lifelong learning.
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                To become India's leading handwriting education and teacher training institute by transforming handwriting into a powerful tool for confidence, creativity, communication, and lifelong learning while creating highly skilled Professional Handwriting Teachers who inspire future generations.
              </p>

            </div>
          </div>

          {/* Mission Card */}
          <div
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl hover:border-brand-purple/20 transition-all duration-500 border border-white/5 group"
            id="about-mission-card"
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-10 blur-3xl bg-brand-purple group-hover:opacity-20 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 shadow-inner">
                  <Target className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-xs font-semibold text-brand-purple tracking-wide mt-0.5">
                    Empowering educators, transforming learners, brightening futures.
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="flex flex-col gap-3 mt-auto">
                {[
                  'To train and empower aspiring educators to become certified Professional Handwriting Teachers with advanced teaching methodologies and practical expertise.',
                  'To support students, schools, teachers, and professionals with personalized learning experiences and quality educational guidance.',
                  'To create meaningful learning transformations that contribute to academic excellence and a brighter future in the handwriting teaching profession.'
                ].map((point, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Image + floating badge row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="about-image-row">
          {/* Image */}
          <div className="lg:col-span-5 flex justify-center items-center" id="about-visual-right">
            <div className="relative group w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple via-[#bfdbfe]/10 to-brand-cyan opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative glass-panel rounded-3xl overflow-hidden p-[10px] shadow-2xl transition-all duration-500 group-hover:scale-102">
                <div className="rounded-2xl overflow-hidden relative bg-[#0b041c]" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="Professional Handwriting Teacher Training at Alphabet Educational Hub"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 filter saturate-[0.85] group-hover:scale-105 group-hover:saturate-100"
                    id="concept-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-cyan/20 pointer-events-none select-none mix-blend-overlay" />
                  <div className="absolute bottom-4 left-4 right-4 glass-panel backdrop-blur-md px-4 py-3 rounded-xl border border-white/15">
                    <span className="block text-xs font-serif font-bold text-white tracking-wide">
                      Professional Handwriting Teacher Training
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      100% Placement Assistance · Since 2008
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-panel rounded-2xl p-3 shadow-lg flex items-center gap-2 border border-white/10 animate-float">
                <Award className="w-5 h-5 text-brand-purple" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">15+ Years Legacy</span>
              </div>
            </div>
          </div>

          {/* Right: Additional About text */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="about-extra-content">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-5 bg-brand-cyan" />
              <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-widest block mb-3">
                About Us
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight mb-4">
                India's Trusted Handwriting Education Hub
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
                Since 2008, Alphabet Educational Hub has been empowering thousands of students, teachers, schools, and aspiring educators through expert-designed programs that enhance handwriting, concentration, confidence, creativity, and presentation skills.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2,00,000+', label: 'Students Trained', color: 'text-brand-cyan' },
                  { value: '20,000+', label: 'Teachers Empowered', color: 'text-brand-purple' },
                  { value: '200+', label: 'Schools Associated', color: 'text-pink-400' },
                  { value: '100%', label: 'Placement Support', color: 'text-emerald-400' }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white/4 border border-white/5 hover:bg-white/8 transition-colors">
                    <span className={`block text-xl font-serif font-extrabold ${stat.color}`}>{stat.value}</span>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
