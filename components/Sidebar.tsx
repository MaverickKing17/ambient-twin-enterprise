
import React from 'react';
import { LayoutDashboard, Users, Activity, FileText, Calculator, Settings, HelpCircle, MapPin, ShieldCheck, Star, Palette, Gavel } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full group relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
      active 
        ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)]' 
        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
    }`}
  >
    {active && <div className="absolute left-0 w-1.5 h-6 bg-white rounded-r-full"></div>}
    <div className={`${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
      {icon}
    </div>
    <span className={`font-bold text-sm tracking-tight ${active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-72 h-screen border-r border-slate-200 dark:border-white/5 bg-white dark:bg-[#0b0f1a] flex flex-col fixed left-0 top-0 z-50 transition-all duration-500">
      <div className="p-8 pb-12 overflow-y-auto custom-scrollbar flex-1">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 transform -rotate-6">
            <Activity className="text-white w-7 h-7" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">Ambient <span className="text-blue-600 italic">Twin</span></span>
            <div className="text-[10px] font-black text-blue-500/70 uppercase tracking-[0.2em] -mt-1">Main Control</div>
          </div>
        </div>

        <nav className="space-y-3">
          <NavItem 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          />
          <NavItem 
            icon={<MapPin className="w-5 h-5" />} 
            label="Toronto Map" 
            active={activeTab === 'map'} 
            onClick={() => setActiveTab('map')}
          />
          <NavItem 
            icon={<Users className="w-5 h-5" />} 
            label="Work Progress" 
            active={activeTab === 'jobs'} 
            onClick={() => setActiveTab('jobs')}
          />
          <NavItem 
            icon={<FileText className="w-5 h-5" />} 
            label="Rebate Manager" 
            active={activeTab === 'rebates'} 
            onClick={() => setActiveTab('rebates')}
          />
          <NavItem 
            icon={<Calculator className="w-5 h-5" />} 
            label="Savings Calculator" 
            active={activeTab === 'roi'} 
            onClick={() => setActiveTab('roi')}
          />
          <div className="pt-4 pb-2">
            <div className="h-px bg-slate-100 dark:bg-white/5 mb-4"></div>
            <NavItem 
              icon={<Palette className="w-5 h-5" />} 
              label="Branding" 
              active={activeTab === 'branding'} 
              onClick={() => setActiveTab('branding')}
            />
            <NavItem 
              icon={<Gavel className="w-5 h-5" />} 
              label="Safety & Rules" 
              active={activeTab === 'compliance'} 
              onClick={() => setActiveTab('compliance')}
            />
          </div>
        </nav>
      </div>

      <div className="p-8 space-y-4">
        <div className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-white/5 dark:to-transparent rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/10 blur-2xl rounded-full"></div>
          <div className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase mb-3 tracking-widest flex items-center gap-2">
            <Star className="w-3 h-3 fill-current" />
            Active Team
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 tracking-tight">Ontario Grid: Connected</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-medium">9 team members active</p>
        </div>
        
        <div className="flex flex-col gap-2">
           <NavItem icon={<Settings className="w-5 h-5" />} label="Security Settings" onClick={() => {}} />
           <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-tighter">SAFETY APPROVED</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
