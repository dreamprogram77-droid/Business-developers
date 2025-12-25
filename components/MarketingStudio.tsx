
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Business, MarketingSuite } from '../types';
import { generateMarketingSuite } from '../services/geminiService';

interface MarketingStudioProps {
  businesses: Business[];
}

const MarketingStudio: React.FC<MarketingStudioProps> = ({ businesses }) => {
  const { t, language } = useLanguage();
  const [selectedBizId, setSelectedBizId] = useState<string>('');
  const [suite, setSuite] = useState<MarketingSuite | null>(null);
  const [loading, setLoading] = useState(false);

  const myBusinesses = businesses.filter(b => b.isOccupied);

  useEffect(() => {
    if (myBusinesses.length > 0 && !selectedBizId) {
      setSelectedBizId(myBusinesses[0].id);
    }
  }, [myBusinesses, selectedBizId]);

  const handleGenerate = async () => {
    const biz = businesses.find(b => b.id === selectedBizId);
    if (!biz) return;

    setLoading(true);
    try {
      const result = await generateMarketingSuite(biz.name, biz.description, language);
      setSuite(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="h-full bg-white rounded-[32px] shadow-card border border-slate-100 overflow-hidden flex flex-col animate-fade-in">
      <div className="p-8 border-b border-slate-100 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/10">
            📣
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-primary font-heading">{t('marketing_studio')}</h2>
            <p className="text-sm text-brand-secondary">{t('marketing_studioDesc')}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-offWhite custom-scrollbar">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Select Business */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{t('selectBusiness')}</label>
            <div className="flex flex-col md:flex-row gap-4">
              <select 
                value={selectedBizId}
                onChange={(e) => setSelectedBizId(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500/20 outline-none font-bold text-brand-primary appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center]"
              >
                {myBusinesses.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <button 
                onClick={handleGenerate}
                disabled={loading || !selectedBizId}
                className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:bg-[#052c42] transition-all disabled:opacity-50"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div> : t('generateFullSuite')}
              </button>
            </div>
          </div>

          {!suite && !loading && (
             <div className="text-center py-20 opacity-40">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-lg font-medium">{t('marketingIntro')}</p>
             </div>
          )}

          {suite && (
            <div className="space-y-6 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pitch Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group">
                  <h3 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-4">{t('aiPitch')}</h3>
                  <p className="text-brand-primary font-medium leading-relaxed mb-10 italic">"{suite.pitch}"</p>
                  <button onClick={() => copyToClipboard(suite.pitch)} className="absolute bottom-4 right-4 p-2 text-slate-400 hover:text-purple-600 transition-colors">📋</button>
                </div>

                {/* Slogan Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                  <h3 className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-4">{t('aiSlogan')}</h3>
                  <div className="flex items-center justify-center h-20">
                     <p className="text-2xl font-bold text-brand-primary font-serif tracking-tight">{suite.slogan}</p>
                  </div>
                  <button onClick={() => copyToClipboard(suite.slogan)} className="absolute bottom-4 right-4 p-2 text-slate-400 hover:text-pink-600 transition-colors">📋</button>
                </div>
              </div>

              {/* LinkedIn Post */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{t('aiSocial')}</h3>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-sans">
                  {suite.linkedinPost}
                </div>
                <button onClick={() => copyToClipboard(suite.linkedinPost)} className="absolute top-8 right-8 p-2 text-slate-400 hover:text-blue-600 transition-colors">📋</button>
              </div>

              {/* Target Audience */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">{t('aiTarget')}</h3>
                <p className="text-brand-primary font-bold">{suite.targetAudience}</p>
              </div>
              
              <div className="flex justify-center pt-4">
                 <button 
                  onClick={handleGenerate} 
                  className="text-sm font-bold text-purple-600 hover:underline flex items-center gap-2"
                 >
                   🔄 {t('regenerate')}
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketingStudio;
