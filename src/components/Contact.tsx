import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Loader2, Github, Linkedin, ExternalLink, Sparkles, Network } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', queryType: 'Collaboration', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', queryType: 'Collaboration', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="relative bg-[#0e0d0c] px-6 py-28 select-none border-t border-[#21201e]">
      
      {/* Editorial layout lines */}
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/45 hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/45 hidden xl:block" />

      {/* Large visual background section label "05/" */}
      <div className="absolute top-12 left-[6%] select-none pointer-events-none opacity-10 font-serif text-[14vw] font-bold tracking-tighter text-[#eae8e4] leading-none">
        05/
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-[#21201e] pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#cb3a22] uppercase block">
              06 // INITIATE SYSTEM DIALOGUE
            </span>
            <h2 className="mt-4 font-syne text-4xl font-extrabold tracking-tight text-[#f4f3f0] sm:text-6xl uppercase leading-none">
              ESTABLISH CONTACT
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left">
            <p className="font-serif text-xs text-[#a8a7a5] max-w-xs leading-relaxed italic">
              Have an interactive startup proposal, a joint hackathon challenge, or specific research questions? Initiate transmission below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Direct links (5 units) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#cb3a22] uppercase block">
                DIRECT PHYSICAL RECEPTORS // REVEAL CODES
              </span>
              
              <div className="space-y-4">
                {/* Email address */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex gap-4 border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22] duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#21201e] text-[#cb3a22] group-hover:border-[#cb3a22] transition-colors rounded-none">
                     <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[7px] text-[#cb3a22] uppercase tracking-widest block font-bold">EMAIL ADDR</span>
                    <span className="font-sans text-xs font-bold text-[#f4f3f0] group-hover:text-[#cb3a22] transition-colors block mt-0.5 select-all">
                      {personalInfo.email}
                    </span>
                    <span className="font-serif text-[10px] text-[#a8a7a5] block mt-1 italic">RESPONSE WINDOW // &lt; 24HR</span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="group flex gap-4 border border-[#21201e] bg-[#161514]/10 p-5 hover:border-[#cb3a22] duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#21201e] text-[#cb3a22] group-hover:border-[#cb3a22] transition-colors rounded-none">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[7px] text-[#cb3a22] uppercase tracking-widest block font-bold">MOBILE PHONE</span>
                    <span className="font-sans text-xs font-bold text-[#f4f3f0] block mt-0.5 select-all">
                      {personalInfo.phone}
                    </span>
                    <span className="font-serif text-[10px] text-[#a8a7a5] block mt-1 italic">DIRECT INTERCOM TRUNK CHANNEL</span>
                  </div>
                </a>

                {/* Physical Base */}
                <div className="flex gap-4 border border-[#21201e] bg-[#161514]/10 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#21201e] text-[#cb3a22] rounded-none">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[7px] text-[#cb3a22] uppercase tracking-widest block font-bold">HOMESTEAD LOCATION</span>
                    <span className="font-sans text-xs font-bold text-[#f4f3f0] block mt-0.5">
                      {personalInfo.location}
                    </span>
                    <span className="font-serif text-[10px] text-[#a8a7a5] block mt-1 italic">Lucknow, India // 226001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="space-y-3 pt-4">
              <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#cb3a22] uppercase block">
                DIGITAL REPOSITORIES
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#21201e] bg-[#161514]/10 px-4 py-3 text-[#a8a7a5] hover:text-[#f4f3f0] hover:border-[#cb3a22] transition-all group rounded-none"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" /> GitHub
                  </span>
                  <ExternalLink className="h-3 w-3 text-[#a8a7a5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#21201e] bg-[#161514]/10 px-4 py-3 text-[#a8a7a5] hover:text-[#f4f3f0] hover:border-[#cb3a22] transition-all group rounded-none"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-[#a8a7a5] group-hover:text-[#cb3a22] transition-colors" /> LinkedIn
                  </span>
                  <ExternalLink className="h-3 w-3 text-[#a8a7a5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form (7 units) */}
          <div className="lg:col-span-7">
            <div className="border border-[#21201e] bg-[#161514]/20 p-6 md:p-8 relative overflow-hidden min-h-[420px] flex flex-col justify-between rounded-none">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6 my-auto"
                  >
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center border border-[#cb3a22] bg-[#cb3a22]/5 text-[#cb3a22] rounded-none">
                        <Check className="h-7 w-7" />
                      </div>
                      <motion.div 
                        className="absolute inset-0 border border-[#cb3a22]/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-syne text-lg font-black text-[#f4f3f0] tracking-widest uppercase">
                        PACKET TRANSMITTED
                      </h4>
                      <p className="font-serif text-xs text-[#a8a7a5] max-w-sm leading-relaxed mx-auto italic">
                        Dialogue established. Sneha Singh's node is scheduled to perform standard credential check and follow up within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="bg-[#cb3a22] border border-[#cb3a22] text-white text-[10px] font-mono tracking-widest px-8 py-3 uppercase hover:bg-transparent duration-200 cursor-pointer"
                    >
                      RESET CORE PORTAL // DIALER
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Header Calibration Status Indicator */}
                    <div className="font-mono text-[8px] tracking-widest text-[#f4f3f0] border-b border-[#21201e] pb-3 uppercase flex items-center justify-between font-bold">
                      <span className="flex items-center gap-1.5"><Network className="h-3 w-3 text-[#cb3a22] animate-pulse" /> SYSTEM READY FOR INPUT</span>
                      <span className="text-[#cb3a22] select-none">[SECURED_TUNNEL]</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="font-mono text-[8px] text-[#cb3a22] uppercase tracking-widest block font-bold">SENDER IDENTIFIER *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={status === 'submitting'}
                          placeholder="Colleague/Interviewer"
                          className="w-full bg-[#0e0d0c] border border-[#21201e] p-3.5 text-[#f4f3f0] text-xs focus:outline-none focus:border-[#cb3a22] transition-colors disabled:opacity-55 rounded-none font-mono tracking-wider"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1">
                        <label className="font-mono text-[8px] text-[#cb3a22] uppercase tracking-widest block font-bold">RETURN MAILBOX ADDR *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={status === 'submitting'}
                          placeholder="e.g., mail@domain.com"
                          className="w-full bg-[#0e0d0c] border border-[#21201e] p-3.5 text-[#f4f3f0] text-xs focus:outline-none focus:border-[#cb3a22] transition-colors disabled:opacity-55 rounded-none font-mono tracking-wider"
                        />
                      </div>
                    </div>

                    {/* Query Category */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[8px] text-[#cb3a22] uppercase tracking-widest block font-bold">TRANSMISSION MODE *</label>
                      <div className="grid grid-cols-3 gap-2 font-mono text-[9px] tracking-wider">
                        {['Collaboration', 'Venture Pitch', 'Other'].map((qtp) => (
                          <button
                            key={qtp}
                            type="button"
                            onClick={() => setFormData({ ...formData, queryType: qtp })}
                            className={`py-2 px-1 border text-center transition-all cursor-pointer font-bold ${
                              formData.queryType === qtp
                                ? 'border-[#cb3a22] bg-[#cb3a22]/5 text-white'
                                : 'border-[#21201e] bg-[#0e0d0c]/80 text-[#a8a7a5] hover:border-[#cb3a22]/30'
                            }`}
                          >
                            {qtp.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Messages Content */}
                    <div className="space-y-1">
                      <label className="font-mono text-[8px] text-[#cb3a22] uppercase tracking-widest block font-bold">TRANSMISSION PACKET SPECIFICATIONS *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === 'submitting'}
                        placeholder="Detail your request, project, or coordinate request..."
                        className="w-full bg-[#0e0d0c] border border-[#21201e] p-3.5 text-[#f4f3f0] text-xs focus:outline-none focus:border-[#cb3a22] transition-colors h-[100px] resize-none disabled:opacity-55 rounded-none font-mono tracking-wider"
                      />
                    </div>

                    {/* Submission CTA Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={status === 'submitting' || !formData.name || !formData.email || !formData.message}
                        className="w-full relative bg-[#cb3a22] disabled:bg-[#21201e] hover:bg-[#b02f1a] py-3.5 text-center font-mono text-[10px] font-bold text-white tracking-[0.25em] flex items-center justify-center gap-2 transition-all cursor-pointer rounded-none uppercase"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-white" />
                            DISPATCHING DIALOGUE PACKET...
                          </>
                        ) : (
                          <>
                            TRANSMIT DIALOGUE PACKET
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
