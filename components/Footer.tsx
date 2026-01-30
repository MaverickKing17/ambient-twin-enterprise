
import React from 'react';
import { ShieldCheck, MapPin, ExternalLink, Globe, Cpu, Twitter, Linkedin, Github, Mail, Zap, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-auto border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#080b14] transition-all duration-500 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      {/* Top Footer */}
      <div className="border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-blue-600/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <CheckCircle className="w-3 h-3" />
                Power Grid Approved
              </div>
              <div className="px-3 py-1 bg-emerald-600/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                2026 Audit Ready
              </div>
            </div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
              Compliant with the <span className="text-blue-600">Ontario Power Grid Authority</span>
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Ambient Twin is built to follow Ontario's power grid standards, helping manage home energy use and power peaks across the Toronto area.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <button 
              onClick={() => handleNav('compliance')}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-blue-500/30 transition-all active:scale-95 flex items-center gap-3"
            >
              Access Safety Hub
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 relative z-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 transition-transform hover:rotate-0 cursor-pointer">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter italic">Ambient <span className="text-blue-600">Twin</span></span>
          </div>
          
          <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-200 dark:border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4">
               <ShieldCheck className="w-5 h-5 text-emerald-500 opacity-30 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">Data Security</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We protect the private info of 12,000+ Toronto homeowners. Safety verified for 2026.
            </p>
          </div>

          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-blue-500 transition-colors"><Github className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-blue-500 transition-colors"><Mail className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Links: Operations */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-10">Toronto Operations</h5>
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group">
              <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">181 Bay St, Toronto, ON M5J 2T3</span>
            </li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => handleNav('map')}>North York Hub</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => handleNav('map')}>Etobicoke Support</li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-xs font-black text-emerald-500 uppercase tracking-tighter">24/7 Service: ACTIVE</span>
            </li>
          </ul>
        </div>

        {/* Links: Rules */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-10">Rules & Privacy</h5>
          <ul className="space-y-5 text-sm font-bold text-slate-600 dark:text-slate-400">
            <li><button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Privacy Policy (Ontario)</button></li>
            <li><button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Safety Standards</button></li>
            <li><button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Ontario Grid Rules</button></li>
            <li><button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Local Data Storage</button></li>
            <li className="flex items-center gap-2 text-emerald-500 pt-2 border-t border-slate-100 dark:border-white/5">
              <Globe className="w-4 h-4" />
              Service Status: 99.99%
            </li>
          </ul>
        </div>

        {/* Links: External */}
        <div>
          <h5 className="font-black text-xs text-slate-400 uppercase tracking-[0.2em] mb-10">Resources</h5>
          <ul className="space-y-5">
            <li>
              <a href="https://www.enbridgegas.com/" target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors group">
                Enbridge Rebates <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
              </a>
            </li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Safety Code Help</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Partner Connections</li>
            <li className="text-sm font-bold text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => handleNav('rebates')}>Home Audit Sync</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 dark:border-white/5 py-12 bg-slate-50/50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">
            © 2026 Ambient Twin Inc. • Toronto • North York • Etobicoke • Mississauga
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Security Check</button>
            <button onClick={() => handleNav('compliance')} className="hover:text-blue-600 transition-colors">Partners</button>
            <div className="text-slate-300 dark:text-slate-700">Ontario Registry: #29401</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
