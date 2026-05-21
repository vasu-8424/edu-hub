import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  onOpenEnroll: () => void;
  onOpenBrochure: () => void;
}

export default function Navbar({ onOpenEnroll, onOpenBrochure }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Courses', href: '#courses' },
    { label: 'Writing Styles', href: '#styles' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Materials', href: '#materials' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Contact', href: 'https://wa.me/919848555800?text=Hi!%20I\'m%20interested%20in%20learning%20more%20about%20Alphabet%20Educational%20Hub.', isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters on scroll
      const sections = navItems.map(item => item.href.slice(1));
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 py-4 ${
          isScrolled ? 'top-2' : 'top-0'
        }`}
        id="navbar"
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-glass-bg/60 backdrop-blur-xl border border-glass-border shadow-2xl py-3 px-6'
              : 'bg-transparent py-4 px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group" id="nav-logo">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] shadow-lg shadow-brand-purple/10">
                <div className="w-full h-full bg-[#0d0a20] rounded-xl flex items-center justify-center transition-colors group-hover:bg-brand-purple/10">
                  <span className="font-serif font-black text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent">A</span>
                </div>
                {/* Micro orbit glow effect */}
                <div className="absolute inset-0 -m-[2px] rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wide text-white leading-tight group-hover:text-brand-cyan transition-colors">
                  ALPHABET
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-brand-purple-glow font-semibold leading-none uppercase" style={{ color: '#8b5cf6' }}>
                  Educational Hub
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/3 p-1 rounded-full border border-white/5" id="nav-menu-desktop">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                    !item.isExternal && activeSection === item.href.slice(1)
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {!item.isExternal && activeSection === item.href.slice(1) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-purple/35 -z-10 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3" id="nav-actions">
              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 hover:border-brand-purple/40 hover:bg-brand-purple/10 transition-all duration-300 h-9"
                id="btn-brochure-desktop"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Brochure</span>
              </button>
              <button
                onClick={onOpenEnroll}
                className="relative group overflow-hidden flex items-center justify-center gap-1 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-purple to-brand-cyan shadow-md shadow-brand-purple/20 hover:shadow-brand-cyan/20 hover:scale-103 transition-all duration-300 h-9"
                id="btn-enroll-desktop"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed inset-0 z-45 bg-[#05060f]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="nav-menu-mobile"
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
          <nav className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-lg font-serif tracking-wider transition-colors ${
                  !item.isExternal && activeSection === item.href.slice(1)
                    ? 'text-brand-cyan font-bold scale-103'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="h-[1px] bg-white/10 my-4" />

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              id="btn-brochure-mobile"
            >
              <Download className="w-4 h-4" />
              <span>Brochure & Styles Catalog</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-purple to-brand-cyan hover:brightness-110 transition-all duration-300"
              id="btn-enroll-mobile"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Enroll In Programs</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
