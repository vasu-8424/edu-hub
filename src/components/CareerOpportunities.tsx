import React from 'react';
import { GraduationCap, Users, Store, Megaphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CareerPath {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
}

export default function CareerOpportunities() {
  const careers: CareerPath[] = [
    {
      id: 'trainer',
      title: 'Handwriting Trainer',
      badge: 'MOST IN DEMAND',
      icon: <GraduationCap className="w-6 h-6 text-[#22d3ee]" />,
      gradient: 'from-[#22d3ee] to-blue-600',
      glowColor: 'bg-[#22d3ee]/20',
      description: 'Become a certified Professional Handwriting Trainer and educator. Gain expert training, teaching methodologies, and practical experience to build a successful career in handwriting education.',
      highlights: []
    },
    {
      id: 'internship',
      title: 'Internship Programs',
      badge: 'HANDS-ON LEARNING',
      icon: <Users className="w-6 h-6 text-[#c084fc]" />,
      gradient: 'from-[#c084fc] to-indigo-600',
      glowColor: 'bg-[#c084fc]/20',
      description: 'Hands-on learning opportunities for aspiring trainers and educators. Gain real classroom exposure, guided mentorship, and practical training experience in handwriting development programs.',
      highlights: []
    },
    {
      id: 'franchise',
      title: 'Franchise Opportunities',
      badge: 'BUSINESS OPPORTUNITY',
      icon: <Store className="w-6 h-6 text-[#34d399]" />,
      gradient: 'from-[#34d399] to-teal-600',
      glowColor: 'bg-[#34d399]/20',
      description: 'Partner with Alphabet Educational Hub and establish your own center. Expand handwriting education services in your region with our proven training systems, brand support, and operational guidance.',
      highlights: []
    },
    {
      id: 'marketing',
      title: 'Marketing Manager',
      badge: 'OUTREACH ROLE',
      icon: <Megaphone className="w-6 h-6 text-[#f472b6]" />,
      gradient: 'from-[#f472b6] to-rose-600',
      glowColor: 'bg-[#f472b6]/20',
      description: 'Career opportunities for individuals passionate about educational outreach, branding, and institutional growth. Contribute to expanding our mission and reaching more schools and learners.',
      highlights: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="careers" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-cyan/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.15)]">
            Career Pathways
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-6 leading-tight">
            Career Opportunities
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-3xl mx-auto mt-6 leading-relaxed">
            Build a rewarding future with Alphabet Educational Hub. Join us in our mission to transform handwriting education and empower learners across India. We offer multiple career pathways for passionate individuals.
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" 
          id="careers-grid"
        >
          {careers.map((career) => (
            <motion.div
              variants={itemVariants}
              key={career.id}
              className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden"
            >
              {/* Animated Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className={`absolute -inset-1 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${career.glowColor}`} />

              <div className="relative h-full w-full bg-[#090814]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-10 flex flex-col z-10 transition-transform duration-500 group-hover:scale-[0.99]">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${career.gradient} shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                    {career.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/80 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full uppercase shadow-inner">
                    {career.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {career.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-10 flex-grow">
                  {career.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 text-sm font-bold text-white group-hover:text-brand-cyan transition-colors mt-auto w-max"
                  id={`career-inquire-${career.id}`}
                >
                  <span className="border-b border-transparent group-hover:border-brand-cyan/50 pb-0.5 transition-colors">Learn More & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-emerald-500/30 to-brand-cyan/30 overflow-hidden" 
          id="careers-cta-banner"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-brand-cyan/10 blur-xl pointer-events-none" />
          <div className="relative w-full h-full bg-[#090814]/80 backdrop-blur-3xl rounded-[2.4rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left z-10">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-[0.25em] block mb-4">
                Ready to Begin?
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Join Our Mission to Transform Handwriting Education
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Whether you want to improve handwriting, become a certified handwriting teacher, or build a successful teaching career, Alphabet Educational Hub is here to guide your journey.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 whitespace-nowrap group"
                id="careers-contact-cta"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
