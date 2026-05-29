import { Edit3, FastForward, CheckCircle2, ShieldCheck, PenTool, LayoutTemplate } from 'lucide-react';

export default function WhatWeTeach() {
  const approaches = [
    {
      title: 'Neat & Legible Handwriting',
      icon: <LayoutTemplate className="w-5 h-5 text-brand-cyan" />,
      description: 'We focus on structured letter formation techniques that help learners develop clean, consistent, and easily readable handwriting suitable for academic excellence and professional presentation.',
      gradient: 'from-brand-cyan/20 to-transparent'
    },
    {
      title: 'Fluidity Through Stroke Practice',
      icon: <Edit3 className="w-5 h-5 text-brand-purple" />,
      description: 'Our guided stroke-based training improves writing flow, rhythm, and consistency, ensuring smooth and natural handwriting with better control and precision.',
      gradient: 'from-brand-purple/20 to-transparent'
    },
    {
      title: 'Speed Management Techniques',
      icon: <FastForward className="w-5 h-5 text-emerald-400" />,
      description: 'Students are trained to increase writing speed without compromising neatness, clarity, or spacing—helping them perform better in exams and academic writing tasks.',
      gradient: 'from-emerald-400/20 to-transparent'
    },
    {
      title: 'Advanced Handwriting Improvement',
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      description: 'Our expert-designed modern handwriting development system focuses on long-term improvement through structured practice methods, correction techniques, and continuous skill enhancement strategies.',
      gradient: 'from-pink-400/20 to-transparent'
    }
  ];

  return (
    <section id="what-we-teach" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            What We Teach
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Our Advanced Handwriting Learning Approach
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {approaches.map((approach, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 bg-gradient-to-tr ${approach.gradient}`} />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 shadow-inner">
                  {approach.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {approach.title}
                </h3>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ergonomics & Professional Training */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Ergonomics */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-10 bg-brand-cyan" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                  <PenTool className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  Pen Grip & Posture Correction
                </h3>
              </div>
              <p className="text-sm text-slate-300 font-light mb-6">
                We provide detailed training on essential writing ergonomics, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Correct pen/pencil grip techniques',
                  'Proper sitting posture',
                  'Ideal hand positioning',
                  'Notebook alignment and placement',
                  'Ergonomic writing habits for long-term comfort and control'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Built on Expertise */}
          <div className="lg:col-span-5 glass-panel p-8 md:p-10 rounded-3xl border border-brand-purple/20 relative overflow-hidden bg-gradient-to-br from-brand-purple/10 to-transparent">
            <div className="h-full flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-4 leading-tight">
                Built on Expertise in Training Professional Handwriting Teachers
              </h3>
              <div className="w-8 h-1 bg-brand-purple mb-4 rounded-full" />
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                All our teaching methodologies are designed and delivered by experts who specialize in developing Professional Handwriting Teachers, ensuring high-quality learning outcomes for both students and educators.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
