
import React, { useState } from 'react';
import { Upload, Palette, Building2, Save, Eye, CheckCircle, Globe, Shield } from 'lucide-react';

const BrandingSettings: React.FC = () => {
  const [partnerName, setPartnerName] = useState('Toronto Premium HVAC');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleReset = () => {
    setPartnerName('Toronto Premium HVAC');
    setPrimaryColor('#2563eb');
    alert("Settings reset to default.");
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12 bg-slate-50 dark:bg-[#0b0f1a] min-h-screen">
      <div className="space-y-2">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
          Partner <span className="text-blue-600 italic">Branding</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
          Personalize the Digital Twin experience for your C-Suite and clientele.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        <div className="xl:col-span-2 space-y-8">
          {/* Configuration Card */}
          <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Palette className="text-blue-500 w-6 h-6" />
              Identity Configuration
            </h3>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Partner Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      className="w-full pl-12 pr-6 py-4 bg-slate-100 dark:bg-white/5 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Brand Primary Accent</label>
                  <div className="flex gap-4">
                    <input 
                      type="color" 
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-14 h-14 rounded-xl border-none cursor-pointer bg-transparent"
                    />
                    <div className="flex-1 flex items-center px-4 bg-slate-100 dark:bg-white/5 rounded-2xl text-sm font-mono font-bold uppercase dark:text-white">
                      {primaryColor}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Enterprise Logo Asset</label>
                <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[2rem] p-12 text-center group hover:border-blue-500/50 transition-all cursor-pointer bg-slate-50 dark:bg-white/5">
                  <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-sm font-black dark:text-white mb-2">Drop Vector (SVG) or High-Res PNG</h4>
                  <p className="text-xs text-slate-500">Maximum size: 2MB. Optimized for 4K dashboard displays.</p>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button 
                  onClick={handleReset}
                  className="px-8 py-4 bg-slate-200 dark:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600 dark:text-white hover:bg-slate-300 transition-all"
                >
                  Reset Defaults
                </button>
                <button 
                  onClick={handleSave}
                  className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 flex items-center gap-3 active:scale-[0.97] transition-all"
                >
                  {isSaved ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                  {isSaved ? 'Identity Verified' : 'Deploy Brand Sync'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* Live Preview Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-6">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[8px] font-black text-white uppercase tracking-widest">Live Simulator</div>
            </div>
            <h3 className="text-lg font-black text-white mb-8 flex items-center gap-3">
              <Eye className="text-blue-400 w-5 h-5" />
              C-Suite Preview
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black" style={{ backgroundColor: primaryColor }}>
                    {partnerName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">{partnerName}</div>
                    <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Strategic Partner</div>
                  </div>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-bold">Portal Status</span>
                  <span className="text-[10px] text-emerald-400 font-black uppercase">Active Synchronization</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Compliance Overview</div>
                {[
                  { label: 'NRCAN Integration', ok: true },
                  { label: 'TSSA Partner Lock', ok: true },
                  { label: 'White-Label Dashboards', ok: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-bold text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-600/20 text-white space-y-6">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-black leading-tight">Secure Enterprise White-Labeling</h4>
            <p className="text-sm font-medium text-blue-100/80 leading-relaxed">
              Every dashboard view seen by your customers and realtors will be fully branded with your firm's identity, reinforcing your status as Toronto's premier HVAC authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSettings;
