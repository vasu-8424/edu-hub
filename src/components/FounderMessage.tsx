import { Quote, Award, GraduationCap, MapPin } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section id="founder" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/10">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-purple/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase bg-brand-purple/10 px-4 py-1.5 rounded-full">
            From The Desk Of Our Founder
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Founder's Message
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="founder-grid">

          {/* Left: Founder Profile Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6" id="founder-profile">
            <div className="relative group w-full max-w-[320px] mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple via-pink-500/20 to-brand-cyan opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700" />

              {/* Profile Image Frame */}
              <div className="relative glass-panel rounded-3xl overflow-hidden p-[10px] shadow-2xl">
                <div className="rounded-2xl overflow-hidden relative bg-[#0b041c]" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800"
                    alt="Revanth Koppisetti — Founder, Alphabet Educational Hub"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 filter saturate-[0.8] group-hover:scale-105 group-hover:saturate-100"
                    id="founder-photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b041c]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block text-base font-serif font-bold text-white tracking-wide leading-tight">
                      Revanth Koppisetti
                    </span>
                    <span className="block text-xs text-brand-cyan mt-0.5 font-semibold">
                      Founder & Director
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-400">Kakinada, Andhra Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-panel rounded-2xl p-3 shadow-lg flex items-center gap-2 border border-white/10 animate-float">
                <Award className="w-4 h-4 text-brand-purple" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">Since 2008</span>
              </div>
            </div>

            {/* Credentials */}
            <div className="glass-panel rounded-2xl p-5 w-full max-w-[320px] mx-auto lg:mx-0 border border-white/10">
              <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-widest block mb-3">
                Credentials
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-light leading-relaxed">
                    Founder & Director — Alphabet Educational Hub
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-light leading-relaxed">
                    Expert in Professional Handwriting Teacher Training
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-light leading-relaxed">
                    Kakinada's Most Trusted Handwriting Institute since 2008
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="lg:col-span-8 flex flex-col gap-6" id="founder-message-content">
            {/* Welcome heading */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center opacity-10">
                <Quote className="w-16 h-16 text-brand-purple" />
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono font-bold text-brand-purple uppercase tracking-widest block mb-2">
                  Message from Revanth Koppisetti
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6">
                  "Welcome to Alphabet Educational Hub!"
                </h3>

                <div className="space-y-4 text-sm md:text-base text-slate-300 font-light leading-relaxed">
                  <p>
                    It gives me immense pleasure and pride to welcome you to <span className="text-white font-semibold">Alphabet Educational Hub</span> — a place where learning is nurtured, creativity is encouraged, and every student is empowered to achieve their fullest potential.
                  </p>

                  <p>
                    At Alphabet Educational Hub, we believe that handwriting is much more than neat writing on paper. It is a lifelong skill that builds <span className="text-brand-cyan font-medium">confidence, improves concentration, strengthens discipline, and enhances creativity and self-expression</span>.
                  </p>

                  <p>
                    Since 2008, we have been passionately committed to transforming the handwriting and learning abilities of students, teachers, and aspiring educators through advanced, designed training methods, personalized guidance, and a strong dedication to excellence.
                  </p>

                  <p>
                    Over the years, we have proudly established ourselves as one of the most trusted and respected handwriting training institutes in <span className="text-white font-semibold">Kakinada, Andhra Pradesh</span>. The remarkable achievements and success stories of our students and teachers reflect our commitment to quality education and meaningful transformation.
                  </p>

                  <p>
                    What makes Alphabet Educational Hub unique is our expertise in developing and training <span className="text-brand-purple font-semibold">professional handwriting teachers</span>, offering <span className="text-brand-cyan font-semibold">100% placement assistance</span>. We specialize in mentoring aspiring educators with advanced handwriting techniques, teaching methodologies, classroom strategies, and professional training programs that help them build successful teaching careers and become confident handwriting professionals.
                  </p>

                  <p>
                    As we continue this inspiring journey, I warmly invite you to explore our programs, achievements, and transformation stories that make Alphabet Educational Hub a trusted destination for handwriting excellence and teacher training.
                  </p>
                </div>

                {/* Closing line */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400 font-light italic leading-relaxed">
                    Thank you for your trust, encouragement, and continued support. Together, let us inspire better learning, brighter futures, and confident handwriting professionals for tomorrow.
                  </p>

                  {/* Signature */}
                  <div className="flex items-center gap-4 mt-6">
                    <div>
                      <div className="font-serif text-xl font-bold text-white italic tracking-wide">
                        Revanth Koppisetti
                      </div>
                      <span className="text-xs text-brand-cyan font-semibold tracking-wider uppercase">
                        Founder & Director — Alphabet Educational Hub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="founder-stats">
              {[
                { value: '2008', label: 'Established', color: 'text-brand-cyan' },
                { value: '2,00,000+', label: 'Students Trained', color: 'text-brand-purple' },
                { value: '20,000+', label: 'Teachers Empowered', color: 'text-pink-400' },
                { value: '100%', label: 'Placement Support', color: 'text-emerald-400' }
              ].map((stat) => (
                <div key={stat.label} className="glass-panel p-4 rounded-2xl text-center border border-white/5 hover:border-brand-purple/20 transition-colors">
                  <span className={`block text-xl font-serif font-extrabold ${stat.color}`}>{stat.value}</span>
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
