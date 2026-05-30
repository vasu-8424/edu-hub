import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Award, Star, School, Milestone } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

export default function Achievements() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  
  // Custom counting states for counter animation
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    schools: 0,
  });

  const timelineData: TimelineItem[] = [
    {
      year: '2008',
      title: 'A Trusted Name in Handwriting Excellence',
      description: 'Building a strong legacy of educational transformation, creativity, and skill-based learning.',
      category: 'Inception',
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      year: '2012',
      title: 'Thousands of Remarkable Handwriting Transformations',
      description: 'Creating visible improvements in writing speed, readability, confidence, concentration, and academic performance.',
      category: 'Growth',
      icon: <School className="w-5 h-5" />,
    },
    {
      year: '2018',
      title: '200+ Schools Associated',
      description: 'Collaborating with State Board, CBSE, ICSE, and International Schools to deliver quality handwriting education.',
      category: 'Expansion',
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: '2022',
      title: '20,000+ Teachers Empowered',
      description: 'Trained aspiring educators and professionals through advanced Professional Handwriting Teacher Training Programs.',
      category: 'Achievement',
      icon: <Star className="w-5 h-5" />,
    },
    {
      year: '2026',
      title: '2,00,000+ Students Successfully Trained',
      description: 'Helping learners develop neat, fluent, confident, and presentation-focused handwriting skills.',
      category: 'Global Presence',
      icon: <Milestone className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    // Elegant incremental counter loop
    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quadratic
      const easeProgress = progress * (2 - progress);

      setCounts({
        students: Math.floor(easeProgress * 200000),
        teachers: Math.floor(easeProgress * 20000),
        schools: Math.floor(easeProgress * 200),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase bg-brand-purple/10 px-4 py-1.5 rounded-full">
            Real Impact Metrics
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Numbers That Define Our Commitment to Excellence
          </h2>
          <p className="text-slate-400 mt-4 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Over the years, our academy has successfully trained a massive community of learners and professionals, helping them unlock new levels of excellence in written communication and pedagogy.
          </p>
        </div>

        {/* Counts / Counter Display Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20" id="stats-counter-grid">
          {/* Tile 1 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-colors" />
            <span className="block text-4xl md:text-5xl font-serif font-black text-white leading-none">
              {counts.students.toLocaleString()}+
            </span>
            <span className="block text-xs font-bold text-brand-cyan tracking-wider uppercase mt-3">
              Students Trained Successfully
            </span>
            <div className="w-8 h-[2px] bg-brand-cyan mt-4 rounded-full" />
            <p className="text-xs text-slate-400 mt-3 font-light">
              Helping learners develop neat, fluent, confident, and presentation-focused handwriting skills.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-brand-purple/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-colors" />
            <span className="block text-4xl md:text-5xl font-serif font-black text-white leading-none">
              {counts.teachers.toLocaleString()}+
            </span>
            <span className="block text-xs font-bold text-brand-purple tracking-wider uppercase mt-3">
              Teachers Empowered
            </span>
            <div className="w-8 h-[2px] bg-brand-purple mt-4 rounded-full" />
            <p className="text-xs text-slate-400 mt-3 font-light">
              Trained aspiring educators through advanced Professional Handwriting Teacher Training Programs.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors" />
            <span className="block text-4xl md:text-5xl font-serif font-black text-white leading-none">
              {counts.schools.toLocaleString()}+
            </span>
            <span className="block text-xs font-bold text-pink-400 tracking-wider uppercase mt-3">
              Schools Associated
            </span>
            <div className="w-8 h-[2px] bg-pink-500 mt-4 rounded-full" />
            <p className="text-xs text-slate-400 mt-3 font-light">
              Collaborating with State Board, CBSE, ICSE, and International Schools to deliver quality handwriting education.
            </p>
          </div>
        </div>

        {/* Interactive Milestone Timeline */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl relative" id="milestones-timeline-container">
          <div className="absolute top-0 right-0 p-4 border-b border-l border-white/5 bg-white/3 rounded-tr-3xl text-xs font-mono font-bold text-brand-cyan tracking-wider uppercase">
            Milestone Timeline
          </div>

          <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-8">
            The Timeline of Alphabet's Evolution
          </h3>

          {/* Timeline Scrollable Stepper Tracker */}
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Thread Bar representing consecutive time path */}
            <div className="absolute left-6 top-0 bottom-0 md:left-0 md:right-0 md:top-1/2 md:bottom-auto h-full w-[2px] md:h-[2px] md:w-full bg-[#0d0a20] -z-10 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-30" />

            {timelineData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineIdx(idx)}
                className={`flex gap-4 md:flex-col items-center group relative z-10 w-full md:w-auto text-left md:text-center transition-all duration-300 ${
                  activeTimelineIdx === idx ? 'scale-105' : 'opacity-60 hover:opacity-100'
                }`}
                id={`timeline-stepper-${idx}`}
              >
                {/* Year Badge Tag */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-sm border shadow-lg transition-all duration-500 shrink-0 ${
                    activeTimelineIdx === idx
                      ? 'bg-gradient-to-tr from-brand-purple to-brand-cyan border-white text-white drop-shadow-[0_0_12px_#8b5cf6]'
                      : 'bg-glass-bg border-white/10 text-slate-400 group-hover:border-brand-cyan group-hover:text-white'
                  }`}
                >
                  {item.year.slice(2)}'
                </div>

                {/* Quick Info text label under dot */}
                <div className="flex flex-col md:items-center">
                  <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors mt-2">
                    {item.year}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap hidden sm:block">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Highlight Event Content Card details */}
          <div className="p-6 rounded-2xl bg-[#090616] border border-white/5 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-6" id="active-timeline-card">
            <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shrink-0 mt-1">
              {timelineData[activeTimelineIdx].icon}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <span className="text-xs font-mono font-extrabold text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-2 py-0.5 rounded-md">
                  {timelineData[activeTimelineIdx].category}
                </span>
                <span className="text-xl font-serif font-black text-white">
                  {timelineData[activeTimelineIdx].title} ({timelineData[activeTimelineIdx].year})
                </span>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {timelineData[activeTimelineIdx].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
