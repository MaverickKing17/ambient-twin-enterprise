
import React, { useState } from 'react';
import { DollarSign, TrendingUp, BarChart3, ArrowRight, Zap, Flame, Target, Info, RefreshCcw } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, ComposedChart, Line } from 'recharts';

const RoiAnalytics: React.FC = () => {
  const [laborRate, setLaborRate] = useState(125);

  const data = [
    { year: '2024', savings: 1200, cumulative: 8300, projections: 8300 },
    { year: '2025', savings: 1350, cumulative: 9650, projections: 10500 },
    { year: '2026', savings: 1500, cumulative: 11150, projections: 12800 },
    { year: '2027', savings: 1700, cumulative: 12850, projections: 15400 },
    { year: '2028', savings: 1950, cumulative: 14800, projections: 18900 },
  ];

  const costComparison = [
    { name: 'Natural Gas', cost: 240, fill: '#f87171' },
    { name: 'Efficient Electric', cost: 135, fill: '#60a5fa' },
    { name: 'Standard AC', cost: 185, fill: '#94a3b8' },
  ];

  const handleGenerateProposal = () => {
    alert("Proposal generated and sent to email.");
  };

  return (
    <div className="p-10 space-y-12 bg-slate-50 dark:bg-[#0b0f1a] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Savings <span className="text-blue-600 italic">Calculator</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-2">See how much money you can save on home energy in Toronto.</p>
        </div>
        <div className="flex flex-col items-end gap-3">
           <div className="bg-white dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4 shadow-sm">
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Team Pay Rate</div>
                <div className="text-lg font-black text-slate-900 dark:text-white">${laborRate}/hr</div>
              </div>
              <input 
                type="range" min="80" max="250" value={laborRate} 
                onChange={(e) => setLaborRate(parseInt(e.target.value))}
                className="w-32 accent-blue-600"
              />
           </div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <RefreshCcw className="w-3 h-3" />
              Latest Toronto Power Rates Sync
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl relative group">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Total Money Saved (10 Years)</h3>
                <p className="text-sm font-medium text-slate-500">Includes the $7,100 energy rebate in Year 1.</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter">
                <TrendingUp className="w-4 h-4" />
                Aggressive Savings
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                  <defs>
                    <linearGradient id="colorSav" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#94a3b822" />
                  <XAxis dataKey="year" stroke="#64748b" fontSize={11} fontWeight="black" tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={11} fontWeight="black" tickLine={false} axisLine={false} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', background: '#0f172a', color: 'white' }}
                  />
                  <Area type="monotone" dataKey="cumulative" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorSav)" />
                  <Line type="monotone" dataKey="projections" stroke="#3b82f6" strokeWidth={2} strokeDasharray="10 10" dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                  <div className="text-[10px] text-slate-400 font-black uppercase mb-1">Time to Pay for Itself</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">3.2 Years</div>
               </div>
               <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-black uppercase mb-1">Total Savings</div>
                  <div className="text-3xl font-black text-emerald-600">$34,800</div>
               </div>
               <div className="p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20">
                  <div className="text-[10px] text-white/70 font-black uppercase mb-1">Home Value Boost</div>
                  <div className="text-3xl font-black text-white">+8.2%</div>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden text-white border border-white/5">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full"></div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                 <Target className="text-blue-400 w-8 h-8" />
                 Monthly Cost Check
              </h3>
              <div className="h-[250px] mb-8">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={costComparison} layout="vertical" margin={{ left: -30 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#ffffff11" />
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={10} fontWeight="black" tickLine={false} axisLine={false} />
                      <Tooltip 
                        cursor={{fill: '#ffffff05'}}
                        contentStyle={{ borderRadius: '16px', background: '#1e293b', border: 'none' }}
                      />
                      <Bar dataKey="cost" radius={[0, 8, 8, 0]} barSize={28}>
                        {costComparison.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="space-y-6">
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">Current Cost</span>
                       <Flame className="text-red-400 w-4 h-4" />
                    </div>
                    <div className="text-2xl font-black text-white">$240.00 <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Toronto Avg</span></div>
                 </div>
                 <div className="p-5 rounded-2xl bg-blue-600/20 border border-blue-500/30 group hover:bg-blue-600/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-black uppercase tracking-widest text-blue-300">Efficient Cost</span>
                       <Zap className="text-blue-400 w-4 h-4 fill-current" />
                    </div>
                    <div className="text-2xl font-black text-white">$135.00 <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Savings Price</span></div>
                 </div>
              </div>
           </div>

           <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl">
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                 <Info className="w-5 h-5 text-blue-500" />
                 Important Factors
              </h4>
              <div className="space-y-4">
                 {[
                    { label: 'Carbon Tax Offset', val: '+$1.4k/yr' },
                    { label: 'Less Maintenance', val: '-15%' },
                    { label: 'Verified Rebates', val: 'OK' },
                    { label: 'System Life Extended', val: '+4 Years' },
                 ].map((v, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">{v.label}</span>
                      <span className="text-xs font-black text-slate-900 dark:text-white">{v.val}</span>
                   </div>
                 ))}
              </div>
              <button 
                onClick={handleGenerateProposal}
                className="w-full mt-8 py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition-all"
              >
                 Generate Proposal
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RoiAnalytics;
