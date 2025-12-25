
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const GrowthTrends: React.FC = () => {
  const { t, language } = useLanguage();

  const data = [
    { name: 'Jan', registrations: 400, active: 240, amt: 2400 },
    { name: 'Feb', registrations: 300, active: 139, amt: 2210 },
    { name: 'Mar', registrations: 200, active: 980, amt: 2290 },
    { name: 'Apr', registrations: 278, active: 390, amt: 2000 },
    { name: 'May', registrations: 189, active: 480, amt: 2181 },
    { name: 'Jun', registrations: 239, active: 380, amt: 2500 },
    { name: 'Jul', registrations: 349, active: 430, amt: 2100 },
    { name: 'Aug', registrations: 420, active: 550, amt: 2300 },
    { name: 'Sep', registrations: 510, active: 620, amt: 2400 },
    { name: 'Oct', registrations: 630, active: 780, amt: 2800 },
    { name: 'Nov', registrations: 710, active: 890, amt: 3100 },
    { name: 'Dec', registrations: 850, active: 1100, amt: 3500 },
  ];

  const sectorData = [
    { name: 'Tech', value: 45, color: '#073D5A' },
    { name: 'Finance', value: 25, color: '#C5A059' },
    { name: 'Edu', value: 15, color: '#84919D' },
    { name: 'Logistic', value: 15, color: '#1A1A1A' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
      {/* Main Growth Area Chart */}
      <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
        <div className="flex items-center justify-between mb-8">
           <div>
              <h3 className="text-xl font-bold text-brand-primary font-heading">{t('growthTrends')}</h3>
              <p className="text-xs text-brand-secondary font-medium uppercase tracking-widest mt-1">{t('annualPerformance')}</p>
           </div>
           <div className="flex gap-4">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Registrations</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-gold"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Active Users</span>
              </div>
           </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#073D5A" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#073D5A" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C5A059" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#84919D', fontWeight: 700 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#84919D', fontWeight: 700 }}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="registrations" 
                stroke="#073D5A" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorReg)" 
                animationDuration={1500}
              />
              <Area 
                type="monotone" 
                dataKey="active" 
                stroke="#C5A059" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorActive)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side Bar Chart for Sectors */}
      <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
         <h3 className="text-xl font-bold text-brand-primary font-heading mb-8">{t('sectorDistribution')}</h3>
         <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorData} layout="vertical" margin={{ left: -20 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: '#1A1A1A', fontWeight: 700 }}
                />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
         </div>
         <div className="mt-4 flex flex-wrap gap-2">
            {sectorData.map((item, i) => (
                <div key={i} className="px-3 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tighter border border-slate-100">
                    {item.name}: {item.value}%
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default GrowthTrends;
