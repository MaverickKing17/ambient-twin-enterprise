
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FleetMap from './components/FleetMap';
import ActiveJobs from './components/ActiveJobs';
import Rebates from './components/Rebates';
import RoiAnalytics from './components/RoiAnalytics';
import Footer from './components/Footer';
import { Moon, Sun, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Dashboard />;
      case 'map': return <FleetMap />;
      case 'jobs': return <ActiveJobs />;
      case 'rebates': return <Rebates />;
      case 'roi': return <RoiAnalytics />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Area - Offset by Sidebar width (w-72 = ml-72) */}
      <div className="ml-72 flex-1 flex flex-col">
        {/* Top Floating Control Bar */}
        <div className="fixed top-4 right-8 z-[100] flex items-center gap-4">
           {/* SOC 2 Badge */}
           <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm text-[10px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Security: SOC 2 TYPE II Certified</span>
           </div>

           <button 
             onClick={() => setIsDarkMode(!isDarkMode)}
             className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-90"
           >
             {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
           </button>
        </div>

        <div className="flex-1">
          {renderContent()}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
