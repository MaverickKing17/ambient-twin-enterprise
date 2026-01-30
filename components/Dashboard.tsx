
import React, { useState } from 'react';
import { Search, Bell, Download, ChevronRight, TrendingUp, DollarSign, Award, Clock, Activity, Zap, Target, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DigitalTwin from './DigitalTwin';
import { SensorData } from '../types';
import { getDiagnosticReport } from '../services/geminiService';

const mockTelemetry: SensorData[] = [
  { timestamp: '08:00', supplyTemp: 142, returnTemp: 68, staticPressure: 0.5, gasValveVoltage: 24.1, flameSensorMicroamps: 4.2, efficiency: 94 },
  { timestamp: '10:00', supplyTemp: 145, returnTemp: 69, staticPressure: 0.52, gasValveVoltage: 24.0, flameSensorMicroamps: 4.1, efficiency: 93 },
  { timestamp: '12:00', supplyTemp: 140, returnTemp: 70, staticPressure: 0.55, gasValveVoltage: 24.2, flameSensorMicroamps: 3.9, efficiency: 92 },
  { timestamp: '14:00', supplyTemp: 138, returnTemp: 71, staticPressure: 0.6, gasValveVoltage: 24.1, flameSensorMicroamps: 3.8, efficiency: 90 },
  { timestamp: '16:00', supplyTemp: 135, returnTemp: 72, staticPressure: 0.62, gasValveVoltage: 24.1, flameSensorMicroamps: 3.7, efficiency: 89 },
];

const Dashboard: React.FC = () => {
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runGeminiDiagnosis = async () => {
    setIsAnalyzing(true);
    try {
      const report = await getDiagnosticReport(mockTelemetry, "Trane S9V2 80,000 BTU Furnace");
      setAiAnalysis(report);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen pb-20 bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500">
      <header className="h-20 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0b0f1a]/80 backdrop-blur-2xl sticky top-0 z-40 flex items-center justify-between px-10 shadow-sm">
        <div className="flex items-center gap-8 w-2/3">
          <div className="relative group w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Query GTA Assets: Search by Serial, Address, or Homeowner..." 
              className="w-full pl-12 pr-6 py-3 bg-slate-100 dark:bg-white/5 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white dark:placeholder:text-slate-500"
            />
          </div>
          <div className="hidden xl:flex items-center gap-3 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter">Toronto Market Volatility: Low</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
             <button className="p-3 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all relative">
                <Zap className="w-5 h-5" />
             </button>
             <button className="p-3 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-[#0b0f1a]"></span>
             </button>
          </div>
          <div className="flex items-center gap-4 pl-8 border-l border-slate-200 dark:border-white/5">
            <div className="text-right">
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">Dave Henderson</div>
              <div className="text-[9px] text-blue-600 dark:text-blue-400 uppercase tracking-widest font-black">Executive Director • GTA</div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/tech/80/80" className="w-12 h-12 rounded-2xl border-2 border-white dark:border-slate-800 shadow-xl" alt="Executive Profile" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-10 max-w-screen-2xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-1">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
              Executive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 italic">Command</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Cross-GTA installation health & grant automation engine.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-all">
              <Download className="w-4 h-4" />
              Audit Bundle
            </button>
            <button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 text-sm flex items-center justify-center gap-3">
              <Target className="w-4 h-4" />
              Optimize Fleet
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Active Fleet Units', value: '422', sub: '+12% Performance', icon: <Activity className="text-blue-600" />, color: 'bg-blue-50 dark:bg-blue-500/10' },
            { label: 'Unclaimed HER+ Grants', value: '$84,200', sub: '2024 Audit Ready', icon: <Award className="text-amber-600" />, color: 'bg-amber-50 dark:bg-amber-500/10' },
            { label: 'Avg ROI Acceleration', value: '3.1x', sub: 'Local Labor Adjusted', icon: <DollarSign className="text-emerald-600" />, color: 'bg-emerald-50 dark:bg-emerald-500/10' },
            { label: 'SLA Compliant Dispatch', value: '99.1%', sub: 'Avg 12m Dispatch', icon: <Clock className="text-indigo-600" />, color: 'bg-indigo-50 dark:bg-indigo-500/10' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30 group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  Live
                </div>
              </div>
              <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-tighter">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-10">
            <DigitalTwin data={mockTelemetry[mockTelemetry.length - 1]} equipment="Carrier Infinity® 98" />
            
            <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Diagnostic Analytics Engine</h4>
                  <p className="text-slate-500 text-sm font-medium">Real-time pressure vs. temperature performance correlation.</p>
                </div>
                <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl">
                  {['24H', '7D', '30D', '1Y'].map(v => (
                    <button key={v} className={`px-4 py-2 rounded-lg text-[10px] font-black transition-all ${v === '24H' ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-md' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockTelemetry}>
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#94a3b822" />
                    <XAxis dataKey="timestamp" stroke="#64748b" fontSize={11} fontWeight="bold" tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#64748b" fontSize={11} fontWeight="bold" tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip 
                      cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', background: '#0f172a', color: 'white' }}
                      itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="supplyTemp" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#chartGrad)" />
                    <Area type="monotone" dataKey="staticPressure" stroke="#10b981" strokeWidth={3} fillOpacity={0} strokeDasharray="10 10" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {/* High-End AI Insight Panel */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 dark:from-blue-600/20 dark:to-indigo-900/40 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/10">
               <div className="absolute top-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl px-3 py-1.5 text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                     <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                     Brain v3.1
                  </div>
               </div>
              <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
                <Zap className="text-amber-400 w-8 h-8 fill-amber-400/20" />
                AI Command Insight
              </h4>
              
              {!aiAnalysis && !isAnalyzing ? (
                <div className="text-center py-10 space-y-8">
                  <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner transform rotate-12">
                    <Activity className="w-10 h-10 text-blue-200" />
                  </div>
                  <p className="text-blue-100/70 text-sm font-medium leading-relaxed px-4">Executive summary of thermodynamic behavior cross-referenced with environment variables.</p>
                  <button 
                    onClick={runGeminiDiagnosis}
                    className="w-full bg-white text-blue-900 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-2xl shadow-black/30 text-xs uppercase tracking-widest flex items-center justify-center gap-4 group"
                  >
                    Initiate Strategic Audit
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : isAnalyzing ? (
                <div className="space-y-6 py-10">
                  <div className="h-4 bg-white/10 rounded-full animate-pulse w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded-full animate-pulse w-full"></div>
                  <div className="h-4 bg-white/10 rounded-full animate-pulse w-5/6"></div>
                  <div className="h-4 bg-white/10 rounded-full animate-pulse w-2/3"></div>
                  <p className="text-center text-xs text-blue-200/50 mt-10 font-black uppercase tracking-[0.2em] animate-pulse">Processing Core Metrics...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-white text-sm font-medium leading-relaxed max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {aiAnalysis}
                  </div>
                  <button 
                    onClick={() => setAiAnalysis(null)}
                    className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
                  >
                    Re-Analyze Data Point
                  </button>
                </div>
              )}
            </div>

            {/* Enbridge Executive Tracker */}
            <div className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">HER+ Pipeline</h4>
                <div className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-3 py-1 rounded-full uppercase">84% Capture Rate</div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'NRCAN Audit', status: 'completed' },
                  { label: 'Documentation', status: 'completed' },
                  { label: 'HRAI Verification', status: 'active' },
                  { label: 'Fund Disbursement', status: 'pending' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shadow-lg ${
                      step.status === 'completed' ? 'bg-emerald-500 text-white' : 
                      step.status === 'active' ? 'bg-blue-600 text-white ring-4 ring-blue-500/20' : 'bg-slate-200 dark:bg-white/10 text-slate-500'
                    }`}>
                      {step.status === 'completed' ? '✓' : i + 1}
                    </div>
                    <span className={`text-sm font-bold tracking-tight ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-3xl text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Total Grant Eligibility</div>
                <div className="text-4xl font-black text-slate-900 dark:text-white">$10,600 <span className="text-xs text-slate-500 font-bold uppercase">CAD</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Dashboard;
