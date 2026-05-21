import { useState } from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

type TabType = 'vision' | 'mission';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('vision');

  const content = {
    vision: {
      title: 'Our Vision',
      tagline: 'Sculpting minds, one stroke at a time.',
      icon: <Eye className="w-6 h-6 text-brand-cyan" />,
      text: 'To be globally recognized as the gold standard for handwriting transformation and calligraphy training. We envision a world where physical writing is celebrated as a cognitive powerhouse, sharpening focus, enhancing neural growth, and acting as a canvas for ultimate intellectual and artistic expression.',
      points: [
        'Cognitive & neuromuscular agility for students of all ages.',
        'Global network of highly-skilled, certified handwriting educators.',
        'Preserving classical calligraphy while styling modern scripts.',
        'Bridging medical neural therapy with handwriting via Dysgraphia support.'
      ]
    },
    mission: {
      title: 'Our Mission',
      tagline: 'Bridging technique, elegance, and mental clarity.',
      icon: <Target className="w-6 h-6 text-brand-purple" />,
      text: 'Since 2008, our mission has been to systematically eradicate penmanship difficulties by offering scientific, result-oriented curricula. We equip institutions with premium learning materials and prepare passionate individuals for flourishing careers as professional handwriting coaches.',
      points: [
        'Eradicate academic anxiety caused by illegible writing within 15 hours.',
        'Deliver state-of-the-art syllabus designed by research neurologists.',
        'Empower women and educators with stable, rewarding vocational masterclass programs.',
        'Partner with 1000+ national schools to democratize fine motor skills.'
      ]
    },

  };

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Structural visual constraints */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Legacy Since 2008
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Crafting Calligraphic Excellence & Cognitive Development
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Grand Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-split-view">
          {/* Left Column: Glass Content Card */}
          <div className="lg:col-span-7 flex flex-col" id="about-content-left">
            {/* Interactive Tab Switcher Toggles */}
            <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl mb-8 max-w-md" id="about-tab-triggers">
              {(['vision', 'mission'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-xs md:text-sm font-semibold tracking-wide rounded-xl transition-all duration-400 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`tab-btn-${tab}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Displaying Live Interactive State Content Card */}
            <div 
              className="glass-panel p-8 md:p-10 rounded-3xl min-h-[420px] flex flex-col justify-between relative overflow-hidden group shadow-2xl transition-all duration-500 hover:border-brand-purple/20"
              id="about-display-card"
            >
              {/* Soft background color flare representing active layout color system */}
              <div 
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 transition-all duration-1000 blur-3xl ${
                  activeTab === 'vision' ? 'bg-brand-cyan' : 'bg-brand-purple'
                }`} 
              />

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                    {content[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      {content[activeTab].title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-cyan/90 tracking-wide mt-0.5">
                      {content[activeTab].tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light mb-6">
                  {content[activeTab].text}
                </p>
              </div>

              {/* Point highlights list with elegant gradient ticks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {content[activeTab].points.map((point, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Founder Glowing Frame & Image area */}
          <div className="lg:col-span-5 flex justify-center items-center" id="about-visual-right">
            <div className="relative group w-full max-w-[380px]">
              {/* Backglow border effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-purple via-[#bfdbfe]/10 to-brand-cyan opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700" />

              {/* Glass container */}
              <div className="relative glass-panel rounded-3xl overflow-hidden p-[10px] shadow-2xl transition-all duration-500 group-hover:scale-102">
                <div className="rounded-2xl overflow-hidden relative aspect-square bg-[#0b041c]">
                  {/* Actual Founder placeholder or high quality executive art with referrer restriction bypass */}
                  <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800&h=800"
                    alt="Calligraphy & Handwriting Practice"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 filter saturate-[0.85] group-hover:scale-105 group-hover:saturate-100"
                    id="concept-image"
                  />
                  
                  {/* Subtle glass reflection sheet effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-cyan/20 pointer-events-none select-none mix-blend-overlay" />
                  
                  {/* Elegant floating badge info on image */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel backdrop-blur-md px-4 py-3 rounded-xl border border-white/15">
                    <span className="block text-xs font-serif font-bold text-white tracking-wide">
                      Calligraphy & Penmanship
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      Premium Cognitive & Motor Skills Training
                    </span>
                  </div>
                </div>
              </div>

              {/* Accompanying Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 glass-panel rounded-2xl p-3 shadow-lg flex items-center gap-2 border border-white/10 animate-float">
                <Award className="w-5 h-5 text-brand-purple" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">18+ Years Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
