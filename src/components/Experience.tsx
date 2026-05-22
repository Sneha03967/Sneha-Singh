import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { educationList, volunteerWork, achievements } from '../data';
import { Award, Star, Sparkles, GraduationCap, MapPin, HeartHandshake, Bookmark, FolderHeart } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'education' | 'volunteer' | 'awards'>('education');

  return (
    <section id="experience" className="relative bg-[#0e0d0c] px-6 py-28 select-none border-t border-[#21201e] overflow-hidden">
      
      {/* Background paper texture grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100%_33px] pointer-events-none" />
      <div className="absolute inset-y-0 left-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-[4%] w-[1px] bg-[#21201e]/30 pointer-events-none hidden xl:block" />

      {/* Large visual background section label "03/" */}
      <div className="absolute top-12 right-[6%] select-none pointer-events-none opacity-5 font-serif text-[18vw] font-light tracking-tighter text-[#eae8e4] leading-none">
        03
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-[#21201e] pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl text-left">
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#cb3a22] uppercase">
              03 // ACADEMIC CHRONICLE & HONORS
            </span>
            <h2 className="mt-4 font-serif text-4xl font-extralight tracking-tight text-[#f4f3f0] sm:text-6xl uppercase leading-none">
              CHRONOLOGY & <span className="font-syne font-black text-[#cb3a22]">MILESTONES</span>
            </h2>
          </div>

          {/* Precision Tab switcher (Sharp, Minimalist) */}
          <div className="flex flex-wrap gap-1 bg-[#161514] p-1 border border-[#21201e] max-w-fit">
            {(['education', 'volunteer', 'awards'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 font-mono text-[10px] font-bold tracking-wider transition-colors duration-300 focus:outline-none cursor-pointer uppercase ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-[#a8a7a5] hover:text-[#f4f3f0]'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-experience-tab"
                    className="absolute inset-0 bg-[#cb3a22]"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === 'education' && 'Education'}
                  {tab === 'volunteer' && 'Volunteer'}
                  {tab === 'awards' && 'Awards & SIH'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab contents grid containing custom items */}
        <div className="mt-12 text-left relative">
          
          {/* Handwritten Annotation depending on the selected tab */}
          <div className="absolute -top-10 right-4 pointer-events-none select-none z-20 hidden md:block">
            <AnimatePresence mode="wait">
              {activeTab === 'education' && (
                <motion.div
                  key="edu"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-notebook text-xl text-[#cb3a22] rotate-1"
                >
                  * "Computer science structure laid right in KV schools."
                </motion.div>
              )}
              {activeTab === 'volunteer' && (
                <motion.div
                  key="vol"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-notebook text-xl text-[#cb3a22] -rotate-2"
                >
                  * "Team coordination is the force multiplier in SIH."
                </motion.div>
              )}
              {activeTab === 'awards' && (
                <motion.div
                  key="aw"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-notebook text-2xl text-[#cb3a22] rotate-2"
                >
                  * "To be recognized nationally is a tribute to raw stamina."
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="relative border-l border-[#21201e] ml-4 md:ml-36 space-y-12"
              >
                {educationList.map((edu, idx) => (
                  <div
                    key={edu.id}
                    className="relative pl-8 md:pl-14 group"
                  >
                    {/* Floating Side Period */}
                    <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-12 text-right">
                      <span className="font-mono text-[7px] text-[#cb3a22] tracking-widest uppercase block font-bold">PERIOD // REG</span>
                      <span className="font-mono text-xs font-bold text-[#f4f3f0] block mt-1 tracking-wider whitespace-nowrap uppercase">{edu.period}</span>
                    </div>

                    {/* Node Bullet Point */}
                    <span className="absolute left-0 top-1.5 -translate-x-[4.5px] flex h-2.5 w-2.5 bg-[#0e0d0c] border border-[#cb3a22] group-hover:bg-[#cb3a22] transition-colors duration-300 z-10" />

                    {/* Exquisite Card Core container (Sharp Brutalist Editorial Layout) */}
                    <div className="border border-[#21201e] hover:border-[#cb3a22]/40 bg-[#161514]/20 p-6 md:p-8 hover:bg-[#161514]/30 duration-300 text-left relative">
                      
                      {/* Little vintage stamp on hover */}
                      <div className="absolute right-3 top-3 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-notebook text-sm text-[#cb3a22]">[LKO APPROVED]</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          {/* Mobile DURATION tag */}
                          <span className="md:hidden font-mono text-[9px] text-[#cb3a22] font-bold block mb-1 uppercase tracking-wider">{edu.period}</span>
                          <h3 className="font-serif text-lg font-normal text-[#f4f3f0] uppercase tracking-wide">{edu.degree}</h3>
                          <p className="font-serif text-xs text-[#a8a7a5] italic font-light">{edu.institution}</p>
                        </div>
                        <span className="flex items-center gap-1.5 font-mono text-[8px] text-[#a8a7a5] font-semibold px-3 py-1.5 bg-[#0e0d0c] border border-[#21201e] tracking-widest max-w-fit leading-none uppercase">
                          <MapPin className="h-3 w-3 text-[#cb3a22]" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'volunteer' && (
              <motion.div
                key="volunteer-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6 text-left"
              >
                {volunteerWork.map((vol, idx) => (
                  <div
                    key={vol.id}
                    className="border border-[#21201e] bg-[#161514]/20 p-8 hover:border-[#cb3a22] transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute bottom-4 right-4 opacity-5 text-[#cb3a22] transition-all">
                      <HeartHandshake className="h-20 w-20" />
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[8px] tracking-[0.25em] text-[#cb3a22] font-semibold uppercase">
                      <Sparkles className="h-3 w-3 text-[#cb3a22]" />
                      <span>COMMUNITY INITIATIVES & VOLUNTEERING INDEX</span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-light text-[#f4f3f0] tracking-wide uppercase">{vol.role}</h3>

                    <ul className="mt-6 space-y-4 max-w-3xl">
                      {vol.description.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-left items-start">
                          <span className="text-[#cb3a22] text-xs leading-none mt-1">○</span>
                          <p className="font-serif text-xs md:text-sm text-[#a8a7a5] leading-relaxed italic pr-4 font-light">{bullet}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'awards' && (
              <motion.div
                key="awards-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
              >
                {achievements.map((ach, idx) => (
                  <div
                    key={ach.id}
                    className="border border-[#21201e] bg-[#161514]/20 p-6 md:p-8 hover:border-[#cb3a22] transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute bottom-4 right-4 opacity-5 text-[#cb3a22] transition-all">
                      <Award className="h-16 w-16" />
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[8px] tracking-widest text-[#cb3a22] font-black uppercase">
                      <Star className="h-3 w-3 text-[#cb3a22]" />
                      <span>NATIONAL RECOGNITION // SIH {ach.year}</span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-normal text-[#f4f3f0] tracking-wide uppercase">{ach.title}</h3>
                    <p className="font-serif text-xs text-[#cb3a22] italic mt-1 font-semibold">{ach.event}</p>
                    
                    <p className="mt-5 font-serif text-xs leading-relaxed text-[#a8a7a5] italic font-light">
                      {ach.highlight}
                    </p>
                  </div>
                ))}

                {/* Roadmaps and technical pursuits */}
                <div className="col-span-1 md:col-span-2 border border-[#cb3a22]/30 bg-[#cb3a22]/2 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative text-left">
                  <div className="relative z-10 space-y-2 max-w-2xl">
                    <span className="font-mono text-[8px] text-[#cb3a22] tracking-widest flex items-center gap-1.5 font-bold uppercase">
                      <FolderHeart className="h-3.5 w-3.5" /> SCIENTIFIC & SOCIAL HORIZONS
                    </span>
                    <h4 className="font-serif text-[#f4f3f0] text-lg uppercase font-normal tracking-wide">Exploring Startups & AI Fairness Matrix</h4>
                    <p className="font-serif text-xs text-[#a8a7a5] leading-relaxed italic font-light pr-4">
                      Evolving technical frameworks that prioritize algorithmic transparency, socio-demographic mitigation, and collaborative startup agility. Eager to partner with research institutes on high-impact initiatives.
                    </p>
                  </div>
                  <div className="relative z-10 shrink-0">
                    <div className="bg-[#cb3a22] border border-[#cb3a22] px-6 py-3 font-mono text-[10px] font-bold tracking-widest text-white uppercase hover:bg-transparent duration-250 select-none">
                      SIH FINALIST '25
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
