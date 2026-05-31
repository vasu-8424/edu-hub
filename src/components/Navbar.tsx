import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenBrochure: () => void;
}

export default function Navbar({ onOpenEnroll, onOpenBrochure }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Courses', href: '#courses' },
    { label: 'Books', href: '#materials' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Career Opportunities', href: '#careers' },
    { label: 'Contact', href: 'https://wa.me/919063526196?text=Hi!%20I\'m%20interested%20in%20learning%20more%20about%20Alphabet%20Educational%20Hub.', isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.filter(item => !item.isExternal).map(item => item.href.slice(1));
      sections.push('hero');

      let currentSection = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 py-4 ${
          isScrolled ? 'top-2' : 'top-0'
        }`}
        id="navbar"
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0d0a20]/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-6'
              : 'bg-transparent py-4 px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group" id="nav-logo">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white p-[2px] shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-shadow duration-500">
                <img src="/logo.png" alt="Alphabet Educational Hub Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wide text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-500">
                  ALPHABET
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-brand-purple font-bold leading-none uppercase">
                  Educational Hub
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 shadow-inner" 
              id="nav-menu-desktop"
              onMouseLeave={() => setHoveredSection(null)}
            >
              {navItems.map((item) => {
                const isActive = !item.isExternal && activeSection === item.href.slice(1);
                const isHovered = hoveredSection === item.href;
                
                return (
                  <div key={item.href} className="relative group" onMouseEnter={() => setHoveredSection(item.href)}>
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className={`block px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors relative z-10 ${
                        isActive || isHovered ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                    </a>
                    
                    {/* Hover/Active Indicator */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-purple/30 rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Dropdowns */}
                    {item.label === 'Courses' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#0d0a20]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col p-2 transform group-hover:translate-y-0 translate-y-2">
                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                        <a href="#courses" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Foundation Level Course</a>
                        <a href="#courses" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Expert Level Course</a>
                        <a href="#courses" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Professional Diploma Course</a>
                        <a href="#courses" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Calligraphy & Creative Writing</a>
                        <a href="#courses" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Dysgraphia Learning Support</a>
                      </div>
                    )}
                    {item.label === 'Books' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#0d0a20]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col p-2 transform group-hover:translate-y-0 translate-y-2">
                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                        <a href="#materials" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Cursive Handwriting</a>
                        <a href="#materials" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Lucida Handwriting</a>
                        <a href="#materials" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Telugu Handwriting</a>
                      </div>
                    )}
                    {item.label === 'Workshops' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#0d0a20]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col p-2 transform group-hover:translate-y-0 translate-y-2">
                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                        <a href="#workshops" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Students Workshop</a>
                        <a href="#workshops" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Teachers Workshop</a>
                      </div>
                    )}
                    {item.label === 'Career Opportunities' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#0d0a20]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col p-2 transform group-hover:translate-y-0 translate-y-2">
                        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                        <a href="#careers" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Handwriting Teacher</a>
                        <a href="#careers" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">Franchise Program</a>
                        <a href="#careers" className="px-4 py-2.5 hover:bg-white/10 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors">School Collaborations</a>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4" id="nav-actions">
              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 bg-white/5 border border-white/10 hover:border-brand-purple/50 hover:bg-brand-purple/10 hover:text-white transition-all duration-300 group"
              >
                <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Brochure</span>
              </button>
              <button
                onClick={onOpenEnroll}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#05060f]/90 flex flex-col justify-center px-8 lg:hidden"
            id="nav-menu-mobile"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="flex flex-col gap-6 max-w-sm mx-auto w-full"
            >
              <nav className="flex flex-col gap-4 text-center">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 rounded-2xl text-lg font-serif tracking-wider transition-all ${
                      !item.isExternal && activeSection === item.href.slice(1)
                        ? 'text-white bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-white/10 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              <div className="h-[1px] bg-white/10 my-2" />

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white bg-transparent backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                >
                  <Download className="w-5 h-5" />
                  <span>Brochure & Styles</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnroll();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Enroll In Programs</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
