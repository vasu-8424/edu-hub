import { useEffect, useState, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsList: Testimonial[] = [
    {
      id: 'testimonial1',
      name: 'Dr. Sandeep K. Acharya',
      role: 'Principal, Greenwood Global High',
      school: 'Associated since 2012',
      quote: '“Integrating the Alphabet Handwriting textbook series has been the single most effective academic intervention we’ve made. Messy scrawls that used to frusturate teachers have completely transformed into neat Lucida scripts. Examination presentation has improved, and student grading curves are visibly higher.”',
      rating: 5,
      avatarSeed: 'greenwood'
    },
    {
      id: 'testimonial2',
      name: 'Mrs. Srividya Rao',
      role: 'Housewife turned Certified Franchise Coach',
      school: 'Empowered since 2018',
      quote: '“The professional teacher training diploma changed my life. As a housewife, I wanted financial independence but didn’t know where to start. The Alphabet Hub mentors personally guided me. Today, I run my neighborly Alphabet handwriting franchise coaching center, transforming 50+ students every quarter from home.”',
      rating: 5,
      avatarSeed: 'teacher-sri'
    },
    {
      id: 'testimonial3',
      name: 'Karthik S. Gowda',
      role: 'Parent of Aditi (Age 9)',
      school: 'Dysgraphia Program Graduate',
      quote: '“My daughter Aditi suffered from extreme wrist stress and writing anxiety. Her letters were completely illegible. The multi-sensory remedial support and fine-motor games at Alphabet cured her stress in under 20 sessions. She writes beautiful cursive now and actually loves school worksheets!”',
      rating: 5,
      avatarSeed: 'dad-karthik'
    },
    {
      id: 'testimonial4',
      name: 'Mary Joseph',
      role: 'High School English Faculty',
      school: 'Educator Trainee',
      quote: '“The 15-hour instruction formula is pure scientific magic. I was highly skeptical initially, but applying their loop-connecting parameters onto children yielded visible aesthetic progress within two weeks. I recommend Alphabet Educational Hub to every modern school system.”',
      rating: 5,
      avatarSeed: 'mary-faculty'
    }
  ];

  const resetAutoplay = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
    resetAutoplay();
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    resetAutoplay();
  };

  const activeTestimonial = testimonialsList[activeIndex];

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
      };
    }
  };

  return (
    <section id="testimonials" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            Client Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-6 leading-tight">
            Transformations Told <br className="hidden md:block" /> through Living Stories
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" id="testimonials-slider-root">
          <div className="relative h-[550px] md:h-[450px] overflow-hidden flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 }
                }}
                className="absolute w-full max-w-4xl px-4 md:px-8"
              >
                {/* Main testimonial sliding card representation */}
                <div 
                  className="w-full bg-[#090814]/80 backdrop-blur-3xl p-8 md:p-14 rounded-[3rem] relative flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group hover:border-brand-purple/30 transition-all duration-500"
                  id="active-testimonial-panel"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
                  
                  {/* Elegant transparent watermarked quotes block */}
                  <div className="absolute right-12 top-12 text-white/5 group-hover:text-brand-purple/10 transition-colors pointer-events-none select-none">
                    <Quote className="w-40 h-40" />
                  </div>

                  <div className="relative z-10">
                    {/* Star Rating row */}
                    <div className="flex gap-2 mb-8">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]" />
                      ))}
                    </div>

                    {/* Typed Quote block */}
                    <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed mb-12">
                      {activeTestimonial.quote}
                    </blockquote>
                  </div>

                  {/* Bottom active profile tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-8 relative z-10">
                    <div className="flex items-center gap-5">
                      {/* User avatar portrait with referrer bypass */}
                      <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-brand-cyan to-brand-purple shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        <img
                          src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150&seed=${activeTestimonial.avatarSeed}`}
                          alt={activeTestimonial.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-full border-2 border-[#090814]"
                        />
                      </div>

                      <div>
                        <cite className="not-italic block font-serif font-bold text-white text-lg">
                          {activeTestimonial.name}
                        </cite>
                        <span className="block text-sm text-slate-400 mt-1 font-light">
                          {activeTestimonial.role}
                        </span>
                      </div>
                    </div>

                    {/* School badge */}
                    {activeTestimonial.school && (
                      <span className="text-[11px] font-mono font-bold text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/20 px-4 py-2 rounded-full tracking-widest select-none shrink-0 self-start sm:self-center shadow-inner">
                        {activeTestimonial.school}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stepper Navigation buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center w-full mt-8 gap-8" 
            id="testimonials-navigation"
          >
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 text-white transition-all shadow-lg backdrop-blur-md group"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Slide dots tracking indicators */}
            <div className="flex gap-3 bg-[#090814]/80 p-3 rounded-full border border-white/5 backdrop-blur-md">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                    resetAutoplay();
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 overflow-hidden relative ${
                    activeIndex === idx
                      ? 'w-10 bg-white/20'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 text-white transition-all shadow-lg backdrop-blur-md group"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
