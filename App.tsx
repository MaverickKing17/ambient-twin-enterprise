
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FleetMap from './components/FleetMap';
import ActiveJobs from './components/ActiveJobs';
import Rebates from './components/Rebates';
import RoiAnalytics from './components/RoiAnalytics';
import BrandingSettings from './components/BrandingSettings';
import ComplianceHub from './components/ComplianceHub';
import Auth from './components/Auth';
import Footer from './components/Footer';
import { Moon, Sun, ShieldCheck, LogOut } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogin = (role: string) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Dashboard />;
      case 'map': return <FleetMap />;
      case 'jobs': return <ActiveJobs />;
      case 'rebates': return <Rebates />;
      case 'roi': return <RoiAnalytics />;
      case 'branding': return <BrandingSettings />;
      case 'compliance': return <ComplianceHub />;
      default: return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 font-['Inter']">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Scrollable Content Container */}
      <div className="ml-72 flex-1 flex flex-col min-h-screen relative overflow-x-hidden">
        {/* Top Floating Control Bar */}
        <div className="fixed top-4 right-8 z-[100] flex items-center gap-4">
           {/* SOC 2 & IESO Badge */}
           <div className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-full shadow-2xl shadow-blue-500/10 text-[10px] font-black">
              <div className="flex items-center gap-1.5 border-r border-slate-200 dark:border-white/10 pr-3 mr-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-slate-500 dark:text-slate-400 uppercase tracking-widest">SOC 2 COMPLIANT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-slate-500 dark:text-slate-400 uppercase tracking-widest">IESO HUB: ACTIVE</span>
              </div>
           </div>

           <button 
             onClick={() => setIsDarkMode(!isDarkMode)}
             className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-full shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-90"
           >
             {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
           </button>

           <button 
             onClick={handleLogout}
             className="flex items-center gap-2 px-5 py-2.5 bg-rose-500 text-white rounded-full shadow-xl shadow-rose-500/20 hover:bg-rose-600 transition-all font-black text-[10px] uppercase tracking-widest active:scale-95"
           >
             <LogOut className="w-3.5 h-3.5" />
             Exit
           </button>
        </div>

        {/* Main Viewport */}
        <div className="flex-1 w-full">
          {renderContent()}
        </div>

        {/* Persistent Enterprise Footer */}
        <Footer onNavigate={setActiveTab} />
      </div>
    </div>
  );
};

export default App;
