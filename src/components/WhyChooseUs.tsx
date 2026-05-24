import { Shield, Star, Users, HeartPulse, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'legacy',
      icon: <Star className="w-6 h-6 text-brand-cyan" />,
      badge: 'Trusted Since 2008',
      title: 'Since 2008',
      description: 'Trusted by thousands of students, teachers, and educational institutions across Andhra Pradesh and beyond.',
      colorClass: 'hover:border-brand-cyan/40',
      glowClass: 'bg-brand-cyan',
      iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
      span: 'md:col-span-6'
    },
    {
      id: 'placement',
      icon: <GraduationCap className="w-6 h-6 text-brand-purple" />,
      badge: '100% Placement',
      title: '100% Placement Guarantee Handwriting Teacher Training Course',
      description: 'We offer a professional handwriting teacher training program with 100% placement assistance and career guidance for eligible candidates, helping aspiring trainers build successful careers in handwriting education and teaching.',
      colorClass: 'hover:border-brand-purple/40',
      glowClass: 'bg-brand-purple',
      iconBg: 'bg-brand-purple/10 border-brand-purple/20',
      span: 'md:col-span-6'
    },
    {
      id: 'results',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      badge: 'Result-Oriented',
      title: '100% Result-Oriented Programs',
      description: 'Advanced-designed handwriting training methods that deliver visible improvement in neatness, fluency, and presentation.',
      colorClass: 'hover:border-emerald-400/40',
      glowClass: 'bg-emerald-400',
      iconBg: 'bg-emerald-400/10 border-emerald-400/20',
      span: 'md:col-span-4'
    },
    {
      id: 'attention',
      icon: <Users className="w-6 h-6 text-pink-400" />,
      badge: '1-to-1 Focus',
      title: 'Personalized One-to-One Attention',
      description: 'Individual guidance and structured support for every learner to ensure maximum improvement and confidence.',
      colorClass: 'hover:border-pink-400/40',
      glowClass: 'bg-pink-400',
      iconBg: 'bg-pink-400/10 border-pink-400/20',
      span: 'md:col-span-4'
    },
    {
      id: 'dysgraphia',
      icon: <HeartPulse className="w-6 h-6 text-amber-400" />,
      badge: 'Specialized Support',
      title: 'Specialized Dysgraphia Support',
      description: 'Customized intervention techniques and structured learning support for children with handwriting difficulties.',
      colorClass: 'hover:border-amber-400/40',
      glowClass: 'bg-amber-400',
      iconBg: 'bg-amber-400/10 border-amber-400/20',
      span: 'md:col-span-4'
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Why Parents, Students &amp; Schools Trust Us
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            Since 2008, Trusted by thousands of students, teachers, and educational institutions across Andhra Pradesh and beyond.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10" id="why-choose-grid">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className={`glass-panel p-7 md:p-8 rounded-3xl relative overflow-hidden group transition-all duration-400 hover:scale-[1.01] hover:shadow-2xl border border-white/5 ${reason.colorClass} ${reason.span}`}
              id={`why-card-${reason.id}`}
            >
              {/* Backglow */}
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-5 group-hover:opacity-15 transition-all ${reason.glowClass}`} />

              {/* Top row: icon + badge */}
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl border shadow-inner group-hover:scale-110 transition-transform duration-300 ${reason.iconBg}`}>
                  {reason.icon}
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase">
                  {reason.badge}
                </span>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight mb-3 leading-snug">
                {reason.title}
              </h3>

              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Elite pedagogy marker */}
              <div className="h-[1px] bg-white/5 mb-3" />
              <span className="text-[10px] font-mono font-semibold text-slate-600 uppercase tracking-widest">
                Elite Pedagogy →
              </span>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden border border-brand-purple/20" id="why-cta-banner">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-transparent to-brand-cyan/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-widest block mb-2">
                Admissions Open for 2026 Batch
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Take the first step toward a rewarding future in Professional Handwriting Training and Education.
              </h3>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mb-2">
                Join a growing community of students, teachers, educators, and aspiring handwriting professionals who have successfully transformed their handwriting skills, teaching abilities, confidence, and career opportunities through our expert-designed training programs.
              </p>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                Whether you want to improve handwriting, become a certified handwriting teacher, or build a successful teaching career, Alphabet Educational Hub is here to guide your journey.
              </p>

              {/* Quick highlight bullets */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                {['Enroll Now', 'Download Brochure', 'Contact Our Team'].map((cta) => (
                  <div key={cta} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span className="text-xs text-slate-300 font-medium">{cta}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-purple to-brand-cyan hover:brightness-110 transition-all shadow-lg whitespace-nowrap"
                id="why-enroll-cta"
              >
                <span>Start Your Transformation Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
