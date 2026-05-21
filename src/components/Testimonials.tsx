import { useEffect, useState, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
    resetAutoplay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    resetAutoplay();
  };

  const activeTestimonial = testimonialsList[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Transformations Told through Living Stories
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto" id="testimonials-slider-root">
          {/* Main testimonial sliding card representation */}
          <div 
            className="glass-panel p-8 md:p-12 rounded-3xl relative transition-all duration-500 overflow-hidden min-h-[380px] flex flex-col justify-between shadow-2xl hover:border-brand-purple/20"
            id="active-testimonial-panel"
          >
            {/* Elegant transparent watermarked quotes block */}
            <div className="absolute right-8 top-8 text-white/5 pointer-events-none select-none">
              <Quote className="w-32 h-32" />
            </div>

            <div>
              {/* Star Rating row */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Typed Quote block */}
              <blockquote className="font-serif text-lg md:text-xl text-slate-100 font-light italic leading-relaxed mb-8">
                {activeTestimonial.quote}
              </blockquote>
            </div>

            {/* Bottom active profile tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-6">
              <div className="flex items-center gap-4">
                {/* User avatar portrait with referrer bypass */}
                <div className="relative w-14 h-14 rounded-full p-[1px] bg-gradient-to-tr from-brand-purple to-brand-cyan">
                  <img
                    src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150&seed=${activeTestimonial.avatarSeed}`}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <cite className="not-italic block font-serif font-bold text-[#ffffff] text-sm md:text-base">
                    {activeTestimonial.name}
                  </cite>
                  <span className="block text-xs text-slate-400 mt-0.5 font-light">
                    {activeTestimonial.role}
                  </span>
                </div>
              </div>

              {/* School badge */}
              {activeTestimonial.school && (
                <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase bg-brand-cyan/5 border border-brand-cyan/20 px-3 py-1.5 rounded-full tracking-wider select-none shrink-0 self-start sm:self-center">
                  {activeTestimonial.school}
                </span>
              )}
            </div>
          </div>

          {/* Stepper Navigation buttons */}
          <div className="flex items-center justify-between w-full max-w-xs mx-auto mt-8 gap-4" id="testimonials-navigation">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide dots tracking indicators */}
            <div className="flex gap-2.5">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    resetAutoplay();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'w-8 bg-brand-cyan shadow-md shadow-brand-cyan/30'
                      : 'bg-white/10 hover:bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
