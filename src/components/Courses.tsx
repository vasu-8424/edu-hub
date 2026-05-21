import { useState } from 'react';
import { Award, Feather, HeartPulse, GraduationCap, Clock, Check, X, ArrowRight, BookOpen } from 'lucide-react';
import { Course } from '../types';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const coursesList: Course[] = [
    {
      id: 'diploma',
      title: 'Professional Diploma Programs',
      category: 'Elite Certification',
      description: 'Comprehensive, high-level diplomas qualifying candidates to run independent handwriting schools and professional handwriting diagnostic clinics.',
      duration: '6 Months',
      targetAudience: 'Educators, Entrepreneurs, Franchise Seekers',
      iconName: 'diploma',
      highlights: [
        'Proprietary scientific letters diagnostics toolkit.',
        'Institutional administration & franchise management modules.',
        'In-depth study of print, Cursive, and Lucida styles.',
        '100% Placement assistance and career consulting.'
      ],
      features: [
        'Advanced handwriting stroke diagnostics',
        'Franchise branding & marketing toolkits',
        'International certification badge',
        'Direct mentorship under Certified Master Penmen'
      ]
    },
    {
      id: 'calligraphy',
      title: 'Artistic Calligraphy Training',
      category: 'Creativity & Craft',
      description: 'The ancient art of structural lettering. Master classical broad-edge italics, modern copperplate scripts, and fluid brush lettering with high-end tools.',
      duration: '3 Months',
      targetAudience: 'Artists, Designers, Students, Hobbyists',
      iconName: 'feather',
      highlights: [
        'Anatomy of letters, spacing formulas, and pen angles.',
        'Techniques for metallic mediums, ink preparation, and framing.',
        'Brush calligraphy and lettering layouts for commercial products.',
        'Portfolio design guidance & masterclasses.'
      ],
      features: [
        'Mastery over Broad-edge & Copperplate script',
        'Advanced pen holding angles & muscular mechanics',
        'Complete Calligraphy premium tooling kit included',
        'Exhibition showcase alignment opportunity'
      ]
    },
    {
      id: 'dysgraphia',
      title: 'Dysgraphia & Remedial Support',
      category: 'Therapeutics',
      description: 'A scientifically structured neurology course correcting pencil grip, finger stress, line alignment issues, letter reversals, and fine-motor coordination.',
      duration: '1 Month',
      targetAudience: 'Students (Ages 5+), Special Educators, Parents',
      iconName: 'remedial',
      highlights: [
        'Tactile worksheets, sensory sand tracing, playdough grip tasks.',
        'Overcoming stress, wrist-fatigue, and posture-based writer’s cramps.',
        'Neurometrical alignment guidelines under doctor recommendation.',
        'Custom student baseline progress reporting.'
      ],
      features: [
        'Correcting pencil grip and pen pressure issues',
        'Overcoming wrist tension & structural letter reversal',
        'Personal pediatric muscle alignment diagnostics',
        'One-to-One professional therapist consulting'
      ]
    },
    {
      id: 'teacher',
      title: 'Teacher Training Programs',
      category: 'Vocational Training',
      description: 'Empowering tutors, housewives, and school educators to start their lucrative vocational journey as certified professional handwriting trainers since 2008.',
      duration: '2 Months',
      targetAudience: 'Housewives, Teachers, Tutors, Job Seekers',
      iconName: 'teacher',
      highlights: [
        'Classroom management & student engagement pedagogy.',
        'Accelerated handwriting instruction methodologies (15 Hours Result).',
        'Access to our copyrighted workbooks and digital guides.',
        'Job preparation and resume profiling session.'
      ],
      features: [
        'Fast-track teaching mechanics (15-hour method)',
        'E-Learning certificate and syllabus license',
        'Flexible learning hours + lifetime access',
        '100% school alignment guarantee'
      ]
    }
  ];

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'diploma':
        return <Award className="w-6 h-6 text-brand-purple" />;
      case 'feather':
        return <Feather className="w-6 h-6 text-brand-cyan" />;
      case 'remedial':
        return <HeartPulse className="w-6 h-6 text-pink-500" />;
      case 'teacher':
      default:
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
    }
  };

  const getCourseClassname = (id: string) => {
    switch (id) {
      case 'diploma':
        return 'group-hover:border-brand-purple/40';
      case 'calligraphy':
        return 'group-hover:border-brand-cyan/40';
      case 'dysgraphia':
        return 'group-hover:border-pink-500/40';
      case 'teacher':
      default:
        return 'group-hover:border-emerald-400/40';
    }
  };

  return (
    <section id="courses" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Our Premium Academics
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Curated Programs for Mastery & Transformation
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Courses Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="courses-grid-view">
          {coursesList.map((course) => (
            <div
              key={course.id}
              className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl flex flex-col justify-between"
              id={`course-card-${course.id}`}
            >
              {/* Layered blur background backglow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-5 transition-all group-hover:opacity-15 bg-white" />

              {/* Floating Highlight Gradient Border decoration */}
              <div className={`absolute inset-0 border border-transparent transition-all duration-500 rounded-3xl ${getCourseClassname(course.id)}`} />

              <div>
                {/* Course Header Info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-brand-cyan transition-colors" style={{ color: '#ffffff' }}>
                  {course.title}
                </h3>

                {/* Course Short Description */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light mb-8">
                  {course.description}
                </p>

                {/* Feature Tags list */}
                <ul className="space-y-2.5 mb-8">
                  {course.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                      <span className="text-xs text-slate-400">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Core CTA Button triggering detail modal drawer */}
              <button
                onClick={() => setSelectedCourse(course)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 w-full rounded-xl text-xs font-extrabold tracking-wider uppercase text-white bg-white/3 border border-white/10 group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300 shadow-xl"
                id={`btn-course-modal-${course.id}`}
              >
                <span>Explore Methodology</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Glassmorphism Curriculum Drawer / Modal Overlay */}
      {selectedCourse && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          id="course-modal-overlay"
        >
          <div
            className="w-full max-w-2xl glass-panel text-white p-8 md:p-10 rounded-3xl relative max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up"
            id="course-modal"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Top Info */}
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8b5cf6]">
              {selectedCourse.category} Programs
            </span>
            
            <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mt-2 mb-6">
              {selectedCourse.title}
            </h3>

            {/* Quick Metadata Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-xl bg-white/3 border border-white/5">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Course Duration</span>
                <span className="text-sm font-semibold text-white">{selectedCourse.duration}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Target Group</span>
                <span className="text-sm font-semibold text-white">{selectedCourse.targetAudience}</span>
              </div>
            </div>

            {/* Comprehensive Highlights Breakdown */}
            <div className="mb-8">
              <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-white mb-4">
                <BookOpen className="w-4 h-4 text-brand-cyan" />
                <span>Program Syllabus Highlights</span>
              </h4>

              <div className="space-y-4">
                {selectedCourse.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Form Actions */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setSelectedCourse(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-4 rounded-xl text-center font-bold text-sm text-white bg-gradient-to-r from-brand-purple to-brand-cyan hover:brightness-115 transition-all shadow-lg"
              >
                Inquire For Schedule
              </button>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-4 rounded-xl font-bold text-sm text-slate-400 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
