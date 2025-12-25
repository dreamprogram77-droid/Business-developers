
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Invoice, Business, ServiceType } from '../types';

interface ProfilePageProps {
  onLogout: () => void;
  invoices?: Invoice[];
  onPayInvoice?: (invoiceId: string) => void;
  onAddBusiness?: (business: Business) => void;
  businesses?: Business[];
  onNavigateToService?: (service: ServiceType) => void;
}

type DashboardTab = 'dashboard' | 'wallet' | 'companies' | 'notifications' | 'orders' | 'services' | 'support' | 'settings';

const ProfilePage: React.FC<ProfilePageProps> = ({ onLogout, invoices = [], onPayInvoice, onAddBusiness, businesses = [], onNavigateToService }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<DashboardTab>('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: 'TECHNOLOGY', description: '', logoUrl: '' });

  const myCompanies = businesses.filter(b => b.isOccupied).slice(0, 3);

  const notifications = [
    { id: 1, type: 'system', title: 'System Security', msg: 'Protocols updated.', time: '2h' },
    { id: 2, type: 'offer', title: 'Special Promo', msg: 'Check out the new AI Marketing Suite!', time: '1d' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCreateBusiness = (e: React.FormEvent) => {
      e.preventDefault();
      if (!onAddBusiness) return;
      const newBusiness: Business = {
          id: `user-biz-${Date.now()}`,
          name: formData.name,
          description: formData.description || 'New Company',
          category: formData.category,
          logoUrl: formData.logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=073D5A&color=fff`,
          color: 'bg-blue-600',
          isOccupied: true,
          gridPosition: { x: 1, y: 1 },
          activeVisitors: 0,
          services: [formData.category]
      };
      onAddBusiness(newBusiness);
      setShowAddModal(false);
      setFormData({ name: '', category: 'TECHNOLOGY', description: '', logoUrl: '' });
  };

  const SidebarItem = ({ tab, icon, label }: { tab: DashboardTab, icon: React.ReactNode, label: string }) => (
     <button onClick={() => setActiveTab(tab)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeTab === tab ? 'bg-white text-brand-primary shadow-sm' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
        {icon}
        <span>{label}</span>
     </button>
  );

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in pb-12 min-h-[800px] flex flex-col lg:flex-row gap-6">
       <div className="w-full lg:w-64 bg-brand-primary rounded-3xl p-6 flex flex-col shrink-0 h-fit">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
             <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary font-bold text-xl overflow-hidden">👤</div>
             <div className="overflow-hidden"><h3 className="text-white font-bold truncate">Explorer</h3><p className="text-white/60 text-xs truncate">Business Owner</p></div>
          </div>
          <nav className="space-y-1">
             <SidebarItem tab="dashboard" label="Dashboard" icon="📊" />
             <SidebarItem tab="wallet" label="Wallet" icon="💳" />
             <SidebarItem tab="services" label="Services" icon="⚙️" />
             <SidebarItem tab="companies" label="My Companies" icon="🏢" />
          </nav>
          <div className="pt-6 border-t border-white/10 mt-6"><button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-white/70 hover:text-white rounded-xl transition-all">🚪 <span>Logout</span></button></div>
       </div>

       <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
             <h1 className="text-3xl font-bold text-brand-primary font-heading uppercase">{activeTab}</h1>
             <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100 text-sm font-bold text-slate-500">{currentTime.toLocaleDateString()}</div>
          </div>

          <div className="bg-white rounded-[32px] shadow-card border border-slate-100 p-8 min-h-[600px]">
             {activeTab === 'dashboard' && (
                 <div className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl text-white shadow-lg cursor-pointer hover:scale-105 transition-transform" onClick={() => onNavigateToService?.(ServiceType.MARKETING_STUDIO)}>
                           <p className="text-purple-100 text-xs font-bold uppercase mb-2">AI Studio</p>
                           <div className="text-xl font-bold">Try Marketing Studio</div>
                           <p className="text-xs opacity-80 mt-2">Generate AI content now</p>
                        </div>
                        <div className="bg-white border p-6 rounded-2xl shadow-sm">
                           <p className="text-slate-400 text-xs font-bold uppercase mb-2">Services</p>
                           <div className="text-3xl font-bold text-brand-primary">Active</div>
                        </div>
                        <div className="bg-white border p-6 rounded-2xl shadow-sm">
                           <p className="text-slate-400 text-xs font-bold uppercase mb-2">Notifications</p>
                           <div className="text-3xl font-bold text-brand-primary">2</div>
                        </div>
                     </div>
                     <div><h3 className="font-bold text-brand-primary text-lg mb-4">Recent Activity</h3><div className="space-y-3">{notifications.map(n => (<div key={n.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">🔔</div><div><h4 className="font-bold text-sm text-brand-primary">{n.title}</h4><p className="text-xs text-slate-500">{n.msg}</p></div><span className="ml-auto text-xs text-slate-400 font-bold">{n.time}</span></div>))}</div></div>
                 </div>
             )}

             {activeTab === 'companies' && (
                 <div className="space-y-6">
                     <div className="flex justify-between items-center"><h2 className="text-xl font-bold text-brand-primary">My Companies</h2><button onClick={() => setShowAddModal(true)} className="px-4 py-2 bg-brand-primary text-white rounded-xl font-bold text-sm shadow-card">Add Company</button></div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{myCompanies.map(company => (<div key={company.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex gap-4 items-start"><div className="w-16 h-16 rounded-lg bg-brand-surface border flex items-center justify-center overflow-hidden shrink-0"><img src={company.logoUrl} alt={company.name} className="w-full h-full object-cover" /></div><div><h3 className="font-bold text-brand-primary text-lg">{company.name}</h3><button onClick={() => onNavigateToService?.(ServiceType.MARKETING_STUDIO)} className="text-[10px] font-bold text-purple-600 hover:underline">✨ Pitch with AI</button><p className="text-sm text-slate-500 line-clamp-2 mt-2">{company.description}</p></div></div>))}</div>
                 </div>
             )}
          </div>
       </div>

       {showAddModal && (
           <div className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
               <div className="bg-white w-full max-w-lg rounded-3xl p-8 animate-scale-in"><div className="flex justify-between items-center mb-6"><h2 className="text-xl font-bold text-brand-primary">Add Company</h2><button onClick={() => setShowAddModal(false)} className="text-slate-400">✕</button></div>
                   <form onSubmit={handleCreateBusiness} className="space-y-5">
                       <div><label className="block text-xs font-bold text-slate-500 uppercase mb-2">Company Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none" /></div>
                       <button type="submit" className="w-full py-3 rounded-xl bg-brand-primary text-white font-bold">Save Company</button>
                   </form>
               </div>
           </div>
       )}
    </div>
  );
};

export default ProfilePage;
