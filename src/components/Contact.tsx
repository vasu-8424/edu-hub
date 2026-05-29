import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'teacher-training',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#03040b]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-6 leading-tight">
            Alphabet Educational Hub
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            We are here to guide you on your journey toward handwriting excellence and professional teaching success.
          </p>
        </motion.div>

        {/* Triple Floating Contact Cards Info Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" 
          id="floating-contact-info-cards"
        >
          {/* Card 1 - Phone / WhatsApp */}
          <motion.a
            variants={itemVariants}
            href="https://wa.me/919063526196?text=Hi!%20I%20would%20like%20to%20enquire%20about%20Alphabet%20Educational%20Hub."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full w-full bg-[#090814]/90 backdrop-blur-2xl rounded-[1.4rem] p-6 md:p-8 flex items-center gap-5 z-10 transition-transform duration-300 group-hover:scale-[0.99]">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-brand-purple to-pink-500 text-white shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">WhatsApp / Hotline</span>
                <span className="block text-white font-serif font-black text-lg md:text-xl group-hover:text-pink-400 transition-colors">
                  +91 90635 26196
                </span>
                <span className="block text-xs text-slate-400 font-light mt-1">Tap to chat on WhatsApp</span>
              </div>
            </div>
          </motion.a>

          {/* Card 2 - Email */}
          <motion.div variants={itemVariants} className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full w-full bg-[#090814]/90 backdrop-blur-2xl rounded-[1.4rem] p-6 md:p-8 flex items-center gap-5 z-10 transition-transform duration-300 group-hover:scale-[0.99]">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-brand-cyan to-blue-600 text-white shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">Email Us</span>
                <a href="mailto:hr@alphabeteducationalhub.com" className="block text-white font-serif font-black text-sm md:text-base group-hover:text-brand-cyan transition-colors" style={{ color: '#ffffff' }}>
                  hr@alphabeteducationalhub.com
                </a>
                <span className="block text-xs text-slate-400 font-light mt-1">We're here to help</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Location */}
          <motion.div variants={itemVariants} className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full w-full bg-[#090814]/90 backdrop-blur-2xl rounded-[1.4rem] p-6 md:p-8 flex items-center gap-5 z-10 transition-transform duration-300 group-hover:scale-[0.99]">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">Main Center</span>
                <span className="block text-white font-serif font-black text-sm md:text-base group-hover:text-emerald-400 transition-colors">
                  Santhi Nagar, Kakinada, AP
                </span>
                <span className="block text-xs text-slate-400 font-light mt-1">Pincode: 533003</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Form and Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="contact-split-grid">
          {/* Left Column: Glassmorphism Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between" 
            id="contact-form-left"
          >
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 blur-xl pointer-events-none" />
              
              <div className="relative w-full h-full bg-[#090814]/90 backdrop-blur-3xl p-8 md:p-12 rounded-[2.4rem] flex flex-col justify-between shadow-2xl z-10">
                {formSubmitted ? (
                  // Success visual state
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="my-auto text-center py-16 flex flex-col items-center justify-center" 
                    id="form-success-overlay"
                  >
                    <div className="w-24 h-24 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <CheckCircle2 className="w-12 h-12" />
                      </motion.div>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-sm text-slate-400 max-w-sm mt-4 leading-relaxed font-light mx-auto">
                      Your inquiry has been successfully submitted. Our team at Alphabet Educational Hub will get back to you shortly.
                    </p>
                    <div className="w-16 h-[1px] bg-slate-800 my-8 mx-auto" />
                    <span className="text-[10px] tracking-widest font-mono text-brand-purple uppercase">
                      ALPHABET EDUCATIONAL HUB Estd 2008
                    </span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mb-3">
                        Admissions Open for 2026
                      </h3>
                      <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                        Begin your transformation today with our Professional Handwriting teacher Training Programs. Enroll now and take the first step toward a confident, skilled, and successful handwriting journey.
                      </p>

                      <div className="space-y-6">
                        {/* Name input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                            Full Legal Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                          />
                        </div>

                        {/* Email input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@domain.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-purple focus:bg-white/10 transition-all focus:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          />
                        </div>

                        {/* Category Type selector */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                            Program Interest type
                          </label>
                          <select
                            value={formData.inquiryType}
                            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all cursor-pointer appearance-none"
                          >
                            <option className="bg-[#090814] text-white" value="diploma">Professional Diploma Course (6 Months)</option>
                            <option className="bg-[#090814] text-white" value="foundation">Foundation Level Handwriting Trainer Course</option>
                            <option className="bg-[#090814] text-white" value="expert">Expert Level Handwriting Trainer Course</option>
                            <option className="bg-[#090814] text-white" value="calligraphy">Calligraphy &amp; Creative Writing Training</option>
                            <option className="bg-[#090814] text-white" value="dysgraphia">Dysgraphia Identification &amp; Learning Support</option>
                            <option className="bg-[#090814] text-white" value="school-workshop">School Workshop</option>
                            <option className="bg-[#090814] text-white" value="teacher-workshop">Teacher Training Workshop</option>
                            <option className="bg-[#090814] text-white" value="books">Books &amp; Learning Materials</option>
                            <option className="bg-[#090814] text-white" value="franchise">Franchise Opportunities</option>
                            <option className="bg-[#090814] text-white" value="careers">Career Opportunities</option>
                          </select>
                        </div>

                        {/* Message details */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                            Brief inquiries message details
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Your questions, preferred schedules, or institutional requests..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 mt-8 rounded-2xl text-sm font-semibold text-white bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.12),0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer group"
                    >
                      <span>Send via WhatsApp</span>
                      <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Coordinates Constellation Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between" 
            id="contact-hubs-right"
          >
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 blur-xl pointer-events-none" />
              
              <div className="relative w-full h-full bg-[#090814]/90 backdrop-blur-3xl p-8 md:p-12 rounded-[2.4rem] flex flex-col justify-between shadow-2xl z-10">
                <div>
                  <span className="text-[11px] font-mono font-bold text-brand-cyan tracking-[0.2em] uppercase">
                    Our Locations
                  </span>
                  <h3 className="font-serif text-3xl font-extrabold text-white tracking-tight mt-3 mb-6">
                    Find Us in Kakinada
                  </h3>
                </div>

                {/* Embedded Google Map */}
                <div 
                  className="relative h-[280px] md:h-[320px] rounded-2xl border border-white/10 overflow-hidden my-6 flex items-center justify-center bg-[#070519]/70 shadow-inner group"
                  id="google-map-embed"
                >
                  <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                  <iframe
                    title="Alphabet Educational Hub Location"
                    src="https://maps.google.com/maps?q=Alphabet%20Educational%20Hub,%20Kakinada&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.9) grayscale(20%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Institute Address Details */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" id="active-hub-details-card">
                  <span className="text-[11px] font-mono font-bold text-brand-cyan tracking-[0.2em] uppercase mb-2 block">
                    Main Corporate Hub
                  </span>
                  <h4 className="font-serif font-extrabold text-white text-base md:text-lg mb-2">
                    Alphabet Educational Hub
                  </h4>
                  <p className="text-sm text-slate-300 font-light leading-relaxed font-mono">
                    D.No. 3-16B-93, Santhi Nagar, Kakinada, Andhra Pradesh, India. Pincode: 533003.
                  </p>
                </div>

                {/* Secure Footer items social anchors inside form panel */}
                <div className="flex gap-4 items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] font-bold uppercase">
                    Connect With Us
                  </span>

                  <div className="flex gap-4 text-slate-400">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-all" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition-all" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:scale-110 transition-all" aria-label="Youtube">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/alphabet-educational-hub-1a492b199" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] hover:scale-110 transition-all" aria-label="Linkedin">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
