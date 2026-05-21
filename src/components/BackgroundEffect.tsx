import { useEffect, useRef, useState } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool
    const particlesCount = 45;
    const particles: Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      decay: number;
    }> = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.3 - 0.1, // slowly float upwards
        alpha: Math.random() * 0.5 + 0.1,
        decay: Math.random() * 0.002 + 0.001,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint lines (constellations) connecting close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesCount; i++) {
        const p1 = particles[i];
        p1.y += p1.speedY;
        p1.x += p1.speedX;

        // Reset particles that drift off top or side
        if (p1.y < 0) {
          p1.y = height;
          p1.x = Math.random() * width;
        }
        if (p1.x < 0 || p1.x > width) {
          p1.x = Math.random() * width;
        }

        // Pulse alpha
        p1.alpha += p1.decay;
        if (p1.alpha > 0.6 || p1.alpha < 0.1) {
          p1.decay = -p1.decay;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p1.alpha)})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particlesCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#05060f]" id="background-system">
      {/* Dynamic Mouse Tracking Cursor Glow */}
      {isHovering && (
        <div
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-grad' + 'ient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.04) 45%, transparent 70%)',
            mixBlendMode: 'screen',
            zIndex: -30,
          }}
        />
      )}

      {/* Large Glowing Ambient Orbs - Artistic Flair Theme specs */}
      <div 
        className="animate-slow-pulse grow-blur absolute -top-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-purple-600/20 mix-blend-screen opacity-75 select-none pointer-events-none" 
        id="ambient-orb-purple-top"
      />
      <div 
        className="animate-float grow-blur absolute bottom-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-blue-600/10 mix-blend-screen opacity-75 select-none pointer-events-none" 
        id="ambient-orb-blue"
      />
      <div 
        className="animate-float-slow grow-blur absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-cyan-400/10 mix-blend-screen opacity-75 select-none pointer-events-none" 
        id="ambient-orb-cyan-right"
      />

      {/* Background Micro Particle System */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60 mix-blend-screen" id="starfield-canvas" />

      {/* Subtle Grid Overlay from Artistic Flair style */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
