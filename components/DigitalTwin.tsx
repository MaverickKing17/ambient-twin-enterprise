
import React from 'react';
// Added missing Activity icon to the import list
import { Thermometer, Wind, Zap, Flame, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import { SensorData } from '../types';

interface DigitalTwinProps {
  data: SensorData;
  equipment: string;
}

const DataPoint: React.FC<{ label: string; value: string | number; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="flex items-center gap-3 p-4 bg-white/5 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 dark:border-slate-700/50 transition-all hover:bg-white/10">
    <div className={`p-2.5 rounded-xl ${color} shadow-lg shadow-black/20`}>
      {icon}
    </div>
    <div>
      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{label}</div>
      <div className="text-xl font-bold text-white tracking-tight">{value}</div>
    </div>
  </div>
);

const DigitalTwin: React.FC<DigitalTwinProps> = ({ data, equipment }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/10 min-h-[580px] group">
      {/* High-Fidelity Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <rect x="250" y="100" width="300" height="400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" className="text-blue-500/30" />
          {/* Animated Air Flow Lines */}
          {[...Array(5)].map((_, i) => (
            <path 
              key={i}
              d={`M 300 ${150 + i*60} L 500 ${150 + i*60}`} 
              stroke="currentColor" 
              strokeWidth="1" 
              className={`text-blue-400/20 animate-[flow_3s_linear_infinite]`}
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>
      
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 20; stroke-dasharray: 5 15; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: -20; stroke-dasharray: 5 15; opacity: 0; }
        }
      `}</style>

      <div className="relative z-10 flex flex-col h-full space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] bg-blue-600/30 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Enterprise Digital Backbone</span>
              <span className="text-[10px] bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">TSSA Compliant</span>
            </div>
            <h3 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{equipment}</h3>
            <p className="text-slate-400 text-sm font-medium mt-1">H-Fid Telemetry Stream • Asset ID: GTA-TR-09412</p>
          </div>
          <div className="flex flex-col items-end gap-3">
             <div className="px-5 py-2.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-3 backdrop-blur-md shadow-inner">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                Live Diagnostics: Toronto Central
             </div>
             <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                End-to-End Encrypted
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <DataPoint 
              label="Supply Plenum Temp" 
              value={`${data.supplyTemp}°F`} 
              icon={<Thermometer className="w-5 h-5 text-rose-400" />} 
              color="bg-rose-500/20"
            />
            <DataPoint 
              label="Return Air Velocity" 
              value={`${data.returnTemp}°F`} 
              icon={<Wind className="w-5 h-5 text-sky-400" />} 
              color="bg-sky-500/20"
            />
          </div>
          <div className="space-y-4">
            <DataPoint 
              label="External Static Pressure" 
              value={`${data.staticPressure} iwc`} 
              icon={<Activity className="w-5 h-5 text-emerald-400" />} 
              color="bg-emerald-500/20"
            />
            <DataPoint 
              label="Flame Rectification" 
              value={`${data.flameSensorMicroamps} μA`} 
              icon={<Flame className="w-5 h-5 text-orange-400" />} 
              color="bg-orange-500/20"
            />
          </div>
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-white/5 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Health Index</h4>
                <div className="text-2xl font-black text-emerald-400">92%</div>
              </div>
              <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden mb-6 shadow-inner">
                <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 animate-bounce" />
              <div>
                <div className="text-[10px] font-bold text-red-400 uppercase tracking-tighter">Critical Delta Detected</div>
                <div className="text-[11px] text-red-100/70 leading-relaxed font-medium">Blower motor high torque warning. Schedule Toronto dispatch within 48h.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-10">
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Efficiency Rating</div>
              <div className="text-3xl font-black text-white italic">AFUE {data.efficiency}%</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:block">
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">GTA Market Rank</div>
              <div className="text-3xl font-black text-blue-400">Top 5%</div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all text-sm border border-white/5 shadow-xl">
              Virtual Inspection
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-2xl shadow-blue-500/30 text-sm flex items-center gap-3">
              <Zap className="w-4 h-4 fill-current" />
              Trigger AI Sync
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwin;
