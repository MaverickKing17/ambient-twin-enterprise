
import React, { useState } from 'react';
import { ShieldCheck, Activity, ArrowRight, Lock, Mail, Building2, UserCircle, Key } from 'lucide-react';

interface AuthProps {
  onLogin: (role: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [activeRole, setActiveRole] = useState<'tech' | 'owner' | 'realtor'>('tech');

  const roles = [
    { id: 'tech', label: 'Heating & Cooling Pro', icon: <Activity className="w-5 h-5" />, desc: 'Check Virtual Systems & Data' },
    { id: 'realtor', label: 'Partner / Agent', icon: <Building2 className="w-5 h-5" />, desc: 'Check Energy Savings & Data' },
    { id: 'owner', label: 'Homeowner', icon: <UserCircle className="w-5 h-5" />, desc: 'Track System Health & Rebates' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d1421] relative overflow-hidden font-['Inter']">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-500/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-orange-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07] grayscale"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-12 p-6 md:p-12 items-center">
        {/* Left Side */}
        <div className="flex-1 space-y-8 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 transform -rotate-6">
              <Activity className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter">Ambient <span className="text-blue-500 italic">Twin</span></h1>
              <p className="text-blue-400/60 text-xs font-black uppercase tracking-[0.3em]">Toronto Area</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-white leading-[1.1] tracking-tight">
              The Smart System for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Toronto's Home Comfort</span> Industry.
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Create perfect computer models of home heating and cooling systems. Automate home energy rebates and savings data with ease.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-2xl font-black text-white">422+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active System Models</div>
            </div>
            <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-2xl font-black text-emerald-400">$10.6k</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Max Energy Rebate</div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="w-full max-w-[480px]">
          <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">System Access</h3>
              <p className="text-slate-400 text-sm">Pick your account type to sign in.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id as any)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group text-left ${
                    activeRole === role.id 
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${activeRole === role.id ? 'bg-white/20' : 'bg-white/5'}`}>
                    {role.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-black uppercase tracking-widest ${activeRole === role.id ? 'text-white' : 'text-slate-300'}`}>
                      {role.label}
                    </div>
                    <div className="text-[10px] opacity-60 font-medium">{role.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative group">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <button 
              onClick={() => onLogin(activeRole)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              Start Secure Session
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between pt-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-offset-0 focus:ring-blue-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300">Remember Me</span>
              </label>
              <button className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors">Forgot Password</button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-3 py-3 px-6 bg-emerald-500/10 rounded-full border border-emerald-500/20 w-fit mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">SECURE & PROTECTED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
