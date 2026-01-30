
import React, { useState, useEffect } from 'react';
import { Search, Bell, Download, ChevronRight, TrendingUp, DollarSign, Award, Clock, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import DigitalTwin from './DigitalTwin';
import { SensorData, Customer } from '../types';
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
    <div className="flex-1 min-h-screen pb-12 transition-colors duration-300">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-30 flex items-center justify-between px-8">
        <div className="flex items-center gap-4 w-1/2">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search GTA fleet..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="relative p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Dave Henderson</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">GTA Service Lead</div>
            </div>
            <img src="https://picsum.photos/seed/tech/40/40" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" alt="Profile" />
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">GTA Service Hub</h1>
            <p className="text-slate-500 dark:text-slate-400">Live monitoring across 42 active Toronto installations.</p>
          </div>
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all">
            <Download className="w-4 h-4" />
            Export Enbridge Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Active Sites', value: '42', sub: '+3 this week', icon: <Activity className="text-blue-600" />, color: 'bg-blue-50 dark:bg-blue-900/20' },
            { label: 'Pending Rebates', value: '$22,500', sub: 'HER+ 2024 Cycle', icon: <Award className="text-amber-600" />, color: 'bg-amber-50 dark:bg-amber-900/20' },
            { label: 'Avg ROI', value: '4.2yr', sub: 'vs Std Gas Furnace', icon: <DollarSign className="text-emerald-600" />, color: 'bg-emerald-50 dark:bg-emerald-900/20' },
            { label: 'SLA Health', value: '98.2%', sub: 'Avg: 14min Response', icon: <Clock className="text-indigo-600" />, color: 'bg-indigo-50 dark:bg-indigo-900/20' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12%
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-2 font-bold uppercase">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DigitalTwin data={mockTelemetry[mockTelemetry.length - 1]} equipment="Trane S9V2 Furnace" />
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-900 dark:text-white">Efficiency & Pressure Correlation</h4>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-bold text-slate-600 dark:text-slate-300">24h</button>
                  <button className="px-3 py-1 text-xs font-bold text-slate-400">7d</button>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockTelemetry}>
                    <defs>
                      <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="timestamp" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', background: 'white' }}
                    />
                    <Area type="monotone" dataKey="supplyTemp" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTemp)" strokeWidth={2} />
                    <Area type="monotone" dataKey="staticPressure" stroke="#10b981" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-blue-100 dark:border-blue-900/30 p-6 shadow-xl relative overflow-hidden transition-colors">
               <div className="absolute top-0 right-0 p-4">
                  <div className="bg-blue-600 rounded-full px-2 py-1 text-[10px] font-bold text-white uppercase tracking-tighter">Gemini Pro-3</div>
               </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Activity className="text-blue-600 w-5 h-5" />
                AI Diagnostic Brain
              </h4>
              
              {!aiAnalysis && !isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-blue-300 dark:text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 px-4">Ready to analyze sensor telemetry and cross-reference with GTA weather history.</p>
                  <button 
                    onClick={runGeminiDiagnosis}
                    className="w-full bg-slate-900 dark:bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                  >
                    Run Smart Diagnostics
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : isAnalyzing ? (
                <div className="space-y-4 py-8">
                  <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-3/4"></div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-full"></div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-5/6"></div>
                  <p className="text-center text-xs text-slate-400 mt-4 italic font-medium">Synthesizing telemetry data...</p>
                </div>
              ) : (
                <div className="prose prose-sm max-w-none">
                  <div className="text-slate-600 dark:text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                    {aiAnalysis}
                  </div>
                  <button 
                    onClick={() => setAiAnalysis(null)}
                    className="mt-6 w-full py-2 text-blue-600 dark:text-blue-400 font-semibold text-[10px] border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors uppercase"
                  >
                    Refresh Analysis
                  </button>
                </div>
              )}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Enbridge HER+ Tracker</h4>
              <div className="space-y-4">
                {[
                  { label: 'Pre-Assessment', status: 'completed' },
                  { label: 'Documentation Upload', status: 'completed' },
                  { label: 'Installation Verification', status: 'active' },
                  { label: 'Grant Issuance', status: 'pending' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step.status === 'completed' ? 'bg-green-500 text-white' : 
                      step.status === 'active' ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                    }`}>
                      {step.status === 'completed' ? '✓' : i + 1}
                    </div>
                    <span className={`text-xs font-medium ${step.status === 'pending' ? 'text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Estimated Rebate</div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">$7,100 CAD</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
