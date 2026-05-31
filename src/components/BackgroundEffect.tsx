import { memo } from 'react';

const BackgroundEffect = memo(function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#05060f]" id="background-system">
      {/* Large Glowing Ambient Orbs - Highly optimized with CSS only, no heavy mix-blend-mode */}
      <div 
        className="animate-slow-pulse absolute -top-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-[80px] opacity-60 select-none pointer-events-none transform-gpu" 
        id="ambient-orb-purple-top"
      />
      <div 
        className="animate-float absolute bottom-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-brand-cyan/5 blur-[100px] opacity-50 select-none pointer-events-none transform-gpu" 
        id="ambient-orb-blue"
      />
      
      {/* Subtle Grid Overlay from Artistic Flair style */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
});

export default BackgroundEffect;
