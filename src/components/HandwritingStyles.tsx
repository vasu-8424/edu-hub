import { useState } from 'react';
import { Type, PenTool, Sparkles, CheckSquare, RefreshCw } from 'lucide-react';

export default function HandwritingStyles() {
  const [inputText, setInputText] = useState('Alphabet Educational Hub');
  const [selectedStyle, setSelectedStyle] = useState<'cursive' | 'lucida' | 'calligraphy'>('cursive');

  const stylesDetail = {
    cursive: {
      id: 'cursive',
      name: 'Dynamic Cursive Script',
      familyClass: 'font-cursive',
      fontStyle: 'font-["Great_Vibes"]', // Loaded in main CSS
      fontSize: 'text-4xl md:text-5xl',
      anatomy: [
        'Flowing 45° angle slant for continuous muscular flow.',
        'Proper round loops in letters g, j, y and terminal t.',
        'S-curve entry connecting lines to promote writing quickness.',
        'Develops rhythm, focus, and symmetrical coordination.'
      ],
      description: 'Cursive improves reading fluidity and prevents reversals. It stimulates long-term retention by letting students write words as cohesive mental shapes rather than isolated letters.',
      accentColor: 'text-brand-purple',
      badgeColor: 'bg-brand-purple/10 border-brand-purple/20 text-brand-purple'
    },
    lucida: {
      id: 'lucida',
      name: 'Lucida Writing Series',
      familyClass: 'font-lucida',
      fontStyle: 'font-["Caveat"]', // Loaded in main CSS
      fontSize: 'text-3xl md:text-4xl',
      anatomy: [
        'Round, modern upright letter forms optimized for legibility.',
        'Slightly disconnected strokes keeping clarity intact.',
        'Equally-spaced vertical stems that look neat and uniform.',
        'Excellent for primary grade students to build baseline posture.'
      ],
      description: 'Lucida is India’s beloved educational script. It bridges standard print with cursive, reducing eye fatigue during academic grading and maximizing school presentation standards.',
      accentColor: 'text-brand-cyan',
      badgeColor: 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan'
    },
    calligraphy: {
      id: 'calligraphy',
      name: 'Classic Broad-Edge Calligraphy',
      familyClass: 'font-calligraphy',
      fontStyle: 'font-["Pinyon_Script"]', // Loaded in main CSS
      fontSize: 'text-4xl md:text-5xl',
      anatomy: [
        'Strict 30° broad pen orientation for dramatic ink thickness.',
        'Exquisite copperplate hairlines paired with thick downstrokes.',
        'Incredibly premium swashes, ascenders, and artistic loops.',
        'Imparts supreme posture discipline, wrist control, and patience.'
      ],
      description: 'The peak of formal letter craft. Under certified master calligraphers, master the anatomical construction of timeless serif, Gothic, and Copperplate scripts, perfect for corporate invitations and luxury exhibits.',
      accentColor: 'text-pink-400',
      badgeColor: 'bg-pink-500/10 border-pink-500/20 text-pink-400'
    }
  };

  const samplePhrases = [
    'Empower Futures Since 2008',
    'The quick brown fox jumps over the lazy dog.',
    'Write beautifully, think clearly.',
  ];

  return (
    <section id="styles" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-pink-500 uppercase bg-pink-500/10 px-4 py-1.5 rounded-full">
              Style & Artistry
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Explore Our Core Handwriting Styles Portfolio
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            Beautiful writing is not a natural talent—it is a structured, mechanical habit. Compare the unique structural strokes taught in our hub.
          </p>
        </div>

        {/* Live Calligraphy Sandbox Simulator Container */}
        <div className="glass-panel p-8 rounded-3xl relative mb-12 shadow-2xl overflow-hidden" id="sandbox-wrapper">
          {/* Subtle watermarked grid background simulating real calligraphy practice sheet */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none select-none" />
          <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-brand-cyan/10 pointer-events-none select-none" />
          <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-brand-cyan/10 pointer-events-none select-none border-t border-dashed border-slate-700/50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="sandbox-grid">
            {/* Input Controls */}
            <div className="lg:col-span-4 flex flex-col gap-6" id="sandbox-input-cols">
              <div>
                <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <PenTool className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Sandbox Writing Engine</span>
                </span>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  Try It Yourself
                </h3>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                  Type any custom phrase in the box below to see it instantly transform into our certified, beautiful scripts.
                </p>
              </div>

              {/* Typed Input */}
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value.slice(0, 50))}
                  placeholder="Type script preview..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors font-medium tracking-wide"
                  id="sandbox-text-input"
                />
                <span className="absolute bottom-1 right-2.5 text-[9px] text-slate-500 font-mono">
                  {inputText.length}/50
                </span>
              </div>

              {/* Sample Quick select */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Quick Templates:</span>
                <div className="flex flex-wrap gap-2">
                  {samplePhrases.map((phrase, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputText(phrase)}
                      className="text-[10px] font-semibold text-slate-400 bg-white/3 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5 hover:text-white transition-all text-left"
                    >
                      "{phrase}"
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sandbox Canvas Outputs */}
            <div className="lg:col-span-8 flex flex-col gap-6" id="sandbox-output-cols">
              {/* Output Canvas card */}
              <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-6 justify-center min-h-[220px]" id="sandbox-canvas-panel">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                    Interactive Writing Stage
                  </span>

                  {/* Quick toggle styles tabs */}
                  <div className="flex gap-2 p-1 bg-white/5 border border-white/5 rounded-xl">
                    {(['cursive', 'lucida', 'calligraphy'] as Array<'cursive' | 'lucida' | 'calligraphy'>).map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors capitalize ${
                          selectedStyle === style
                            ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rendered Text Stage */}
                <div className="py-8 flex justify-center items-center overflow-x-auto min-h-[120px]" id="sandbox-font-display">
                  <p 
                    className={`${stylesDetail[selectedStyle].fontStyle} ${stylesDetail[selectedStyle].fontSize} text-center leading-normal text-white px-4 tracking-normal break-words whitespace-pre-wrap transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]`}
                  >
                    {inputText || 'Type something above...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Details block for currently selected style */}
        <div 
          className="glass-panel p-8 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          id={`detailed-style-block-${selectedStyle}`}
        >
          {/* Left Column: Style Anatomy Points */}
          <div className="md:col-span-7" id="detailed-style-anatomy">
            <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border mb-6 ${stylesDetail[selectedStyle].badgeColor}`}>
              <Sparkles className="w-3 h-3" />
              <span>{stylesDetail[selectedStyle].name} Blueprint</span>
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
              Stroke Anatomy & Rules
            </h3>
            
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed mb-6">
              {stylesDetail[selectedStyle].description}
            </p>

            <div className="space-y-3">
              {stylesDetail[selectedStyle].anatomy.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${stylesDetail[selectedStyle].accentColor} shadow-md`} />
                  <span className="text-xs md:text-sm text-slate-300 font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Calligraphy Mock representation */}
          <div className="md:col-span-5 flex justify-center" id="detailed-style-callout">
            <div className="relative glass-panel rounded-2xl p-6 w-full max-w-sm text-center">
              <div className="absolute top-0 right-0 p-3 text-[9px] font-mono font-bold text-slate-500 bg-white/3 rounded-tr-2xl rounded-bl-2xl">
                LUCIDA / CURSIVE 2008
              </div>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] mx-auto mb-4">
                <div className="w-full h-full bg-[#0d0a20] rounded-xl flex items-center justify-center text-white">
                  <PenTool className="w-5 h-5 text-brand-cyan" />
                </div>
              </div>

              <span className="block text-xs font-serif font-black text-white uppercase tracking-wider mb-2">
                Learn {stylesDetail[selectedStyle].name}
              </span>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-4">
                Join signature masterclasses mapping neural motor skills to fine-line lettering elegance.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-purple/40 transition-all duration-300"
              >
                Inquire For This Style
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
