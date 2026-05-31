import { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const studentImages = [
  '/students1.jpeg',
  '/students2.jpeg',
  '/student3.jpeg',
  '/student4.jpeg',
  '/students5.jpeg',
  '/students6.jpeg'
];

const teacherImages = [
  '/teachers1.jpeg',
  '/teachers2.jpeg',
  '/teachers3.jpeg',
  '/teachers4.jpeg',
  '/teachers5.jpeg'
];

export default function Workshops() {
  const [studentIndex, setStudentIndex] = useState(0);
  const [teacherIndex, setTeacherIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'students' | 'teachers'>('students');

  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudentIndex(prev => (prev + 1) % studentImages.length);
    }, 4000);
    const teacherInterval = setInterval(() => {
      setTeacherIndex(prev => (prev + 1) % teacherImages.length);
    }, 4000);
    return () => {
      clearInterval(studentInterval);
      clearInterval(teacherInterval);
    };
  }, []);

  const goToPrevStudent = () => setStudentIndex(prev => (prev === 0 ? studentImages.length - 1 : prev - 1));
  const goToNextStudent = () => setStudentIndex(prev => (prev + 1) % studentImages.length);
  
  const goToPrevTeacher = () => setTeacherIndex(prev => (prev === 0 ? teacherImages.length - 1 : prev - 1));
  const goToNextTeacher = () => setTeacherIndex(prev => (prev + 1) % teacherImages.length);

  const renderGallery = (images: string[], currentIndex: number, goToPrev: () => void, goToNext: () => void, setIndex: (i: number) => void) => (
    <div className="relative w-full h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden p-[1px] bg-gradient-to-br from-white/10 to-transparent group">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
      
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#090814]">
        {/* Images */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Workshop Image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03040b] via-[#03040b]/20 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03040b]/40 via-transparent to-transparent pointer-events-none" />

        {/* Manual Navigation Controls */}
        <button 
          onClick={goToPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 hover:scale-110 shadow-xl z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 hover:scale-110 shadow-xl z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 bg-black/30 px-5 py-3 rounded-full backdrop-blur-md border border-white/5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                index === currentIndex 
                  ? 'w-10 bg-white/20' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="workshops" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-5 py-2 rounded-full w-max mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Camera className="w-4 h-4" />
            <span>Workshop</span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Glimpse of Alphabet
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            Take a look inside our dynamic learning environments, interactive workshops, and the transformation journey of our students and educators.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16 relative z-20">
          <div className="flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <button 
              onClick={() => setActiveTab('students')}
              className={`relative px-8 py-3.5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${
                activeTab === 'students' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeTab === 'students' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.15] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.12)]"
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              )}
              <span className="relative z-10">School Workshops</span>
            </button>
            <button 
              onClick={() => setActiveTab('teachers')}
              className={`relative px-8 py-3.5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${
                activeTab === 'teachers' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeTab === 'teachers' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.15] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.12)]"
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              )}
              <span className="relative z-10">Teacher Training Workshops</span>
            </button>
          </div>
        </div>

        {/* Render Active Gallery */}
        <motion.div 
          layout
          className="transition-all duration-500 relative z-10"
        >
          {activeTab === 'students' 
            ? renderGallery(studentImages, studentIndex, goToPrevStudent, goToNextStudent, setStudentIndex)
            : renderGallery(teacherImages, teacherIndex, goToPrevTeacher, goToNextTeacher, setTeacherIndex)
          }

          {/* Workshop Descriptions */}
          <div className="mt-12 max-w-4xl mx-auto glass-panel p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
            {activeTab === 'students' ? (
              <motion.div 
                key="school"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="font-serif text-3xl font-bold text-white mb-6">School Workshops</h3>
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
                  Customized handwriting workshops for schools to improve student handwriting, learning outcomes, and writing excellence. Transform messy writing into neat, clear handwriting quickly and effectively just within 3 hrs.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="teacher"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif text-3xl font-bold text-white mb-6 text-center">Teacher Training Workshops</h3>
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed text-center mb-8">
                  Professional handwriting training programs for teachers and educators to enhance teaching skills, classroom effectiveness, and complete handwriting improvement techniques just in 1 hr.
                </p>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-8 flex flex-col md:flex-row items-center gap-8 justify-center">
                  <div className="shrink-0 text-brand-purple">
                    <h4 className="font-bold text-lg tracking-wide uppercase mb-1">Topics Covered</h4>
                    <div className="w-12 h-1 bg-brand-purple rounded-full"></div>
                  </div>
                  <ul className="text-slate-300 font-light space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                      <span>Dysgraphia awareness and supportive intervention techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                      <span>Handwriting correction and improvement strategies</span>
                    </li>
                  </ul>
                </div>
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed text-center">
                  These workshops empower educators to become confident <strong className="text-white font-medium">Professional Handwriting Teachers</strong>, capable of delivering structured, high-impact handwriting training in schools and institutions.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
