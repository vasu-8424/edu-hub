import { useState } from 'react';
import { BookOpen, ShieldCheck, Sparkles, Sliders, ChevronRight } from 'lucide-react';
import { Book } from '../types';

export default function BooksSection() {
  const [rotationAngle, setRotationAngle] = useState(-15);
  const [activeBookId, setActiveBookId] = useState('juniors');

  const booksList: Book[] = [
    {
      id: 'juniors',
      title: 'Alphabet Handwriting: Juniors',
      edition: 'Primary Grade Edition (Ages 4-8)',
      description: 'Tactile primary-lined guides designed to teach alphabet construction, focal loops, stem height, and cursive entry arcs. Features cute guidelines and letter mapping markers.',
      coverColor: 'from-brand-purple to-indigo-900',
      textAccent: 'text-brand-purple',
      pages: 120,
      targetAge: 'Primary Students'
    },
    {
      id: 'seniors',
      title: 'Mastering Penmanship: Seniors',
      edition: 'Higher Grade Edition (Ages 9-18)',
      description: 'Advanced writing templates correcting cursive alignment, letter spacing formulas, stroke margins and pressure consistency. Perfect for school exam speed training.',
      coverColor: 'from-brand-cyan to-blue-900',
      textAccent: 'text-brand-cyan',
      pages: 140,
      targetAge: 'Middle & High School'
    },
    {
      id: 'telugu',
      title: 'Telugu Handwriting Excellence',
      edition: 'Regional Script Mastery (Ages 6+)',
      description: 'Specialized round workbook systems teaching curves, loop alignments, and character proportions for Telugu hand-printing. Imbues aesthetic cultural script discipline.',
      coverColor: 'from-pink-600 to-rose-950',
      textAccent: 'text-pink-400',
      pages: 96,
      targetAge: 'Vernacular Dev'
    }
  ];

  const getBookCoverDesign = (book: Book) => {
    return (
      <div
        className={`w-[220px] h-[300px] rounded-r-2xl bg-gradient-to-br ${book.coverColor} relative shadow-xl overflow-hidden flex flex-col justify-between p-5 border-y border-r border-white/20`}
        style={{
          boxShadow: '10px 10px 30px rgba(0,0,0,0.5), inset -3px 0 10px rgba(255,255,255,0.1)',
        }}
      >
        {/* Subtle decorative calligraphic patterns on background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
        
        {/* Artistic golden wave design line on cover */}
        <div className="absolute -left-20 top-20 w-80 h-32 bg-white/5 rotate-15 transform blur-sm" />

        {/* Shaded Left Edge representing real Book Spine folds */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/40 z-20 rounded-r-sm shadow-[inset_-2px_0_5px_rgba(255,255,255,0.05)]" />
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 z-25" />

        {/* Top Branding label */}
        <div className="relative z-10">
          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-white/70 bg-white/10 px-2 py-0.5 rounded border border-white/5">
            ALPHABET ACADEMY
          </span>
          <span className="block text-[9px] text-slate-300 font-serif italic mt-2.5">
            Certified Curriculum since 2008
          </span>
        </div>

        {/* Central visual text layout */}
        <div className="relative z-10 my-4 text-left">
          <h4 className="font-serif text-xl font-bold font-black text-white leading-tight drop-shadow-md">
            {book.title.replace('Alphabet Handwriting: ', '').replace('Mastering Penmanship: ', '')}
          </h4>
          <div className="w-8 h-[2px] bg-white/40 mt-3 rounded-full" />
        </div>

        {/* Bottom Details label on cover */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[8px] font-mono font-bold text-white tracking-widest uppercase">
            {book.pages} PAGES
          </span>
          
          {/* Custom miniature luxury emblem */}
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
          </div>
        </div>

        {/* Glass Reflection effect on cover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none select-none z-30" />
      </div>
    );
  };

  const activeBook = booksList.find((b) => b.id === activeBookId) || booksList[0];

  return (
    <section id="materials" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Proprietary Liturgy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Certified Copyset Blueprints & Learning Series
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="books-grid-layout">
          {/* Left Column: Interactive 3D Showcase Playground */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 glass-panel rounded-3xl min-h-[460px]" id="books-visual-playground">
            {/* 3D Scene Wrapper with high perspective depth */}
            <div className="relative h-[340px] flex items-center justify-center" style={{ perspective: '1200px' }}>
              {/* Floating ambient drop shadow sheet */}
              <div 
                className="absolute bottom-8 w-44 h-4 rounded-full bg-black/60 blur-xl transition-all duration-300"
                style={{
                  transform: `rotateX(90deg) translateZ(-40px) scale(${1 - Math.abs(rotationAngle)/150})`,
                }}
              />

              {/* Book Holder Container with mouse rotation applied */}
              <div
                className="transition-transform duration-350 ease-out preserve-3d cursor-ew-resize select-none"
                style={{
                  transform: `rotateY(${rotationAngle}deg) rotateX(6deg) scale(1.05)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {getBookCoverDesign(activeBook)}
              </div>
            </div>

            {/* Interactive rotation slider control */}
            <div className="w-full max-w-xs mt-6" id="rotation-slider-panel">
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
          </div>

          {/* Right Column: Detailed copy info and quick list choosing */}
          <div className="lg:col-span-6 flex flex-col justify-center" id="books-info-detail">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">
              COPYRIGHTED LEARNING MATERIALS
            </span>

            {/* Active Book Title & Info */}
            <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mb-2">
              {activeBook.title}
            </h3>
            <span className="text-xs font-semibold text-brand-cyan/90 uppercase tracking-wider block mb-4">
              {activeBook.edition}
            </span>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light mb-8">
              {activeBook.description}
            </p>

            {/* Highlighting Book Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8" id="book-specs-row">
              <div className="p-4 rounded-2xl bg-white/4 border border-white/5 hover:bg-white/8 transition-colors">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Estimated Pages</span>
                <span className="text-lg font-serif font-black text-white">{activeBook.pages} pages</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/4 border border-white/5 hover:bg-white/8 transition-colors">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Target Level</span>
                <span className="text-lg font-serif font-black text-white">{activeBook.targetAge}</span>
              </div>
            </div>

            {/* Tab selector to quickly cycle books */}
            <div className="flex flex-col gap-3" id="books-tab-selector">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Select Edition Book:</span>
              
              <div className="flex flex-col gap-2">
                {booksList.map((book) => (
                  <button
                    key={book.id}
                    onClick={() => setActiveBookId(book.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all duration-300 ${
                      activeBookId === book.id
                        ? 'bg-white/5 border-brand-cyan/40 text-brand-cyan'
                        : 'bg-transparent border-white/5 text-slate-400 hover:bg-white/3 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-xs md:text-sm font-semibold">{book.title.replace('Alphabet Handwriting: ', '').replace('Mastering Penmanship: ', '')}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
