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
  const [activeHub, setActiveHub] = useState('hyderabad');

  const hubLocations = [
    { id: 'hyderabad', name: 'Hyderabad (Main Corporate Hub)', coordY: '60%', coordX: '45%', address: '2nd Floor, Elite Manor, Banjara Hills, Hyderabad, TS, India' },
    { id: 'bangalore', name: 'Bangalore Center', coordY: '75%', coordX: '42%', address: '3rd Block, Jayanagar Central, Bengaluru, KA, India' },
    { id: 'mumbai', name: 'Mumbai Affiliate', coordY: '55%', coordX: '28%', address: 'Regus Business Park, Bandra West, Mumbai, MH, India' },
    { id: 'delhi', name: 'Delhi Partner Hub', coordY: '25%', coordX: '48%', address: 'Connaught Place, New Delhi, DL, India' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Redirect to WhatsApp with pre-filled message
    const message = encodeURIComponent(
      `Hi! I'm ${formData.name} and I'm interested in ${formData.inquiryType.replace(/-/g, ' ')} at Alphabet Educational Hub.\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/919848555800?text=${message}`, '_blank');
    
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
            Connect In Realtime
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Initiate Your Transformation Journey Today
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Triple Floating Contact Cards Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="floating-contact-info-cards">
          {/* Card 1 - Phone / WhatsApp */}
          <a
            href="https://wa.me/919848555800?text=Hi!%20I%20would%20like%20to%20enquire%20about%20Alphabet%20Educational%20Hub."
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
                +91 98485 55800
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
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Secure Mailroom</span>
              <a href="mailto:info@alphabeteducationalhub.com" className="block text-white font-serif font-black hover:text-brand-cyan transition-colors mt-0.5" style={{ color: '#ffffff' }}>
                info@alphabetedu.in
              </a>
              <span className="block text-[9px] text-slate-400 font-light mt-0.5">Direct Response within 4 Hours</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:border-pink-500/20 transition-all duration-300">
            <div className="p-4 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 text-white shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Main Secretariat</span>
              <span className="block text-white font-serif font-bold text-xs md:text-sm mt-0.5">
                Banjara Hills, Hyderabad, India
              </span>
              <span className="block text-[9px] text-slate-400 font-light mt-0.5">Associated Partner Network</span>
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
                    Your inquiry has been successfully captured. Our academic support and executive coordinators will reach you within 4 business hours.
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
                      Inquire for Admissions
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                      Schedule a secure physical pen-holding analysis diagnostic session or file for professional teacher vocational certification details.
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
                          <option value="teacher-training">Teacher Vocational Diploma Training</option>
                          <option value="remedial-support">Children Handwriting Corrective (15 Hrs)</option>
                          <option value="calligraphy">Artistic Calligraphy Masterclass</option>
                          <option value="dysgraphia-therapy">Dysgraphia & Remedial Stroke Therapy</option>
                          <option value="school-workshop">Institutional School Workshop Partnership</option>
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
                  OPERATIONAL NETWORK MATRIX
                </span>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mt-2 mb-4">
                  Indian Educational Hub Nodes
                </h3>
              </div>

              {/* Graphic Constellation Map Representation */}
              <div 
                className="relative h-[240px] md:h-[280px] bg-[#070519]/70 rounded-2xl border border-white/5 overflow-hidden my-6 flex items-center justify-center"
                id="interactive-constellation-map"
              >
                {/* Abstract Vector India Contour styling lines */}
                <svg viewBox="0 0 200 300" fill="none" className="absolute h-full w-auto opacity-10 pointer-events-none stroke-slate-500">
                  <path d="M100,20 L150,50 L180,100 L160,165 L130,220 L100,280 L70,240 L40,165 L30,100 L50,50 Z" strokeWidth="1" />
                  <path d="M100,50 L130,90 M100,100 L80,160 M120,160 L100,220" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>

                {/* Subtle digital connecting vector lines drawing paths between hubs */}
                <svg className="absolute inset-0 w-full h-full opacity-25">
                  <line x1="45%" y1="60%" x2="42%" y2="75%" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="45%" y1="60%" x2="28%" y2="55%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="45%" y1="60%" x2="48%" y2="25%" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3,3" />
                </svg>

                {/* Active Hub node pulse ring */}
                {hubLocations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveHub(loc.id)}
                    className="absolute group/node shrink-0 flex items-center justify-center"
                    style={{ top: loc.coordY, left: loc.coordX }}
                    aria-label={`Select ${loc.name}`}
                  >
                    <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-60 animate-ping ${
                      activeHub === loc.id ? 'bg-brand-cyan/40Scale pointer-events-none bg-brand-cyan' : 'bg-brand-purple/10'
                    }`} />
                    <span className={`relative rounded-full h-3.5 w-3.5 shadow-md border border-white transition-all duration-300 ${
                      activeHub === loc.id
                        ? 'bg-brand-cyan scale-125'
                        : 'bg-brand-purple group-hover/node:bg-white'
                    }`} />

                    {/* Simple hover label text */}
                    <span className="hidden sm:block absolute left-5 bg-glass-bg backdrop-blur-md text-[9px] font-mono font-black text-white px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap">
                      {loc.name.replace(' (Main Corporate Hub)', '').replace(' Center', '').replace(' Affiliate', '').replace(' Partner Hub', '')}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Hub metadata card details panel */}
              {(() => {
                const currentHub = hubLocations.find(l => l.id === activeHub) || hubLocations[0];
                return (
                  <div className="p-4 rounded-xl bg-white/3 border border-white/5 transition-all duration-300" id="active-hub-details-card">
                    <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-wider uppercase mb-1 block">
                      Active Operational Node
                    </span>
                    <h4 className="font-serif font-extrabold text-white text-sm md:text-base mb-1.5">
                      {currentHub.name}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed font-mono">
                      {currentHub.address}
                    </p>
                  </div>
                );
              })()}

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
