import { Brain, Gauge, Smile, BookOpen, Brush, Award, ArrowUpRight } from 'lucide-react';
import { Benefit } from '../types';

export default function ProgramBenefits() {
  const benefitsList: Benefit[] = [
    {
      id: 'motor',
      title: 'Neuromuscular Motor Skill Development',
      description: 'Handwriting trains continuous cerebral patterns. It develops tactile feedback loop systems, thumb-index muscle memory, and hand-eye scanning. This stimulates neural pathways matching fine-motor coordination.',
      gridSpan: 'md:col-span-8',
      iconName: 'motor',
      colorPreset: 'purple'
    },
    {
      id: 'speed',
      title: 'Speed & Time Efficiency',
      description: 'No more unfinished exams. We teach smooth cursive connection formulas that reduce friction points, double stem traction speed, and keep writing fluid under exam pressure.',
      gridSpan: 'md:col-span-4',
      iconName: 'speed',
      colorPreset: 'cyan'
    },
    {
      id: 'confidence',
      title: 'Psychological Confidence Building',
      description: 'Messy handwriting leads to subconscious academic embarrassment. Transforming their slate sheets instills extreme pride, fueling self-assurance in public exams.',
      gridSpan: 'md:col-span-4',
      iconName: 'confidence',
      colorPreset: 'pink'
    },
    {
      id: 'academic',
      title: 'Academic Performance & Excellence',
      description: 'Clear letters help evaluators grade swiftly. Research indicates beautiful, legible exam paper presentations can improve grading metrics by up to 15%. Make every diagnostic mark count with exquisite margins.',
      gridSpan: 'md:col-span-8',
      iconName: 'academic',
      colorPreset: 'blue'
    },
    {
      id: 'creative',
      title: 'Artistic & Creative Expression',
      description: 'Unlocking classical lettering allows students to venture into modern commercial brush scripts, custom design crafts, calligraphy portfolio layouts, and creative arts.',
      gridSpan: 'md:col-span-6',
      iconName: 'creative',
      colorPreset: 'emerald'
    },
    {
      id: 'teacher',
      title: 'Professional Teacher Development',
      description: 'Providing housewife trainees, school tutors, and private guides a certified pedagogical framework to start their profitable, respected neighborhood writing clinics.',
      gridSpan: 'md:col-span-6',
      iconName: 'teacher',
      colorPreset: 'amber'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'motor':
        return <Brain className="w-6 h-6 text-brand-purple" />;
      case 'speed':
        return <Gauge className="w-6 h-6 text-brand-cyan" />;
      case 'confidence':
        return <Smile className="w-6 h-6 text-pink-400" />;
      case 'academic':
        return <BookOpen className="w-6 h-6 text-blue-400" />;
      case 'creative':
        return <Brush className="w-6 h-6 text-emerald-400" />;
      case 'teacher':
      default:
        return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  const getColorTheme = (preset: Benefit['colorPreset']) => {
    switch (preset) {
      case 'cyan':
        return 'group-hover:border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan';
      case 'pink':
        return 'group-hover:border-pink-500/20 bg-pink-500/5 text-pink-400';
      case 'blue':
        return 'group-hover:border-blue-500/20 bg-blue-500/5 text-blue-400';
      case 'emerald':
        return 'group-hover:border-emerald-400/20 bg-emerald-400/5 text-emerald-400';
      case 'amber':
        return 'group-hover:border-amber-400/20 bg-amber-400/5 text-amber-400';
      case 'purple':
      default:
        return 'group-hover:border-brand-purple/20 bg-brand-purple/5 text-brand-purple';
    }
  };

  return (
    <section id="benefits" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Neurological Advantages
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Bento Overview of Brain-Writing Motor Integration
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="bento-grid-benefits">
          {benefitsList.map((benefit) => (
            <div
              key={benefit.id}
              className={`glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-400 hover:scale-[1.005] hover:shadow-2xl flex flex-col justify-between ${benefit.gridSpan}`}
              id={`bento-card-${benefit.id}`}
            >
              {/* Backglow element */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Styled Icon */}
                  <div className={`p-3.5 rounded-xl border border-white/5 shadow-inner transition-transform duration-300 group-hover:scale-110 ${getColorTheme(benefit.colorPreset)}`}>
                    {getIcon(benefit.iconName)}
                  </div>

                  {/* Modern interactive tag corner */}
                  <div className="text-slate-600 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-3">
                  {benefit.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative timeline bullet anchor inside card layout */}
              <div className="h-[1px] bg-white/5 my-4" />
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono tracking-wider">
                <span>PROVEN RESULT</span>
                <span>SINCE 2008 COGNITION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
