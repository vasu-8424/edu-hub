import { useState } from 'react';
import { Award, Feather, HeartPulse, GraduationCap, BookOpen, ChevronDown, Check, ArrowRight, Clock } from 'lucide-react';

interface CourseCard {
  id: string;
  title: string;
  category: string;
  badge: string;
  iconBg: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  gradient: string;
}

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const coursesList: CourseCard[] = [
    {
      id: 'diploma',
      title: 'Professional Diploma Course',
      category: 'Elite Certification',
      badge: 'MOST POPULAR',
      iconBg: 'bg-brand-purple/10 border-brand-purple/20',
      icon: <Award className="w-6 h-6 text-brand-purple" />,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
          <p>
            To become a Certified Teacher, candidates undergo an intensive Teacher Training Program spanning approximately 3 months, followed by a 3-month practical internship. The program is highly structured and covers 6 specialized subjects, including professional handwriting training in Cursive and Lucida styles, along with exposure to a diverse range of ethnic and contemporary art forms.
          </p>
          <p>
            At Alphabet Educational Hub, we are committed to helping you build a successful teaching career by providing 100% placement assistance after certification, ensuring you step confidently into the professional world with the right skills, knowledge, and opportunities.
          </p>
          <p>
            Even those who have completed their 10th or Intermediate education are welcome to join this course. For such students, the program includes 6 months of professional training followed by a 6-month internship. Upon completion of their bachelor's degree, students will receive placement assistance to start their career as certified trainers. Until then, they can gain valuable industry experience by working as Junior Trainers or Assistant Trainers.
          </p>
        </div>
      ),
      gradient: 'from-brand-purple to-indigo-600'
    },
    {
      id: 'foundation',
      title: 'Foundation Level Handwriting Trainer Course',
      category: 'Vocational Training',
      badge: 'FOUNDATION',
      iconBg: 'bg-brand-cyan/10 border-brand-cyan/20',
      icon: <GraduationCap className="w-6 h-6 text-brand-cyan" />,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
          <p>
            A 3-month training program focused on Cursive Handwriting. Graduates will complete a 3-month internship, while non-graduates will undergo a 6-month internship. After successful completion, candidates will receive certification and placement assistance.
          </p>
        </div>
      ),
      gradient: 'from-brand-cyan to-blue-600'
    },
    {
      id: 'expert',
      title: 'Expert Level Handwriting Trainer Course',
      category: 'Vocational Training',
      badge: 'ADVANCED',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
          <p>
            A 3-month advanced training program covering Lucida Handwriting and Dysgraphia Identification. Graduates will complete a 3-month internship, while non-graduates will undergo a 6-month internship. After successful completion, candidates will receive certification and placement assistance.
          </p>
        </div>
      ),
      gradient: 'from-emerald-500 to-green-700'
    },
    {
      id: 'calligraphy',
      title: 'Calligraphy & Creative Writing Training',
      category: 'Creativity & Craft',
      badge: 'CREATIVE',
      iconBg: 'bg-pink-500/10 border-pink-500/20',
      icon: <Feather className="w-6 h-6 text-pink-400" />,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
          <p>
            Discover the art of elegant writing through structured training in both traditional and modern calligraphy styles.
          </p>
          <p>
            Ideal for students, educators, and creative enthusiasts who wish to master beautiful handwriting and artistic expression.
          </p>
        </div>
      ),
      gradient: 'from-pink-500 to-rose-700'
    },
    {
      id: 'dysgraphia',
      title: 'Dysgraphia Identification & Learning Support',
      category: 'Therapeutics',
      badge: 'SPECIALIZED',
      iconBg: 'bg-amber-400/10 border-amber-400/20',
      icon: <HeartPulse className="w-6 h-6 text-amber-400" />,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
          <p>
            A specialized intervention program designed to identify handwriting challenges and provide structured support for children with writing difficulties.
          </p>
          <div>
            <p className="mb-2">Our approach includes:</p>
            <div className="space-y-2">
              {[
                'Early identification of handwriting and motor skill issues',
                'Personalized handwriting improvement strategies',
                'Fine motor skill development exercises',
                'Structured remediation techniques',
                'One-on-one guided learning support'
              ].map((point, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <p>
            This program ensures every child receives the right guidance to overcome writing challenges and improve academic confidence.
          </p>
        </div>
      ),
      gradient: 'from-amber-500 to-orange-700'
    }
  ];

  return (
    <section id="courses" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
              Courses We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Structured Learning for Students, Teachers & Future Educators
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            At Alphabet Educational Hub, we offer professionally designed, skill-based training programs that focus on handwriting excellence, creative development, and teacher empowerment. Each course is crafted to deliver practical knowledge, hands-on training, and long-term learning outcomes.
          </p>
        </div>

        {/* Inline Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="courses-inline-grid">
          {coursesList.map((course) => {
            const isExpanded = expandedCourse === course.id;
            return (
              <div
                key={course.id}
                className={`glass-panel rounded-3xl relative overflow-hidden transition-all duration-500 border flex flex-col h-full ${isExpanded ? 'border-brand-purple/30 shadow-2xl shadow-brand-purple/10' : 'border-white/5 hover:border-white/15'}`}
                id={`course-card-${course.id}`}
              >
                {/* Card Header — always visible */}
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3.5 rounded-xl border shadow-inner ${course.iconBg}`}>
                      {course.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#8b5cf6] bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight mb-4 leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex-1">
                    {course.content}
                  </div>

                  {/* Separator */}
                  <div className="h-[1px] bg-white/5 mt-6 mb-5" />

                  {/* Inquire Button */}
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 w-full rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-purple to-brand-cyan hover:brightness-110 transition-all shadow-lg"
                  >
                    <span>Enroll in {course.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
