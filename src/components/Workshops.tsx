import { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Workshops() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/111%20(1).jpg.jpeg',
    '/111%20(2).jpg.jpeg',
    '/111%20(3).jpg.jpeg',
    '/111%20(4).jpg.jpeg',
    '/111%20(5).jpg.jpeg',
    '/111%20(6).jpg.jpeg',
    '/111%20(8).jpg.jpeg',
    '/111%20(9).jpg.jpeg',
    '/Layer%201.jpg.jpeg',
    '/Layer%202.jpg.jpeg'
  ];

  useEffect(() => {
    // Decreased scrolling speed to 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <section id="workshops" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full w-max mx-auto">
            <Camera className="w-4 h-4" />
            <span>Our Gallery</span>
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-6">
            Glimpse of Alphabet
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            Take a look inside our dynamic learning environments, interactive workshops, and the transformation journey of our students and educators.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Smooth Crossfade Image Gallery */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
          
          {/* Images */}
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Alphabet Educational Hub Glimpse ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms, 10000ms' }}
            />
          ))}

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Manual Navigation Controls */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-brand-cyan shadow-[0_0_8px_#06b6d4]' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
