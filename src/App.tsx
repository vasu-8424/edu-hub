import React, { useState } from 'react';
import { X, CheckCircle2, Download, Play, ShieldAlert, Sparkles, BookOpen, Eye } from 'lucide-react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FounderMessage from './components/FounderMessage';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import WhatWeTeach from './components/WhatWeTeach';
import HandwritingStyles from './components/HandwritingStyles';
import BooksSection from './components/BooksSection';
import Workshops from './components/Workshops';
import CareerOpportunities from './components/CareerOpportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  
  // Custom states for modals behavior
  const [enrollForm, setEnrollForm] = useState({ name: '', phone: '', email: '', course: 'diploma' });
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.name || !enrollForm.phone) return;
    
    // Redirect to WhatsApp with pre-filled details
    const courseNames: Record<string, string> = {
      diploma: 'Professional Diploma Course',
      foundation: 'Foundation Level Handwriting Trainer',
      expert: 'Expert Level Handwriting Trainer',
      calligraphy: 'Calligraphy & Creative Writing',
      dysgraphia: 'Dysgraphia Learning Support'
    };
    
    const courseName = courseNames[enrollForm.course] || enrollForm.course;
    const message = encodeURIComponent(
      `Hi! I'm ${enrollForm.name}.\n\nI would like to enroll in the ${courseName} program.\n\nMy Details:\nPhone: ${enrollForm.phone}\nEmail: ${enrollForm.email || 'N/A'}`
    );
    window.open(`https://wa.me/919063526196?text=${message}`, '_blank');

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



  const handleBrochureClose = () => {
    setBrochureOpen(false);
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
        
        {/* 2. About */}
        <About />

        {/* 3. Founder's Message */}
        <FounderMessage />

        {/* 4. Competitive visual advantages */}
        <WhyChooseUs 
          onOpenEnroll={() => setEnrollOpen(true)} 
          onOpenBrochure={() => setBrochureOpen(true)} 
        />

        {/* 5. Detailed structured course tracks with accordions */}
        <Courses />

        {/* 6. What We Teach */}
        <WhatWeTeach />

        {/* 7. Handwriting Styles & Languages */}
        <HandwritingStyles />

        {/* 7. 3D rotating copyset book catalog showcase */}
        <BooksSection />

        {/* 8. Campus classroom workshops planner */}
        <Workshops />

        {/* 9. Career Opportunities */}
        <CareerOpportunities />

        {/* 10. Interactive contact forms */}
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
                    Join the Professional Handwriting Teacher Training Program and build a rewarding career in handwriting education.
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
                      <option className="bg-[#8b5cf6] text-white" value="diploma">Professional Diploma Course</option>
                      <option className="bg-[#8b5cf6] text-white" value="foundation">Foundation Level Handwriting Trainer Course</option>
                      <option className="bg-[#8b5cf6] text-white" value="expert">Expert Level Handwriting Trainer Course</option>
                      <option className="bg-[#8b5cf6] text-white" value="calligraphy">Calligraphy &amp; Creative Writing Training</option>
                      <option className="bg-[#8b5cf6] text-white" value="dysgraphia">Dysgraphia Identification &amp; Learning Support</option>
                      <option className="bg-[#8b5cf6] text-white" value="school-workshop">School Workshop (3 Hours)</option>
                      <option className="bg-[#8b5cf6] text-white" value="teacher-workshop">Teacher Training Workshop (1 Hour)</option>
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

            <div className="text-center py-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6 font-bold">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl font-black text-white">Alphabet Hub Brochure</h4>
              <p className="text-xs text-slate-300 max-w-xs mt-4 leading-relaxed font-light">
                View our complete course catalog, syllabus details, and pricing structures in our official brochure.
              </p>
              
              <div className="w-full flex flex-col gap-3 mt-8">
                <a
                  href="/Alphabet_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBrochureClose}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Brochure
                </a>
                <a
                  href="/Alphabet_Brochure.pdf"
                  download="Alphabet_Brochure.pdf"
                  onClick={handleBrochureClose}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
