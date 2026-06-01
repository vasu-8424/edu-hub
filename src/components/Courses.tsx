import React from 'react';
import { Award, BookOpen, Check, Clock, GraduationCap, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses() {
  return (
    <section id="courses" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#05060f]">
      {/* Background Orbs */}
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase block mb-4">
            COURSES WE OFFER
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Structured Learning for Teachers & Future Educators
          </h2>
        </motion.div>

        {/* Master Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] border border-white/10 overflow-hidden bg-[#090814]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT COLUMN: Foundation & Expert */}
            <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Foundation Level */}
              <div className="p-8 md:p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors group flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-blue-600 flex items-center justify-center text-lg font-black text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">1</div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">Foundation Level</h3>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold tracking-widest mt-1 mb-4 w-fit">
                  START YOUR JOURNEY
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  A beginner-friendly program designed to build strong fundamentals in handwriting teaching and correction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2"><BookOpen className="w-3 h-3 text-brand-cyan" /> Learn</h4>
                    <ul className="space-y-2">
                      {['Cursive techniques', 'Letter formation', 'Child & adult basics', 'Practical teaching'].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-xs text-slate-300 font-light"><Check className="w-3 h-3 text-brand-cyan shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2"><Clock className="w-3 h-3 text-brand-cyan" /> Duration</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider block">Graduates</span>
                        <p className="text-xs text-brand-cyan">3 Months Course</p>
                        <p className="text-[10px] text-slate-400">+3 Months Internship</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider block">Non-Graduates</span>
                        <p className="text-xs text-brand-cyan">3 Months Course</p>
                        <p className="text-[10px] text-slate-400">+6 Months Internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Level */}
              <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors group flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-lg font-black text-white shadow-[0_0_15px_rgba(52,211,153,0.4)]">2</div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Expert Level</h3>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest mt-1 mb-4 w-fit">
                  ADVANCE YOUR SKILLS
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  An advanced program focused on Lucida writing style and dysgraphia identification.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2"><BookOpen className="w-3 h-3 text-emerald-400" /> Learn</h4>
                    <ul className="space-y-2">
                      {['Lucida mastery', 'Dysgraphia identification', 'Advanced assessment', 'Professional methods'].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-xs text-slate-300 font-light"><Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2"><Clock className="w-3 h-3 text-emerald-400" /> Duration</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider block">Graduates</span>
                        <p className="text-xs text-emerald-400">3 Months Course</p>
                        <p className="text-[10px] text-slate-400">+3 Months Internship</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider block">Non-Graduates</span>
                        <p className="text-xs text-emerald-400">3 Months Course</p>
                        <p className="text-[10px] text-slate-400">+6 Months Internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Professional Diploma */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-brand-purple/5 to-transparent hover:bg-brand-purple/10 transition-colors group relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-purple/20 blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-pink-600 flex items-center justify-center text-xl font-black text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]">3</div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-white group-hover:text-brand-purple transition-colors">Professional Diploma</h3>
                    <span className="block text-xs font-serif text-brand-purple tracking-widest uppercase mt-1">Course</span>
                  </div>
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-[10px] font-bold tracking-widest mt-2 mb-6 w-fit shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  BECOME CERTIFIED
                </div>
                
                <p className="text-base text-slate-300 font-light leading-relaxed mb-10">
                  A complete career-oriented program designed to develop professional handwriting trainers and specialists.
                </p>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5 flex items-center gap-3"><Award className="w-5 h-5 text-brand-purple" /> What You Will Learn</h4>
                    <ul className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
                      {['Cursive & Lucida handwriting mastery', 'Dysgraphia identification', 'Professional teaching expertise'].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-slate-300 font-light"><Check className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5 flex items-center gap-3"><Clock className="w-5 h-5 text-brand-purple" /> Duration</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-black/20 border border-white/5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-slate-400" />
                          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">Graduates</span>
                        </div>
                        <p className="text-sm text-brand-purple font-medium">3 Months Course</p>
                        <p className="text-xs text-slate-400 font-light">+3 Months Internship</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="w-4 h-4 text-slate-400" />
                          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">Non-Graduates</span>
                        </div>
                        <p className="text-sm text-brand-purple font-medium">6 Months Course</p>
                        <p className="text-xs text-slate-400 font-light">+6 Months Internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM FULL WIDTH SECTION: Placement Assistance */}
          <div className="border-t border-white/10 p-8 md:p-10 bg-gradient-to-r from-white/[0.02] to-white/[0.05]">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 hidden sm:flex">
                <Briefcase className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
                  <span className="sm:hidden"><Briefcase className="w-5 h-5 text-brand-cyan" /></span>
                  100% Placement Assistance
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                    <span>Placement assistance is provided after successful completion of training and internship for Foundation and Expert Level courses.</span>
                  </li>
                  <li className="flex gap-3 items-start text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                    <span>Structured internship-to-placement transition support is offered to eligible candidates to ensure career readiness.</span>
                  </li>
                  <li className="flex gap-3 items-start text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                    <span>100% <em className="text-white font-medium italic">Assured placement support</em> for successful candidates, subject to assessment of communication skills, teaching ability, and overall performance during training and internship.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-brand-purple/50 transition-all duration-300 group shadow-lg"
          >
            <span className="text-sm font-bold text-white tracking-widest uppercase">Enroll in a Program</span>
            <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
