
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Area - Offset by Sidebar width */}
      <div className="ml-64 flex-1 flex flex-col">
        {activeTab === 'overview' && <Dashboard />}
        {activeTab !== 'overview' && (
          <div className="flex-1 flex items-center justify-center p-20 text-center">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Module Under Maintenance</h2>
              <p className="text-slate-500">
                The {activeTab} view is currently being synchronized with Ontario's provincial HVAC regulatory database. 
                Please check the 'Overview' dashboard for real-time telemetry.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
