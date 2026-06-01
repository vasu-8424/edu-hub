import { PenTool, Feather, BookOpen, Languages } from 'lucide-react';

export default function HandwritingStyles() {
  const styles = [
    {
      title: 'Cursive Handwriting',
      icon: <PenTool className="w-8 h-8 text-brand-purple" />,
      description: 'A smooth, flowing handwriting style designed to improve writing speed, rhythm, and natural connectivity between letters. Ideal for students and professionals seeking neat and efficient writing.',
      borderColor: 'border-brand-purple/20 hover:border-brand-purple/50',
      glowColor: 'bg-brand-purple'
    },
    {
      title: 'Lucida Handwriting',
      icon: <BookOpen className="w-8 h-8 text-brand-cyan" />,
      description: 'A structured and elegant handwriting style focused on clarity, uniformity, and presentation. This style helps learners develop disciplined and highly readable handwriting.',
      borderColor: 'border-brand-cyan/20 hover:border-brand-cyan/50',
      glowColor: 'bg-brand-cyan'
    },
    {
      title: 'Calligraphy',
      icon: <Feather className="w-8 h-8 text-pink-400" />,
      description: 'An artistic form of writing that transforms letters into a beautiful visual expression. Our training covers both modern and traditional calligraphy techniques to develop creativity, style, and aesthetic excellence in writing.',
      borderColor: 'border-pink-400/20 hover:border-pink-400/50',
      glowColor: 'bg-pink-400'
    },
    {
      title: 'Universal Style',
      icon: <PenTool className="w-8 h-8 text-emerald-400" />,
      description: 'A standard, disconnected writing style with a globally readable character style, designed for maximum legibility, simplicity, and clear communication.',
      borderColor: 'border-emerald-400/20 hover:border-emerald-400/50',
      glowColor: 'bg-emerald-400'
    }
  ];

  return (
    <section id="handwriting-styles" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase bg-brand-purple/10 px-4 py-1.5 rounded-full">
            Handwriting Styles We Teach
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Developing Elegance, Clarity & Creative Expression
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-3xl mx-auto mt-4 leading-relaxed">
            At Alphabet Educational Hub, we train students, teachers, and aspiring professionals in a variety of handwriting styles that enhance both academic performance and artistic expression.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto mt-6 rounded-full" />
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {styles.map((style, idx) => (
            <div key={idx} className={`glass-panel p-8 md:p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden ${style.borderColor}`}>
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity ${style.glowColor}`} />
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-2xl bg-white/5 shadow-inner">
                  {style.icon}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white text-center tracking-tight mb-4">
                {style.title}
              </h3>
              <p className="text-sm text-slate-400 font-light text-center leading-relaxed">
                {style.description}
              </p>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan/10 blur-3xl rounded-full" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Languages className="w-6 h-6 text-brand-cyan" />
              <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-widest block">
                Languages We Offer
              </span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-white tracking-tight mb-3">
              Multilingual Learning Support
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              We provide comprehensive handwriting training across three primary languages to ensure effective learning for every student:
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-4 shrink-0 justify-center">
            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-brand-cyan/30 flex flex-col items-center justify-center shadow-lg">
              <span className="font-serif text-xl font-bold text-white tracking-wide mb-1">English</span>
              <span className="text-[10px] text-brand-cyan uppercase tracking-wider font-mono">Cursive & Lucida</span>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-brand-purple/30 flex flex-col items-center justify-center shadow-lg">
              <span className="font-serif text-xl font-bold text-white tracking-wide mb-1">Telugu</span>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-pink-400/30 flex flex-col items-center justify-center shadow-lg">
              <span className="font-serif text-xl font-bold text-white tracking-wide mb-1">Hindi</span>
              <span className="text-[10px] text-pink-400 uppercase tracking-wider font-mono">Standard Script</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
