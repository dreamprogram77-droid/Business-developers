
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const team = [
    { name: 'Dr. Sarah Al-Majed', role: 'role_ceo', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Eng. Faisal Rahman', role: 'role_cto', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Noura Al-Salem', role: 'role_cmo', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const stats = [
    { label: 'stat_offices', value: '5,000+' },
    { label: 'stat_countries', value: '12' },
    { label: 'stat_valuation', value: '$50M+' },
    { label: 'stat_satisfaction', value: '99%' }
  ];

  return (
    <div className="w-full bg-white animate-fade-in font-sans overflow-x-hidden selection:bg-brand-gold selection:text-white" dir={dir}>
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[650px] flex items-center justify-center bg-brand-primary overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 transform scale-105 animate-[pulse_20s_infinite]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pb-16">
            <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-slide-up shadow-lg">
              Est. 2023 • Riyadh, KSA
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight drop-shadow-2xl tracking-tight">
              {t('aboutPageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
              {t('aboutPageSubtitle')}
            </p>
         </div>

         {/* Floating Stats Bar (Glassmorphism) */}
         <div className="absolute -bottom-16 left-4 right-4 z-20">
            <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-elevated border border-white/50 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center group relative">
                       {i !== stats.length - 1 && (
                         <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200"></div>
                       )}
                       <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 font-serif">
                          {stat.value}
                       </div>
                       <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t(stat.label) || stat.label}</div>
                    </div>
                ))}
            </div>
         </div>
      </div>

      <div className="h-28 bg-white"></div> {/* Spacer for floating stats */}

      {/* --- STORY & MISSION (Zig-Zag) --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
         
         {/* Section 1: The Story */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8 animate-slide-up order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-xs">
                   <div className="w-12 h-0.5 bg-brand-gold"></div>
                   {t('ourStory')}
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary leading-tight">
                   From a coffee shop idea to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500">Digital Empire.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                   {t('ourStoryDesc')}
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-brand-gold"></div>
                  </div>
                </div>
             </div>
             <div className="relative order-1 lg:order-2 group">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-primary/10 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                  alt="Our Story" 
                />
             </div>
         </div>

         {/* Section 2: The Mission */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative group">
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-surface rounded-[2rem] -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]" 
                  alt="Our Mission" 
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-xs hidden md:block">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-sm text-slate-600">Empowering 10k+ founders by 2026.</p>
                </div>
             </div>
             <div className="space-y-8 animate-slide-up">
                <div className="inline-flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-xs">
                   <div className="w-12 h-0.5 bg-brand-gold"></div>
                   {t('ourMission')}
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary leading-tight">
                   Breaking barriers, <br/>
                   <span className="italic font-serif text-slate-400">Building bridges.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                   {t('ourMissionDesc')}
                </p>
             </div>
         </div>
      </div>

      {/* --- VALUES GRID --- */}
      <div className="bg-brand-surface py-32 border-y border-slate-100 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
         <div className="absolute -right-20 top-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
         <div className="absolute -left-20 bottom-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{t('ourValues')}</span>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary">{t('trust_builders')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { title: 'valueInnovation', icon: '💡', desc: 'Pushing boundaries with AI & Tech.' },
                   { title: 'valueCommunity', icon: '🤝', desc: 'Success is better when shared.' },
                   { title: 'valueGrowth', icon: '📈', desc: 'Sustainable scaling for every member.' }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-10 rounded-[2rem] shadow-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                         {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-primary mb-4">{t(item.title)}</h3>
                      <p className="text-slate-500 leading-relaxed text-lg font-light">{item.desc}</p>
                   </div>
                ))}
            </div>
         </div>
      </div>

      {/* --- TIMELINE --- */}
      <div className="max-w-5xl mx-auto px-6 py-32">
         <div className="text-center mb-20">
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary">{t('timeline')}</h2>
         </div>
         
         <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-ml-[0.5px]"></div>

            <div className="space-y-16">
               {[1, 2, 3].map((num) => (
                  <div key={num} className={`relative flex flex-col md:flex-row gap-8 items-center ${num % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     
                     {/* Dot */}
                     <div className="absolute left-4 md:left-1/2 -ml-[5px] md:-ml-[6px] w-3 h-3 md:w-4 md:h-4 bg-white border-4 border-brand-primary rounded-full z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
                     
                     {/* Content Side */}
                     <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                        <div className={`group cursor-default ${num % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                           <div className={`inline-block p-6 bg-white border border-slate-100 rounded-2xl shadow-sm group-hover:shadow-lg group-hover:border-brand-primary/30 transition-all duration-300 relative overflow-hidden`}>
                               <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                               <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">Milestone 0{num}</span>
                               <h3 className="text-xl font-bold text-brand-primary">{t(`timeline_${num}`)}</h3>
                           </div>
                        </div>
                     </div>
                     
                     {/* Empty Side */}
                     <div className="hidden md:block w-1/2"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- LEADERSHIP TEAM --- */}
      <div className="bg-[#0B1121] text-white py-32 relative overflow-hidden">
         {/* Abstract Shapes */}
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-20 -mt-20 pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -mr-20 -mb-20 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-12">
               <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t('meet_team')}</h2>
                  <p className="text-slate-400 max-w-xl text-xl font-light leading-relaxed">
                     {t('team_desc')}
                  </p>
               </div>
               <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-brand-primary transition-all text-sm font-bold tracking-wide">
                  View Full Board
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {team.map((member, i) => (
                  <div key={i} className="group relative">
                     <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-8 bg-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                        <img 
                           src={member.img} 
                           alt={member.name} 
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                        />
                        
                        {/* Social Links on Hover */}
                        <div className="absolute bottom-6 left-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                           {['in', 'x'].map((social) => (
                              <button key={social} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white hover:text-black flex items-center justify-center text-sm transition-colors border border-white/20">
                                 {social}
                              </button>
                           ))}
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                     <p className="text-brand-gold text-sm font-bold uppercase tracking-wider">{t(member.role)}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- FINAL CTA --- */}
      <div className="bg-gradient-to-br from-brand-primary to-[#052c42] py-24 text-center px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{t('joinTheFuture')}</h2>
            <button className="px-12 py-5 bg-white text-brand-primary font-bold rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-all text-lg">
                {t('startNow')}
            </button>
         </div>
      </div>

    </div>
  );
};

export default AboutPage;
