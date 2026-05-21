import React, { useRef, useState } from 'react';
import { Briefcase, Target, BrainCircuit, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  badge?: string;
}

function PremiumTiltCard({ title, description, icon, gradient, badge }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    setCoords({ x, y });

    // Calculate rotation (-15deg to 15deg)
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 8;

    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between p-8 rounded-3xl glass-panel group transition-all duration-300 ease-out h-[320px] select-none cursor-pointer"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(139, 92, 246, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.15)'
          : '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Dynamic Specular Glass Light Reflection follow-mouse */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 130px at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.12), transparent)`,
          }}
        />
      )}

      {/* Visual background gradient glow flare */}
      <div className={`absolute -right-12 -top-12 w-28 h-28 blur-2xl rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 bg-gradient-to-r ${gradient}`} />

      <div>
        {/* Top Header / Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 shadow-lg text-white group-hover:scale-110 transition-transform duration-500 relative`}>
            {icon}
            {/* Soft backdrop backglow matching icon theme */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} rounded-2xl -z-10 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
          </div>

          {badge && (
            <span className="text-[9px] font-mono font-bold text-white bg-white/5 px-2 py-1 rounded-md tracking-wider border border-white/5">
              {badge}
            </span>
          )}
        </div>

        {/* Card Titles */}
        <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-cyan transition-colors" style={{ color: '#ffffff' }}>
          {title}
        </h3>

        {/* Card Descriptions */}
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Modern Card bottom link */}
      <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-4 group-hover:text-brand-cyan group-hover:gap-2 transition-all">
        <span>Elite Pedagogy</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform" />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Dysgraphia Support',
      description: 'Specialized clinical, multi-sensory hand-exercises tailored to overcome severe neuro-motor writing dysfunctions, dyslexia and writer’s cramp with dedicated safety.',
      icon: <BrainCircuit className="w-6 h-6 text-brand-cyan" />,
      gradient: 'from-brand-cyan to-blue-500',
      badge: 'Estd Therapy'
    },
    {
      title: 'Since 2008 Legacy',
      description: 'Over 18 years of uninterrupted dedication to educational penmanship research, certified by leading national school boards and child development psychologists.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-purple" />,
      gradient: 'from-brand-purple to-pink-500',
      badge: 'National Trust'
    },
    {
      title: '100% Placement Assistance',
      description: 'Guaranteed access to our career placement boards. We guide certified teacher trainees directly into elite corporate institutions, schools, and private setups.',
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      gradient: 'from-emerald-400 to-teal-500',
      badge: 'Career Path'
    },
    {
      title: 'Result-Oriented Programs',
      description: 'Scientific 15-hour systemic methodologies ensuring immediate visible improvements in alphabet sizing, alignments, line adherence, and stroke speed.',
      icon: <Target className="w-6 h-6 text-rose-400" />,
      gradient: 'from-rose-400 to-pink-500',
      badge: 'Scientific Hub'
    },
    {
      title: 'Personalized Training',
      description: 'Bespoke individual feedback maps. Every student and educator trainee receives dedicated visual analysis reports tracking stroke pressure and line consistency.',
      icon: <UserCheck className="w-6 h-6 text-amber-400" />,
      gradient: 'from-amber-400 to-orange-500',
      badge: '1-to-1 Focus'
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 px-4 md:px-8 bg-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-cyan uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
              Why Alphabet Hub
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Where Neurological Method Meets Aesthetic Penmanship
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            Standard tutors teach copycat lettering. We scientifically address fine-motor brain mapping, muscle tonicity, and posture alignment.
          </p>
        </div>

        {/* Features Glass Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="why-choose-us-grid">
          {features.map((feature, idx) => (
            <PremiumTiltCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              badge={feature.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
