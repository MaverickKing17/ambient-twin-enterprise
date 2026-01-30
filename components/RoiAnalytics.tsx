
import React from 'react';
import { DollarSign, TrendingUp, BarChart3, ArrowRight, Zap, Flame } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const RoiAnalytics: React.FC = () => {
  const data = [
    { year: 'Year 1', savings: 1200, cumulative: 8300 }, // Inc. Grant
    { year: 'Year 2', savings: 1350, cumulative: 9650 },
    { year: 'Year 3', savings: 1500, cumulative: 11150 },
    { year: 'Year 4', savings: 1700, cumulative: 12850 },
    { year: 'Year 5', savings: 1950, cumulative: 14800 },
  ];

  const costComparison = [
    { name: 'Nat Gas (Toronto)', cost: 180, fill: '#f87171' },
    { name: 'CCHP Hybrid', cost: 110, fill: '#60a5fa' },
    { name: 'Standard AC', cost: 145, fill: '#94a3b8' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ROI Analytics</h1>
          <p className="text-slate-500 dark:text-slate-400">Toronto-specific energy modeling and pay-back projections.</p>
        </div>
        <div className="flex gap-2">
           <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Toronto Hydro: $0.103/kWh (Off-Peak)
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg">Cumulative Savings Projection</h3>
            <div className="text-emerald-500 font-bold text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +14% YoY
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSav" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="cumulative" stroke="#10b981" fillOpacity={1} fill="url(#colorSav)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
             <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Break-Even Point</div>
                <div className="text-xl font-bold">3.8 Years</div>
             </div>
             <ArrowRight className="text-slate-300" />
             <div className="text-right">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Net 10yr Profit</div>
                <div className="text-xl font-bold text-emerald-500">$22,400</div>
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <h3 className="font-bold text-lg mb-8">Monthly Operating Cost Comparison</h3>
           <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costComparison} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={32}>
                    {costComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
           </div>
           <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10">
                 <Flame className="w-5 h-5 text-red-500 mb-2" />
                 <div className="text-lg font-bold text-red-700 dark:text-red-400">$180/mo</div>
                 <div className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">Avg Natural Gas Bill</div>
              </div>
              <div className="p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/10">
                 <Zap className="w-5 h-5 text-blue-500 mb-2" />
                 <div className="text-lg font-bold text-blue-700 dark:text-blue-400">$110/mo</div>
                 <div className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">Heat Pump Electrical</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RoiAnalytics;
