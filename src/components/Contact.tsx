import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Instagram, Facebook, Youtube, Share2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'teacher-training',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeHub, setActiveHub] = useState('kakinada');

  const hubLocations = [
    { id: 'kakinada', name: 'Kakinada (Main Center)', coordY: '55%', coordX: '55%', address: 'D.No. 3-16B-93, Santhi Nagar, Kakinada, Andhra Pradesh, India. Pincode: 533003.' },
    { id: 'hyderabad', name: 'Hyderabad Hub', coordY: '48%', coordX: '44%', address: 'Andhra Pradesh & Telangana Region — Contact for nearest associate center.' },
    { id: 'vijayawada', name: 'Vijayawada Center', coordY: '56%', coordX: '48%', address: 'Andhra Pradesh — Contact our team for location details and schedule.' },
    { id: 'visakhapatnam', name: 'Visakhapatnam Hub', coordY: '45%', coordX: '58%', address: 'Andhra Pradesh — Contact our team for location details and schedule.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Redirect to WhatsApp with pre-filled message
    const message = encodeURIComponent(
      `Hi! I'm ${formData.name} and I'm interested in ${formData.inquiryType.replace(/-/g, ' ')} at Alphabet Educational Hub.\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/919063526196?text=${message}`, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', inquiryType: 'teacher-training', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 overflow-hidden bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-brand-cyan/10 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Alphabet Educational Hub
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            We are here to guide you on your journey toward handwriting excellence and professional teaching success.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Triple Floating Contact Cards Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="floating-contact-info-cards">
          {/* Card 1 - Phone / WhatsApp */}
          <a
            href="https://wa.me/919063526196?text=Hi!%20I%20would%20like%20to%20enquire%20about%20Alphabet%20Educational%20Hub."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:border-brand-purple/20 transition-all duration-300 no-underline"
          >
            <div className="p-4 rounded-xl bg-gradient-to-tr from-brand-purple to-pink-500 text-white shrink-0">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">WhatsApp / Hotline</span>
              <span className="block text-white font-serif font-black hover:text-brand-cyan transition-colors mt-0.5">
                +91 90635 26196
              </span>
              <span className="block text-[9px] text-slate-400 font-light mt-0.5">Tap to chat on WhatsApp</span>
            </div>
          </a>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:border-brand-cyan/20 transition-all duration-300">
            <div className="p-4 rounded-xl bg-gradient-to-tr from-brand-cyan to-blue-500 text-white shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email Us</span>
              <a href="mailto:hr@alphabeteducationalhub.com" className="block text-white font-serif font-black hover:text-brand-cyan transition-colors mt-0.5" style={{ color: '#ffffff' }}>
                hr@alphabeteducationalhub.com
              </a>
              <span className="block text-[9px] text-slate-400 font-light mt-0.5">We're here to help</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:border-pink-500/20 transition-all duration-300">
            <div className="p-4 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 text-white shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Main Center</span>
              <span className="block text-white font-serif font-bold text-xs md:text-sm mt-0.5">
                Santhi Nagar, Kakinada, AP
              </span>
              <span className="block text-[9px] text-slate-400 font-light mt-0.5">Pincode: 533003</span>
            </div>
          </div>
        </div>

        {/* Form and Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-split-grid">
          {/* Left Column: Glassmorphism Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="contact-form-left">
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between shadow-2xl">
              {formSubmitted ? (
                // Success visual state
                <div className="my-auto text-center py-16 flex flex-col items-center justify-center" id="form-success-overlay">
                  <div className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6 shadow-2xl animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mt-4 leading-relaxed font-light">
                    Your inquiry has been successfully submitted. Our team at Alphabet Educational Hub will get back to you shortly.
                  </p>
                  <div className="w-16 h-[1px] bg-slate-800 my-8" />
                  <span className="text-[10px] tracking-widest font-mono text-brand-purple uppercase">
                    ALPHABET EDUCATIONAL HUB Estd 2008
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-2">
                      Admissions Open for 2026
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                      Begin your transformation today with our Professional Handwriting teacher Training Programs. Enroll now and take the first step toward a confident, skilled, and successful handwriting journey.
                    </p>

                    <div className="space-y-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple focus:bg-white/5 transition-all focus:shadow-[0_0_12px_#8b5cf6_0.15]"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all focus:shadow-[0_0_12px_#06b6d4_0.15]"
                        />
                      </div>

                      {/* Category Type selector */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                          Program Interest type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-[#0d0a20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan focus:bg-white/5 transition-all"
                        >
                          <option className="bg-[#8b5cf6] text-white" value="diploma">Professional Diploma Course (6 Months)</option>
                          <option className="bg-[#8b5cf6] text-white" value="foundation">Foundation Level Handwriting Trainer Course</option>
                          <option className="bg-[#8b5cf6] text-white" value="expert">Expert Level Handwriting Trainer Course</option>
                          <option className="bg-[#8b5cf6] text-white" value="calligraphy">Calligraphy &amp; Creative Writing Training</option>
                          <option className="bg-[#8b5cf6] text-white" value="dysgraphia">Dysgraphia Identification &amp; Learning Support</option>
                          <option className="bg-[#8b5cf6] text-white" value="school-workshop">School Workshop</option>
                          <option className="bg-[#8b5cf6] text-white" value="teacher-workshop">Teacher Training Workshop</option>
                          <option className="bg-[#8b5cf6] text-white" value="books">Books &amp; Learning Materials</option>
                          <option className="bg-[#8b5cf6] text-white" value="franchise">Franchise Opportunities</option>
                          <option className="bg-[#8b5cf6] text-white" value="careers">Career Opportunities</option>
                        </select>
                      </div>

                      {/* Message details */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                          Brief inquiries message details
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Your questions, preferred schedules, or institutional requests..."
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple focus:bg-white/5 transition-all focus:shadow-[0_0_12px_#8b5cf6_0.15] resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 mt-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-brand-cyan shadow-xl hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>Send via WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: High-End Coordinates Constellation Map */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="contact-hubs-right">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between bg-black/60 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-wider uppercase">
                  Our Locations
                </span>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mt-2 mb-4">
                  Find Us in Kakinada
                </h3>
              </div>

              {/* Embedded Google Map */}
              <div 
                className="relative h-[240px] md:h-[280px] rounded-2xl border border-white/5 overflow-hidden my-6 flex items-center justify-center bg-[#070519]/70"
                id="google-map-embed"
              >
                <iframe
                  title="Alphabet Educational Hub Location"
                  src="https://maps.google.com/maps?q=D.No.%203-16B-93,%20Santhi%20Nagar,%20Kakinada,%20Andhra%20Pradesh,%20India,%20533003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Institute Address Details */}
              <div className="p-4 rounded-xl bg-white/3 border border-white/5" id="active-hub-details-card">
                <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-wider uppercase mb-1 block">
                  Main Corporate Hub
                </span>
                <h4 className="font-serif font-extrabold text-white text-sm md:text-base mb-1.5">
                  Alphabet Educational Hub
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed font-mono">
                  D.No. 3-16B-93, Santhi Nagar, Kakinada, Andhra Pradesh, India. Pincode: 533003.
                </p>
              </div>

              {/* Secure Footer items social anchors inside form panel */}
              <div className="flex gap-4 items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span className="text-[9px] text-slate-500 font-mono tracking-widest font-semibold uppercase">
                  SOCIAL MEDIAL NETWORKS
                </span>

                <div className="flex gap-3 text-slate-400">
                  <a href="https://instagram.com" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" className="hover:text-red-500 transition-colors" aria-label="Youtube">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-brand-cyan transition-colors" aria-label="Linkedin Share">
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
