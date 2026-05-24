import { GraduationCap, Users, Store, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CareerPath {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  gradient: string;
  colorClass: string;
}

export default function CareerOpportunities() {
  const careers: CareerPath[] = [
    {
      id: 'trainer',
      title: 'Handwriting Trainer',
      badge: 'MOST IN DEMAND',
      icon: <GraduationCap className="w-6 h-6 text-brand-cyan" />,
      gradient: 'from-brand-cyan to-blue-700',
      colorClass: 'border-brand-cyan/30',
      description: 'Become a certified Professional Handwriting Trainer and educator. Gain expert training, teaching methodologies, and practical experience to build a successful career in handwriting education.',
      highlights: []
    },
    {
      id: 'internship',
      title: 'Internship Programs',
      badge: 'HANDS-ON LEARNING',
      icon: <Users className="w-6 h-6 text-brand-purple" />,
      gradient: 'from-brand-purple to-indigo-700',
      colorClass: 'border-brand-purple/30',
      description: 'Hands-on learning opportunities for aspiring trainers and educators. Gain real classroom exposure, guided mentorship, and practical training experience in handwriting development programs.',
      highlights: []
    },
    {
      id: 'franchise',
      title: 'Franchise Opportunities',
      badge: 'BUSINESS OPPORTUNITY',
      icon: <Store className="w-6 h-6 text-emerald-400" />,
      gradient: 'from-emerald-500 to-teal-700',
      colorClass: 'border-emerald-400/30',
      description: 'Partner with Alphabet Educational Hub and establish your own center. Expand handwriting education services in your region with our proven training systems, brand support, and operational guidance.',
      highlights: []
    },
    {
      id: 'marketing',
      title: 'Marketing Manager',
      badge: 'OUTREACH ROLE',
      icon: <Megaphone className="w-6 h-6 text-pink-400" />,
      gradient: 'from-pink-500 to-rose-700',
      colorClass: 'border-pink-400/30',
      description: 'Career opportunities for individuals passionate about educational outreach, branding, and institutional growth. Contribute to expanding our mission and reaching more schools and learners.',
      highlights: []
    }
  ];

  return (
    <section id="careers" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-brand-cyan/3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase bg-emerald-400/10 px-4 py-1.5 rounded-full">
            Career Pathways
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Career Opportunities
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            Build a rewarding future with Alphabet Educational Hub. Join us in our mission to transform handwriting education and empower learners across India. We offer multiple career pathways for passionate individuals.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-brand-cyan mx-auto mt-6 rounded-full" />
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="careers-grid">
          {careers.map((career) => (
            <div
              key={career.id}
              className={`glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl border border-transparent hover:${career.colorClass}`}
              id={`career-card-${career.id}`}
            >
              {/* Backglow */}
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-5 group-hover:opacity-15 transition-all bg-gradient-to-tr ${career.gradient}`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3.5 rounded-xl bg-gradient-to-br ${career.gradient} shadow-lg`}>
                    {career.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#8b5cf6] bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase">
                    {career.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-cyan transition-colors">
                  {career.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {career.description}
                </p>

                {/* Empty block to remove highlights rendering */}

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors"
                  id={`career-inquire-${career.id}`}
                >
                  <span>Learn More & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden border border-emerald-400/20" id="careers-cta-banner">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-brand-cyan/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Ready to Begin?
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Join Our Mission to Transform Handwriting Education
              </h3>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                Whether you want to improve handwriting, become a certified handwriting teacher, or build a successful teaching career, Alphabet Educational Hub is here to guide your journey.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-brand-cyan hover:brightness-110 transition-all shadow-lg whitespace-nowrap"
                id="careers-contact-cta"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
