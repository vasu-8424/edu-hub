import { useState } from 'react';
import { School, Users, FileCheck, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface WorkshopPackage {
  id: string;
  name: string;
  badge: string;
  description: string;
  duration: string;
  idealFor: string;
  features: string[];
  gradient: string;
}

export default function Workshops() {
  const [studentEstimate, setStudentEstimate] = useState(150);

  const packages: WorkshopPackage[] = [
    {
      id: 'intensive',
      name: 'Dynamic Handwriting Intensive',
      badge: 'POPULAR IN SCHOOLS',
      description: 'A rapid, 5-hour high-impact workshop designed for grade students to instantly correct posture, diagonal letter spacing and double writing speed.',
      duration: '1 Day Intensive (5 Hours)',
      idealFor: 'Schools, Primary & Secondary Academies',
      features: [
        'Live diagnostics stroke testing for all students.',
        'Copy of professional printed practice copysets.',
        '1-to-1 posture adjustment masterclass.'
      ],
      gradient: 'from-brand-cyan to-blue-600'
    },
    {
      id: 'teachers',
      name: 'Professional Educator Summit',
      badge: 'FOR STAFF DEVELOPMENT',
      description: 'Equipping teachers and instructional coordinators with professional grading methodologies and specialized motor skill activities.',
      duration: '3 Days Masterclass (12 Hours)',
      idealFor: 'School Faculty, Educational Trusts',
      features: [
        'Dysgraphia recognition guidelines for classrooms.',
        'Course syllabus licensing and certified badge.',
        'Access to homework grading matrices files.'
      ],
      gradient: 'from-brand-purple to-pink-500'
    }
  ];

  // Estimator math
  const calculatedWorkbooks = studentEstimate;
  const calculatedInstructors = Math.max(1, Math.ceil(studentEstimate / 100));
  const estimatedHoursSaved = Math.round(studentEstimate * 0.5);

  return (
    <section id="workshops" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase bg-brand-purple/10 px-4 py-1.5 rounded-full">
              Institutional Integration
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Prestigious Campus Workshops & Core Seminars
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            Partner with Alphabet Educational Hub to systematically elevate presentation quality, neatness, and neurological motor alignment in your school.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="workshops-packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-400 flex flex-col justify-between"
              id={`workshop-pkg-${pkg.id}`}
            >
              {/* Backglow panel decoration */}
              <div className={`absolute -right-16 -top-16 w-36 h-36 blur-3xl opacity-5 group-hover:opacity-15 transition-all bg-gradient-to-tr ${pkg.gradient}`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#8b5cf6] bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{pkg.duration}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-brand-cyan transition-colors" style={{ color: '#ffffff' }}>
                  {pkg.name}
                </h3>

                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="text-xs text-slate-400 font-medium tracking-wide mb-2">
                  Target: <span className="text-white font-semibold">{pkg.idealFor}</span>
                </div>

                <div className="h-[1px] bg-white/5 my-6" />

                {/* Point features list */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                      <span className="text-xs text-slate-300 font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-white/3 border border-white/10 group-hover:bg-white/5 group-hover:border-brand-purple/30 transition-all duration-300"
              >
                Inquire For Corporate Booking
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Estimator panel for School Admin delegates */}
        <div 
          className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl"
          id="institutional-estimator-panel"
        >
          {/* Tag marker */}
          <div className="absolute top-0 right-0 p-4 border-b border-l border-white/5 bg-white/2 rounded-tr-3xl text-xs font-mono font-bold text-brand-cyan tracking-wider uppercase">
            Planner Calculator
          </div>

          <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-4">
            Seminar Deliverables Estimator
          </h3>
          <p className="text-xs text-slate-400 font-light max-w-xl leading-relaxed mb-8">
            Planning a handwriting summit for your school? Adjust the target student count below to instantly calculate resource kits, certificates, and team requirements.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="estimator-grid">
            {/* Left: Interactive Input slider */}
            <div className="lg:col-span-5 flex flex-col gap-4" id="estimator-inputs">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                <span>ESTIMATED STUDENTS PARTICIPATING:</span>
                <span className="text-brand-cyan text-base font-serif font-black bg-brand-cyan/10 px-3 py-1 rounded-lg">
                  {studentEstimate}
                </span>
              </div>

              {/* Slider element */}
              <input
                type="range"
                min="50"
                max="1200"
                step="25"
                value={studentEstimate}
                onChange={(e) => setStudentEstimate(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />

              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>MIN: 50 STUDENTS</span>
                <span>MAX: 1200 STUDENTS</span>
              </div>
            </div>

            {/* Right: Calculated Metrics values outputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4" id="estimator-outputs">
              {/* Output 1 */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/5 text-center hover:bg-white/5 transition-colors">
                <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Workbook Sets Issued</span>
                <span className="text-2xl font-serif font-black text-white mt-1.5 block">
                  {calculatedWorkbooks}
                </span>
                <p className="text-[10px] text-slate-500 mt-2 font-light">Individual printed copy kits.</p>
              </div>

              {/* Output 2 */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/5 text-center hover:bg-white/5 transition-colors">
                <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Trained Evaluators</span>
                <span className="text-2xl font-serif font-black text-white mt-1.5 block">
                  {calculatedInstructors}
                </span>
                <p className="text-[10px] text-slate-500 mt-2 font-light">Alphabet coaches deployed.</p>
              </div>

              {/* Output 3 */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/5 text-center hover:bg-white/5 transition-colors">
                <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Study Hours Saved</span>
                <span className="text-2xl font-serif font-black text-brand-cyan mt-1.5 block">
                  {estimatedHoursSaved} Hrs
                </span>
                <p className="text-[10px] text-slate-500 mt-2 font-light">Reduced correction time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
