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

        {/* Core Teacher Training Table Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 glass-panel rounded-3xl border border-white/10 overflow-hidden bg-[#090814]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-white/10">
              {/* Foundation Level */}
              <div className="p-8 md:p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors group flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-brand-cyan" />
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">Foundation Level</h3>
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  A 3-month training program focused on Cursive Handwriting. Graduates will complete a 3-month internship, while non-graduates will undergo a 6-month internship.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors uppercase tracking-widest"
                >
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Expert Level */}
              <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors group flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Expert Level</h3>
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  A 3-month advanced training program covering Lucida Handwriting and Dysgraphia Identification. Graduates will complete a 3-month internship, while non-graduates will undergo a 6-month internship.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right Column - Professional Diploma */}
            <div className="p-8 md:p-10 border-b border-white/10 md:border-b-0 hover:bg-white/[0.02] transition-colors group flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-brand-purple" />
                  <h3 className="font-serif text-3xl font-bold text-white group-hover:text-brand-purple transition-colors">Professional Diploma course</h3>
               </div>
               <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed flex-1">
                 <p>
                   To become a Certified Teacher, candidates undergo an intensive Teacher Training Program spanning approximately 3 months, followed by a 3-month practical internship. The program is highly structured and covers 6 specialized subjects, including professional handwriting training in Cursive and Lucida styles, along with exposure to a diverse range of ethnic and contemporary art forms.
                 </p>
                 <p>
                   Even those who have completed their 10th or Intermediate education are welcome to join this course. For such students, the program includes 6 months of professional training followed by a 6-month internship. Upon completion of their bachelor's degree, students will receive placement assistance to start their career as certified trainers.
                 </p>
               </div>
               <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-8 flex items-center justify-center gap-2 px-6 py-4 w-full rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                >
                  <span>Enroll in Diploma</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
            </div>
          </div>

          {/* Bottom Full Width - Placement Assistance */}
          <div className="p-8 md:p-10 border-t border-white/10 bg-brand-cyan/5 relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-cyan/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
               <Award className="text-brand-cyan w-6 h-6" />
               100% placement assistance
             </h3>
             <ul className="space-y-4 relative z-10">
                <li className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                   <p className="text-sm text-slate-300 font-light">Placement assistance is provided after successful completion of training and internship for Foundation and Expert Level courses.</p>
                </li>
                <li className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                   <p className="text-sm text-slate-300 font-light">Structured internship-to-placement transition support is offered to eligible candidates to ensure career readiness.</p>
                </li>
                <li className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                   <p className="text-sm text-slate-300 font-light"><strong className="text-white italic font-medium">100% Assured placement support</strong> for successful candidates, subject to assessment of communication skills, teaching ability, and overall performance during training and internship.</p>
                </li>
             </ul>
          </div>
        </motion.div>

        {/* Specialized Courses (Calligraphy & Dysgraphia) */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-8">Specialized Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coursesList.slice(3).map((course) => (
              <div key={course.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-left flex items-start gap-4 group">
                <div className={`p-3 rounded-xl bg-gradient-to-br border ${course.iconBg} shrink-0`}>
                  {course.icon}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">{course.title}</h4>
                  <div className="text-xs text-slate-400 font-light mb-4 line-clamp-2">
                    {course.content}
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[10px] font-bold text-white tracking-widest uppercase hover:text-brand-cyan transition-colors"
                  >
                    Learn More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
