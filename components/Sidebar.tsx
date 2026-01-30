
import React from 'react';
import { LayoutDashboard, Users, Activity, FileText, Calculator, Settings, HelpCircle, MapPin } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 h-screen border-r border-slate-200 bg-white flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Ambient Twin</span>
        </div>

        <nav className="space-y-2">
          <NavItem 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          />
          <NavItem 
            icon={<MapPin className="w-5 h-5" />} 
            label="GTA Fleet Map" 
            active={activeTab === 'map'} 
            onClick={() => setActiveTab('map')}
          />
          <NavItem 
            icon={<Users className="w-5 h-5" />} 
            label="Active Jobs" 
            active={activeTab === 'jobs'} 
            onClick={() => setActiveTab('jobs')}
          />
          <NavItem 
            icon={<FileText className="w-5 h-5" />} 
            label="HER+ Rebates" 
            active={activeTab === 'rebates'} 
            onClick={() => setActiveTab('rebates')}
          />
          <NavItem 
            icon={<Calculator className="w-5 h-5" />} 
            label="ROI Analytics" 
            active={activeTab === 'roi'} 
            onClick={() => setActiveTab('roi')}
          />
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-2">
        <NavItem 
          icon={<Settings className="w-5 h-5" />} 
          label="Settings" 
          onClick={() => {}} 
        />
        <NavItem 
          icon={<HelpCircle className="w-5 h-5" />} 
          label="Support" 
          onClick={() => {}} 
        />
        
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-xs text-slate-400 font-semibold uppercase mb-2">Technician Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Online: Storefront Lab</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
