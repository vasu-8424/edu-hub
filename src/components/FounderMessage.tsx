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
                    src="/founder.jpeg"
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
                    Kakinada's Most Trusted Handwriting Academy since 2008
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
                <span className="text-[10px] font-mono font-bold text-brand-purple uppercase tracking-widest block mb-6">
                  Message from Revanth Koppisetti
                </span>

                <div className="space-y-5 text-sm md:text-base text-slate-300 font-light leading-relaxed">
                  <p>
                    Welcome to <span className="text-white font-semibold">Alphabet Educational Hub</span> — a trusted academy dedicated to handwriting excellence, creativity, and teacher training across India.
                  </p>
                  <p>
                    We have spent years perfecting our craft to deliver advanced handwriting training and innovative teaching methodologies. We believe handwriting is more than writing — it builds <span className="text-brand-cyan font-medium">confidence, concentration, discipline, and self-expression</span>.
                  </p>
                  <p>
                    Over the years, we have proudly trained thousands of students and developed professional handwriting teachers with strong career opportunities and <span className="text-brand-cyan font-semibold">100% placement assistance</span>.
                  </p>
                  <p>
                    At Alphabet Educational Hub, our mission is not only to improve handwriting but also to create confident learners, skilled educators, and inspiring professionals for the future.
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
