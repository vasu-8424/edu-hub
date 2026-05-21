import React, { useState } from 'react';
import { X, CheckCircle2, Download, Play, ShieldAlert, Sparkles } from 'lucide-react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import HandwritingStyles from './components/HandwritingStyles';
import ProgramBenefits from './components/ProgramBenefits';
import BooksSection from './components/BooksSection';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  
  // Custom states for modals behavior
  const [enrollForm, setEnrollForm] = useState({ name: '', phone: '', email: '', course: 'diploma' });
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureDownloading, setBrochureDownloading] = useState(false);
  const [brochureProgress, setBrochureProgress] = useState(0);
  const [brochureCompleted, setBrochureCompleted] = useState(false);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.name || !enrollForm.phone) return;
    
    // Generate a beautiful, unique registration ID
    const sampleId = `REG-2026-${Math.floor(Math.random() * 90000 + 10000)}`;
    setRegistrationId(sampleId);
    setEnrollSubmitted(true);
  };

  const handleEnrollClose = () => {
    setEnrollOpen(false);
    setTimeout(() => {
      setEnrollSubmitted(false);
      setEnrollForm({ name: '', phone: '', email: '', course: 'diploma' });
    }, 400);
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureEmail) return;

    setBrochureDownloading(true);
    setBrochureProgress(1);

    // Simulated progress tick representing realistic, satisfying digital download
    const interval = setInterval(() => {
      setBrochureProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setBrochureDownloading(false);
          setBrochureCompleted(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 8);
      });
    }, 150);
  };

  const handleBrochureClose = () => {
    setBrochureOpen(false);
    setTimeout(() => {
      setBrochureCompleted(false);
      setBrochureProgress(0);
      setBrochureEmail('');
    }, 400);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-brand-cyan selection:text-black" id="app-root">
      {/* Absolute high-end dynamic background overlays & custom particles */}
      <BackgroundEffect />

      {/* Embedded Fixed Navbar */}
      <Navbar 
        onOpenEnroll={() => setEnrollOpen(true)} 
        onOpenBrochure={() => setBrochureOpen(true)} 
      />

      {/* Main Pages Flow */}
      <main className="relative z-10">
        {/* 1. Full screen cinematic Hero */}
        <Hero 
          onOpenEnroll={() => setEnrollOpen(true)} 
          onOpenBrochure={() => setBrochureOpen(true)} 
        />
        
        {/* 2. Legacy since 2008 Split About block */}
        <About />

        {/* 3. Competitive visual advantages */}
        <WhyChooseUs />

        {/* 4. Scrolling counter achievements metrics & timelines */}
        <Achievements />

        {/* 5. Detailed structured course tracks with drawers */}
        <Courses />

        {/* 6. Live calligraphical practice sandbox emulator */}
        <HandwritingStyles />

        {/* 7. Bento grid neurological cognitive advantages */}
        <ProgramBenefits />

        {/* 8. 3D rotating copyset book catalog showcase */}
        <BooksSection />

        {/* 9. Campus classroom workshops planner estimator */}
        <Workshops />

        {/* 10. Automotive sliding client feedback carousel */}
        <Testimonials />

        {/* 11. Interactive node operational map & contact forms */}
        <Contact />
      </main>

      {/* Minimal luxury footer layout */}
      <Footer />

      {/* ========================================================= */}
      {/* PORTAL MODAL 1: PRESET INTERACTIVE ADMISSIONS STUDY ENROLLMENT */}
      {/* ========================================================= */}
      {enrollOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="w-full max-w-md glass-panel text-white p-8 rounded-3xl relative shadow-2xl overflow-hidden animate-scale-up">
            <button
              onClick={handleEnrollClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {enrollSubmitted ? (
              <div className="text-center py-6 flex flex-col items-center justify-center" id="enrollment-success-view">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-black text-white">Enrollment Registered</h4>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  Temporary Admissions ID: <span className="text-brand-cyan font-bold">{registrationId}</span>
                </p>
                <p className="text-xs text-slate-300 max-w-xs mt-4 leading-relaxed font-light">
                  Admissions seat reserved successfully. An academic coordinator will contact your phone number to coordinate matching diagnostic timings.
                </p>
                <button
                  onClick={handleEnrollClose}
                  className="w-full py-3.5 mt-8 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-white hover:brightness-110 transition-all font-semibold"
                >
                  Done, Back to Main
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#8b5cf6] tracking-widest uppercase">
                    ONLINE ADMISSIONS PORTAL
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
                    Reserve Your Seat
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    Start a 15-hour certified handwriting remediation course.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Student Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="e.g., Rohan Kumar"
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-colors text-white"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Parent/Guardian Mobile</label>
                    <input
                      type="tel"
                      required
                      value={enrollForm.phone}
                      onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                      placeholder="e.g., +91 98XXX XXXXX"
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-colors text-white"
                    />
                  </div>

                  {/* Program chooser dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Desired academic track</label>
                    <select
                      value={enrollForm.course}
                      onChange={(e) => setEnrollForm({ ...enrollForm, course: e.target.value })}
                      className="w-full bg-[#0d0a20] border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="diploma">Professional Diploma in Teacher Training</option>
                      <option value="calligraphy">Artistic & Broad-edge Calligraphy Training</option>
                      <option value="dysgraphia">Remedial Student & Dysgraphia Support</option>
                      <option value="teacher">Fast-track Vocational Teacher Training</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-purple to-brand-cyan shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  Submit Reservations Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* PORTAL MODAL 2: INTERACTIVE SYLLABUS BROCHURE DOWNLOADER */}
      {/* ========================================================= */}
      {brochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="w-full max-w-sm glass-panel text-white p-8 rounded-3xl relative shadow-2xl overflow-hidden animate-scale-up">
            <button
              onClick={handleBrochureClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {brochureCompleted ? (
              <div className="text-center py-6 flex flex-col items-center justify-center" id="brochure-success-view">
                <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-6 font-bold">
                  <Download className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-black text-white">Syllabus Copysets Saved</h4>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  Size: 14.8 MB | Format: PDF Secure Envelope
                </p>
                <p className="text-xs text-slate-300 max-w-xs mt-4 leading-relaxed font-light">
                  The complete handwriting worksheets guidelines, price templates, and school catalog file have been processed.
                </p>
                <button
                  onClick={handleBrochureClose}
                  className="w-full py-3.5 mt-8 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-500 hover:bg-emerald-600 transition-colors font-semibold"
                >
                  Close & Continue Reading
                </button>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-widest uppercase">
                    RESOURCE PACKAGES
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
                    Download Syllabus Catalog
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    Access worksheets previews and detailed structural styles outlines.
                  </p>
                </div>

                {brochureDownloading ? (
                  <div className="py-6 flex flex-col gap-4 text-center items-center" id="brochure-progress-view">
                    <span className="text-xs font-semibold text-slate-300">Formulating PDF copy pack...</span>
                    
                    {/* Linear glass progress bar */}
                    <div className="w-full h-2 rounded-full overflow-hidden bg-white/10 border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan transition-all duration-150"
                        style={{ width: `${brochureProgress}%` }}
                      />
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400">
                      {brochureProgress}% downloaded
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Recipient Email Address</label>
                      <input
                        type="email"
                        required
                        value={brochureEmail}
                        onChange={(e) => setBrochureEmail(e.target.value)}
                        placeholder="e.g., student@domain.com"
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-cyan text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-black bg-white hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 font-semibold"
                    >
                      <Download className="w-4 h-4" />
                      <span>Prepare Catalog Copy</span>
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
