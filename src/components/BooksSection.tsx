import { useState } from 'react';
import { BookOpen, Sparkles, Sliders, ChevronDown } from 'lucide-react';
import { Book } from '../types';

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
    'cursive-lucida': 'cursive-lucida-junior',
    'telugu': 'telugu-level1'
  });

  const bookCategories: BookCategory[] = [
    {
      id: 'cursive-lucida',
      name: 'Cursive & Lucida Handwriting',
      description: 'Structured handwriting books to build strong foundational skills and writing fluency in English.',
      editions: [
        {
          id: 'cursive-lucida-junior',
          title: 'Junior\'s Edition',
          edition: 'Classes 1 to 5',
          description: 'This edition helps young learners develop neat, clear, and confident handwriting.',
          coverColor: 'from-brand-purple to-indigo-900',
          textAccent: 'text-brand-purple',
          pages: 120,
          targetAge: 'Classes 1 to 5'
        },
        {
          id: 'cursive-lucida-senior',
          title: 'Seniors Edition',
          edition: 'Classes 6 to 10',
          description: 'Designed for older students to achieve Neat, Fast, and Fluent Handwriting in 45 Days.',
          coverColor: 'from-brand-cyan to-blue-900',
          textAccent: 'text-brand-cyan',
          pages: 140,
          targetAge: 'Classes 6 to 10'
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
          targetAge: 'Level 1'
        },
        {
          id: 'telugu-level2',
          title: 'Telugu — Level 2',
          edition: 'Level 2',
          description: 'Intermediate level practicing letter combinations and basic words.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 110,
          targetAge: 'Level 2'
        },
        {
          id: 'telugu-level3',
          title: 'Telugu — Level 3',
          edition: 'Level 3',
          description: 'Advanced word formations and short sentences practice.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 120,
          targetAge: 'Level 3'
        },
        {
          id: 'telugu-level4',
          title: 'Telugu — Level 4',
          edition: 'Level 4',
          description: 'Paragraph writing and fluency building exercises.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 130,
          targetAge: 'Level 4'
        },
        {
          id: 'telugu-level5',
          title: 'Telugu — Level 5',
          edition: 'Level 5',
          description: 'Mastery level for fast, neat, and continuous writing.',
          coverColor: 'from-pink-600 to-rose-950',
          textAccent: 'text-pink-400',
          pages: 140,
          targetAge: 'Level 5'
        }
      ]
    }
  ];

  const getBookCoverDesign = (book: Book) => {
    return (
      <div
        className={`w-[200px] h-[280px] rounded-r-2xl bg-gradient-to-br ${book.coverColor} relative shadow-xl overflow-hidden flex flex-col justify-between p-4 border-y border-r border-white/20`}
        style={{ boxShadow: '10px 10px 30px rgba(0,0,0,0.5), inset -3px 0 10px rgba(255,255,255,0.1)' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
        <div className="absolute -left-20 top-20 w-80 h-32 bg-white/5 rotate-15 transform blur-sm" />
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/40 z-20 rounded-r-sm shadow-[inset_-2px_0_5px_rgba(255,255,255,0.05)]" />
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 z-25" />

        <div className="relative z-10">
          <span className="text-[7px] font-mono font-bold uppercase tracking-[0.2em] text-white/70 bg-white/10 px-2 py-0.5 rounded border border-white/5">
            ALPHABET EDU HUB
          </span>
        </div>

        <div className="relative z-10 my-2 text-left">
          <h4 className="font-serif text-lg font-bold font-black text-white leading-tight drop-shadow-md">
            {book.title}
          </h4>
          <span className="text-[9px] text-brand-cyan block mt-1 uppercase tracking-wider">{book.edition}</span>
          <div className="w-6 h-[2px] bg-white/40 mt-3 rounded-full" />
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[7px] font-mono font-bold text-white tracking-widest uppercase">
            {book.pages} PAGES
          </span>
          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <Sparkles className="w-2 h-2 text-yellow-400" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none select-none z-30" />
      </div>
    );
  };

  return (
    <section id="materials" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Learning Materials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Books
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            At Alphabet Educational Hub, our structured handwriting books are carefully designed to build strong foundational skills, improve writing fluency, and develop confident, legible handwriting for students across different age groups.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Global 3D Slider */}
        <div className="w-full max-w-md mx-auto mb-12" id="rotation-slider-panel">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1">
              <Sliders className="w-3 h-3 text-brand-cyan" />
              <span>Interactive 3D Angle</span>
            </span>
            <span>{rotationAngle}° Y-Axis</span>
          </div>
          <input
            type="range"
            min="-60"
            max="30"
            value={rotationAngle}
            onChange={(e) => setRotationAngle(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
          />
        </div>

        {/* Side-by-Side Book Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" id="books-grid-layout">
          {bookCategories.map((category) => {
            const activeEdition = category.editions.find(e => e.id === activeEditions[category.id]) || category.editions[0];
            
            return (
              <div key={category.id} className="flex flex-col items-center justify-start p-8 glass-panel rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl" />
                
                {/* Book Title & Description */}
                <div className="text-center mb-8 relative z-10 h-28">
                  <h3 className="font-serif text-2xl font-extrabold text-white tracking-tight mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                {/* 3D Book Visual */}
                <div className="relative h-[320px] flex items-center justify-center w-full mb-8" style={{ perspective: '1200px' }}>
                  <div 
                    className="absolute bottom-6 w-40 h-4 rounded-full bg-black/50 blur-xl transition-all duration-300"
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
                <div className="w-full relative z-10 flex flex-col gap-2">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">
                    Select Edition
                  </label>
                  <div className="relative">
                    <select
                      value={activeEditions[category.id]}
                      onChange={(e) => setActiveEditions(prev => ({ ...prev, [category.id]: e.target.value }))}
                      className="w-full bg-[#0d0a20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all appearance-none cursor-pointer"
                    >
                      {category.editions.map(edition => (
                        <option className="bg-[#8b5cf6] text-white" key={edition.id} value={edition.id}>
                          {edition.edition}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cyan pointer-events-none" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
