
import React from 'react';
import { ShieldCheck, MapPin, ExternalLink, Globe, Cpu, Twitter, Linkedin, Github, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-auto border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#080b14] transition-all duration-500 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      {/* Top Footer: Executive CTA / Newsletter */}
      <div className="border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-3">
              <Cpu className="text-blue-500 w-6 h-6" />
              Scale Your GTA HVAC Operations
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Join 40+ Toronto firms leveraging high-fidelity digital twins.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enterprise Email" 
              className="flex-1 md:w-64 px-5 py-3 bg-slate-100 dark:bg-white/5 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-95">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter italic">Ambient <span className="text-blue-600">Twin</span></span>
          </div>
          
          <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3">
               <ShieldCheck className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">SOC 2 TYPE II COMPLIANT</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Enterprise-grade encryption protecting PII for 12,000+ GTA homeowners. Verified 2026 Audit.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Twitter className="w-4 h-4" /></button>
            <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Linkedin className="w-4 h-4" /></button>
            <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Github className="w-4 h-4" /></button>
            <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Mail className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Links: Operations */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-8">Toronto Operations</h5>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">181 Bay St, Toronto, ON M5J 2T3</span>
            </li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">North York Logistics Hub</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Etobicoke Field Support</li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-emerald-500 uppercase">24/7 GTA Dispatch Active</span>
            </li>
          </ul>
        </div>

        {/* Links: Compliance */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-8">Legal & Regulatory</h5>
          <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy (Ontario PIPA)</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">TSSA Compliance Framework</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Data Residency Guarantee</a></li>
            <li className="flex items-center gap-2 text-emerald-500">
              <Globe className="w-4 h-4" />
              Uptime: 99.99% (Live)
            </li>
          </ul>
        </div>

        {/* Links: External */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-8">Ecosystem Hub</h5>
          <ul className="space-y-4">
            <li>
              <a href="https://www.enbridgegas.com/" target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors">
                Enbridge HER+ Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">ESA Digital Compliance</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">HRAI Integration API</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">NRCAN Home Audit Sync</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-100 dark:border-white/5 py-10 bg-slate-50/50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            © 2026 Ambient Twin Inc. • High-Fidelity Climate Telemetry • All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Security Audit</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sub-Processors</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Ontario Registry: #29401</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
