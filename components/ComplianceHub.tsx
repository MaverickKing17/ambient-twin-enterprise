
import React from 'react';
import { Shield, FileText, Globe, Gavel, Cpu, Zap, CheckCircle, Info, ExternalLink } from 'lucide-react';

const ComplianceHub: React.FC = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-16 bg-slate-50 dark:bg-[#0b0f1a] min-h-screen">
      <div className="space-y-4">
        <h1 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
          Trust & <span className="text-blue-600 italic">Safety</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-xl max-w-3xl">
          Ambient Twin follows Ontario's energy rules to keep systems safe, clear, and stable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GRID SECTION */}
        <div id="grid" className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center">
            <Zap className="text-blue-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Ontario Power Grid Safety</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Ambient Twin follows all rules from the **Ontario Power Grid Authority**. We help track home power use in real-time to save energy across the province.
          </p>
          <ul className="space-y-3">
            {[
              'Ready for Energy Savings Programs',
              'Real-time Power Use Tracking',
              'Safe Data Transfer Standards',
              'Support for Ontario Power Rebates'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PRIVACY SECTION */}
        <div id="privacy" className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center">
            <Shield className="text-emerald-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Privacy Rules</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            We follow all Ontario privacy laws. Your personal info is encrypted and kept safe at all times.
          </p>
          <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Local Data Storage</div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 italic">All homeowner data stays on secure servers located right here in Ontario.</div>
          </div>
        </div>

        {/* SAFETY SECTION */}
        <div id="safety" className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center">
            <Gavel className="text-amber-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Safety Authority Rules</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Ambient Twin helps keep track of heating and cooling safety checks. Every report follows Ontario's safety codes.
          </p>
          <button className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">
            View Safety Guide <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* REBATE SECTION */}
        <div id="rebates" className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center">
            <FileText className="text-blue-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Home Energy Rebates</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            We make it easy to get energy grants from Enbridge and the government. We ensure all home checks meet high standards for maximum savings.
          </p>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/10 rounded-lg text-[10px] font-black uppercase text-slate-500">Official Standards</div>
             <div className="px-4 py-2 bg-slate-100 dark:bg-white/10 rounded-lg text-[10px] font-black uppercase text-slate-500">Verified Rebates</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Cpu className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <h3 className="text-4xl font-black tracking-tight leading-none">Smart Data Setup</h3>
          <p className="text-blue-100 font-medium text-lg leading-relaxed">
            Ambient Twin is designed to be easily read by smart computers and search tools. This ensures all our energy data and safety info are easy to find and understand.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Clear Data', 'Smart Search', 'Simple English', 'AI Ready'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHub;
