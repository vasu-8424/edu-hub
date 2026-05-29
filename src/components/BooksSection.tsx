import { useState } from 'react';
import { Sparkles, Sliders, ChevronDown, ShoppingCart } from 'lucide-react';
import { Book } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface BookCategory {
  id: string;
  name: string;
  description: string;
  editions: Book[];
}

export default function BooksSection() {
  const [rotationAngle, setRotationAngle] = useState(-15);
  
  // Track active edition for each category separately
  const [activeEditions, setActiveEditions] = useState<Record<string, string>>({
    'cursive': 'cursive-junior',
    'lucida': 'lucida-junior',
    'telugu': 'telugu-level1'
  });

  const bookCategories: BookCategory[] = [
    {
      id: 'cursive',
      name: 'Cursive Handwriting Books',
      description: 'Structured handwriting books to build strong foundational skills and writing fluency in Cursive style.',
      editions: [
        {
          id: 'cursive-junior',
          title: 'Junior\'s Edition',
          edition: 'Classes 1 to 5',
          description: 'This edition helps young learners develop neat, clear, and confident handwriting.',
          coverColor: 'from-brand-purple to-indigo-900',
          textAccent: 'text-brand-purple',
          pages: 120,
          targetAge: 'Classes 1 to 5',
          image: '/cursive junior.jpeg'
        },
        {
          id: 'cursive-senior',
          title: 'Seniors Edition',
          edition: 'Classes 6 to 10',
          description: 'Designed for older students to achieve Neat, Fast, and Fluent Handwriting in 45 Days.',
          coverColor: 'from-brand-purple to-indigo-900',
          textAccent: 'text-brand-purple',
          pages: 140,
          targetAge: 'Classes 6 to 10',
          image: '/cursive 6 to 10.jpeg'
        }
      ]
    },
    {
      id: 'lucida',
      name: 'Lucida Handwriting Books',
      description: 'Structured handwriting books to build strong foundational skills and writing fluency in Lucida style.',
      editions: [
        {
          id: 'lucida-junior',
          title: 'Junior\'s Edition',
          edition: 'Classes 1 to 5',
          description: 'This edition helps young learners develop neat, clear, and confident handwriting.',
          coverColor: 'from-brand-cyan to-blue-900',
          textAccent: 'text-brand-cyan',
          pages: 120,
          targetAge: 'Classes 1 to 5',
          image: '/lucida junior.jpeg'
        },
        {
          id: 'lucida-senior',
          title: 'Seniors Edition',
          edition: 'Classes 6 to 10',
          description: 'Designed for older students to achieve Neat, Fast, and Fluent Handwriting in 45 Days.',
          coverColor: 'from-brand-cyan to-blue-900',
          textAccent: 'text-brand-cyan',
          pages: 140,
          targetAge: 'Classes 6 to 10',
          image: '/lucida senior.jpeg'
        }
      ]
    },
    {
      id: 'telugu',
      name: 'Telugu Handwriting Books',
      description: 'A complete structured learning series designed to develop strong Telugu handwriting skills.',
      editions: [
        {
          id: 'telugu-level1',
          title: 'Telugu — Level 1',
          edition: 'Level 1',
          description: 'Beginner level focusing on basic strokes, curves, and standard letter formations.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 96,
          targetAge: 'Level 1',
          image: '/telugu vol 1.jpeg'
        },
        {
          id: 'telugu-level2',
          title: 'Telugu — Level 2',
          edition: 'Level 2',
          description: 'Intermediate level practicing letter combinations and basic words.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 110,
          targetAge: 'Level 2',
          image: '/telugu vol 2.jpeg'
        },
        {
          id: 'telugu-level3',
          title: 'Telugu — Level 3',
          edition: 'Level 3',
          description: 'Advanced word formations and short sentences practice.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 120,
          targetAge: 'Level 3',
          image: '/telugu vol 3.jpeg'
        },
        {
          id: 'telugu-level4',
          title: 'Telugu — Level 4',
          edition: 'Level 4',
          description: 'Paragraph writing and fluency building exercises.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 130,
          targetAge: 'Level 4',
          image: '/telugu vol 4.jpeg'
        },
        {
          id: 'telugu-level5',
          title: 'Telugu — Level 5',
          edition: 'Level 5',
          description: 'Mastery level for fast, neat, and continuous writing.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 140,
          targetAge: 'Level 5',
          image: '/telugu vol 5.jpeg'
        }
      ]
    }
  ];

  const getBookCoverDesign = (book: Book) => {
    if (book.image) {
      return (
        <AnimatePresence mode="popLayout">
          <motion.div
            key={book.image}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-[200px] h-[280px] rounded-r-2xl relative shadow-2xl overflow-hidden flex flex-col justify-between border-y border-r border-white/10"
            style={{ boxShadow: '15px 15px 40px rgba(0,0,0,0.6), inset -3px 0 10px rgba(255,255,255,0.1)' }}
          >
            <img src={book.image} alt={book.title} className="absolute inset-0 w-full h-full object-cover scale-[1.05]" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', imageRendering: '-webkit-optimize-contrast' }} />
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/80 to-transparent z-20 rounded-l-md shadow-[inset_-2px_0_5px_rgba(255,255,255,0.05)]" />
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20 z-25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none select-none z-30" />
          </motion.div>
        </AnimatePresence>
      );
    }
    return null;
  };

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

  return (
    <section id="materials" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Dynamic Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            Learning Materials
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-6 leading-tight">
            Books
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            At Alphabet Educational Hub, our structured handwriting books are carefully designed to build strong foundational skills, improve writing fluency, and develop confident, legible handwriting for students across different age groups.
          </p>
        </motion.div>

        {/* Global 3D Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto mb-16 relative" 
          id="rotation-slider-panel"
        >
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span className="tracking-widest uppercase">Interactive 3D Angle</span>
            </span>
            <span className="text-white font-bold">{rotationAngle}° Y-Axis</span>
          </div>
          <input
            type="range"
            min="-60"
            max="30"
            value={rotationAngle}
            onChange={(e) => setRotationAngle(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-ew-resize accent-brand-cyan hover:accent-brand-purple transition-all outline-none"
          />
        </motion.div>

        {/* Side-by-Side Book Types */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" id="books-grid-layout"
        >
          {bookCategories.map((category) => {
            const activeEdition = category.editions.find(e => e.id === activeEditions[category.id]) || category.editions[0];
            
            return (
              <motion.div 
                variants={cardVariants}
                key={category.id} 
                className="group flex flex-col items-center justify-start p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                
                <div className="w-full h-full bg-[#090814]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-10 flex flex-col relative z-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Book Title & Description */}
                  <div className="text-center mb-10 relative z-10 h-32">
                    <h3 className="font-serif text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      {category.description}
                    </p>
                  </div>

                  {/* 3D Book Visual */}
                  <div className="relative h-[340px] flex items-center justify-center w-full mb-10" style={{ perspective: '1200px' }}>
                    <div 
                      className="absolute bottom-6 w-48 h-5 rounded-full bg-black/60 blur-xl transition-all duration-300"
                      style={{ transform: `rotateX(90deg) translateZ(-40px) scale(${1 - Math.abs(rotationAngle)/150})` }}
                    />
                    <div
                      className="transition-transform duration-350 ease-out preserve-3d cursor-ew-resize select-none"
                      style={{ transform: `rotateY(${rotationAngle}deg) rotateX(6deg)`, transformStyle: 'preserve-3d' }}
                    >
                      {getBookCoverDesign(activeEdition)}
                    </div>
                  </div>

                  {/* Select Edition Dropdown */}
                  <div className="w-full relative z-10 flex flex-col gap-3 mt-auto">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.25em] text-center">
                      Select Edition
                    </label>
                    <div className="relative group/select">
                      <select
                        value={activeEditions[category.id]}
                        onChange={(e) => setActiveEditions(prev => ({ ...prev, [category.id]: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm font-semibold text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all appearance-none cursor-pointer group-hover/select:bg-white/10"
                      >
                        {category.editions.map(edition => (
                          <option className="bg-[#090814] text-white" key={edition.id} value={edition.id}>
                            {edition.edition}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cyan pointer-events-none transition-transform group-hover/select:-translate-y-1" />
                    </div>
                    <a 
                      href={`https://wa.me/919063526196?text=Hi!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(activeEdition.title)}%20book.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 px-6 py-4 w-full rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Order {activeEdition.title} Now</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
