import React from 'react';
import { Award, Feather, HeartPulse, GraduationCap, BookOpen, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 20 }
    }
  };

  const coursesList: CourseCard[] = [
    {
      id: 'foundation',
      title: 'Foundation Level Handwriting Trainer Course',
      category: 'Vocational Training',
      badge: 'FOUNDATION',
      iconBg: 'from-brand-cyan/20 to-brand-cyan/5 border-brand-cyan/20',
      icon: <GraduationCap className="w-6 h-6 text-brand-cyan" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
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
      iconBg: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
          <p>
            A 3-month advanced training program covering Lucida Handwriting and Dysgraphia Identification. Graduates will complete a 3-month internship, while non-graduates will undergo a 6-month internship. After successful completion, candidates will receive certification and placement assistance.
          </p>
        </div>
      ),
      gradient: 'from-emerald-500 to-green-700'
    },
    {
      id: 'diploma',
      title: 'Professional Diploma Course',
      category: 'Elite Certification',
      badge: 'MOST POPULAR',
      iconBg: 'from-brand-purple/20 to-brand-purple/5 border-brand-purple/20',
      icon: <Award className="w-6 h-6 text-brand-purple" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
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
      id: 'calligraphy',
      title: 'Calligraphy & Creative Writing Training',
      category: 'Creativity & Craft',
      badge: 'CREATIVE',
      iconBg: 'from-pink-500/20 to-pink-500/5 border-pink-500/20',
      icon: <Feather className="w-6 h-6 text-pink-400" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
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
      iconBg: 'from-amber-400/20 to-amber-400/5 border-amber-400/20',
      icon: <HeartPulse className="w-6 h-6 text-amber-400" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
          <p>
            A specialized intervention program designed to identify handwriting challenges and provide structured support for children with writing difficulties.
          </p>
          <div>
            <p className="mb-3 font-semibold text-slate-200">Our approach includes:</p>
            <div className="space-y-3">
              {[
                'Early identification of handwriting and motor skill issues',
                'Personalized handwriting improvement strategies',
                'Fine motor skill development exercises',
                'Structured remediation techniques',
                'One-on-one guided learning support'
              ].map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4">
            This program ensures every child receives the right guidance to overcome writing challenges and improve academic confidence.
          </p>
        </div>
      ),
      gradient: 'from-amber-500 to-orange-700'
    }
  ];

  return (
    <section id="courses" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#05060f]">
      {/* Background Orbs */}
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase block mb-4">
              Courses We Offer
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Structured Learning for Teachers & Future Educators
            </h2>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="courses-inline-grid"
        >
          {coursesList.map((course) => (
            <motion.div
              variants={cardVariants}
              key={course.id}
              className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              id={`course-card-${course.id}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              
              <div className="relative glass-panel rounded-[2rem] p-8 md:p-10 flex flex-col h-full bg-[#090814]/80 backdrop-blur-xl">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br border shadow-lg ${course.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#8b5cf6] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full uppercase shadow-inner">
                    {course.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors duration-500">
                  {course.title}
                </h3>

                <div className="flex-1 mb-8">
                  {course.content}
                </div>

                {/* Separator */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Inquire Button */}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 w-full rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                >
                  <span>Enroll in {course.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placement Assistance Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-brand-cyan/40 to-transparent overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-cyan/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative glass-panel p-10 md:p-12 rounded-[2rem] bg-[#090814]/90 backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/5 border border-brand-cyan/30 text-brand-cyan shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <Award className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mb-6">
                  100% Placement Assistance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <p className="text-base text-slate-300 font-light leading-relaxed">
                      Placement assistance is provided after successful completion of training and internship for Foundation and Expert Level courses.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <p className="text-base text-slate-300 font-light leading-relaxed">
                      Structured internship-to-placement transition support is offered to eligible candidates to ensure career readiness.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <p className="text-base text-slate-300 font-light leading-relaxed">
                      <strong className="text-white font-medium italic">100% Assured placement support</strong> for successful candidates, subject to assessment of communication skills, teaching ability, and overall performance during training and internship.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
